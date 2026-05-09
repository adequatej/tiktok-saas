import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function CTA() {
  return (
    <section className="border-b border-border/40 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="rounded-2xl border border-border/60 bg-card px-10 py-14 sm:px-16 sm:py-16">
          <div className="flex flex-col items-start gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-xl">
              <h2 className="font-display text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
                Ready to create content
                <br />
                that actually sells?
              </h2>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
                Get every guide, script, and playbook — built by a top TikTok
                Shop creator, for sellers who want the same results.
              </p>
            </div>
            <Link
              href="/pricing"
              className="inline-flex h-12 shrink-0 items-center gap-2 rounded-full bg-accent px-7 text-sm font-semibold text-accent-foreground transition-colors hover:bg-amber-400"
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
