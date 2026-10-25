import Link from "next/link";

export default function NotFound() {
  return (
    <section className="px-4 py-32 text-center">
      <p className="text-sm font-semibold text-brand-600">404</p>
      <h1 className="mt-2 text-4xl font-extrabold tracking-tight text-slate-900">Page not found</h1>
      <p className="mt-4 text-slate-600">The page you are looking for does not exist or has moved.</p>
      <Link href="/" className="mt-8 inline-block rounded-lg bg-brand-600 px-5 py-3 text-sm font-semibold text-white">
        Back to home
      </Link>
    </section>
  );
}
