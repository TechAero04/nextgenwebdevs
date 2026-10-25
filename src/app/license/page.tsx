import type { Metadata } from "next";
import { CompanyContactBlock, LegalPage } from "@/components/LegalPage";
import { company } from "@/lib/site";

export const metadata: Metadata = { title: "License Terms" };

export default function LicensePage() {
  return (
    <LegalPage title="License Terms">
      <p>
        These License Terms explain how you may use Templates downloaded from {company.product}. They form part of our
        Terms of Service. Templates are licensed to {company.legalName} for distribution to subscribers.
      </p>

      <h2>1. Starter plan — personal &amp; learning license</h2>
      <ul>
        <li>Use Templates for learning, study, personal projects and non-commercial apps.</li>
        <li>Modify Templates freely for these purposes.</li>
        <li>Commercial use for clients or paid apps requires a Pro or Agency plan.</li>
      </ul>

      <h2>2. Pro plan — commercial license</h2>
      <ul>
        <li>Everything in the Starter license.</li>
        <li>Use Templates as the basis for commercial apps, including apps you build for clients.</li>
        <li>Publish compiled apps built from Templates to app stores and the web.</li>
        <li>Each end product must be a meaningfully customized app, not a copy of the Template.</li>
      </ul>

      <h2>3. Agency plan — commercial &amp; white-label license</h2>
      <ul>
        <li>Everything in the Pro license, for up to 5 named team members.</li>
        <li>Deliver source code of customized client apps to your clients under your own brand.</li>
      </ul>

      <h2>4. Restrictions on all plans</h2>
      <ul>
        <li>No reselling, sublicensing or redistributing Templates as stand-alone source code, templates, bundles, UI kits or libraries.</li>
        <li>No uploading Templates to public repositories or marketplaces in unmodified or lightly modified form.</li>
        <li>No sharing downloaded files with people outside your plan&apos;s permitted users.</li>
        <li>Third-party packages, fonts and images included in a Template remain subject to their own licenses.</li>
      </ul>

      <h2>5. After your subscription ends</h2>
      <p>
        Apps you started or completed while your subscription was active may continue to be used and maintained under
        the license that applied when you downloaded the Template. You may not start new projects with Templates or
        download new Templates after your subscription ends.
      </p>

      <h2>6. Questions</h2>
      <p>If you are unsure whether a use is permitted, please ask us before you start.</p>
      <CompanyContactBlock />
    </LegalPage>
  );
}
