export type GuideMetadata = {
  title: string;
  description: string;
  publishedAt: string;
  readingTime: string;
  category: string;
};

export type Guide = GuideMetadata & { slug: string };

export const guides: Guide[] = [
  {
    slug: "ai-skeleton-video-method",
    title: "The AI Skeleton Video — Why This Format Breaks the Algorithm",
    description:
      "What a skeleton video actually is, why TikTok's algorithm pushes it harder than traditional content, and why most creators haven't figured this out yet.",
    publishedAt: "2026-04-10",
    readingTime: "7 min read",
    category: "AI Videos",
  },
  {
    slug: "tiktok-shop-product-selection",
    title: "Why Most TikTok Shop Creators Pick the Wrong Products",
    description:
      "The two filters that eliminate 80% of bad product choices — and why the products everyone else is pushing are often the worst ones to pick.",
    publishedAt: "2026-04-18",
    readingTime: "6 min read",
    category: "Product Selection",
  },
  {
    slug: "tiktok-shop-hook-writing",
    title: "The First 3 Seconds: Why Your Hook Decides Everything on TikTok Shop",
    description:
      "How TikTok's scroll behavior works, why the hook is the only variable that controls whether someone watches, and what most creators get wrong about it.",
    publishedAt: "2026-04-25",
    readingTime: "5 min read",
    category: "Script Writing",
  },
];

export function getGuide(slug: string): Guide | undefined {
  return guides.find((g) => g.slug === slug);
}
