import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { siteConfig } from "@/lib/config";

export function Hero() {
  return (
    <section className="relative flex min-h-[100dvh] flex-col overflow-hidden">
      {/* Full-bleed background video — drop hero-video.mp4 into public/videos/ */}
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

      {/* Placeholder glow — right side warms even when no video is loaded */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 55% 75% at 78% 52%, rgba(232,146,10,0.10) 0%, transparent 65%)",
        }}
      />

      {/* Split overlay — left dark for text, right opens for creator */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "linear-gradient(105deg, rgba(15,13,11,0.96) 0%, rgba(15,13,11,0.92) 32%, rgba(15,13,11,0.65) 50%, rgba(15,13,11,0.22) 70%, rgba(15,13,11,0.06) 100%)",
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

      {/* ── Main content — flex-1 so it fills space above proof strip ── */}
      <div className="relative flex flex-1 items-center px-6 pt-24 sm:pt-28">
        <div className="mx-auto w-full max-w-6xl">
          <div className="max-w-[560px]">
            {/* Headline */}
            <h1 className="hero-item font-display font-bold leading-[0.88] tracking-[-0.03em]">
              <span className="block text-[3rem] text-foreground sm:text-[4rem] lg:text-[5.5rem]">
                Create TikTok Shop
              </span>
              <span className="block text-[3rem] text-foreground sm:text-[4rem] lg:text-[5.5rem]">
                videos that
              </span>
              <span className="block text-[3rem] text-accent sm:text-[4rem] lg:text-[5.5rem]">
                actually sell.
              </span>
            </h1>

            {/* Sub-headline */}
            <p className="hero-item mt-6 max-w-[440px] text-base leading-relaxed text-foreground/55 sm:text-lg">
              Learn how [X]M+ views and $[X]K in [X] weeks came from
              just [X] AI skeleton videos — and how to replicate it.
            </p>

            {/* CTAs — button-in-button trailing icon */}
            <div className="hero-item mt-8 flex flex-col items-start gap-3 sm:flex-row sm:items-center">
              <Link
                href="/guides"
                className="group inline-flex h-12 items-center rounded-full bg-accent pl-6 pr-2 text-sm font-semibold text-accent-foreground transition-colors hover:bg-amber-400"
              >
                Read the playbook
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
            </div>

            {/* TikTok handle */}
            <div className="hero-item mt-6">
              <a
                href={siteConfig.tiktokUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm text-foreground/35 transition-colors hover:text-foreground/65"
              >
                <span className="text-accent/70">{siteConfig.tiktokHandle}</span>
                on TikTok
                <ArrowUpRight className="size-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* ── Proof peek — draws eye down, no scroll cue needed ── */}
      <div className="relative z-10 w-full px-6 pb-10 pt-8">
        <div className="mx-auto max-w-6xl">
          <p className="mb-3 text-[10px] font-medium uppercase tracking-[0.22em] text-foreground/30">
            Real results — unedited
          </p>
          <div className="flex flex-wrap gap-3">
            {/* Earnings */}
            <div className="rounded-xl border border-white/[0.08] bg-white/[0.04] px-4 py-3 backdrop-blur-sm">
              <p className="font-display text-2xl font-bold text-accent">$[X]K</p>
              <p className="mt-0.5 text-[11px] text-foreground/35">earned in [X] weeks</p>
            </div>

            {/* Views */}
            <div className="rounded-xl border border-white/[0.08] bg-white/[0.04] px-4 py-3 backdrop-blur-sm">
              <p className="font-display text-2xl font-bold text-foreground">[X]M+</p>
              <p className="mt-0.5 text-[11px] text-foreground/35">views from [X] videos</p>
            </div>

            {/* Brand deals */}
            <div className="hidden rounded-xl border border-white/[0.08] bg-white/[0.04] px-4 py-3 backdrop-blur-sm sm:block">
              <p className="font-display text-2xl font-bold text-foreground">[X]</p>
              <p className="mt-0.5 text-[11px] text-foreground/35">brand deals landed</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
