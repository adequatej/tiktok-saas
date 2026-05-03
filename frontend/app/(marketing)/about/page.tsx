import type { Metadata } from "next";
import { siteConfig } from "@/lib/config";

export const metadata: Metadata = {
  title: "About",
  description: `About ${siteConfig.name} — the people, the editorial standard, and what we won't publish.`,
};

export default function AboutPage() {
  return (
    <article className="mx-auto max-w-3xl px-6 py-24">
      <p className="text-xs font-medium uppercase tracking-[0.24em] text-accent">
        About
      </p>
      <h1 className="mt-6 font-display text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl">
        A media brand for builders, run like a magazine.
      </h1>
      <div className="mt-10 space-y-6 text-base leading-relaxed text-muted-foreground sm:text-lg">
        <p>
          Earnflow is a small editorial team that publishes long-form work on
          AI-powered income streams. We pick a topic, talk to people who run it
          for a living, ship the math, and move on. Then we keep updating the
          piece for years.
        </p>
        <p>
          We don&apos;t publish reactive takes, listicles, or AI-generated
          slurry. We don&apos;t turn every article into a funnel. The site is
          the funnel — read the work; if it&apos;s useful, the rest follows.
        </p>
        <p>
          Revenue comes from a paid bundle, transparent affiliate links, and
          tools we sell to our readers. Nothing else.
        </p>
      </div>
    </article>
  );
}
