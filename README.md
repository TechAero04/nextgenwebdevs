# nextgenwebdevs.com — Flutter Studio (NEXTGENWEBDEVS LLC)

Next.js 16 + Tailwind CSS v4 marketing site and account area for **Flutter Studio**, a subscription Flutter
template library sold by NEXTGENWEBDEVS LLC.

All company details (legal name, address, entity ID, phone, emails, plans, prices, categories) live in
`src/lib/site.ts`. Edit them there and every page and the footer update.

## Pages

| Route | Purpose |
|---|---|
| `/` | Home: what the software does and who it is for |
| `/features`, `/templates` | Product features and template categories |
| `/pricing` | Plans with USD prices, comparison table, billing FAQ |
| `/about`, `/contact` | Company introduction; email, phone, address and contact form |
| `/signup`, `/login`, `/forgot-password`, `/dashboard` | Accounts (Supabase Auth) |
| `/terms`, `/privacy`, `/refund-policy`, `/license`, `/cookies` | Legal pages |

## Local development

```bash
npm install
cp .env.example .env.local   # fill in values
npm run dev
```

## Go-live checklist

1. **Domain & email**: point `nextgenwebdevs.com` at Vercel. Create the mailboxes `support@`, `billing@` and `legal@nextgenwebdevs.com`
   (Google Workspace or Zoho).
2. **Supabase** (free tier): create a project. Under Authentication > URL Configuration, set the Site URL to
   `https://nextgenwebdevs.com`. Add `SUPABASE_URL` and `SUPABASE_ANON_KEY` to Vercel env vars.
3. **Resend**: verify the domain and add `RESEND_API_KEY` so the contact form delivers to support@.
4. **Deploy**: import the `website` folder into Vercel, add the env vars and deploy.
5. Test that sign up, the confirmation email, login, dashboard, logout and the contact form all work on the live domain.
6. After Airwallex/Payoneer/Stripe approval, add the `CHECKOUT_URL_*` payment links.
