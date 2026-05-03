import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { guides, getGuide } from "@/lib/guides";
import type { GuideMetadata } from "@/lib/guides";
import { siteConfig } from "@/lib/config";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return guides.map((g) => ({ slug: g.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const guide = getGuide(slug);
  if (!guide) return {};
  return {
    title: guide.title,
    description: guide.description,
    openGraph: {
      title: `${guide.title} — ${siteConfig.name}`,
      description: guide.description,
    },
  };
}

export default async function GuidePage({ params }: Props) {
  const { slug } = await params;
  const guide = getGuide(slug);
  if (!guide) notFound();

  const { default: GuideContent } = (await import(
    `@/content/guides/${slug}.mdx`
  )) as { default: React.ComponentType; metadata: GuideMetadata };

  const date = new Date(guide.publishedAt).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <main className="mx-auto max-w-2xl px-6 py-20">
      <Link
        href="/guides"
        className="mb-10 inline-flex items-center gap-2 text-sm text-muted-foreground transition hover:text-foreground"
      >
        <ArrowLeft className="h-4 w-4" />
        All Guides
      </Link>

      <header className="mb-10">
        <div className="mb-4 flex items-center gap-3">
          <span className="rounded-full bg-accent/10 px-2.5 py-0.5 text-xs font-medium text-accent">
            {guide.category}
          </span>
          <span className="text-xs text-muted-foreground">
            {guide.readingTime}
          </span>
          <span className="text-xs text-muted-foreground">{date}</span>
        </div>
        <h1 className="font-display text-3xl font-bold leading-tight text-foreground sm:text-4xl">
          {guide.title}
        </h1>
      </header>

      <hr className="mb-10 border-border/40" />

      <article>
        <GuideContent />
      </article>

      <div className="mt-16 rounded-xl border border-accent/20 bg-accent/5 p-8">
        <p className="font-display mb-2 text-lg font-semibold text-foreground">
          Want more playbooks like this?
        </p>
        <p className="mb-4 text-sm text-muted-foreground">
          Get new guides and income stream breakdowns delivered to your inbox.
        </p>
        <Link
          href="/pricing"
          className="inline-flex h-9 items-center rounded-full bg-accent px-4 text-sm font-medium text-accent-foreground transition hover:bg-amber-400"
        >
          Get full access
        </Link>
      </div>
    </main>
  );
}
