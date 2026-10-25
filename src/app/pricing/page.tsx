import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { PricingCards } from "@/components/PricingCards";
import { company } from "@/lib/site";

export const metadata: Metadata = {
  title: "Pricing",
  description: "Flutter Studio pricing: Starter $12/month, Pro $29/month, Agency $79/month. Yearly plans save 2 months.",
};

const rows: [string, string, string, string][] = [
  ["Monthly price (USD)", "$12", "$29", "$79"],
  ["Yearly price (USD)", "$120", "$290", "$790"],
  ["Users", "1", "1", "Up to 5"],
  ["Template downloads", "50 / month", "Unlimited", "Unlimited"],
  ["Library browsing & previews", "✓", "✓", "✓"],
  ["Monthly library updates", "✓", "✓", "✓"],
  ["Personal & learning use", "✓", "✓", "✓"],
  ["Commercial use (client projects)", "—", "✓", "✓"],
  ["White-label delivery rights", "—", "—", "✓"],
  ["Shared team workspace", "—", "—", "✓"],
  ["Support response time", "2 business days", "1 business day", "Dedicated contact"],
];

const faqs = [
  {
    q: "How does billing work?",
    a: "Subscriptions are billed in advance in US dollars, either monthly or yearly, and renew automatically until you cancel.",
  },
  {
    q: "Can I cancel at any time?",
    a: "Yes. You can cancel from your account dashboard or by emailing us. You keep access until the end of the current billing period, and you will not be charged again.",
  },
  {
    q: "Do you offer refunds?",
    a: "Your first payment on a new subscription is refundable within 14 days. Full details are in our Refund & Cancellation Policy.",
  },
  {
    q: "Can I change plans?",
    a: "Yes. Upgrades take effect immediately with a prorated charge. Downgrades take effect at the start of your next billing period.",
  },
  {
    q: "What happens to templates I downloaded if I cancel?",
    a: "Projects you started under an active license may continue to be used under the license terms that applied when you downloaded them. You cannot download new templates after your subscription ends.",
  },
  {
    q: "Is tax included?",
    a: "Prices shown exclude any sales tax or VAT that may apply in your location. Any tax is shown at checkout before you pay.",
  },
];

export default function PricingPage() {
  return (
    <>
      <PageHero
        eyebrow="Pricing"
        title="Plans for every Flutter builder"
        description="Choose monthly or yearly billing. Every plan includes access to the full template library."
      />

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <PricingCards />
        </div>
      </section>

      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-3xl font-extrabold tracking-tight text-slate-900">Compare plans</h2>
          <div className="mt-10 overflow-x-auto rounded-2xl bg-white shadow-sm ring-1 ring-slate-200">
            <table className="w-full min-w-[600px] text-left text-sm">
              <thead>
                <tr className="border-b border-slate-200 bg-slate-50">
                  <th className="px-6 py-4 font-semibold text-slate-900">Feature</th>
                  <th className="px-6 py-4 font-semibold text-slate-900">Starter</th>
                  <th className="px-6 py-4 font-semibold text-brand-700">Pro</th>
                  <th className="px-6 py-4 font-semibold text-slate-900">Agency</th>
                </tr>
              </thead>
              <tbody>
                {rows.map(([label, ...vals]) => (
                  <tr key={label} className="border-b border-slate-100 last:border-b-0">
                    <td className="px-6 py-3.5 font-medium text-slate-700">{label}</td>
                    {vals.map((v, i) => (
                      <td key={i} className="px-6 py-3.5 text-slate-600">
                        {v}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-3xl font-extrabold tracking-tight text-slate-900">Billing questions</h2>
          <dl className="mt-10 space-y-4">
            {faqs.map((f) => (
              <details key={f.q} className="group rounded-xl border border-slate-200 p-5">
                <summary className="cursor-pointer list-none font-semibold text-slate-900">
                  <span className="flex items-center justify-between">
                    {f.q}
                    <span className="text-slate-400 transition group-open:rotate-45">+</span>
                  </span>
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">{f.a}</p>
              </details>
            ))}
          </dl>
          <p className="mt-10 text-center text-sm text-slate-600">
            More questions? Email{" "}
            <a href={`mailto:${company.billingEmail}`} className="text-brand-600 underline">
              {company.billingEmail}
            </a>{" "}
            or read our <Link href="/refund-policy" className="text-brand-600 underline">Refund &amp; Cancellation Policy</Link>.
          </p>
        </div>
      </section>
    </>
  );
}
