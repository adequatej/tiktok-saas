"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { siteConfig } from "@/lib/config";

const EASE = [0.23, 1, 0.32, 1] as [number, number, number, number];

const chapters = [
  "AI Skeleton Framework",
  "Hook Engineering",
  "Brand Deal Outreach",
  "Editing Workflow",
  "Content Calendar",
];

const resultStats = [
  { value: "$5K", label: "week 1 earnings" },
  { value: "10M+", label: "total views" },
  { value: "3", label: "brand deals" },
];

const textLines = [95, 88, 72, 85, 60, 90];

export function Hero() {
  return (
    <section className="relative flex min-h-[100dvh] flex-col overflow-hidden">
      {/* Background video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="none"
        aria-hidden
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source src="/videos/hero-video.mp4" type="video/mp4" />
      </video>

      {/* Uniform dark overlay */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{ background: "rgba(15,13,11,0.82)" }}
      />

      {/* Centered amber glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 50% 42%, rgba(232,146,10,0.09) 0%, transparent 70%)",
        }}
      />

      {/* Top vignette */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-32"
        style={{
          background: "linear-gradient(to bottom, rgba(15,13,11,0.6), transparent)",
        }}
      />

      {/* Noise grain */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundSize: "200px 200px",
        }}
      />

      {/* Content */}
      <div className="relative flex flex-1 flex-col">
        {/* Headline + CTAs — centered */}
        <div className="flex flex-1 flex-col items-center justify-center px-6 pb-6 pt-24 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: EASE }}
            className="font-display font-bold leading-[0.9] tracking-[-0.03em]"
          >
            <span className="block text-[2.75rem] text-foreground sm:text-[4rem] lg:text-[5.5rem]">
              Go viral.
            </span>
            <span className="block text-[2.75rem] text-accent sm:text-[4rem] lg:text-[5.5rem]">
              Get paid.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.12, duration: 0.7, ease: EASE }}
            className="mt-5 max-w-[500px] text-base leading-relaxed text-foreground/50 sm:text-lg"
          >
            Everything I wish I knew when I started. AI tools, scripts, editing
            tricks, and the exact system I used to make $5K in one week on TikTok Shop.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.22, duration: 0.7, ease: EASE }}
            className="mt-8 flex flex-col items-center gap-3 sm:flex-row"
          >
            <Link
              href="/guides"
              className="group inline-flex h-12 items-center rounded-full bg-accent pl-6 pr-2 text-sm font-semibold text-accent-foreground transition-colors hover:bg-amber-400"
            >
              Get the playbook
              <span className="ml-3 inline-flex h-8 w-8 items-center justify-center rounded-full bg-black/15 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                <ArrowRight className="size-3.5" />
              </span>
            </Link>
            <Link
              href="/pricing"
              className="inline-flex h-12 items-center rounded-full border border-foreground/20 px-7 text-sm font-medium text-foreground/70 transition-colors hover:border-foreground/40 hover:text-foreground"
            >
              See pricing
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.32, duration: 0.7, ease: EASE }}
            className="mt-6"
          >
            <a
              href={siteConfig.tiktokUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm text-foreground/30 transition-colors hover:text-foreground/60"
            >
              <span className="text-accent/60">{siteConfig.tiktokHandle}</span>
              on TikTok
              <ArrowUpRight className="size-3.5" />
            </a>
          </motion.div>
        </div>

        {/* Product peek — slides up after headline settles */}
        <motion.div
          initial={{ opacity: 0, y: 64 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45, duration: 0.95, ease: EASE }}
          className="relative px-4 pb-0 sm:px-6"
        >
          <div className="mx-auto max-w-5xl">
            <p className="mb-3 text-[10px] font-medium uppercase tracking-[0.22em] text-foreground/25">
              Inside the playbook
            </p>

            {/* Browser chrome mock */}
            <div className="overflow-hidden rounded-t-2xl border border-white/[0.09] bg-[#18140f] shadow-[0_-20px_80px_rgba(0,0,0,0.55)]">
              {/* Title bar */}
              <div className="flex items-center gap-3 border-b border-white/[0.06] bg-[#13100b] px-4 py-2.5">
                <div className="flex gap-1.5">
                  {["#ff5f57", "#febc2e", "#28c840"].map((c) => (
                    <div
                      key={c}
                      className="h-2.5 w-2.5 rounded-full"
                      style={{ background: c, opacity: 0.35 }}
                    />
                  ))}
                </div>
                <div className="flex-1">
                  <div className="mx-auto w-fit rounded-md bg-white/[0.04] px-4 py-0.5 text-[11px] text-white/20">
                    billyexplains.com/guides
                  </div>
                </div>
              </div>

              {/* Two-column layout */}
              <div className="grid divide-x divide-white/[0.05] sm:grid-cols-[210px_1fr]">
                {/* Chapter sidebar */}
                <div className="hidden p-3 sm:block">
                  <p className="mb-2 px-3 text-[10px] font-medium uppercase tracking-widest text-white/20">
                    Chapters
                  </p>
                  <div className="space-y-0.5">
                    {chapters.map((ch, i) => (
                      <div
                        key={i}
                        className={`rounded-lg px-3 py-2 text-[12px] transition-colors ${
                          i === 0
                            ? "bg-accent/10 font-medium text-accent"
                            : "text-white/25"
                        }`}
                      >
                        {ch}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Guide content */}
                <div className="p-5 sm:p-6">
                  <p className="mb-2 text-[10px] font-medium uppercase tracking-[0.2em] text-accent/50">
                    Chapter 01
                  </p>
                  <p className="mb-5 font-display text-lg font-semibold text-white/80 sm:text-xl">
                    The AI Skeleton Framework
                  </p>

                  {/* Text preview lines */}
                  <div className="space-y-2.5">
                    {textLines.map((w, i) => (
                      <div
                        key={i}
                        className={`h-1.5 rounded-full ${
                          i === 0 ? "bg-accent/25" : "bg-white/[0.07]"
                        }`}
                        style={{ width: `${w}%` }}
                      />
                    ))}
                  </div>

                  {/* Stats row */}
                  <div className="mt-5 flex flex-wrap gap-2 border-t border-white/[0.05] pt-5">
                    {resultStats.map((stat) => (
                      <div
                        key={stat.value}
                        className="rounded-xl bg-white/[0.04] px-4 py-2.5 backdrop-blur-sm"
                      >
                        <p className="font-display text-lg font-bold text-accent">
                          {stat.value}
                        </p>
                        <p className="mt-0.5 text-[10px] text-white/30">
                          {stat.label}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
