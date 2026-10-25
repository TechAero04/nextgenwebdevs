import Link from "next/link";

export function CtaSection() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-brand-700 to-ink-900 px-8 py-14 text-center text-white shadow-xl">
          <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-cyan-400/20 blur-3xl" />
          <h2 className="relative text-3xl font-extrabold tracking-tight sm:text-4xl">
            Start your next Flutter app from a solid foundation
          </h2>
          <p className="relative mx-auto mt-4 max-w-2xl text-brand-100">
            Create an account, choose a plan, and get access to the full Flutter Studio template library.
          </p>
          <div className="relative mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              href="/signup"
              className="rounded-lg bg-white px-6 py-3 text-sm font-semibold text-brand-700 shadow hover:bg-brand-50"
            >
              Create your account
            </Link>
            <Link
              href="/pricing"
              className="rounded-lg border border-white/40 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10"
            >
              See pricing
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
