import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Lock } from "lucide-react";
import { guides } from "@/lib/guides";
import { siteConfig } from "@/lib/config";

export const metadata: Metadata = {
  title: "Guides",
  description:
    "Free TikTok Shop playbooks — AI skeleton videos, product selection, hook writing. The full system is in the Founders Bundle.",
  openGraph: {
    title: `Guides — ${siteConfig.name}`,
    description:
      "Free TikTok Shop playbooks — AI skeleton videos, product selection, hook writing.",
  },
};

const lockedGuides = [
  {
    title: "The AI Skeleton Video Prompt Library",
    description:
      "The exact prompts, AI tools, and production settings behind [X]M+ view videos. Full workflow from concept to posted.",
    category: "AI Videos",
  },
  {
    title: "Editing for Virality: Watch Time, Pacing & Sound",
    description:
      "Frame-by-frame breakdown of what drives completion rate — the editing decisions separating a 10K view video from a 10M view video.",
    category: "Editing",
  },
  {
    title: "Violation Avoidance: What Gets Accounts Flagged",
    description:
      "The specific words, frames, and patterns that trigger TikTok's content policy. The complete list with explanations.",
    category: "TikTok Policy",
  },
  {
    title: "The Retainer Deal Template",
    description:
      "The exact outreach message, pitch structure, and pricing framework used to sign brand clients from TikTok content.",
    category: "Brand Deals",
  },
];

export default function GuidesPage() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-20">
      <header className="mb-14">
        <p className="mb-4 text-[11px] font-medium uppercase tracking-[0.24em] text-accent/70">
          Guides
        </p>
        <h1 className="font-display text-4xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl">
          The playbooks behind the numbers.
        </h1>
        <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
          Free guides on the TikTok Shop video system — what works, why it
          works, and where most creators go wrong. The complete execution is in
          the bundle.
        </p>
      </header>

      {/* Free guides */}
      <div className="mb-3 flex items-center gap-3">
        <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-muted-foreground">
          Free
        </p>
        <div className="h-px flex-1 bg-border/40" />
      </div>

      <div className="space-y-3">
        {guides.map((guide) => (
          <Link
            key={guide.slug}
            href={`/guides/${guide.slug}`}
            className="group flex items-start justify-between rounded-2xl border border-border/50 bg-card p-6 transition hover:border-accent/40 hover:bg-card"
          >
            <div className="flex-1 pr-6">
              <div className="mb-3 flex items-center gap-3">
                <span className="rounded-full bg-accent/10 px-2.5 py-0.5 text-xs font-medium text-accent">
                  {guide.category}
                </span>
                <span className="text-xs text-muted-foreground">
                  {guide.readingTime}
                </span>
              </div>
              <h2 className="font-display mb-2 text-lg font-semibold leading-snug tracking-tight text-foreground transition group-hover:text-accent sm:text-xl">
                {guide.title}
              </h2>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {guide.description}
              </p>
            </div>
            <ArrowRight className="mt-1 size-5 shrink-0 text-muted-foreground/30 transition group-hover:translate-x-1 group-hover:text-accent" />
          </Link>
        ))}
      </div>

      {/* Locked premium guides */}
      <div className="mb-3 mt-10 flex items-center gap-3">
        <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-muted-foreground">
          Founders Bundle
        </p>
        <div className="h-px flex-1 bg-border/40" />
      </div>

      <div className="space-y-3">
        {lockedGuides.map((guide) => (
          <div
            key={guide.title}
            className="relative flex items-start justify-between overflow-hidden rounded-2xl border border-border/30 bg-card/50 p-6"
          >
            {/* Subtle overlay to signal locked */}
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 bg-background/30"
            />

            <div className="relative flex-1 pr-6">
              <div className="mb-3 flex items-center gap-3">
                <span className="rounded-full bg-accent/8 px-2.5 py-0.5 text-xs font-medium text-accent/60">
                  {guide.category}
                </span>
                <span className="flex items-center gap-1 text-xs text-muted-foreground/60">
                  <Lock className="size-3" />
                  Founders Bundle
                </span>
              </div>
              <h2 className="font-display mb-2 text-lg font-semibold leading-snug tracking-tight text-foreground/50 sm:text-xl">
                {guide.title}
              </h2>
              <p className="text-sm leading-relaxed text-muted-foreground/50">
                {guide.description}
              </p>
            </div>

            <Lock className="relative mt-1 size-5 shrink-0 text-muted-foreground/25" />
          </div>
        ))}
      </div>

      {/* Bundle CTA */}
      <div className="mt-10 rounded-2xl border border-accent/20 bg-accent/5 px-8 py-7 text-center">
        <p className="font-display text-lg font-semibold tracking-tight">
          Unlock all {lockedGuides.length + guides.length} guides
        </p>
        <p className="mt-2 text-sm text-muted-foreground">
          The Founders Bundle includes every guide above plus scripts,
          templates, and the full production system.
        </p>
        <Link
          href="/pricing"
          className="mt-5 inline-flex h-11 items-center gap-2 rounded-full bg-accent px-6 text-sm font-semibold text-accent-foreground transition hover:bg-amber-400"
        >
          Get the Founders Bundle
          <ArrowRight className="size-4" />
        </Link>
      </div>
    </main>
  );
}
