import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Check, Play } from "lucide-react";
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
    title: "The AI skeleton video system",
    body: "The exact prompting workflow behind 10M+ views — which AI tools, which models, which settings. Includes the full prompt library so you can generate a polished video in under an hour.",
  },
  {
    num: "02",
    title: "Full software stack & settings",
    body: "Every piece of software in the production chain from generation to final export. Exact settings, plugins, and workflow documented so you skip the trial-and-error phase entirely.",
  },
  {
    num: "03",
    title: "Editing techniques for virality",
    body: "Pacing, hook structure, sound layering, caption timing, and text overlay decisions — pulled frame-by-frame from videos that hit millions of views. What drives watch time and what kills it.",
  },
  {
    num: "04",
    title: "Script writing framework",
    body: "The hook → bridge → CTA structure used in every top-converting video. Word-for-word templates you adapt to your product, record in 20 minutes, and post the same day.",
  },
  {
    num: "05",
    title: "Violation avoidance + appeals that win",
    body: "TikTok's content policies have traps that shadowban or kill accounts — specific words, frames, and patterns that trigger flags. The complete list of what to avoid, plus the exact appeal process used to reverse strikes and reinstate restricted content.",
  },
  {
    num: "06",
    title: "Conversion rate optimization",
    body: "How to optimize your TikTok Shop link, product listing, thumbnail, caption, and link-in-bio to turn views into clicks and clicks into sales. The full funnel from scroll-stop to purchase.",
  },
  {
    num: "07",
    title: "Product selection playbook",
    body: "The criteria for picking products before you film — what converts on TikTok Shop, what looks good AI-generated, what margin supports the effort. Worked examples from products that hit.",
  },
  {
    num: "08",
    title: "How to land retainer deals",
    body: "How to pitch brands, structure your offer, price your services, and scope retainer work. The messaging and framework used to sign clients directly from TikTok content.",
  },
  {
    num: "09",
    title: "Analytics & iteration system",
    body: "Which TikTok Shop metrics actually predict sales — hint: not just views. How to read the dashboard, find what's working, cut what isn't, and systematically double down on winners.",
  },
];

const founders = [
  "All 10 guides — today and every future drop",
  "AI prompting library + full software stack",
  "Word-for-word scripts and content templates",
  "Violation avoidance guide (keep your account safe)",
  "Conversion rate + retainer deal playbooks",
  "Violation avoidance + appeal playbook (keep and recover your account)",
  "Lifetime updates as the system evolves",
];

const { founderPrice, fullPrice, spotsRemaining, spotsTotal, countdownEnd } =
  launchConfig;

export default function PricingPage() {
  return (
    <div className="mx-auto max-w-5xl px-6 pb-24 pt-12">
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
          <span className="text-accent">10M+ views and $5K in a week.</span>
        </h1>
        <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
          Every guide, script, and template from{" "}
          <a
            href={siteConfig.tiktokUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent hover:underline"
          >
            {siteConfig.tiktokHandle}
          </a>{" "}
          — the exact system behind 10M+ views and $5K in one week from just 2
          AI skeleton videos.
        </p>
      </div>

      {/* Main pricing card */}
      <div className="relative mt-14 overflow-hidden rounded-3xl border border-accent bg-card ring-1 ring-accent/20">
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
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-3 py-1.5 text-xs font-medium text-accent">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent" />
                </span>
                {spotsRemaining} of {spotsTotal} spots at this price
              </div>

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

      {/* Proof — earnings + video */}
      <div className="mt-24">
        <p className="mb-2 text-center text-[11px] font-medium uppercase tracking-[0.22em] text-muted-foreground">
          The receipts
        </p>
        <h2 className="text-center font-display text-2xl font-semibold tracking-tight sm:text-3xl">
          Real numbers. Unedited.
        </h2>
        <p className="mx-auto mt-4 max-w-lg text-center text-sm leading-relaxed text-muted-foreground">
          Not estimated revenue or best-case projections — the actual TikTok
          Shop Studio dashboard and the video that started it.
        </p>

        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {/* Earnings screenshot */}
          <div className="overflow-hidden rounded-2xl border border-border/50 bg-card">
            <div className="relative aspect-video w-full overflow-hidden bg-secondary/40">
              <Image
                src="/images/proof-earnings.jpg"
                alt="TikTok Shop Studio earnings dashboard — 1 week"
                fill
                className="object-cover object-top"
                sizes="(max-width: 640px) 100vw, 50vw"
              />
            </div>
            <div className="p-5">
              <p className="text-sm font-semibold text-foreground">
                TikTok Shop Studio
              </p>
              <p className="mt-1 text-xs text-muted-foreground">
                1 week of earnings — unedited screenshot
              </p>
            </div>
          </div>

          {/* Viral video card */}
          <a
            href={siteConfig.proofVideoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group overflow-hidden rounded-2xl border border-border/50 bg-card transition hover:border-accent/40"
          >
            <div className="relative flex aspect-video w-full items-center justify-center overflow-hidden bg-secondary/40">
              <div
                aria-hidden
                className="absolute inset-0"
                style={{
                  background:
                    "radial-gradient(ellipse 60% 60% at 50% 50%, rgba(245,158,11,0.12) 0%, transparent 70%)",
                }}
              />
              <div className="relative flex h-14 w-14 items-center justify-center rounded-full bg-accent transition group-hover:bg-amber-400">
                <Play className="ml-0.5 size-5 text-accent-foreground" fill="currentColor" />
              </div>
              <div className="absolute bottom-3 left-3 rounded-full bg-black/60 px-2.5 py-1 text-xs font-semibold text-white backdrop-blur-sm">
                {siteConfig.proofVideoViews} views
              </div>
            </div>
            <div className="p-5">
              <p className="text-sm font-semibold text-foreground">
                Most viral video
              </p>
              <p className="mt-1 text-xs text-muted-foreground">
                Watch on TikTok ↗
              </p>
            </div>
          </a>
        </div>
      </div>

      {/* What's inside — detailed grid */}
      <div className="mt-24">
        <p className="mb-2 text-center text-[11px] font-medium uppercase tracking-[0.22em] text-muted-foreground">
          What&apos;s inside
        </p>
        <h2 className="text-center font-display text-2xl font-semibold tracking-tight sm:text-3xl">
          Ten guides. Zero filler.
        </h2>
        <p className="mx-auto mt-4 max-w-lg text-center text-sm leading-relaxed text-muted-foreground">
          Every piece is built from what actually worked inside a top TikTok
          Shop — not theory pulled from someone else&apos;s playbook.
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

      {/* Free tier */}
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
