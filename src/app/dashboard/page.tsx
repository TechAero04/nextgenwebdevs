import type { Metadata } from "next";
import Link from "next/link";
import { redirect } from "next/navigation";
import { Suspense } from "react";
import { getCurrentUser } from "@/lib/auth";
import { logoutAction } from "@/app/actions";
import { company, plans, templateCategories } from "@/lib/site";

export const metadata: Metadata = {
  title: "Dashboard",
  robots: { index: false },
};

function checkoutUrl(plan: string, billing: string) {
  const key = `CHECKOUT_URL_${plan.toUpperCase()}_${billing.toUpperCase()}`;
  return process.env[key];
}

async function Dashboard() {
  const user = await getCurrentUser();
  if (!user) redirect("/login");

  const plan = plans.find((p) => p.id === user.plan) ?? plans[1];
  const price = user.billing === "yearly" ? `$${plan.yearly}/year` : `$${plan.monthly}/month`;
  const checkout = checkoutUrl(plan.id, user.billing);
  const firstName = user.fullName.split(" ")[0] || "there";

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
        <div>
          <h1 className="text-3xl font-extrabold tracking-tight text-slate-900">Hi {firstName} 👋</h1>
          <p className="mt-1 text-slate-600">Signed in as {user.email}</p>
        </div>
        <form action={logoutAction}>
          <button className="rounded-lg border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50">
            Log out
          </button>
        </form>
      </div>

      <div className="mt-10 grid gap-6 lg:grid-cols-3">
        <div className="rounded-2xl border border-slate-200 p-6 shadow-sm lg:col-span-2">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-slate-500">Subscription</h2>
          <div className="mt-4 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
            <div>
              <p className="text-2xl font-bold text-slate-900">
                {plan.name} plan <span className="text-base font-medium text-slate-500">· {price} USD</span>
              </p>
              <p className="mt-1 text-sm text-amber-700">Status: awaiting payment</p>
            </div>
            {checkout ? (
              <a
                href={checkout}
                className="rounded-lg bg-brand-600 px-5 py-3 text-center text-sm font-semibold text-white hover:bg-brand-700"
              >
                Complete subscription
              </a>
            ) : (
              <a
                href={`mailto:${company.billingEmail}?subject=${encodeURIComponent(`Subscription: ${plan.name} (${user.billing})`)}&body=${encodeURIComponent(`Account email: ${user.email}`)}`}
                className="rounded-lg bg-brand-600 px-5 py-3 text-center text-sm font-semibold text-white hover:bg-brand-700"
              >
                Request invoice
              </a>
            )}
          </div>
          <p className="mt-4 text-sm text-slate-600">
            Library downloads unlock as soon as your first payment is confirmed. Want a different plan?{" "}
            <Link href="/pricing" className="text-brand-600 underline">Compare plans</Link>.
          </p>
        </div>
        <div className="rounded-2xl border border-slate-200 p-6 shadow-sm">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-slate-500">Account</h2>
          <dl className="mt-4 space-y-3 text-sm">
            <div>
              <dt className="text-slate-500">Name</dt>
              <dd className="font-medium text-slate-900">{user.fullName || "—"}</dd>
            </div>
            <div>
              <dt className="text-slate-500">Member since</dt>
              <dd className="font-medium text-slate-900">
                {new Date(user.createdAt).toLocaleDateString("en-US", { dateStyle: "medium" })}
              </dd>
            </div>
            <div>
              <dt className="text-slate-500">Need help?</dt>
              <dd>
                <a href={`mailto:${company.supportEmail}`} className="text-brand-600">{company.supportEmail}</a>
              </dd>
            </div>
          </dl>
        </div>
      </div>

      <div className="mt-12">
        <h2 className="text-xl font-bold text-slate-900">Template library</h2>
        <p className="mt-1 text-sm text-slate-600">Browse categories. Downloads are available on an active subscription.</p>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {templateCategories.map((c) => (
            <div key={c.name} className="rounded-xl border border-slate-200 p-4">
              <p className="font-semibold text-slate-900">{c.name}</p>
              <p className="mt-1 text-xs text-slate-500">{c.examples}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function DashboardPage() {
  return (
    <Suspense fallback={<div className="mx-auto max-w-7xl px-4 py-24 text-slate-500">Loading your dashboard…</div>}>
      <Dashboard />
    </Suspense>
  );
}
