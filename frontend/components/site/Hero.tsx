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
    <section className="relative flex min-h-[88vh] flex-col items-center justify-center overflow-hidden text-center">
      {/* Dot grid — amber-tinted, masked so edges show, center stays clean */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(245,158,11,0.09) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
          maskImage:
            "radial-gradient(ellipse 90% 90% at 50% 50%, transparent 25%, black 70%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 90% 90% at 50% 50%, transparent 25%, black 70%)",
        }}
      />

      {/* Ambient amber glow — center, stronger than before */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 50% 55%, rgba(245,158,11,0.16) 0%, transparent 65%)",
        }}
      />

      {/* Noise grain */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundSize: "200px 200px",
        }}
      />

      {/* Bottom gradient fade into next section */}
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-0 left-0 right-0 h-40"
        style={{ background: "linear-gradient(to bottom, transparent, var(--background))" }}
      />

      <div className="relative mx-auto w-full max-w-4xl px-6 pb-28 pt-8">
        {/* Eyebrow */}
        <div className="hero-item mb-8 flex items-center justify-center gap-3">
          <span className="block h-px w-8 bg-accent/50" />
          <p className="text-[11px] font-medium uppercase tracking-[0.25em] text-accent/70">
            TikTok Shop&nbsp;&middot;&nbsp;Creator Playbook
          </p>
          <span className="block h-px w-8 bg-accent/50" />
        </div>

        {/* Headline */}
        <h1 className="hero-item font-display text-4xl font-bold leading-[1.05] tracking-[-0.025em] text-foreground sm:text-5xl md:text-6xl lg:text-7xl">
          Create TikTok Shop videos
          <br />
          <span className="text-accent">that actually sell.</span>
        </h1>

        {/* Sub-headline — specific, proof-driven */}
        <p className="hero-item mx-auto mt-6 max-w-[540px] text-base leading-relaxed text-muted-foreground sm:mt-7 sm:text-lg">
          Learn how [X]M+ views and $[X]K in [X] weeks came from
          just [X] AI skeleton videos — and how to replicate it.
        </p>

        {/* CTAs */}
        <div className="hero-item mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="/guides"
            className="inline-flex h-12 items-center gap-2 rounded-full bg-accent px-7 text-sm font-semibold text-accent-foreground transition-colors hover:bg-amber-400"
          >
            Read the playbook
            <ArrowRight className="size-4" />
          </Link>
          <Link
            href="/pricing"
            className="inline-flex h-12 items-center rounded-full border border-border px-7 text-sm font-medium text-foreground transition-colors hover:border-accent/60 hover:text-accent"
          >
            See pricing
          </Link>
        </div>

        {/* TikTok handle */}
        <div className="hero-item mt-8">
          <a
            href={siteConfig.tiktokUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <span className="font-medium text-accent">{siteConfig.tiktokHandle}</span>
            on TikTok
            <ArrowUpRight className="size-3.5" />
          </a>
        </div>

        {/* Proof stats — inline with dividers (Webflow/Linear style) */}
        <div className="hero-item mt-10 flex items-center justify-center gap-6 sm:gap-10">
          {stats.map((stat, i) => (
            <div key={stat.label} className="flex items-center gap-6 sm:gap-10">
              <div className="text-center">
                <p
                  className={`font-display text-2xl font-bold sm:text-3xl ${
                    stat.amber ? "text-accent" : "text-foreground"
                  }`}
                >
                  {stat.value}
                </p>
                <p className="mt-1 text-[11px] leading-tight text-muted-foreground">
                  {stat.label}
                </p>
              </div>
              {i < stats.length - 1 && (
                <div className="h-8 w-px bg-border/50" />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        aria-hidden
        className="scroll-cue absolute bottom-6 left-1/2 flex -translate-x-1/2 flex-col items-center gap-1.5"
      >
        <span className="text-[9px] font-medium uppercase tracking-[0.2em] text-muted-foreground/35">
          Scroll
        </span>
        <ChevronDown className="size-4 text-muted-foreground/30" />
      </div>
    </section>
  );
}
