# Billy Explains — Task Plan

## Status: Phase 1 nearly complete — domain + Vercel env vars are the last blocker

## Project Overview
TikTok Shop creator guides platform. Phase 1 = marketing site + guides + Stripe checkout + auth.

**Stack:** Next.js 15 (App Router) + Tailwind + shadcn/ui (Vercel) | Clerk Auth | Stripe | Supabase | Resend Email
*(No separate backend in Phase 1 — all server logic in Next.js route handlers + Supabase RLS. FastAPI introduced in Phase 2.)*

**Design Rules:**
- Palette: warm black `#0f0d0b` bg, cream `#f5f0e8` text, amber `#f59e0b` accent
- Fonts: Clash Display (headers) + Plus Jakarta Sans (body)
- NO blue/purple gradients | NO Inter/Geist | SVG icons only (Lucide/Heroicons)
- Feel: premium media brand, NOT a SaaS tool

---

## Phase 1 — Ship It (Current)

- [x] Step 1.1: Repo bootstrap + Makefile (19eedd7)
- [x] Step 1.2: Next.js scaffold + Tailwind + shadcn/ui + design tokens (f9caf4b)
- [x] Step 1.3: Marketing pages (landing, about, pricing, contact) (d9adefa)
- [x] Step 1.4: Guides MDX system + 3 seed guides (11c9b5f)
- [x] Step 1.5: Affiliate redirect route handler (52c2b15)
- [x] Step 1.6: Supabase schema + migrations + client wrappers (2b93315)
- [x] Step 1.7: Clerk auth — middleware.ts + webhook user sync (ac640ac)
  - proxy.ts was the wrong filename and never ran — fixed this session. middleware.ts now exists with the correct export. /guides is now actually protected.
- [x] Step 1.8: Sentry — package installed, server/edge config files exist. Silently disabled until NEXT_PUBLIC_SENTRY_DSN is set in Vercel. Can skip for now.
- [x] Step 1.10: Stripe checkout route handler — code complete (ac640ac)
- [x] Step 1.11: Resend welcome email route handler — code complete (ac640ac)
- [x] Step 1.12: GitHub Actions CI — lint + typecheck + build on every push (.github/workflows/ci.yml)
- [x] Rebrand: Earnflow AI → Billy Explains across all files (2026-06-03)

---

## Step 1.9: Vercel Deploy — IN PROGRESS (your actions required)

All the code is done. Everything below is dashboard configuration — no more coding needed.

### A. Buy billyexplains.com (~$15/yr)
Clerk's production instance refuses .vercel.app subdomains. You need a real domain.
1. Buy at Namecheap, Cloudflare Registrar, or Google Domains
2. In **Vercel → your project → Settings → Domains** → Add `billyexplains.com`
3. Vercel gives you DNS records — add them at your registrar
4. Also add `www.billyexplains.com` and redirect it to the apex

### B. Switch Clerk to production instance
Dev Clerk keys can't be used with real domains or real users at scale.
1. Go to **Clerk dashboard → switch to Production instance**
2. Set Application domain: `billyexplains.com`
3. Copy the new production keys (different from dev keys)
4. In **Vercel → Settings → Environment Variables**, update:
   - `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY` = `pk_live_...`
   - `CLERK_SECRET_KEY` = `sk_live_...`
5. In **Clerk dashboard → Webhooks → Add endpoint**:
   - URL: `https://billyexplains.com/api/webhooks/clerk`
   - Events: `user.created`, `user.updated`, `user.deleted`
   - Copy the signing secret → set `CLERK_WEBHOOK_SECRET` in Vercel

### C. Set up Stripe
1. **Stripe dashboard → Products → Create product**
   - Name: "Founders Bundle", one-time price at your chosen amount
   - Copy the Price ID (`price_...`)
2. **Stripe → Developers → Event destinations → Create event destination**
   - Type: Webhook endpoint
   - Domain: `billyexplains.com`
   - Full URL: `https://billyexplains.com/api/stripe/webhook`
   - Event: `checkout.session.completed` only
   - Copy the signing secret
3. Set in **Vercel env vars**:
   - `STRIPE_SECRET_KEY` = `sk_live_...` (live key, not test)
   - `STRIPE_PRICE_ID` = `price_...`
   - `STRIPE_WEBHOOK_SECRET` = `whsec_...`

### D. Set up Resend (welcome email after purchase)
1. Sign up at **resend.com** → get API key
2. **Resend → Domains → Add Domain** → `billyexplains.com`
3. Add the DNS records Resend provides (TXT + MX) at your registrar — wait for verification
4. Set `RESEND_API_KEY` in Vercel
5. The welcome email sends from `hello@billyexplains.com` — make sure that sender is verified in Resend

### E. Full Vercel env var checklist
Every one of these must be set in Vercel → Settings → Environment Variables:
```
NEXT_PUBLIC_SUPABASE_URL
NEXT_PUBLIC_SUPABASE_ANON_KEY
SUPABASE_SERVICE_ROLE_KEY
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY      ← must be production key (pk_live_)
CLERK_SECRET_KEY                        ← must be production key (sk_live_)
CLERK_WEBHOOK_SECRET
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/pricing
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/pricing
STRIPE_SECRET_KEY                       ← live key (sk_live_)
STRIPE_WEBHOOK_SECRET
STRIPE_PRICE_ID
RESEND_API_KEY
NEXT_PUBLIC_APP_URL=https://billyexplains.com
NEXT_PUBLIC_SENTRY_DSN                  ← optional, skip for now
```

### F. Update proof video link in config
In `frontend/lib/config.ts`:
- `proofVideoUrl` — replace `0000000000000000000` with your real viral video ID
- `proofVideoViews` — replace `[X]M` with real number (e.g. `5M`)

### G. Commit + push this session's changes
The rebrand and middleware fix are uncommitted. Run:
```bash
git add frontend/middleware.ts frontend/proxy.ts frontend/lib/config.ts \
  frontend/components/site/Hero.tsx frontend/app/(marketing)/contact/page.tsx \
  frontend/app/(marketing)/pricing/page.tsx frontend/app/api/email/welcome/route.ts \
  frontend/.env.example
git commit -m "rebrand: Earnflow → Billy Explains, fix middleware filename"
git push
```

---

## Step 1.13: Vercel Production Checklist
After domain and env vars are set, run through https://vercel.com/docs/production-checklist:
- Enable Vercel Analytics (one toggle in the dashboard)
- Enable Web Vitals
- Set up preview deployment protection if you want staging to be private
- Check that all redirects (www → apex) are working

---

## Step 1.14: Security Review (before taking real money)
These are the specific things that could get your account or money stolen:

**Already secure (built correctly):**
- Stripe webhook verifies signature before processing — can't be spoofed
- Clerk webhook verifies svix signature before processing
- /guides route is now protected by middleware (was broken before this session, now fixed)
- No secrets exposed to the client — all keys are server-only env vars
- Supabase service role key is never sent to the browser

**You need to verify in the Stripe dashboard:**
- Make sure your Stripe account has fraud protection (Radar) enabled — it's on by default for live accounts
- Set up email notifications for large charges in Stripe → Settings → Notifications

**Content protection (your guides can't be scraped/stolen):**
- The /guides route requires Clerk auth — anonymous users get redirected to sign-in
- Guide content is rendered server-side and not exposed via a public API
- No direct links to guide assets (images/files) bypass auth

**One gap to be aware of:**
- After purchase, there's no entitlement check — any signed-in user can access /guides, not just buyers. The Stripe webhook and Supabase `users` table sync is wired up but the "has this user paid?" check is a Phase 2 TODO (marked in the webhook route with `// TODO(step-2.x): revoke entitlement`). For Phase 1 with a small audience this is acceptable, but be aware that anyone who creates a Clerk account can access your guides without paying.

---

## Phase 2 — FastAPI + AWS Migration & DevOps Showcase
- [ ] Add entitlement check — only buyers can access /guides (query Supabase for purchase record)
- [ ] Introduce FastAPI (Python) backend
- [ ] Containerize backend (Dockerfile)
- [ ] Deploy to ECS Fargate (ECR, OIDC deploy, CloudWatch)
- [ ] Postgres → RDS (or stay on Supabase — migration is the resume signal)
- [ ] Terraform `infra/`
- [ ] Custom domain + Cloudflare TLS
- [ ] Secrets Manager

## Phase 3 — Applied AI
- [ ] Stripe webhook fan-out via EventBridge → Lambda subscribers
- [ ] Affiliate clickstream via Kinesis Firehose → S3 → Athena
- [ ] Guide content generation pipeline (Step Functions: research → outline → draft → fact-check → image → MDX)
- [ ] AI personalization Lambda ("next guide" suggestions)
- [ ] Email drip via Step Functions
- [ ] PDF guide export Lambda

---

## Decisions Log
| Date | Decision | Reason |
|------|----------|--------|
| 2026-05-01 | Started planning-with-files workflow | Structured planning for complex build |
| 2026-05-02 | Phase 1 = ship-fast lean stack; AWS/applied-AI deferred to Phase 2/3 | User clarified Phase 1 is for shipping, not resume showcase |
| 2026-05-02 | Frontend = Next.js 15 (App Router), not Vite | Better fit for MDX guides, server components, route handlers, Vercel |
| 2026-05-02 | Dropped Railway + FastAPI from Phase 1 | All Phase 1 server logic fits in Next.js route handlers + Supabase RLS; FastAPI introduced in Phase 2 with AWS |
| 2026-06-03 | Rebranded from Earnflow AI to Billy Explains | earnflow.ai/.com/.net all taken; billyexplains ties TikTok handle directly to product |
| 2026-06-03 | Fixed middleware: proxy.ts → middleware.ts | proxy.ts was never executed by Next.js — /guides was completely unprotected |
