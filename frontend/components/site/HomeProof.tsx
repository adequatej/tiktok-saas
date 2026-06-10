"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const EASE = [0.23, 1, 0.32, 1] as [number, number, number, number];

export function HomeProof() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-6xl px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: EASE }}
          className="mb-12"
        >
          <p className="mb-4 text-[11px] font-medium uppercase tracking-[0.22em] text-accent/70">
            Proof
          </p>
          <h2 className="font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Not claims.
            <br />
            <span className="text-muted-foreground/60">Actual results.</span>
          </h2>
        </motion.div>

        {/* Screenshot cards */}
        <div className="grid gap-4 sm:grid-cols-2">
          {/* Earnings screenshot */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.6, ease: EASE }}
            className="overflow-hidden rounded-2xl border border-border/50 bg-card"
          >
            <div className="flex max-h-[420px] items-center justify-center overflow-hidden bg-secondary/30 p-4">
              <Image
                src="/images/proof-earnings.jpg"
                alt="TikTok Shop Studio - 1 week earnings"
                width={800}
                height={800}
                className="h-auto max-h-[400px] w-auto max-w-full object-contain"
                sizes="(max-width: 640px) 100vw, 50vw"
              />
            </div>
            <div className="border-t border-border/40 px-5 py-4">
              <p className="text-sm font-medium text-foreground">TikTok Shop Studio dashboard</p>
              <p className="mt-0.5 text-xs text-muted-foreground">$5K in one week - unedited screenshot</p>
            </div>
          </motion.div>

          {/* Brand deal */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ delay: 0.1, duration: 0.6, ease: EASE }}
            className="overflow-hidden rounded-2xl border border-border/50 bg-card"
          >
            <div className="flex max-h-[420px] items-center justify-center overflow-hidden bg-secondary/30 p-4">
              <Image
                src="/images/email-proof-1.jpg"
                alt="Brand retainer deal email"
                width={1200}
                height={1200}
                className="h-auto max-h-[400px] w-auto max-w-full object-contain"
                sizes="(max-width: 640px) 100vw, 50vw"
              />
            </div>
            <div className="border-t border-border/40 px-5 py-4">
              <p className="text-sm font-medium text-foreground">Brand retainer deal</p>
              <p className="mt-0.5 text-xs text-muted-foreground">3 deals landed - $5K+ total. The exact outreach template is inside.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
