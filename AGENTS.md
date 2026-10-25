# AGENTS.md — Deployment guide for coding agents

You are deploying **Flutter Studio**, the website for **NEXTGENWEBDEVS LLC**, to production at
**https://nextgenwebdevs.com**. The site will be reviewed by payment providers (Airwallex, Payoneer), so it
must be fully live, complete and accurate. Read this whole file before acting.

## 1. Project facts

| Item | Value |
|---|---|
| Repo | https://github.com/sunnykumarsingh1997/nextgenwebdevs (public, branch `main`) |
| Framework | Next.js 16.4 (App Router, Turbopack, `cacheComponents: true`), React 19, TypeScript |
| Styling | Tailwind CSS v4 (`src/app/globals.css`, `@theme` tokens, no tailwind.config) |
| Auth | Supabase Auth over its REST API using `fetch`, with no Supabase SDK (`src/lib/auth.ts`) |
| Contact form | Resend REST API (`src/app/actions.ts`) |
| Hosting target | Vercel |
| Domain | `nextgenwebdevs.com` (owned by the user, registrar DNS at domaindiscount24) |
| Node | 20+ (developed on Node 26) |

**Single source of truth:** `src/lib/site.ts` holds the legal name, address, entity ID, phone, emails, plans,
prices and template categories. Every page and the footer read from it.

### Routes
`/`, `/features`, `/templates`, `/pricing`, `/about`, `/contact`, `/signup`, `/login`, `/forgot-password`,
`/dashboard` (auth-protected, redirects to `/login`), `/terms`, `/privacy`, `/refund-policy`, `/license`,
`/cookies`, `/sitemap.xml`, `/robots.txt`.

## 2. Hard rules (do not violate)

1. **Do not change company details** in `src/lib/site.ts` unless the user explicitly asks. They must exactly match
   the state filings:
   - Legal name: `NEXTGENWEBDEVS LLC`
   - Entity: New Mexico Limited Liability Company, NM SOS Entity ID `0008134504`
   - Address: `1209 Mountain Road Pl NE, Ste 11872, Albuquerque, NM 87110, United States`
   - Phone: `(818) 658-9876`
   - Emails: `support@`, `billing@`, `legal@nextgenwebdevs.com`
2. **Footer on every page** must keep: legal name, full address, entity ID, business email and phone.
3. **No misleading content:** no fake testimonials, fake customer counts, countdown timers, or guaranteed results.
4. **No "coming soon" or empty pages.** Every link must resolve with real content.
5. **Prices must stay clearly visible** on `/pricing` (Starter $12, Pro $29, Agency $79 per month in USD).
6. **Never commit secrets.** `.env*` is git-ignored (except `.env.example`). Put secrets in Vercel env vars only.
7. The governing law in `/terms` is **New Mexico**. Don't change it without the user's approval.
8. Do not add the user's private company documents to this repo. They live in a separate private repo.

## 3. Local commands

```bash
npm ci            # install (use npm install if lockfile issues)
npm run dev       # http://localhost:3000
npm run build     # production build — must pass before deploying
npm run start     # serve the production build
npm run lint      # ESLint
```

Known local issues (Windows dev machine):
- If `npm run lint` fails with `Cannot find module '@babel/core'`, run a clean `npm install`; the original install
  was interrupted. This does not affect Vercel builds.
- If the build says "Turbopack is not supported… only WASM bindings", reinstall
  `@next/swc-win32-x64-msvc` (corrupt download). Not relevant on Vercel (Linux).
- `next.config.ts` sets `turbopack.root: __dirname` because a stray `package-lock.json` exists in the user's home
  directory. Keep it.

### Next.js 16 notes for code changes
- `cacheComponents` is enabled: any component calling `cookies()`/`headers()` or reading `searchParams` must be
  inside `<Suspense>` (see `src/app/dashboard/page.tsx` and the `useSearchParams` forms in `signup`/`login`).
- Forms use Server Actions plus `useActionState` (`src/app/actions.ts`, `src/components/forms.tsx`).
- No `middleware.ts`/`proxy.ts` is used; the dashboard checks auth on the server.

## 4. Environment variables

Set these in **Vercel → Project → Settings → Environment Variables** (Production + Preview). See `.env.example`.

| Variable | Required | Purpose |
|---|---|---|
| `SUPABASE_URL` | Yes | Supabase project URL, e.g. `https://xxxx.supabase.co` |
| `SUPABASE_ANON_KEY` | Yes | Supabase anon/public key |
| `RESEND_API_KEY` | Yes | Contact form email delivery |
| `CONTACT_FROM_EMAIL` | Recommended | e.g. `NextGenWebDevs <no-reply@nextgenwebdevs.com>` (domain must be verified in Resend) |
| `CHECKOUT_URL_{STARTER,PRO,AGENCY}_{MONTHLY,YEARLY}` | Later | Payment links, added after payment-provider approval. When unset, the dashboard shows a "Request invoice" mailto button (intended). |

Without the Supabase vars, signup/login show "Account services are temporarily unavailable". Without Resend, the
contact form asks users to email directly. **Both must be configured before the site counts as live.**

Ask the user for any secret values. Do not invent or guess keys.

## 5. Deployment steps

### 5.1 Supabase (auth)
1. Create a project (or use the one the user provides).
2. Authentication → Providers → Email: enabled, "Confirm email" ON.
3. Authentication → URL Configuration:
   - Site URL: `https://nextgenwebdevs.com`
   - Redirect URLs: `https://nextgenwebdevs.com/**`, plus the Vercel preview domain if needed.
4. Optional: set Authentication → Emails → SMTP to send from `@nextgenwebdevs.com` (via Resend SMTP) so
   confirmation emails come from the business domain.
5. Copy Project URL plus the anon key into the Vercel env vars.

### 5.2 Resend (contact form)
1. Add domain `nextgenwebdevs.com` and add the DNS records it gives you (SPF/DKIM) at the registrar.
2. Wait for verification, create an API key, and set `RESEND_API_KEY`.

### 5.3 Vercel
Option A, dashboard: Add New → Project → import `sunnykumarsingh1997/nextgenwebdevs` → Framework preset
Next.js (auto-detected; root directory is the repo root) → add env vars → Deploy.

Option B, CLI:
```bash
npm i -g vercel
vercel login
vercel link                      # create/link project "nextgenwebdevs"
vercel env add SUPABASE_URL production
vercel env add SUPABASE_ANON_KEY production
vercel env add RESEND_API_KEY production
vercel env add CONTACT_FROM_EMAIL production
vercel --prod
```

### 5.4 Domain
1. Vercel → Project → Settings → Domains → add `nextgenwebdevs.com` and `www.nextgenwebdevs.com`
   (redirect `www` to the apex).
2. At the registrar (domaindiscount24), set the DNS records Vercel shows. Typically:
   - `A @ 76.76.21.21`
   - `CNAME www cname.vercel-dns.com`
3. Wait for SSL to be issued (HTTPS must work before submitting to payment providers).

### 5.5 Business email
The site advertises `support@`, `billing@`, `legal@nextgenwebdevs.com`. Ensure those mailboxes or aliases exist
(Google Workspace, Zoho or Cloudflare Email Routing) and their MX records don't conflict with Resend records. Confirm with
the user which provider to use.

## 6. Post-deploy verification (all must pass)

- [ ] `npm run build` passes locally and the Vercel build succeeds.
- [ ] Every route in section 1 returns HTTP 200 on `https://nextgenwebdevs.com` (`/dashboard` signed out → 307 to `/login`).
- [ ] Footer on every page shows `NEXTGENWEBDEVS LLC`, the full address, `0008134504`, `support@nextgenwebdevs.com`,
      `(818) 658-9876`.
- [ ] `/pricing` shows $12 / $29 / $79 monthly and $120 / $290 / $790 yearly.
- [ ] Sign up with a real inbox → confirmation email arrives → link lands on `/login?confirmed=1` → login →
      `/dashboard` shows name, plan and logout. Logout returns to `/login`.
- [ ] Forgot password sends a reset email.
- [ ] Contact form message arrives at `support@nextgenwebdevs.com`, and Reply-To is the sender.
- [ ] HTTPS valid, `www` redirects to apex, `/sitemap.xml` and `/robots.txt` load.
- [ ] No browser console errors and the layout works on mobile (375px) and desktop.

Quick status check:
```bash
for p in / /features /templates /pricing /about /contact /signup /login /terms /privacy /refund-policy /license /cookies; do
  printf "%s " "$p"; curl -s -o /dev/null -w "%{http_code}\n" "https://nextgenwebdevs.com$p"; done
```

## 7. When done

Report back to the user with: the production URL, Vercel project name, which env vars are set (names only, never
values), DNS records added, and results of the section 6 checklist. Flag anything you could not complete.
