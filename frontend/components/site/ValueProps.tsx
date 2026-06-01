"use client";

import { motion } from "framer-motion";

const steps = ["Film", "Edit", "Post"];

const scriptLines = [
  { w: "w-3/4" },
  { w: "w-full" },
  { w: "w-5/6" },
  { w: "w-2/3" },
  { w: "w-full" },
  { w: "w-4/5" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.08,
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
    },
  }),
};

export function ValueProps() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        <p className="mb-10 text-[11px] font-medium uppercase tracking-[0.22em] text-muted-foreground">
          What you get
        </p>

        <div className="flex flex-col gap-4 lg:flex-row">
          {/* Large card — filming system */}
          <motion.div
            custom={0}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            className="relative flex flex-[3] flex-col justify-between overflow-hidden rounded-2xl border border-border/50 bg-card p-8"
          >
            <span
              aria-hidden
              className="pointer-events-none absolute -right-4 -top-6 font-display text-[10rem] font-bold leading-none text-accent"
              style={{ opacity: 0.05 }}
            >
              01
            </span>

            <div className="mb-6 h-px w-10 bg-accent/60" />

            <div>
              <span className="font-display text-xs font-semibold tracking-[0.18em] text-accent/60">
                01
              </span>
              <h3 className="mt-3 font-display text-xl font-semibold leading-snug tracking-tight sm:text-2xl">
                The exact filming and editing system
              </h3>
              <p className="mt-3 max-w-sm text-sm leading-relaxed text-muted-foreground">
                Step-by-step guides covering setup, process, and tools used in
                top-performing TikTok Shop videos. No theory — the actual
                workflow.
              </p>
            </div>

            <div className="mt-10 flex items-center gap-2">
              {steps.map((step, i) => (
                <div key={step} className="flex items-center gap-2">
                  <div className="rounded-full border border-accent/30 bg-accent/10 px-3 py-1.5 text-xs font-medium text-accent">
                    {step}
                  </div>
                  {i < steps.length - 1 && (
                    <div className="h-px w-4 bg-border/60" />
                  )}
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right column — 2 stacked cards */}
          <div className="flex flex-[2] flex-col gap-4">
            <motion.div
              custom={1}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
              className="relative flex flex-1 flex-col justify-between overflow-hidden rounded-2xl border border-border/50 bg-card p-8"
            >
              <span
                aria-hidden
                className="pointer-events-none absolute -right-4 -top-6 font-display text-[10rem] font-bold leading-none text-accent"
                style={{ opacity: 0.05 }}
              >
                02
              </span>

              <div>
                <span className="font-display text-xs font-semibold tracking-[0.18em] text-accent/60">
                  02
                </span>
                <h3 className="mt-3 font-display text-lg font-semibold leading-snug tracking-tight">
                  Scripts &amp; content templates
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  Ready-to-use frameworks taken from videos that convert.
                </p>
              </div>

              <div className="mt-6 space-y-2">
                {scriptLines.map((line, i) => (
                  <div
                    key={i}
                    className={`h-1.5 rounded-full bg-border/60 ${line.w} ${
                      i === 0 ? "bg-accent/25" : ""
                    }`}
                  />
                ))}
              </div>
            </motion.div>

            <motion.div
              custom={2}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
              className="relative flex flex-1 flex-col justify-between overflow-hidden rounded-2xl border border-border/50 bg-card p-8"
            >
              <span
                aria-hidden
                className="pointer-events-none absolute -right-4 -top-6 font-display text-[10rem] font-bold leading-none text-accent"
                style={{ opacity: 0.05 }}
              >
                03
              </span>

              <div>
                <span className="font-display text-xs font-semibold tracking-[0.18em] text-accent/60">
                  03
                </span>
                <h3 className="mt-3 font-display text-lg font-semibold leading-snug tracking-tight">
                  Results you can verify
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  Every technique shown with real data — views, click rates, and
                  sales. No vague advice.
                </p>
              </div>

              <div className="mt-6">
                <p className="font-display text-4xl font-bold text-accent">
                  $5K
                </p>
                <p className="mt-1 text-xs text-muted-foreground">
                  in 1 week from 2 videos
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
