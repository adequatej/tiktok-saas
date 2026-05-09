import type { Metadata } from "next";
import Link from "next/link";
import { Check } from "lucide-react";
import { siteConfig } from "@/lib/config";
import { CheckoutButton } from "@/components/site/CheckoutButton";

export const metadata: Metadata = {
  title: "Pricing",
  description: `Pricing for ${siteConfig.name} — one paid tier, lifetime updates, no SaaS subscription games.`,
};

const free = [
  "All free guides + dispatch newsletter",
  "Affiliate-link tools",
  "Reader community access",
];

const founders = [
  "Every premium guide, today and forever",
  "All paid tools + spreadsheets + templates",
  "Lifetime updates as guides evolve",
  "Earnflow internal data drops",
  "Direct line to the editorial team",
];

export default function PricingPage() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-24">
      <div className="text-center">
        <p className="text-xs font-medium uppercase tracking-[0.24em] text-accent">
          Pricing
        </p>
        <h1 className="mt-6 font-display text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl">
          One price. Lifetime access. No SaaS games.
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
          We don&apos;t do annual seat creep or feature gating. Buy once, read
          forever, get every future drop.
        </p>
      </div>

      <div className="mt-20 grid gap-6 lg:grid-cols-2">
        <div className="rounded-3xl border border-border bg-card p-10">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground">
            Free
          </p>
          <p className="mt-4 font-display text-5xl font-semibold tracking-tight">
            $0
          </p>
          <p className="mt-2 text-sm text-muted-foreground">No card needed.</p>
          <ul className="mt-8 space-y-3">
            {free.map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm">
                <Check className="mt-0.5 size-4 shrink-0 text-accent" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <Link
            href="/sign-up"
            className="mt-10 inline-flex h-12 w-full items-center justify-center rounded-full border border-border text-sm font-medium text-foreground transition hover:border-accent hover:text-accent"
          >
            Start reading
          </Link>
        </div>

        <div className="rounded-3xl border border-accent bg-card p-10 ring-1 ring-accent/20">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-accent">
            Founders Bundle
          </p>
          <p className="mt-4 font-display text-5xl font-semibold tracking-tight">
            $99
            <span className="ml-2 text-base font-normal text-muted-foreground">
              one-time
            </span>
          </p>
          <p className="mt-2 text-sm text-muted-foreground">
            Lifetime updates. No renewals.
          </p>
          <ul className="mt-8 space-y-3">
            {founders.map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm">
                <Check className="mt-0.5 size-4 shrink-0 text-accent" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <CheckoutButton />
        </div>
      </div>
    </section>
  );
}
