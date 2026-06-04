# Earnflow AI — Task Plan

## Status: IN PROGRESS (Phase 1 — Step 1.7 staged, uncommitted)

## Project Overview
AI-powered income streams platform. Phase 1 = website + guides + affiliates.

**Stack:** Next.js 15 (App Router) + Tailwind + shadcn/ui (Vercel) | Clerk Auth | Stripe | Supabase | Resend Email
*(No separate backend in Phase 1 — all server logic in Next.js route handlers + Supabase RLS. FastAPI introduced in Phase 2.)*

**Design Rules:**
- Palette: warm black `#0f0d0b` bg, cream `#f5f0e8` text, amber `#f59e0b` accent
- Fonts: Clash Display (headers) + Plus Jakarta Sans (body)
- NO blue/purple gradients | NO Inter/Geist | SVG icons only (Lucide/Heroicons)
- Feel: premium media brand, NOT a SaaS tool

---

## Phases

### Phase 1 — Ship It (Current)
Lean, fastest-to-deploy stack. No separate backend — everything in Next.js + Supabase RLS. NO Docker, ECS, RDS, Lambda, Railway, or Terraform.
- [x] Step 1.1: Repo bootstrap + Makefile (19eedd7)
- [x] Step 1.2: Next.js scaffold + Tailwind + shadcn/ui + design tokens (f9caf4b)
- [x] Step 1.3: Marketing pages (landing, about, pricing, contact) (d9adefa)
- [x] Step 1.4: Guides MDX system + 3 seed guides (11c9b5f)
- [x] Step 1.5: Affiliate redirect route handler (52c2b15)
- [x] Step 1.6: Supabase schema + migrations + client wrappers (2b93315)
- [ ] Step 1.7: Clerk auth — proxy.ts middleware + webhook user sync (staged, not committed)
- [ ] Step 1.8: Sentry (frontend error tracking)
- [ ] Step 1.9: V   ercel deploy
- [ ] Step 1.10: Stripe checkout + entitlement webhook (route handler)
- [ ] Step 1.11: Resend transactional email (route handler)
- [ ] Step 1.12: GitHub Actions CI (lint/typecheck/tests)

### Phase 2 — FastAPI + AWS Migration & DevOps Showcase
- [ ] Install superpowers skill and https://github.com/mattpocock/skills to especially use the /grill-me and /grill-with-docs and /tdd skills from it. Look for others if useful too. 
- [ ] Introduce FastAPI (Python) backend
- [ ] Containerize backend (Dockerfile)
- [ ] Deploy to ECS Fargate (ECR, OIDC deploy, CloudWatch)
- [ ] Postgres → RDS (or stay on Supabase — migration is the resume signal)
- [ ] Terraform `infra/`
- [ ] Custom domain + Cloudflare TLS
- [ ] Secrets Manager

### Phase 3 — Applied AI
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
