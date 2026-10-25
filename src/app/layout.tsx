import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { company } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(company.url),
  title: {
    default: `${company.product} by ${company.brand} — Flutter App Template Library`,
    template: `%s | ${company.brand}`,
  },
  description:
    "Flutter Studio is a subscription library of licensed Flutter app templates, UI kits and complete app projects for developers, freelancers and agencies.",
  openGraph: {
    siteName: company.brand,
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="flex min-h-full flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
