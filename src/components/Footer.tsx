import Link from "next/link";
import { Logo } from "./Logo";
import { company, legalLinks, navLinks } from "@/lib/site";

export function Footer() {
  return (
    <footer className="bg-ink-950 text-slate-300">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <Logo dark />
            <p className="mt-4 text-sm leading-relaxed text-slate-400">
              {company.product} is a subscription library of licensed Flutter app templates, UI kits and
              complete app projects for developers, freelancers and agencies.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">Product</h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/signup" className="hover:text-white">
                  Sign up
                </Link>
              </li>
              <li>
                <Link href="/login" className="hover:text-white">
                  Log in
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">Legal</h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              {legalLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">Company</h3>
            <address className="mt-4 space-y-2.5 text-sm not-italic">
              <p className="font-semibold text-white">{company.legalName}</p>
              <p>
                {company.addressLines.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </p>
              <p>
                Email:{" "}
                <a href={`mailto:${company.supportEmail}`} className="hover:text-white">
                  {company.supportEmail}
                </a>
              </p>
              <p>
                Phone:{" "}
                <a href={company.phoneHref} className="hover:text-white">
                  {company.phone}
                </a>
              </p>
            </address>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6 text-xs leading-relaxed text-slate-400">
          <p>
            © 2026 {company.legalName}. All rights reserved. {company.legalName} is a {company.entityType},
            New Mexico Secretary of State Entity ID {company.entityId}. Registered office:{" "}
            {company.addressOneLine}.
          </p>
          <p className="mt-2">
            Flutter and the related logo are trademarks of Google LLC. {company.legalName} is not affiliated with
            or endorsed by Google LLC.
          </p>
        </div>
      </div>
    </footer>
  );
}
