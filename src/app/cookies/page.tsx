import type { Metadata } from "next";
import { CompanyContactBlock, LegalPage } from "@/components/LegalPage";
import { company } from "@/lib/site";

export const metadata: Metadata = { title: "Cookie Policy" };

export default function CookiePolicyPage() {
  return (
    <LegalPage title="Cookie Policy">
      <p>
        This Cookie Policy explains how {company.legalName} uses cookies on {company.domain}.
      </p>

      <h2>1. What cookies are</h2>
      <p>Cookies are small text files stored on your device by your browser when you visit a website.</p>

      <h2>2. Cookies we use</h2>
      <ul>
        <li>
          <strong>Strictly necessary cookies.</strong> We use a secure, HTTP-only session cookie (<code>ngw_access</code>)
          to keep you signed in. It expires automatically and is deleted when you log out. The Service cannot work
          without it.
        </li>
        <li>
          <strong>Payment cookies.</strong> Our payment providers may set cookies during checkout to process payments and
          prevent fraud.
        </li>
      </ul>
      <p>We do not currently use advertising or third-party tracking cookies. If this changes, we will update this policy and ask for your consent where required.</p>

      <h2>3. Managing cookies</h2>
      <p>
        You can block or delete cookies in your browser settings. If you block strictly necessary cookies, you will not
        be able to log in.
      </p>

      <h2>4. Contact</h2>
      <CompanyContactBlock />
    </LegalPage>
  );
}
