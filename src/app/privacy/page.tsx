import type { Metadata } from "next";
import Link from "next/link";
import { CompanyContactBlock, LegalPage } from "@/components/LegalPage";
import { company } from "@/lib/site";

export const metadata: Metadata = { title: "Privacy Policy" };

export default function PrivacyPage() {
  return (
    <LegalPage title="Privacy Policy">
      <p>
        This Privacy Policy explains how {company.legalName} (&quot;we&quot;, &quot;us&quot;) collects, uses and
        protects personal information when you use {company.domain} and the {company.product} service. We are the data
        controller for the information described here.
      </p>

      <h2>1. Information we collect</h2>
      <h3>Information you provide</h3>
      <ul>
        <li>Account details: name, email address, password (stored in hashed form), selected plan.</li>
        <li>Billing details: billing name, address and tax information. Card details are processed by our payment providers and are not stored on our servers.</li>
        <li>Communications: messages you send us through the contact form, email or phone.</li>
      </ul>
      <h3>Information collected automatically</h3>
      <ul>
        <li>Usage data: pages visited, templates viewed and downloaded, and actions in your dashboard.</li>
        <li>Device data: IP address, browser type, operating system and approximate location derived from IP.</li>
        <li>Cookies: see our <Link href="/cookies">Cookie Policy</Link>.</li>
      </ul>

      <h2>2. How we use information</h2>
      <ul>
        <li>To create and manage your account and provide the Service (performance of a contract).</li>
        <li>To process payments, issue invoices and prevent fraud (contract and legal obligation).</li>
        <li>To respond to support requests and send service and billing emails (contract and legitimate interests).</li>
        <li>To secure, maintain and improve the Service (legitimate interests).</li>
        <li>To send product updates or marketing where you have opted in; you can unsubscribe at any time (consent).</li>
      </ul>

      <h2>3. How we share information</h2>
      <p>We do not sell your personal information. We share it only with:</p>
      <ul>
        <li>Service providers that host the Service, provide authentication, send email and process payments, under contracts that require them to protect your data;</li>
        <li>Professional advisers, auditors and authorities where required by law or to protect our rights;</li>
        <li>A successor entity in the event of a merger, acquisition or sale of assets, with notice to you.</li>
      </ul>

      <h2>4. International transfers</h2>
      <p>
        We are based in the United States and our service providers may process data in the United States and other
        countries. Where required, we use appropriate safeguards such as Standard Contractual Clauses.
      </p>

      <h2>5. Data retention</h2>
      <p>
        We keep account data for as long as your account is active and for up to 24 months afterwards, and billing
        records for as long as required by tax and accounting laws (typically 7 years). You can ask us to delete your
        account at any time.
      </p>

      <h2>6. Security</h2>
      <p>
        We use HTTPS encryption, hashed passwords, secure HTTP-only session cookies and access controls. No method of
        transmission or storage is completely secure, but we work to protect your information.
      </p>

      <h2>7. Your rights</h2>
      <p>Depending on where you live, you may have the right to:</p>
      <ul>
        <li>access the personal information we hold about you and receive a copy;</li>
        <li>correct inaccurate information;</li>
        <li>delete your information;</li>
        <li>object to or restrict certain processing, and withdraw consent;</li>
        <li>data portability;</li>
        <li>for California residents, know what we collect and opt out of any &quot;sale&quot; or &quot;sharing&quot; (we do neither), without discrimination.</li>
      </ul>
      <p>
        To exercise these rights, email <a href={`mailto:${company.supportEmail}`}>{company.supportEmail}</a>. We will
        respond within 30 days. You may also lodge a complaint with your local data protection authority.
      </p>

      <h2>8. Children</h2>
      <p>The Service is not directed to children under 16, and we do not knowingly collect their personal information.</p>

      <h2>9. Changes</h2>
      <p>We may update this policy and will post the new version here with an updated date. Material changes will be notified by email.</p>

      <h2>10. Contact</h2>
      <CompanyContactBlock />
    </LegalPage>
  );
}
