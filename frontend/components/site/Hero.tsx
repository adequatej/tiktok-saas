import Link from "next/link";
import { ArrowRight, ChevronDown } from "lucide-react";

export function Hero() {
  return (
    <section className="relative flex min-h-[76vh] flex-col items-center justify-center overflow-hidden text-center">
      {/* Center-bottom amber glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-0 left-0 right-0 h-2/3"
        style={{
          background:
            "radial-gradient(ellipse 80% 55% at 50% 100%, rgba(245,158,11,0.13) 0%, transparent 70%)",
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

      {/* Gradient fade — blends into the next section without a hard border */}
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-0 left-0 right-0 h-32"
        style={{
          background:
            "linear-gradient(to bottom, transparent, var(--background))",
        }}
      />

      <div className="relative mx-auto w-full max-w-4xl px-6 pb-24 pt-16">
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

        {/* Sub-headline */}
        <p className="hero-item mx-auto mt-6 max-w-[520px] text-base leading-relaxed text-muted-foreground sm:mt-8 sm:text-lg">
          Guides, scripts, and playbooks from a top TikTok Shop creator.
          Learn the exact system behind videos that convert.
        </p>

        {/* CTAs */}
        <div className="hero-item mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
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
      </div>

      {/* Scroll indicator */}
      <div
        aria-hidden
        className="scroll-cue absolute bottom-6 left-1/2 flex -translate-x-1/2 flex-col items-center gap-1.5"
      >
        <span className="text-[9px] font-medium uppercase tracking-[0.2em] text-muted-foreground/40">
          Scroll
        </span>
        <ChevronDown className="size-4 text-muted-foreground/35" />
      </div>
    </section>
  );
}
