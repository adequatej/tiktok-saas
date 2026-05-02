# Earnflow AI — Claude Code Briefing

## Project
AI-powered income streams platform. Phase 1 = website + guides + affiliates. See task_plan.md for full build steps and decisions log.

## Stack (Phase 1 — lean, ship-fast)
- Frontend + API: Next.js 15 (App Router) + Tailwind + shadcn/ui → Vercel
- Auth: Clerk | Payments: Stripe | DB: Supabase | Email: Resend
- NO separate backend, NO Railway, NO Docker, NO ECS, NO Terraform in Phase 1
- All server logic lives in Next.js route handlers + Supabase RLS

## Phase Roadmap
- **Phase 1 (current):** Ship the product — Next.js marketing site, MDX guides, affiliate routes, Clerk auth, Stripe, Supabase, Vercel deploy
- **Phase 2:** Introduce FastAPI → AWS migration — ECS Fargate, RDS, Terraform, Cloudflare TLS, Secrets Manager
- **Phase 3:** Applied AI — Lambda, Step Functions, Kinesis Firehose, EventBridge, guide generation pipeline

## Design Rules (NON-NEGOTIABLE)
- NO blue/purple gradients anywhere
- NO Inter or Geist font — use Clash Display (headers) + Plus Jakarta Sans (body)
- NO AI-looking icons — SVG only (Lucide/Heroicons)
- Color palette: warm black #0f0d0b bg, cream #f5f0e8 text, amber #f59e0b accent
- Feels like premium media brand, NOT a SaaS tool

## Security
- Never expose ANTHROPIC_API_KEY or system prompts to frontend
- Never use localStorage in React components
- Never commit .env files
- Never use WidthType.PERCENTAGE in tables