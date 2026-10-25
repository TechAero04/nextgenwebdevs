import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { CtaSection } from "@/components/CtaSection";
import { company } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description: "About NEXTGENWEBDEVS LLC, the company behind Flutter Studio.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About us"
        title={`About ${company.legalName}`}
        description="We build software that helps people ship mobile apps faster."
      />

      <section className="py-20">
        <div className="mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-3 lg:px-8">
          <div className="space-y-5 text-lg leading-relaxed text-slate-700 lg:col-span-2">
            <p>
              {company.legalName} is a software and web development company registered in the State of New Mexico,
              United States. Our work covers web development, software development and digital technology services.
            </p>
            <p>
              Our main product, <strong>{company.product}</strong>, is a subscription software platform that gives
              Flutter developers, freelancers, students and agencies access to a large, organized library of licensed
              Flutter app templates, UI kits and complete app projects.
            </p>
            <p>
              Starting every app from scratch takes time that most teams would rather spend on what makes their
              product different. Flutter Studio gives you a well-organized starting point — searchable by category,
              previewable before download, and covered by a clear license — so you can focus on customizing and
              building.
            </p>
            <h2 className="pt-4 text-2xl font-bold text-slate-900">What we value</h2>
            <ul className="space-y-3 text-base">
              <li>
                <strong>Honest descriptions.</strong> We show what each template contains so you can decide before
                you download.
              </li>
              <li>
                <strong>Clear licensing.</strong> Every template in the library is licensed to us for distribution,
                and every plan comes with written license terms.
              </li>
              <li>
                <strong>Simple pricing.</strong> Three plans, prices shown upfront, cancel anytime.
              </li>
              <li>
                <strong>Real support.</strong> Questions are answered by our team by email and phone.
              </li>
            </ul>
          </div>

          <aside className="h-fit rounded-2xl bg-slate-50 p-6 ring-1 ring-slate-200">
            <h2 className="text-sm font-semibold uppercase tracking-wider text-slate-500">Company details</h2>
            <dl className="mt-4 space-y-4 text-sm">
              <div>
                <dt className="text-slate-500">Legal name</dt>
                <dd className="font-semibold text-slate-900">{company.legalName}</dd>
              </div>
              <div>
                <dt className="text-slate-500">Entity type</dt>
                <dd className="text-slate-900">{company.entityType}</dd>
              </div>
              <div>
                <dt className="text-slate-500">NM Secretary of State Entity ID</dt>
                <dd className="text-slate-900">{company.entityId}</dd>
              </div>
              <div>
                <dt className="text-slate-500">Date of formation</dt>
                <dd className="text-slate-900">{company.formed}</dd>
              </div>
              <div>
                <dt className="text-slate-500">Registered office</dt>
                <dd className="text-slate-900">
                  {company.addressLines.map((l) => (
                    <span key={l} className="block">
                      {l}
                    </span>
                  ))}
                </dd>
              </div>
              <div>
                <dt className="text-slate-500">Contact</dt>
                <dd className="text-slate-900">
                  <a href={`mailto:${company.supportEmail}`} className="block text-brand-600">
                    {company.supportEmail}
                  </a>
                  <a href={company.phoneHref} className="block">
                    {company.phone}
                  </a>
                </dd>
              </div>
            </dl>
          </aside>
        </div>
      </section>

      <CtaSection />
    </>
  );
}
