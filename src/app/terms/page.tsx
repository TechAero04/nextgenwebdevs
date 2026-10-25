import type { Metadata } from "next";
import Link from "next/link";
import { CompanyContactBlock, LegalPage } from "@/components/LegalPage";
import { company } from "@/lib/site";

export const metadata: Metadata = { title: "Terms of Service" };

export default function TermsPage() {
  return (
    <LegalPage title="Terms of Service">
      <p>
        These Terms of Service (&quot;Terms&quot;) govern your access to and use of the {company.product} software
        platform, the website at {company.domain} and related services (together, the &quot;Service&quot;) provided by{" "}
        {company.legalName}, a {company.entityType} (Entity ID {company.entityId}) with its registered office at{" "}
        {company.addressOneLine} (&quot;we&quot;, &quot;us&quot; or &quot;our&quot;). By creating an account or using
        the Service, you agree to these Terms.
      </p>

      <h2>1. The Service</h2>
      <p>
        {company.product} is subscription software that provides access to a library of Flutter app templates, UI kits
        and app projects (&quot;Templates&quot;), together with browsing, preview, download, account and team management
        features. We may add, update or retire Templates and features over time.
      </p>

      <h2>2. Eligibility and accounts</h2>
      <ul>
        <li>You must be at least 18 years old and able to form a binding contract.</li>
        <li>If you use the Service for a business, you confirm you are authorized to bind that business to these Terms.</li>
        <li>You must provide accurate account information and keep your password confidential.</li>
        <li>You are responsible for all activity under your account. Notify us promptly of any unauthorized use.</li>
      </ul>

      <h2>3. Subscriptions, billing and renewal</h2>
      <ul>
        <li>
          Plans and prices are listed on our <Link href="/pricing">Pricing page</Link>. Prices are in US dollars and
          exclude applicable taxes, which are shown at checkout.
        </li>
        <li>Subscriptions are billed in advance on a monthly or yearly basis and renew automatically until cancelled.</li>
        <li>You authorize us and our payment processors to charge your payment method for each billing period.</li>
        <li>
          We may change prices with at least 30 days&apos; notice by email. Changes apply from your next renewal; you may
          cancel before then.
        </li>
        <li>If a payment fails, we may suspend access to downloads until payment is completed.</li>
      </ul>

      <h2>4. Cancellation and refunds</h2>
      <p>
        You may cancel at any time. Cancellation and refunds are governed by our{" "}
        <Link href="/refund-policy">Refund &amp; Cancellation Policy</Link>, which forms part of these Terms.
      </p>

      <h2>5. License to Templates</h2>
      <p>
        Templates are licensed, not sold. Subject to these Terms and an active subscription, we grant you a
        non-exclusive, non-transferable license to download and use Templates as permitted by your plan and our{" "}
        <Link href="/license">License Terms</Link>. All rights not expressly granted are reserved by us and our
        licensors.
      </p>

      <h2>6. Acceptable use</h2>
      <p>You agree not to:</p>
      <ul>
        <li>resell, sublicense, share or redistribute Templates as stand-alone files, bundles or template libraries;</li>
        <li>share your account credentials or allow more users than your plan permits;</li>
        <li>use automated tools to bulk-download, scrape or copy the library;</li>
        <li>use the Service for any unlawful purpose or to build apps that violate applicable laws or third-party rights;</li>
        <li>interfere with or attempt to gain unauthorized access to the Service or its systems.</li>
      </ul>

      <h2>7. Your responsibilities for apps you build</h2>
      <p>
        You are responsible for the apps you create using Templates, including testing, security, compliance with app
        store rules, and configuring any third-party services, APIs or keys. Templates may depend on third-party
        packages that are subject to their own licenses.
      </p>

      <h2>8. Intellectual property</h2>
      <p>
        The Service, including its software, design, text and branding, is owned by {company.legalName} or its
        licensors and is protected by intellectual property laws. Flutter is a trademark of Google LLC; we are not
        affiliated with or endorsed by Google LLC.
      </p>

      <h2>9. Disclaimers</h2>
      <p>
        The Service and Templates are provided &quot;as is&quot; and &quot;as available&quot;. To the maximum extent
        permitted by law, we disclaim all warranties, express or implied, including merchantability, fitness for a
        particular purpose and non-infringement. We do not guarantee that Templates will be error-free, compatible with
        every Flutter version, or produce any particular business result.
      </p>

      <h2>10. Limitation of liability</h2>
      <p>
        To the maximum extent permitted by law, {company.legalName} will not be liable for any indirect, incidental,
        special, consequential or punitive damages, or for lost profits, revenue or data. Our total liability arising out
        of or relating to the Service will not exceed the amount you paid us in the 12 months before the event giving
        rise to the claim.
      </p>

      <h2>11. Indemnity</h2>
      <p>
        You agree to indemnify and hold harmless {company.legalName} from claims arising out of your misuse of the
        Service, your apps, or your breach of these Terms.
      </p>

      <h2>12. Suspension and termination</h2>
      <p>
        We may suspend or terminate your access if you materially breach these Terms, including the license
        restrictions, or fail to pay. You may stop using the Service and close your account at any time.
      </p>

      <h2>13. Changes to these Terms</h2>
      <p>
        We may update these Terms from time to time. If changes are material, we will notify you by email or in the
        Service at least 14 days before they take effect. Continued use after that date means you accept the updated
        Terms.
      </p>

      <h2>14. Governing law and disputes</h2>
      <p>
        These Terms are governed by the laws of the State of New Mexico, United States, without regard to its
        conflict-of-law rules. Any dispute arising out of or relating to these Terms or the Service will be subject to
        the exclusive jurisdiction of the state and federal courts located in Bernalillo County, New Mexico. Nothing in
        this section limits any mandatory consumer protection rights you have under the laws of your country of
        residence.
      </p>

      <h2>15. Contact</h2>
      <CompanyContactBlock />
    </LegalPage>
  );
}
