import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { PhoneMockup } from "@/components/PhoneMockup";
import { CtaSection } from "@/components/CtaSection";

export const metadata: Metadata = {
  title: "Features",
  description: "Explore Flutter Studio features: searchable template library, previews, licensing, updates and team workspaces.",
};

const sections = [
  {
    title: "A searchable library of 870+ Flutter projects",
    text: "Every template is indexed by category, app type and included functionality. Search by keyword or filter by category to find a project that matches what you are building.",
    points: [
      "30+ categories, from e-commerce and finance to IoT and wearables",
      "Filters for app type, screens and included modules",
      "Favorites list to save templates for later",
    ],
    mock: "shop" as const,
  },
  {
    title: "Preview before you download",
    text: "Each template page shows screenshots, the list of included screens, the folder structure and notes about dependencies, so you can evaluate it before downloading.",
    points: [
      "Screenshot gallery for every template",
      "Screen list and project structure overview",
      "Dependency and Flutter SDK notes",
    ],
    mock: "finance" as const,
  },
  {
    title: "Download complete Flutter projects",
    text: "Download the full project as a ZIP archive, open it in Android Studio or VS Code, and customize colors, text, screens and features to fit your app.",
    points: [
      "Complete source code, assets and UI kits where included",
      "Works with standard Flutter tooling",
      "Download history saved in your dashboard",
    ],
    mock: "fitness" as const,
  },
];

const more = [
  { title: "Clear license on every plan", text: "Starter covers personal and learning use. Pro adds commercial use for client projects. Agency adds white-label delivery rights." },
  { title: "Monthly library updates", text: "New templates are added regularly, and existing templates are reviewed for newer Flutter SDK versions." },
  { title: "Team seats & shared workspace", text: "Agency subscriptions include up to 5 seats. Invite teammates, share favorites and manage access centrally." },
  { title: "Subscription & invoice management", text: "Upgrade, downgrade or cancel at any time from your dashboard, and download invoices for your records." },
  { title: "Secure accounts", text: "Accounts are protected with encrypted passwords, HTTPS everywhere and secure session cookies." },
  { title: "Human support", text: "Email and phone support from our team for account, billing and download questions." },
];

export default function FeaturesPage() {
  return (
    <>
      <PageHero
        eyebrow="Product"
        title="Everything in Flutter Studio"
        description="A subscription software platform for discovering, previewing and downloading licensed Flutter app templates."
      />

      <section className="py-20">
        <div className="mx-auto max-w-7xl space-y-24 px-4 sm:px-6 lg:px-8">
          {sections.map((s, i) => (
            <div key={s.title} className="grid items-center gap-12 lg:grid-cols-2">
              <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                <h2 className="text-3xl font-extrabold tracking-tight text-slate-900">{s.title}</h2>
                <p className="mt-4 text-lg text-slate-600">{s.text}</p>
                <ul className="mt-6 space-y-3">
                  {s.points.map((p) => (
                    <li key={p} className="flex gap-3 text-slate-700">
                      <span className="mt-1 h-4 w-4 flex-none rounded-full bg-brand-500" />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex justify-center rounded-3xl bg-gradient-to-br from-slate-100 to-brand-50 py-12">
                <PhoneMockup variant={s.mock} />
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-3xl font-extrabold tracking-tight text-slate-900">More features</h2>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {more.map((m) => (
              <div key={m.title} className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
                <h3 className="font-bold text-slate-900">{m.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{m.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-900">What is included in a template</h2>
          <p className="mt-4 text-slate-600">
            Contents vary by template. A typical project includes the following; each template page lists exactly what
            it contains.
          </p>
          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {[
              "Flutter / Dart source code",
              "UI screens and reusable widgets",
              "Image, icon and font assets",
              "Navigation and routing setup",
              "State management structure",
              "README with setup notes",
            ].map((x) => (
              <div key={x} className="rounded-lg border border-slate-200 px-4 py-3 text-sm font-medium text-slate-700">
                {x}
              </div>
            ))}
          </div>
          <p className="mt-6 text-sm text-slate-500">
            Basic Flutter and Dart knowledge is recommended. Some templates may need backend services or API keys
            (for example Firebase) that you configure yourself. See the{" "}
            <Link href="/license" className="text-brand-600 underline">License Terms</Link> for permitted uses.
          </p>
        </div>
      </section>

      <CtaSection />
    </>
  );
}
