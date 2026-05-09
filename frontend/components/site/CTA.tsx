import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function CTA() {
  return (
    <section className="py-28">
      <div className="mx-auto max-w-6xl px-6">
        {/* Full-bleed card with amber glow treatment */}
        <div className="relative overflow-hidden rounded-2xl border border-border/40 bg-card px-10 py-16 sm:px-16 sm:py-20">
          {/* Subtle amber glow inside card */}
          <div
            aria-hidden
            className="pointer-events-none absolute -bottom-20 -right-20 h-[360px] w-[360px]"
            style={{
              background:
                "radial-gradient(circle, rgba(245,158,11,0.10) 0%, transparent 65%)",
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
                Every guide, script, and playbook — built by a top TikTok
                Shop creator, for sellers who want the same results.
              </p>
            </div>
            <Link
              href="/pricing"
              className="inline-flex h-12 shrink-0 items-center gap-2 rounded-full bg-accent px-8 text-sm font-semibold text-accent-foreground transition-colors hover:bg-amber-400"
            >
              See pricing
              <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
