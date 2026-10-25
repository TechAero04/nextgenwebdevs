"use client";

import Link from "next/link";
import { useActionState } from "react";
import { useSearchParams } from "next/navigation";
import {
  contactAction,
  forgotPasswordAction,
  loginAction,
  signUpAction,
  type FormState,
} from "@/app/actions";
import { plans } from "@/lib/site";

const input =
  "mt-1.5 block w-full rounded-lg border border-slate-300 px-3.5 py-2.5 text-sm text-slate-900 shadow-sm outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-200";
const label = "block text-sm font-medium text-slate-700";
const button =
  "w-full rounded-lg bg-brand-600 px-4 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-brand-700 disabled:opacity-60";

function Status({ state }: { state: FormState }) {
  if (state.error) {
    return (
      <p role="alert" className="rounded-lg bg-red-50 px-4 py-3 text-sm text-red-700">
        {state.error}
      </p>
    );
  }
  if (state.success) {
    return (
      <p role="status" className="rounded-lg bg-emerald-50 px-4 py-3 text-sm text-emerald-700">
        {state.success}
      </p>
    );
  }
  return null;
}

export function SignUpForm() {
  const params = useSearchParams();
  const initialPlan = plans.some((p) => p.id === params.get("plan")) ? params.get("plan")! : "pro";
  const initialBilling = params.get("billing") === "yearly" ? "yearly" : "monthly";
  const [state, action, pending] = useActionState(signUpAction, {});

  return (
    <form action={action} className="space-y-5">
      <div>
        <label htmlFor="fullName" className={label}>Full name</label>
        <input id="fullName" name="fullName" required autoComplete="name" className={input} />
      </div>
      <div>
        <label htmlFor="email" className={label}>Work email</label>
        <input id="email" name="email" type="email" required autoComplete="email" className={input} />
      </div>
      <div>
        <label htmlFor="password" className={label}>Password</label>
        <input
          id="password"
          name="password"
          type="password"
          required
          minLength={8}
          maxLength={72}
          autoComplete="new-password"
          className={input}
        />
        <p className="mt-1 text-xs text-slate-500">At least 8 characters.</p>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label htmlFor="plan" className={label}>Plan</label>
          <select id="plan" name="plan" defaultValue={initialPlan} className={input}>
            {plans.map((p) => (
              <option key={p.id} value={p.id}>
                {p.name} — ${p.monthly}/mo
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="billing" className={label}>Billing</label>
          <select id="billing" name="billing" defaultValue={initialBilling} className={input}>
            <option value="monthly">Monthly</option>
            <option value="yearly">Yearly (2 months free)</option>
          </select>
        </div>
      </div>
      <label className="flex items-start gap-3 text-sm text-slate-600">
        <input type="checkbox" name="terms" required className="mt-0.5 h-4 w-4 rounded border-slate-300" />
        <span>
          I agree to the <Link href="/terms" className="text-brand-600 underline">Terms of Service</Link>,{" "}
          <Link href="/privacy" className="text-brand-600 underline">Privacy Policy</Link> and{" "}
          <Link href="/refund-policy" className="text-brand-600 underline">Refund &amp; Cancellation Policy</Link>.
        </span>
      </label>
      <Status state={state} />
      <button type="submit" disabled={pending} className={button}>
        {pending ? "Creating account…" : "Create account"}
      </button>
    </form>
  );
}

export function LoginForm() {
  const params = useSearchParams();
  const [state, action, pending] = useActionState(loginAction, {});
  return (
    <form action={action} className="space-y-5">
      {params.get("confirmed") && !state.error && (
        <p className="rounded-lg bg-emerald-50 px-4 py-3 text-sm text-emerald-700">
          Email confirmed. You can now log in.
        </p>
      )}
      <div>
        <label htmlFor="email" className={label}>Email</label>
        <input id="email" name="email" type="email" required autoComplete="email" className={input} />
      </div>
      <div>
        <div className="flex items-center justify-between">
          <label htmlFor="password" className={label}>Password</label>
          <Link href="/forgot-password" className="text-sm text-brand-600 hover:text-brand-700">
            Forgot password?
          </Link>
        </div>
        <input id="password" name="password" type="password" required autoComplete="current-password" className={input} />
      </div>
      <Status state={state} />
      <button type="submit" disabled={pending} className={button}>
        {pending ? "Logging in…" : "Log in"}
      </button>
    </form>
  );
}

export function ForgotPasswordForm() {
  const [state, action, pending] = useActionState(forgotPasswordAction, {});
  return (
    <form action={action} className="space-y-5">
      <div>
        <label htmlFor="email" className={label}>Email</label>
        <input id="email" name="email" type="email" required autoComplete="email" className={input} />
      </div>
      <Status state={state} />
      <button type="submit" disabled={pending} className={button}>
        {pending ? "Sending…" : "Send reset link"}
      </button>
    </form>
  );
}

export function ContactForm() {
  const [state, action, pending] = useActionState(contactAction, {});
  return (
    <form action={action} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className={label}>Name</label>
          <input id="name" name="name" required autoComplete="name" className={input} />
        </div>
        <div>
          <label htmlFor="email" className={label}>Email</label>
          <input id="email" name="email" type="email" required autoComplete="email" className={input} />
        </div>
      </div>
      <div>
        <label htmlFor="subject" className={label}>Subject</label>
        <select id="subject" name="subject" className={input} defaultValue="General question">
          <option>General question</option>
          <option>Sales &amp; plans</option>
          <option>Billing &amp; refunds</option>
          <option>Technical support</option>
          <option>Licensing</option>
        </select>
      </div>
      <div>
        <label htmlFor="message" className={label}>Message</label>
        <textarea id="message" name="message" rows={6} required maxLength={5000} className={input} />
      </div>
      <input type="text" name="website" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />
      <Status state={state} />
      <button type="submit" disabled={pending} className={button}>
        {pending ? "Sending…" : "Send message"}
      </button>
    </form>
  );
}
