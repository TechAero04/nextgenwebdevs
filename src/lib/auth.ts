import "server-only";
import { cookies } from "next/headers";

const SUPABASE_URL = process.env.SUPABASE_URL;
const SUPABASE_ANON_KEY = process.env.SUPABASE_ANON_KEY;

export const ACCESS_COOKIE = "ngw_access";

export type AuthUser = {
  id: string;
  email: string;
  fullName: string;
  plan: string;
  billing: string;
  createdAt: string;
};

export function authConfigured() {
  return Boolean(SUPABASE_URL && SUPABASE_ANON_KEY);
}

async function supabase(path: string, init: RequestInit & { token?: string } = {}) {
  if (!SUPABASE_URL || !SUPABASE_ANON_KEY) throw new Error("Auth is not configured");
  const { token, headers, ...rest } = init;
  const res = await fetch(`${SUPABASE_URL}/auth/v1${path}`, {
    ...rest,
    cache: "no-store",
    headers: {
      apikey: SUPABASE_ANON_KEY,
      "Content-Type": "application/json",
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
      ...headers,
    },
  });
  const data = await res.json().catch(() => ({}));
  return { ok: res.ok, status: res.status, data };
}

function errorMessage(data: Record<string, unknown>, fallback: string) {
  const msg = data.msg ?? data.error_description ?? data.message;
  return typeof msg === "string" ? msg : fallback;
}

async function setSession(accessToken: string, expiresIn: number) {
  const store = await cookies();
  store.set(ACCESS_COOKIE, accessToken, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: expiresIn,
  });
}

export async function signUp(input: {
  email: string;
  password: string;
  fullName: string;
  plan: string;
  billing: string;
  redirectTo: string;
}): Promise<{ error?: string; needsConfirmation?: boolean }> {
  const { ok, data } = await supabase(`/signup?redirect_to=${encodeURIComponent(input.redirectTo)}`, {
    method: "POST",
    body: JSON.stringify({
      email: input.email,
      password: input.password,
      data: { full_name: input.fullName, plan: input.plan, billing: input.billing },
    }),
  });
  if (!ok) return { error: errorMessage(data, "We could not create your account. Please try again.") };
  if (data.access_token) {
    await setSession(data.access_token, data.expires_in ?? 3600);
    return {};
  }
  return { needsConfirmation: true };
}

export async function signIn(email: string, password: string): Promise<{ error?: string }> {
  const { ok, data } = await supabase("/token?grant_type=password", {
    method: "POST",
    body: JSON.stringify({ email, password }),
  });
  if (!ok || !data.access_token) {
    return { error: ok ? "Login failed. Please try again." : "Incorrect email or password, or email not yet confirmed." };
  }
  await setSession(data.access_token, data.expires_in ?? 3600);
  return {};
}

export async function requestPasswordReset(email: string, redirectTo: string) {
  await supabase(`/recover?redirect_to=${encodeURIComponent(redirectTo)}`, {
    method: "POST",
    body: JSON.stringify({ email }),
  });
}

export async function signOut() {
  const store = await cookies();
  const token = store.get(ACCESS_COOKIE)?.value;
  if (token && authConfigured()) {
    await supabase("/logout", { method: "POST", token }).catch(() => undefined);
  }
  store.delete(ACCESS_COOKIE);
}

export async function getCurrentUser(): Promise<AuthUser | null> {
  if (!authConfigured()) return null;
  const store = await cookies();
  const token = store.get(ACCESS_COOKIE)?.value;
  if (!token) return null;
  const { ok, data } = await supabase("/user", { token });
  if (!ok || !data.id) return null;
  const meta = (data.user_metadata ?? {}) as Record<string, string>;
  return {
    id: data.id,
    email: data.email,
    fullName: meta.full_name ?? "",
    plan: meta.plan ?? "pro",
    billing: meta.billing ?? "monthly",
    createdAt: data.created_at,
  };
}
