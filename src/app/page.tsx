import Link from "next/link";
import { PhoneMockup } from "@/components/PhoneMockup";
import { CtaSection } from "@/components/CtaSection";
import { company, plans, templateCategories } from "@/lib/site";

const audiences = [
  { title: "Flutter developers", text: "Start from working project structures instead of an empty main.dart." },
  { title: "Freelancers", text: "Use a commercial license to build client apps on top of ready-made screens." },
  { title: "Agencies", text: "Give your whole team one shared library with seats and centralized billing." },
  { title: "Students & learners", text: "Study how real apps organize navigation, state and UI components." },
  { title: "Startup founders", text: "Prototype and test app ideas across many categories quickly." },
  { title: "UI/UX designers", text: "Explore modern mobile screen layouts and reusable design patterns." },
];

const steps = [
  { n: "1", title: "Create an account", text: "Sign up with your email and choose the plan that fits your work." },
  { n: "2", title: "Browse & preview", text: "Search the library by category and preview screens before downloading." },
  { n: "3", title: "Download & build", text: "Download the Flutter project, open it in your IDE, and customize it." },
];

export default function Home() {
  return (
    <>
      <section className="relative overflow-hidden bg-ink-950 text-white">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(59,101,246,0.45),transparent_55%)]" />
        <div className="pointer-events-none absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-cyan-500/10 blur-3xl" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:px-8 lg:py-28">
          <div>
            <p className="inline-flex rounded-full border border-brand-400/40 bg-brand-500/10 px-3 py-1 text-xs font-semibold text-brand-200">
              Flutter template library · Subscription software
            </p>
            <h1 className="mt-6 text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              870+ licensed Flutter app templates in one library
            </h1>
            <p className="mt-6 max-w-xl text-lg text-slate-300">
              {company.product} gives developers, freelancers and agencies a searchable library of Flutter
              source code, UI kits and complete app projects across 30+ categories — with monthly updates and
              a clear license for every plan.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/signup"
                className="rounded-lg bg-brand-500 px-6 py-3 text-center text-sm font-semibold text-white shadow-lg shadow-brand-500/30 hover:bg-brand-600"
              >
                Create your account
              </Link>
              <Link
                href="/pricing"
                className="rounded-lg border border-white/25 px-6 py-3 text-center text-sm font-semibold text-white hover:bg-white/10"
              >
                View pricing — from ${plans[0].monthly}/month
              </Link>
            </div>
            <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm text-slate-400">
              <li>✓ Cancel anytime</li>
              <li>✓ Secure checkout</li>
              <li>✓ 14-day refund on first payment</li>
            </ul>
          </div>
          <div className="relative hidden h-[460px] lg:block">
            <PhoneMockup variant="finance" className="absolute left-4 top-16 -rotate-6" />
            <PhoneMockup variant="shop" className="absolute left-1/2 top-0 z-10 -translate-x-1/2" />
            <PhoneMockup variant="fitness" className="absolute right-4 top-16 rotate-6" />
          </div>
        </div>
      </section>

      <section className="border-b border-slate-200 bg-slate-50">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 px-4 py-10 text-center sm:px-6 md:grid-cols-4 lg:px-8">
          {[
            ["870+", "Flutter app templates"],
            ["30+", "App categories"],
            ["Monthly", "Library updates"],
            ["3", "Simple subscription plans"],
          ].map(([value, label]) => (
            <div key={label}>
              <p className="text-3xl font-extrabold text-slate-900">{value}</p>
              <p className="mt-1 text-sm text-slate-600">{label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">What Flutter Studio does</h2>
            <p className="mt-4 text-lg text-slate-600">
              A web-based software platform where you browse, preview and download Flutter projects — organized,
              searchable and kept up to date.
            </p>
          </div>
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {[
              {
                title: "Searchable template library",
                text: "Filter 870+ Flutter projects by category, app type and included features to find a starting point fast.",
              },
              {
                title: "Live screen previews",
                text: "See screenshots and the screen list of every template before you download, so you know what you get.",
              },
              {
                title: "Clear licensing",
                text: "Every plan includes a written license that explains personal, commercial and white-label use.",
              },
              {
                title: "Monthly updates",
                text: "New templates are added and existing ones are refreshed for newer Flutter SDK versions over time.",
              },
              {
                title: "Team workspace",
                text: "Agency plans include up to 5 seats with a shared library, favorites and centralized billing.",
              },
              {
                title: "Account dashboard",
                text: "Manage your subscription, download history, invoices and team members in one place.",
              },
            ].map((f) => (
              <div key={f.title} className="rounded-2xl border border-slate-200 p-6 shadow-sm">
                <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-brand-500 to-cyan-400" />
                <h3 className="mt-4 text-lg font-bold text-slate-900">{f.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{f.text}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link href="/features" className="text-sm font-semibold text-brand-600 hover:text-brand-700">
              Explore all features →
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">Who it is for</h2>
            <p className="mt-4 text-lg text-slate-600">
              Flutter Studio is built for people and businesses that make mobile apps.
            </p>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {audiences.map((a) => (
              <div key={a.title} className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
                <h3 className="font-bold text-slate-900">{a.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{a.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">Popular categories</h2>
              <p className="mt-3 text-lg text-slate-600">Templates across dozens of app niches and industries.</p>
            </div>
            <Link href="/templates" className="text-sm font-semibold text-brand-600 hover:text-brand-700">
              View all categories →
            </Link>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {templateCategories.slice(0, 8).map((c) => (
              <div key={c.name} className="rounded-xl border border-slate-200 p-5 transition hover:border-brand-300 hover:shadow-md">
                <h3 className="font-semibold text-slate-900">{c.name}</h3>
                <p className="mt-1.5 text-sm text-slate-500">{c.examples}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ink-950 py-20 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-3xl font-extrabold tracking-tight sm:text-4xl">How it works</h2>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {steps.map((s) => (
              <div key={s.n} className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <span className="grid h-10 w-10 place-items-center rounded-full bg-brand-500 font-bold">{s.n}</span>
                <h3 className="mt-4 text-lg font-bold">{s.title}</h3>
                <p className="mt-2 text-sm text-slate-300">{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">Simple, transparent pricing</h2>
            <p className="mt-4 text-lg text-slate-600">Monthly or yearly subscriptions. Prices in USD.</p>
          </div>
          <div className="mt-10 overflow-hidden rounded-2xl border border-slate-200">
            {plans.map((p) => (
              <div
                key={p.id}
                className="flex flex-col gap-2 border-b border-slate-200 p-6 last:border-b-0 sm:flex-row sm:items-center sm:justify-between"
              >
                <div>
                  <p className="font-bold text-slate-900">
                    {p.name} {p.highlighted && <span className="ml-2 rounded-full bg-brand-100 px-2 py-0.5 text-xs text-brand-700">Most popular</span>}
                  </p>
                  <p className="text-sm text-slate-600">{p.tagline}</p>
                </div>
                <p className="text-lg font-bold text-slate-900">
                  ${p.monthly}
                  <span className="text-sm font-medium text-slate-500">/month</span>
                  <span className="ml-2 text-sm font-medium text-slate-500">or ${p.yearly}/year</span>
                </p>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link href="/pricing" className="rounded-lg bg-brand-600 px-6 py-3 text-sm font-semibold text-white hover:bg-brand-700">
              Compare plans
            </Link>
          </div>
        </div>
      </section>

      <CtaSection />
    </>
  );
}
