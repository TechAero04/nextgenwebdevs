import Link from "next/link";

export function Logo({ dark = false }: { dark?: boolean }) {
  return (
    <Link href="/" className="flex items-center gap-2.5" aria-label="NextGenWebDevs home">
      <span className="grid h-9 w-9 place-items-center rounded-lg bg-gradient-to-br from-brand-500 to-cyan-400 text-sm font-black text-white shadow-md">
        NG
      </span>
      <span className={`text-lg font-bold tracking-tight ${dark ? "text-white" : "text-slate-900"}`}>
        NextGen<span className="text-brand-500">WebDevs</span>
      </span>
    </Link>
  );
}
