import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { guides } from "@/lib/guides";
import { siteConfig } from "@/lib/config";

export const metadata: Metadata = {
  title: "Guides",
  description:
    "The exact TikTok Shop playbooks behind [X]M+ views — filming, editing, scripting, and AI tools. Free and paid guides from a top creator.",
  openGraph: {
    title: `Guides — ${siteConfig.name}`,
    description:
      "The exact TikTok Shop playbooks behind [X]M+ views — filming, editing, scripting, and AI tools.",
  },
};

export default function GuidesPage() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-20">
      <header className="mb-16">
        <p className="mb-4 text-sm font-medium uppercase tracking-widest text-accent">
          Guides
        </p>
        <h1 className="font-display mb-4 text-4xl font-bold leading-tight text-foreground sm:text-5xl">
          The playbooks behind the numbers.
        </h1>
        <p className="max-w-xl text-lg text-muted-foreground">
          Free guides on the TikTok Shop video system — filming, AI tools,
          scripting, and what actually drives sales. No filler.
        </p>
      </header>

      <div className="space-y-4">
        {guides.map((guide) => (
          <Link
            key={guide.slug}
            href={`/guides/${guide.slug}`}
            className="group flex items-start justify-between rounded-xl border border-border/40 bg-white/[0.02] p-6 transition hover:border-border hover:bg-white/[0.04]"
          >
            <div className="flex-1 pr-6">
              <div className="mb-2 flex items-center gap-3">
                <span className="rounded-full bg-accent/10 px-2.5 py-0.5 text-xs font-medium text-accent">
                  {guide.category}
                </span>
                <span className="text-xs text-muted-foreground">
                  {guide.readingTime}
                </span>
              </div>
              <h2 className="font-display mb-2 text-xl font-semibold text-foreground transition group-hover:text-accent">
                {guide.title}
              </h2>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {guide.description}
              </p>
            </div>
            <ArrowRight className="mt-1 h-5 w-5 shrink-0 text-muted-foreground/40 transition group-hover:translate-x-1 group-hover:text-accent" />
          </Link>
        ))}
      </div>
    </main>
  );
}
