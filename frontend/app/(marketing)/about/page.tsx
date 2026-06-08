import type { Metadata } from "next";
import Link from "next/link";
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
          I didn&apos;t start with TikTok Shop. I started with TikTok&apos;s{" "}
          <span className="text-foreground font-medium">Creator Rewards Program</span>{" "}
          — where you earn roughly $1 per 1,000 views depending on your RPM.
          That model forced me to get obsessed with one thing: views. More
          specifically, two metrics that determine whether TikTok pushes your
          video or buries it.
        </p>

        <p>
          The first is{" "}
          <span className="text-foreground font-medium">average watch time</span>.
          The second is{" "}
          <span className="text-foreground font-medium">percentage of full video watched</span>.
          If those two numbers aren&apos;t high enough, the algorithm stops
          distributing your video — no matter how good the content is. I spent
          years engineering every second of my videos around those two
          signals.{" "}
          <Link
            href="/guides/ai-skeleton-video-method"
            className="text-accent underline-offset-4 hover:underline"
          >
            The first guide breaks down the exact format I landed on.
          </Link>
        </p>

        <p>
          By the time TikTok Shop came along, I already understood how to make
          people watch a video all the way through. That&apos;s the same skill
          that makes a TikTok Shop video sell. High watch time means more
          people see your product, more people click, more people buy. The
          mechanics are identical — I just had a head start.
        </p>

        <p>
          That head start was built across{" "}
          <span className="text-foreground font-medium">10+ niches and accounts</span>{" "}
          over several years. Fashion, tech, finance, lifestyle, gaming — I
          tested what works and what doesn&apos;t across all of them. Across
          those accounts I&apos;ve accumulated{" "}
          <span className="text-foreground font-medium">500K+ followers</span>{" "}
          and{" "}
          <span className="text-foreground font-medium">over 1 billion views</span>.
          I know what makes a video perform, and more importantly, I know why.
        </p>

        <p>
          There&apos;s one more layer. Beyond the creator side, I&apos;m a{" "}
          <span className="text-foreground font-medium">full-time software engineer</span>.
          That means I actually understand how the AI tools in this stack work
          — text-to-image (T2I), image-to-video (I2V), model behavior, output
          consistency. I&apos;m not just using these tools, I understand them.
          That&apos;s what lets me write{" "}
          <span className="text-foreground font-medium">prompts that produce repeatable results</span>{" "}
          instead of random outputs — which is the difference between a workflow
          you can scale and one you can&apos;t.
        </p>

        <p>
          This playbook is the overlap of all of that. The creator side, the
          engineering side, and a few years of experimenting until the system
          actually worked.
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
