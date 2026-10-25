import type { Metadata } from "next";
import { CompanyContactBlock, LegalPage } from "@/components/LegalPage";
import { company } from "@/lib/site";

export const metadata: Metadata = { title: "Refund & Cancellation Policy" };

export default function RefundPolicyPage() {
  return (
    <LegalPage title="Refund & Cancellation Policy">
      <p>
        This policy explains how cancellations and refunds work for {company.product} subscriptions sold by{" "}
        {company.legalName}. It forms part of our Terms of Service.
      </p>

      <h2>1. Cancelling your subscription</h2>
      <ul>
        <li>You can cancel at any time from your account dashboard, or by emailing <a href={`mailto:${company.billingEmail}`}>{company.billingEmail}</a> from your account email address.</li>
        <li>Cancellation stops future renewals. You keep access to the Service until the end of the billing period you have already paid for.</li>
        <li>We confirm every cancellation by email. If you do not receive confirmation within 2 business days, please contact us.</li>
      </ul>

      <h2>2. 14-day refund on your first payment</h2>
      <p>
        If you are not satisfied, you may request a full refund of the <strong>first payment</strong> of a new
        subscription (monthly or yearly) within <strong>14 days</strong> of that payment. When a refund is issued under
        this section, your subscription and download access end immediately.
      </p>

      <h2>3. Renewals</h2>
      <ul>
        <li><strong>Monthly renewals</strong> are not refundable, but you can cancel at any time to avoid the next charge.</li>
        <li><strong>Yearly renewals</strong> may be refunded in full if you request it within 14 days of the renewal date and have not downloaded any templates since the renewal.</li>
        <li>We send a reminder email at least 7 days before each yearly renewal.</li>
      </ul>

      <h2>4. Plan changes</h2>
      <ul>
        <li>Upgrades take effect immediately; you are charged a prorated amount for the rest of the current period.</li>
        <li>Downgrades take effect at the start of the next billing period. No partial refunds are issued for downgrades.</li>
      </ul>

      <h2>5. Exceptions</h2>
      <p>
        We will always refund duplicate charges, charges made after a confirmed cancellation, and charges for periods in
        which the Service was unavailable for a significant time due to our fault. Refunds may be refused where there is
        evidence of abuse, such as bulk downloading followed by a refund request, or a breach of the License Terms.
      </p>

      <h2>6. How refunds are paid</h2>
      <p>
        Approved refunds are returned to the original payment method within 5–10 business days. The time for funds to
        appear depends on your bank or card provider. Refunds are made in the currency of the original payment.
      </p>

      <h2>7. Your statutory rights</h2>
      <p>
        Nothing in this policy affects any rights you have under consumer protection laws in your country of residence.
      </p>

      <h2>8. How to request a refund</h2>
      <p>
        Email <a href={`mailto:${company.billingEmail}`}>{company.billingEmail}</a> with your account email and the date
        of the charge. We respond to all refund requests within 2 business days.
      </p>
      <CompanyContactBlock />
    </LegalPage>
  );
}
