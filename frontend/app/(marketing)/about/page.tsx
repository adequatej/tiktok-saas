import type { Metadata } from "next";
import { ArrowUpRight } from "lucide-react";
import { siteConfig } from "@/lib/config";

export const metadata: Metadata = {
  title: "About",
  description: `About ${siteConfig.name} — who's behind it and why it exists.`,
};

export default function AboutPage() {
  return (
    <article className="mx-auto max-w-3xl px-6 py-24">
      <p className="text-xs font-medium uppercase tracking-[0.24em] text-accent">
        About
      </p>
      <h1 className="mt-6 font-display text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl">
        Built by a creator who&apos;s done it.
      </h1>
      <div className="mt-10 space-y-6 text-base leading-relaxed text-muted-foreground sm:text-lg">
        <p>
          I&apos;m a TikTok Shop creator. Not someone who studied TikTok Shop
          — someone who runs it. The videos, the products, the editing system,
          the AI tools, the brand deals. All of it, every day.
        </p>
        <p>
          The playbook on this site came from people messaging me on TikTok
          asking how I do it. I got the same questions enough times that I
          decided to write everything down properly, with real numbers attached.
        </p>
        <p>
          Everything here is what I actually use — not what sounds good, not
          what someone else said worked. If a technique is in the guide, it has
          a result tied to it. Views, click rates, revenue. You can verify it.
        </p>
        <p>
          The paid bundle is the full system. The free guides are real, not
          a teaser. Read those first, see if the quality holds up, then decide.
        </p>
      </div>

      <div className="mt-12 border-t border-border/40 pt-10">
        <p className="text-sm text-muted-foreground">
          See it in action on TikTok:
        </p>
        <a
          href={siteConfig.tiktokUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-2 inline-flex items-center gap-1.5 font-medium text-accent transition hover:text-amber-400"
        >
          {siteConfig.tiktokHandle}
          <ArrowUpRight className="size-4" />
        </a>
      </div>
    </article>
  );
}
