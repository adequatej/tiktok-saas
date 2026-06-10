"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export function CTA() {
  return (
    <section className="py-28">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
          className="relative overflow-hidden rounded-2xl border border-border/40 bg-card px-10 py-16 sm:px-16 sm:py-20"
        >
          {/* Subtle amber glow inside card */}
          <div
            aria-hidden
            className="pointer-events-none absolute -bottom-20 -right-20 h-[360px] w-[360px]"
            style={{
              background:
                "radial-gradient(circle, rgba(232,146,10,0.10) 0%, transparent 65%)",
            }}
          />

          <div className="relative flex flex-col items-start gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-lg">
              <p className="mb-3 text-[11px] font-medium uppercase tracking-[0.22em] text-accent/70">
                Get everything
              </p>
              <h2 className="font-display text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
                Ready to create content
                <br className="hidden sm:block" />
                that actually sells?
              </h2>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                Every guide, script, and playbook - built by a top TikTok
                Shop creator, for sellers who want the same results.
              </p>
            </div>
            <Link
              href="/pricing"
              className="group inline-flex h-12 shrink-0 items-center rounded-full bg-accent pl-8 pr-2 text-sm font-semibold text-accent-foreground transition-colors hover:bg-amber-400"
            >
              See pricing
              <span className="ml-3 inline-flex h-8 w-8 items-center justify-center rounded-full bg-black/15 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                <ArrowRight className="size-3.5" />
              </span>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
