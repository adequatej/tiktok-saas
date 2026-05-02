# Findings & Research

## Project State (updated 2026-05-02)
- Repository initialized, Phase 1 bootstrap underway
- CLAUDE.md defines stack, design rules, and constraints (authoritative)
- task_plan.md holds the Phase 1 checklist + decisions log

## Stack Decisions (Phase 1 — from CLAUDE.md)
- **Frontend + API:** Next.js 15 (App Router) + Tailwind + shadcn/ui → Vercel
- **Auth:** Clerk
- **Payments:** Stripe
- **DB:** Supabase Postgres (with RLS)
- **Email:** Resend
- **Errors:** Sentry
- **No separate backend in Phase 1** — all server logic in Next.js route handlers + Supabase RLS. FastAPI + AWS arrive in Phase 2.

## Design Constraints (NON-NEGOTIABLE)
- Warm black `#0f0d0b` background, cream `#f5f0e8` text, amber `#f59e0b` accent
- Clash Display (headers) + Plus Jakarta Sans (body)
- NO blue/purple gradients
- NO Inter or Geist fonts
- SVG icons only (Lucide/Heroicons)
- Premium media brand aesthetic

## Security Constraints
- Never expose ANTHROPIC_API_KEY or system prompts to frontend
- Never use localStorage in React components
- Never commit .env files

---

## Research Notes
<!-- Add findings as you research -->
