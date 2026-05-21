import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function HomeProof() {
  return (
    <section className="pb-8 pt-4">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col items-center gap-6 sm:flex-row sm:items-stretch">
          {/* Earnings screenshot */}
          <div className="w-full overflow-hidden rounded-2xl border border-border/50 bg-card sm:max-w-sm">
            <div className="relative aspect-video w-full overflow-hidden bg-secondary/40">
              <Image
                src="/images/proof-earnings.jpg"
                alt="TikTok Shop Studio — 1 week earnings"
                fill
                className="object-cover object-top"
                sizes="(max-width: 640px) 100vw, 384px"
              />
            </div>
            <div className="px-5 py-4">
              <p className="text-xs font-medium text-foreground">
                TikTok Shop Studio
              </p>
              <p className="mt-0.5 text-xs text-muted-foreground">
                1 week of sales — unedited
              </p>
            </div>
          </div>

          {/* Right side — headline + email teaser */}
          <div className="flex flex-1 flex-col justify-between gap-6">
            {/* Callout text */}
            <div className="rounded-2xl border border-border/50 bg-card p-6">
              <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-accent/70">
                Not claims. Proof.
              </p>
              <p className="mt-3 font-display text-lg font-semibold leading-snug tracking-tight sm:text-xl">
                Every technique has a result tied to it. Views, sales,
                and brand deals you can verify.
              </p>
              <Link
                href="/pricing"
                className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-accent transition hover:text-amber-400"
              >
                See the full receipts
                <ArrowRight className="size-3.5" />
              </Link>
            </div>

            {/* Email proof teaser */}
            <div className="overflow-hidden rounded-2xl border border-border/50 bg-card">
              <div className="relative aspect-[16/7] w-full overflow-hidden bg-secondary/40">
                <Image
                  src="/images/email-proof-1.jpg"
                  alt="Brand retainer deal email"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 640px) 100vw, 640px"
                />
              </div>
              <div className="px-5 py-4">
                <p className="text-xs font-medium text-foreground">
                  Brands reach out. The bundle includes the exact template.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
