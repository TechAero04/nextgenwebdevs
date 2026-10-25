import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { CtaSection } from "@/components/CtaSection";
import { templateCategories } from "@/lib/site";

export const metadata: Metadata = {
  title: "Template Categories",
  description: "Browse the Flutter Studio template library: 870+ Flutter app templates across 30+ categories.",
};

const gradients = [
  "from-brand-500 to-cyan-400",
  "from-orange-400 to-pink-500",
  "from-emerald-400 to-teal-500",
  "from-violet-500 to-fuchsia-500",
];

export default function TemplatesPage() {
  return (
    <>
      <PageHero
        eyebrow="Template library"
        title="870+ Flutter templates across 30+ categories"
        description="Subscribers can browse, preview and download projects from every category below. The library is updated monthly."
      />
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {templateCategories.map((c, i) => (
              <div key={c.name} className="flex gap-4 rounded-2xl border border-slate-200 p-5 shadow-sm">
                <div
                  className={`grid h-12 w-12 flex-none place-items-center rounded-xl bg-gradient-to-br text-sm font-bold text-white ${gradients[i % gradients.length]}`}
                >
                  {c.name.charAt(0)}
                </div>
                <div>
                  <h2 className="font-bold text-slate-900">{c.name}</h2>
                  <p className="mt-1 text-sm text-slate-600">{c.examples}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="mt-10 text-center text-sm text-slate-500">
            Templates are licensed to {"NEXTGENWEBDEVS LLC"} for distribution to subscribers. Available content may
            change as templates are added, updated or retired.
          </p>
        </div>
      </section>
      <CtaSection />
    </>
  );
}
