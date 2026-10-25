"use server";

import { redirect } from "next/navigation";
import { authConfigured, requestPasswordReset, signIn, signOut, signUp } from "@/lib/auth";
import { company, plans } from "@/lib/site";

export type FormState = { error?: string; success?: string };

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const NOT_CONFIGURED = `Account services are temporarily unavailable. Please email ${company.supportEmail} and we will help you right away.`;

function str(formData: FormData, key: string, max = 500) {
  const v = formData.get(key);
  return typeof v === "string" ? v.trim().slice(0, max) : "";
}

export async function signUpAction(_: FormState, formData: FormData): Promise<FormState> {
  const fullName = str(formData, "fullName", 100);
  const email = str(formData, "email", 254).toLowerCase();
  const password = (formData.get("password") as string | null) ?? "";
  const planInput = str(formData, "plan", 20);
  const billingInput = str(formData, "billing", 20);
  const plan = plans.some((p) => p.id === planInput) ? planInput : "pro";
  const billing = billingInput === "yearly" ? "yearly" : "monthly";

  if (!fullName) return { error: "Please enter your full name." };
  if (!EMAIL_RE.test(email)) return { error: "Please enter a valid email address." };
  if (password.length < 8 || password.length > 72) return { error: "Password must be 8–72 characters long." };
  if (formData.get("terms") !== "on") return { error: "Please accept the Terms of Service and Privacy Policy." };
  if (!authConfigured()) return { error: NOT_CONFIGURED };

  const result = await signUp({
    email,
    password,
    fullName,
    plan,
    billing,
    redirectTo: `${company.url}/login?confirmed=1`,
  });
  if (result.error) return { error: result.error };
  if (result.needsConfirmation) {
    return { success: "Account created. Please check your email and click the confirmation link, then log in." };
  }
  redirect("/dashboard");
}

export async function loginAction(_: FormState, formData: FormData): Promise<FormState> {
  const email = str(formData, "email", 254).toLowerCase();
  const password = (formData.get("password") as string | null) ?? "";
  if (!EMAIL_RE.test(email) || !password) return { error: "Please enter your email and password." };
  if (!authConfigured()) return { error: NOT_CONFIGURED };

  const result = await signIn(email, password);
  if (result.error) return { error: result.error };
  redirect("/dashboard");
}

export async function forgotPasswordAction(_: FormState, formData: FormData): Promise<FormState> {
  const email = str(formData, "email", 254).toLowerCase();
  if (!EMAIL_RE.test(email)) return { error: "Please enter a valid email address." };
  if (!authConfigured()) return { error: NOT_CONFIGURED };
  await requestPasswordReset(email, `${company.url}/login`).catch(() => undefined);
  return { success: "If an account exists for that email, a password reset link has been sent." };
}

export async function logoutAction() {
  await signOut();
  redirect("/login");
}

export async function contactAction(_: FormState, formData: FormData): Promise<FormState> {
  const name = str(formData, "name", 100);
  const email = str(formData, "email", 254);
  const subject = str(formData, "subject", 150);
  const message = str(formData, "message", 5000);
  if (str(formData, "website")) return { success: "Thanks — your message has been sent." };
  if (!name || !EMAIL_RE.test(email) || !message) {
    return { error: "Please fill in your name, a valid email and a message." };
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return { error: `Our contact form is unavailable right now. Please email ${company.supportEmail} directly.` };
  }

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      from: process.env.CONTACT_FROM_EMAIL ?? `Website <no-reply@${company.domain}>`,
      to: [company.supportEmail],
      reply_to: email,
      subject: `[Contact] ${subject || "New message"} — ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nSubject: ${subject}\n\n${message}`,
    }),
  });
  if (!res.ok) {
    return { error: `Sorry, we could not send your message. Please email ${company.supportEmail} directly.` };
  }
  return { success: "Thanks — your message has been sent. We usually reply within 1 business day." };
}
