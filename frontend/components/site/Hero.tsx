import Link from "next/link";
import { ArrowRight, ArrowUpRight, ChevronDown } from "lucide-react";
import { siteConfig } from "@/lib/config";

const stats: { value: string; label: string; amber?: boolean }[] = [
  { value: "[X]M+", label: "views in [X] days" },
  { value: "$[X]K", label: "in [X] weeks", amber: true },
  { value: "[X]", label: "AI skeleton videos" },
];

export function Hero() {
  return (
    <section className="relative flex min-h-[100dvh] items-center overflow-hidden">
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

      {/* Placeholder glow — visible when no video loaded, enhances right side once video loads */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 55% 75% at 78% 52%, rgba(232,146,10,0.10) 0%, transparent 65%)",
        }}
      />

      {/* Split overlay — left dark for text legibility, right opens for video */}
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
        className="pointer-events-none absolute inset-x-0 top-0 h-40"
        style={{
          background:
            "linear-gradient(to bottom, rgba(15,13,11,0.65), transparent)",
        }}
      />

      {/* Bottom fade into next section */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 h-40"
        style={{
          background:
            "linear-gradient(to bottom, transparent, rgba(15,13,11,1))",
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

      {/* Content — left-aligned, occupies left ~55% on large screens */}
      <div className="relative mx-auto w-full max-w-6xl px-6 pb-28 pt-40 lg:pt-48">
        <div className="max-w-[580px]">
          {/* Eyebrow pill */}
          <div className="hero-item mb-8 inline-flex items-center gap-2 rounded-full border border-accent/25 bg-accent/8 px-3 py-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            <span className="text-[10px] font-medium uppercase tracking-[0.22em] text-accent/80">
              TikTok Shop&nbsp;&middot;&nbsp;Creator Playbook
            </span>
          </div>

          {/* Headline — 3 stacked lines, tight tracking */}
          <h1 className="hero-item font-display font-bold leading-[0.9] tracking-[-0.03em]">
            <span className="block text-[3rem] text-foreground sm:text-[3.75rem] lg:text-[5.25rem]">
              Create TikTok Shop
            </span>
            <span className="block text-[3rem] text-foreground sm:text-[3.75rem] lg:text-[5.25rem]">
              videos that
            </span>
            <span className="block text-[3rem] text-accent sm:text-[3.75rem] lg:text-[5.25rem]">
              actually sell.
            </span>
          </h1>

          {/* Sub-headline */}
          <p className="hero-item mt-7 max-w-[460px] text-base leading-relaxed text-foreground/55 sm:text-lg">
            Learn how [X]M+ views and $[X]K in [X] weeks came from
            just [X] AI skeleton videos — and how to replicate it.
          </p>

          {/* CTAs — button-in-button trailing icon */}
          <div className="hero-item mt-9 flex flex-col items-start gap-3 sm:flex-row sm:items-center">
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
          <div className="hero-item mt-7">
            <a
              href={siteConfig.tiktokUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm text-foreground/40 transition-colors hover:text-foreground/70"
            >
              <span className="text-accent/75">{siteConfig.tiktokHandle}</span>
              on TikTok
              <ArrowUpRight className="size-3.5" />
            </a>
          </div>

          {/* Stats — pill badges */}
          <div className="hero-item mt-9 flex flex-wrap items-center gap-2">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className={`rounded-full border px-4 py-2 ${
                  stat.amber
                    ? "border-accent/30 bg-accent/10"
                    : "border-foreground/15 bg-foreground/[0.06]"
                }`}
              >
                <span
                  className={`font-display text-sm font-bold ${
                    stat.amber ? "text-accent" : "text-foreground"
                  }`}
                >
                  {stat.value}
                </span>
                <span className="ml-1.5 text-xs text-foreground/40">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <div
        aria-hidden
        className="scroll-cue absolute bottom-6 left-1/2 flex -translate-x-1/2 flex-col items-center gap-1.5"
      >
        <span className="text-[9px] font-medium uppercase tracking-[0.2em] text-foreground/25">
          Scroll
        </span>
        <ChevronDown className="size-4 text-foreground/20" />
      </div>
    </section>
  );
}
