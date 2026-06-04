"use client";

import { motion } from "framer-motion";

const EASE = [0.23, 1, 0.32, 1] as [number, number, number, number];

const steps = ["Film", "Edit", "Post"];

const cards = [
  {
    number: "01",
    tag: "The System",
    headline: "A filming workflow that actually scales",
    body: "Step-by-step guides for setup, recording, and editing AI skeleton videos — the exact process behind a 5M+ view upload.",
    visual: "flow",
  },
  {
    number: "02",
    tag: "The Scripts",
    headline: "Copy-paste hooks that stop the scroll",
    body: "First-line hooks, CTAs, and content frameworks taken directly from videos that converted.",
    visual: "hook",
  },
  {
    number: "03",
    tag: "The Proof",
    headline: "Every technique tied to real numbers",
    body: "No vague advice. Every guide comes with screenshots and stats you can verify yourself.",
    visual: "stats",
  },
] as const;

const proofStats = [
  { value: "$5K", label: "1 week" },
  { value: "10M+", label: "views" },
  { value: "3", label: "brand deals" },
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
      </div>
    </section>
  );
}
