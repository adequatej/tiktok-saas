import type { Metadata } from "next";
import Link from "next/link";
import { Check, ShieldCheck } from "lucide-react";
import { siteConfig } from "@/lib/config";
import { CheckoutButton } from "@/components/site/CheckoutButton";
import { CountdownTimer } from "@/components/site/CountdownTimer";
import { launchConfig } from "@/lib/launch.config";

export const metadata: Metadata = {
  title: "Pricing — Founders Bundle",
  description: `Get the exact TikTok Shop video system behind [X]M+ views and $[X]K in [X] weeks. ${siteConfig.name} Founders Bundle — $${launchConfig.founderPrice}, one-time.`,
};

const inside = [
  {
    num: "01",
    title: "The filming & editing system",
    body: "Every step of the production workflow — gear, setup, lighting, editing decisions — documented from videos that hit [X]M+ views.",
  },
  {
    num: "02",
    title: "Word-for-word video scripts",
    body: "The hooks, bridges, and CTAs lifted directly from top-converting TikTok Shop videos. Adapt the template, record, post.",
  },
  {
    num: "03",
    title: "The AI skeleton video method",
    body: "How [X] AI-assisted skeleton videos generated [X]M+ views in [X] days. Full breakdown: prompt structure, edit pass, thumbnail.",
  },
  {
    num: "04",
    title: "Product selection playbook",
    body: "The criteria used to pick products before filming. What makes a product film well, convert well, and repeat — with real examples.",
  },
  {
    num: "05",
    title: "Analytics & iteration guide",
    body: "How to read TikTok Shop analytics to find what's working and double down. What numbers actually matter and what to ignore.",
  },
  {
    num: "06",
    title: "Spreadsheets & swipe files",
    body: "Every template, tracker, and reference doc used in day-to-day content production. Download, duplicate, use immediately.",
  },
];

const founders = [
  "All 6 premium guides, today and every future drop",
  "Word-for-word video scripts and content frameworks",
  "Spreadsheets, trackers, and swipe files",
  "The AI skeleton video method — full breakdown",
  "Lifetime updates as the playbook evolves",
  "Direct line to the editorial team",
];

const { founderPrice, fullPrice, spotsRemaining, spotsTotal, countdownEnd } =
  launchConfig;

export default function PricingPage() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-24">
      {/* Urgency bar */}
      <div className="mb-16 flex flex-col items-center gap-5 rounded-2xl border border-accent/20 bg-accent/5 px-8 py-6 text-center sm:flex-row sm:justify-between sm:text-left">
        <div>
          <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-accent/70">
            Founders pricing closes in
          </p>
          <p className="mt-0.5 text-sm text-muted-foreground">
            Price increases from{" "}
            <span className="font-semibold text-foreground">${founderPrice}</span>{" "}
            to{" "}
            <span className="font-semibold text-foreground">${fullPrice}</span>{" "}
            when the timer hits zero
          </p>
        </div>
        <CountdownTimer endDate={countdownEnd} nextPrice={fullPrice} />
      </div>

      {/* Page header */}
      <div className="text-center">
        <p className="text-[11px] font-medium uppercase tracking-[0.24em] text-accent/70">
          Founders Bundle
        </p>
        <h1 className="mt-5 font-display text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl">
          Get the exact system behind
          <br className="hidden sm:block" />
          <span className="text-accent">[X]M+ views and $[X]K.</span>
        </h1>
        <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
          Every guide, script, and template from a top TikTok Shop creator —
          the same system that generated [X]M+ views in [X] days and $[X]K in
          [X] weeks from just [X] AI skeleton videos.
        </p>
      </div>

      {/* Main pricing card */}
      <div className="relative mt-14 overflow-hidden rounded-3xl border border-accent bg-card ring-1 ring-accent/20">
        {/* Ambient glow */}
        <div
          aria-hidden
          className="pointer-events-none absolute -bottom-24 -right-24 h-96 w-96"
          style={{
            background:
              "radial-gradient(circle, rgba(245,158,11,0.10) 0%, transparent 65%)",
          }}
        />

        <div className="relative p-8 sm:p-12">
          <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:gap-16">
            {/* Left — price + spots + CTA */}
            <div className="lg:w-64 lg:shrink-0">
              {/* Spot badge */}
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-3 py-1.5 text-xs font-medium text-accent">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent" />
                </span>
                {spotsRemaining} of {spotsTotal} spots at this price
              </div>

              {/* Price */}
              <div>
                <p className="font-display text-6xl font-bold tracking-tight">
                  ${founderPrice}
                </p>
                <p className="mt-2 flex items-center gap-2 text-sm text-muted-foreground">
                  <span className="line-through">${fullPrice}</span>
                  <span>one-time · lifetime access</span>
                </p>
              </div>

              <CheckoutButton />

              {/* Guarantee */}
              <div className="mt-5 flex items-start gap-2.5">
                <ShieldCheck className="mt-0.5 size-4 shrink-0 text-accent/60" />
                <p className="text-xs leading-snug text-muted-foreground">
                  14-day refund guarantee. If the playbook doesn&apos;t deliver
                  value, reply to any email and we&apos;ll refund you — no
                  questions.
                </p>
              </div>
            </div>

            {/* Right — feature list */}
            <div className="flex-1">
              <p className="mb-5 text-[11px] font-medium uppercase tracking-[0.2em] text-muted-foreground">
                Everything included
              </p>
              <ul className="space-y-3.5">
                {founders.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm">
                    <Check className="mt-0.5 size-4 shrink-0 text-accent" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* What's inside — detailed grid */}
      <div className="mt-24">
        <p className="mb-2 text-center text-[11px] font-medium uppercase tracking-[0.22em] text-muted-foreground">
          What&apos;s inside
        </p>
        <h2 className="text-center font-display text-2xl font-semibold tracking-tight sm:text-3xl">
          Six guides. Zero filler.
        </h2>
        <p className="mx-auto mt-4 max-w-lg text-center text-sm leading-relaxed text-muted-foreground">
          Every piece is built from what actually worked inside a top TikTok
          Shop — not theory, not repurposed content.
        </p>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {inside.map((item) => (
            <div
              key={item.num}
              className="group rounded-2xl border border-border/50 bg-card p-6"
            >
              <div className="mb-4 h-px w-8 bg-accent/40 transition-all duration-300 group-hover:w-12 group-hover:bg-accent/70" />
              <span className="font-display text-xs font-semibold tracking-[0.18em] text-accent/50">
                {item.num}
              </span>
              <h3 className="mt-2 font-display text-base font-semibold leading-snug tracking-tight">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {item.body}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Free tier — minimal, below the fold */}
      <div className="mt-20 border-t border-border/40 pt-16">
        <div className="mx-auto max-w-md rounded-2xl border border-border bg-card p-8 text-center">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground">
            Not ready yet?
          </p>
          <p className="mt-3 font-display text-3xl font-semibold">$0</p>
          <p className="mt-2 text-sm text-muted-foreground">
            Free guides, dispatch newsletter, and community access — no card
            needed.
          </p>
          <Link
            href="/guides"
            className="mt-6 inline-flex h-11 w-full items-center justify-center rounded-full border border-border text-sm font-medium text-foreground transition hover:border-accent/60 hover:text-accent"
          >
            Read the free guides
          </Link>
        </div>
      </div>
    </div>
  );
}
