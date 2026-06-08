"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const EASE = [0.23, 1, 0.32, 1] as [number, number, number, number];

const steps = ["Film", "Edit", "Post"];

const cards = [
  {
    number: "01",
    tag: "Make Money",
    headline: "Turn short videos into real income.",
    body: "The exact filming and editing workflow I used to make $5K in one week — no fancy gear, no guesswork, just the system.",
    visual: "flow",
  },
  {
    number: "02",
    tag: "Go Viral",
    headline: "Hook them in the first second.",
    body: "Copy-paste first lines, AI skeleton scripts, and CTAs pulled directly from videos that hit 5M+ views.",
    visual: "hook",
  },
  {
    number: "03",
    tag: "Land Brand Deals",
    headline: "Get brands to pay you.",
    body: "The outreach templates and pitch scripts behind 3 paid brand deals — totalling $5K+ — ready to copy and send.",
    visual: "stats",
  },
] as const;

const proofStats = [
  { value: "3", label: "brand deals" },
  { value: "$5K+", label: "deal total" },
  { value: "0", label: "cold calls" },
];

export function ValueProps() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: EASE }}
          className="mb-14"
        >
          <p className="mb-4 text-[11px] font-medium uppercase tracking-[0.22em] text-muted-foreground">
            What you get
          </p>
          <h2 className="font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Everything you need.
            <br />
            <span className="text-muted-foreground/60">Nothing you don&apos;t.</span>
          </h2>
        </motion.div>

        {/* Cards */}
        <div className="grid gap-4 sm:grid-cols-3">
          {cards.map((card, i) => (

            <motion.div
              key={card.number}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ delay: i * 0.08, duration: 0.6, ease: EASE }}
              className="group relative flex flex-col overflow-hidden rounded-2xl border border-border/50 bg-card p-7 transition-colors duration-300 hover:border-border"
            >
              {/* Number + tag */}
              <div className="mb-5 flex items-center gap-2">
                <span className="font-display text-[11px] font-semibold tracking-[0.18em] text-accent/70">
                  {card.number}
                </span>
                <span className="h-px flex-1 bg-border/50" />
                <span className="text-[10px] font-medium uppercase tracking-widest text-muted-foreground/50">
                  {card.tag}
                </span>
              </div>

              {/* Headline */}
              <h3 className="font-display text-[1.15rem] font-semibold leading-snug tracking-tight text-foreground">
                {card.headline}
              </h3>

              {/* Body */}
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {card.body}
              </p>

              {/* Visual — pushed to bottom */}
              <div className="mt-auto pt-8">
                {card.visual === "flow" && (
                  <div className="flex flex-wrap items-center gap-2">
                    {steps.map((step, j) => (
                      <div key={step} className="flex items-center gap-2">
                        <div className="rounded-full border border-accent/30 bg-accent/10 px-3 py-1.5 text-xs font-medium text-accent">
                          {step}
                        </div>
                        {j < steps.length - 1 && (
                          <div className="h-px w-3 bg-border/60" />
                        )}
                      </div>
                    ))}
                    <div className="h-px w-3 bg-border/60" />
                    <div className="rounded-full border border-foreground/15 bg-foreground/5 px-3 py-1.5 text-xs font-medium text-foreground/50">
                      $$$
                    </div>
                  </div>
                )}

                {card.visual === "hook" && (
                  <div className="rounded-xl border border-accent/10 bg-accent/[0.05] p-4">
                    <p className="mb-2 text-[10px] font-semibold uppercase tracking-widest text-accent/60">
                      Hook template
                    </p>
                    <p className="text-[13px] italic leading-relaxed text-foreground/55">
                      &ldquo;I made $5K in 7 days selling one product on TikTok Shop.
                      Here&rsquo;s exactly how&nbsp;I did it...&rdquo;
                    </p>
                  </div>
                )}

                {card.visual === "stats" && (
                  <div className="grid grid-cols-3 gap-2">
                    {proofStats.map((s) => (
                      <div
                        key={s.value}
                        className="rounded-xl border border-border/30 bg-background/60 p-3 text-center"
                      >
                        <p className="font-display text-lg font-bold text-accent">
                          {s.value}
                        </p>
                        <p className="mt-0.5 text-[10px] text-muted-foreground">
                          {s.label}
                        </p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* And more */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.24, duration: 0.6, ease: EASE }}
          className="mt-4 flex flex-col gap-4 rounded-2xl border border-border/30 bg-card/40 px-6 py-6 sm:flex-row sm:items-center sm:justify-between"
        >
          <div>
            <p className="font-display text-base font-semibold text-foreground">And a lot more.</p>
            <p className="mt-1 text-sm text-muted-foreground">
              Brand deal templates, content calendars, TikTok Shop setup walkthroughs, and more.
            </p>
          </div>
          <Link
            href="/pricing"
            className="group inline-flex h-11 shrink-0 items-center rounded-full border border-foreground/20 px-6 text-sm font-medium text-foreground/70 transition-colors hover:border-foreground/40 hover:text-foreground"
          >
            See everything included
            <ArrowRight className="ml-2 size-3.5 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
