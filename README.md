# Earnflow AI

AI-powered income streams platform.

**Status:** Phase 1 — building (see `task_plan.md` for the live checklist).

## Stack (Phase 1)

Next.js 15 (App Router) · Tailwind · shadcn/ui · Supabase · Clerk · Stripe · Resend · Sentry · Vercel.

No separate backend in Phase 1 — all server logic lives in Next.js route handlers + Supabase RLS. FastAPI + AWS arrive in Phase 2.

## Quick Start

```bash
# Use the Node version pinned in .nvmrc
nvm use

# Install dependencies (after step 1.2 has scaffolded frontend/)
make install

# Run the dev server
make dev

# Other targets
make            # list available targets
make lint
make typecheck
make build
make test
```

## Project Files

| File | Purpose |
|---|---|
| `CLAUDE.md` | Authoritative briefing — stack, design rules, security non-negotiables |
| `task_plan.md` | Phase 1 checklist + decisions log |
| `findings.md` | Design + security constraints + research notes |
| `progress.md` | Session log |
| `Makefile` | Common dev commands |

## Design Rules (NON-NEGOTIABLE)

- Palette: warm black `#0f0d0b` bg · cream `#f5f0e8` text · amber `#f59e0b` accent
- Fonts: Clash Display (headers) + Plus Jakarta Sans (body)
- No blue/purple gradients · no Inter/Geist · SVG icons only (Lucide/Heroicons)

## Security

- Never expose `ANTHROPIC_API_KEY` or system prompts to the frontend
- No `localStorage` in React components
- Never commit `.env*` files
