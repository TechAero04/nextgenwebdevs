import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { ContactForm } from "@/components/forms";
import { company } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact NEXTGENWEBDEVS LLC by email, phone or mail.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Get in touch"
        description="Questions about plans, billing, licensing or your account? Our team is here to help."
      />
      <section className="py-20">
        <div className="mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-5 lg:px-8">
          <div className="space-y-6 lg:col-span-2">
            <div className="rounded-2xl bg-slate-50 p-6 ring-1 ring-slate-200">
              <h2 className="text-sm font-semibold uppercase tracking-wider text-slate-500">Email</h2>
              <p className="mt-2 space-y-1 text-slate-900">
                <span className="block">
                  Support:{" "}
                  <a href={`mailto:${company.supportEmail}`} className="text-brand-600">
                    {company.supportEmail}
                  </a>
                </span>
                <span className="block">
                  Billing:{" "}
                  <a href={`mailto:${company.billingEmail}`} className="text-brand-600">
                    {company.billingEmail}
                  </a>
                </span>
              </p>
            </div>
            <div className="rounded-2xl bg-slate-50 p-6 ring-1 ring-slate-200">
              <h2 className="text-sm font-semibold uppercase tracking-wider text-slate-500">Phone</h2>
              <p className="mt-2 text-slate-900">
                <a href={company.phoneHref} className="text-lg font-semibold">
                  {company.phone}
                </a>
              </p>
              <p className="mt-1 text-sm text-slate-600">{company.supportHours}</p>
            </div>
            <div className="rounded-2xl bg-slate-50 p-6 ring-1 ring-slate-200">
              <h2 className="text-sm font-semibold uppercase tracking-wider text-slate-500">Mailing address</h2>
              <address className="mt-2 not-italic text-slate-900">
                <span className="block font-semibold">{company.legalName}</span>
                {company.addressLines.map((l) => (
                  <span key={l} className="block">
                    {l}
                  </span>
                ))}
              </address>
            </div>
          </div>
          <div className="rounded-2xl border border-slate-200 p-8 shadow-sm lg:col-span-3">
            <h2 className="text-2xl font-bold text-slate-900">Send us a message</h2>
            <p className="mt-2 text-sm text-slate-600">We usually reply within 1 business day.</p>
            <div className="mt-6">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
