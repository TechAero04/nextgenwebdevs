import { company } from "@/lib/site";

export function LegalPage({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <p className="text-sm font-semibold uppercase tracking-widest text-brand-600">Legal</p>
        <h1 className="mt-2 text-4xl font-extrabold tracking-tight text-slate-900">{title}</h1>
        <p className="mt-3 text-sm text-slate-500">Last updated: {company.legalUpdated}</p>
        <div className="prose-legal mt-10">{children}</div>
      </div>
    </section>
  );
}

export function CompanyContactBlock() {
  return (
    <p>
      {company.legalName}
      <br />
      {company.addressLines.map((l) => (
        <span key={l}>
          {l}
          <br />
        </span>
      ))}
      Email: <a href={`mailto:${company.supportEmail}`}>{company.supportEmail}</a>
      <br />
      Phone: <a href={company.phoneHref}>{company.phone}</a>
    </p>
  );
}
