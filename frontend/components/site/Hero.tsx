import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section className="relative flex min-h-[88vh] flex-col justify-center overflow-hidden border-b border-border/30">
      {/* Amber radial glow — bottom-left, asymmetric */}
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-32 -left-32 h-[640px] w-[640px]"
        style={{
          background:
            "radial-gradient(circle, rgba(245,158,11,0.11) 0%, transparent 65%)",
        }}
      />
      {/* Secondary glow — upper-right, very subtle depth */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-48 top-1/4 h-[480px] w-[480px]"
        style={{
          background:
            "radial-gradient(circle, rgba(245,158,11,0.04) 0%, transparent 65%)",
        }}
      />

      {/* Noise grain — premium editorial texture */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundSize: "200px 200px",
        }}
      />

      <div className="relative mx-auto w-full max-w-6xl px-6 pb-24 pt-20 sm:pt-24 md:pt-28">
        {/* Eyebrow with rule */}
        <div className="hero-item mb-10 flex items-center gap-4">
          <span className="block h-px w-10 bg-accent/50" />
          <p className="text-[11px] font-medium uppercase tracking-[0.25em] text-accent/70">
            TikTok Shop&nbsp;&middot;&nbsp;Creator Playbook
          </p>
        </div>

        {/* Headline — massive Clash Display, ~9–10rem on desktop */}
        <h1
          className="hero-item font-display font-bold leading-[0.92] tracking-[-0.03em] text-foreground"
          style={{ fontSize: "clamp(3.75rem, 10.5vw, 9.5rem)" }}
        >
          The system
          <br />
          <span className="text-accent">they keep</span>
          <br />
          asking for.
        </h1>

        {/* Sub-headline */}
        <p className="hero-item mt-8 max-w-[460px] text-[1.0625rem] leading-[1.65] text-muted-foreground sm:mt-10 sm:text-lg">
          Guides and playbooks from a top TikTok Shop creator, built for
          sellers who want the same results.
        </p>

        {/* CTAs + social proof line */}
        <div className="hero-item mt-10 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
          <Link
            href="/guides"
            className="inline-flex h-12 items-center gap-2 rounded-full bg-accent px-7 text-sm font-semibold text-accent-foreground transition-colors hover:bg-amber-400"
          >
            Read the playbook
            <ArrowRight className="size-4" />
          </Link>
          <span className="text-sm text-muted-foreground">
            Built by a top&nbsp;TikTok&nbsp;Shop creator
          </span>
        </div>
      </div>
    </section>
  );
}
