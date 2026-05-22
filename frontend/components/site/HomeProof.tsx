"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { delay, duration: 0.6, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
  },
});

export function HomeProof() {
  return (
    <section className="pb-8 pt-4">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col items-center gap-6 sm:flex-row sm:items-stretch">
          {/* Earnings screenshot */}
          <motion.div
            variants={fadeUp(0)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="w-full overflow-hidden rounded-2xl border border-border/50 bg-card sm:max-w-sm"
          >
            <div className="relative aspect-video w-full overflow-hidden bg-secondary/40">
              <Image
                src="/images/proof-earnings.jpg"
                alt="TikTok Shop Studio — 1 week earnings"
                fill
                className="object-cover object-top"
                sizes="(max-width: 640px) 100vw, 384px"
              />
            </div>
            <div className="px-5 py-4">
              <p className="text-xs font-medium text-foreground">
                TikTok Shop Studio
              </p>
              <p className="mt-0.5 text-xs text-muted-foreground">
                1 week of sales — unedited
              </p>
            </div>
          </motion.div>

          {/* Right side */}
          <div className="flex flex-1 flex-col justify-between gap-6">
            <motion.div
              variants={fadeUp(0.08)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="rounded-2xl border border-border/50 bg-card p-6"
            >
              <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-accent/70">
                Not claims. Proof.
              </p>
              <p className="mt-3 font-display text-lg font-semibold leading-snug tracking-tight sm:text-xl">
                Every technique has a result tied to it. Views, sales,
                and brand deals you can verify.
              </p>
              <Link
                href="/pricing"
                className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-accent transition hover:text-amber-400"
              >
                See the full receipts
                <ArrowRight className="size-3.5" />
              </Link>
            </motion.div>

            <motion.div
              variants={fadeUp(0.16)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="overflow-hidden rounded-2xl border border-border/50 bg-card"
            >
              <div className="relative aspect-[16/7] w-full overflow-hidden bg-secondary/40">
                <Image
                  src="/images/email-proof-1.jpg"
                  alt="Brand retainer deal email"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 640px) 100vw, 640px"
                />
              </div>
              <div className="px-5 py-4">
                <p className="text-xs font-medium text-foreground">
                  Brands reach out. The bundle includes the exact template.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
