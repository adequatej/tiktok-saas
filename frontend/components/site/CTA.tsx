import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function CTA() {
  return (
    <section className="border-b border-border/40 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="rounded-3xl border border-border bg-card p-12 sm:p-16">
          <div className="flex flex-col items-start gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-xl">
              <h2 className="font-display text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
                Stop guessing what to build next.
              </h2>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
                The Founders Bundle: every Earnflow guide, every tool, every
                future drop. One price, lifetime updates.
              </p>
            </div>
            <Link
              href="/pricing"
              className="inline-flex h-12 shrink-0 items-center gap-2 rounded-full bg-accent px-6 text-sm font-medium text-accent-foreground transition hover:bg-amber-400"
            >
              See the bundle
              <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
