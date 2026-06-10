export type GuideMetadata = {
  title: string;
  description: string;
  publishedAt: string;
  readingTime: string;
  category: string;
};

export type Guide = GuideMetadata & { slug: string; isPaid: boolean };

export const guides: Guide[] = [
  // Free guides
  {
    slug: "ai-skeleton-video-method",
    isPaid: false,
    title: "The AI Skeleton Video: Why This Format Breaks the Algorithm",
    description:
      "What a skeleton video actually is, why TikTok's algorithm pushes it harder than traditional content, and why most creators haven't figured this out yet.",
    publishedAt: "2026-04-10",
    readingTime: "7 min read",
    category: "AI Videos",
  },
  {
    slug: "tiktok-shop-product-selection",
    isPaid: false,
    title: "Why Most TikTok Shop Creators Pick the Wrong Products",
    description:
      "The two filters that eliminate 80% of bad product choices, and why the products everyone else is pushing are often the worst ones to pick.",
    publishedAt: "2026-04-18",
    readingTime: "6 min read",
    category: "Product Selection",
  },
  {
    slug: "tiktok-shop-hook-writing",
    isPaid: false,
    title: "The First 3 Seconds: Why Your Hook Decides Everything on TikTok Shop",
    description:
      "How TikTok's scroll behavior works, why the hook is the only variable that actually controls whether someone watches your video, and what most creators get wrong about it.",
    publishedAt: "2026-04-25",
    readingTime: "5 min read",
    category: "Script Writing",
  },

  // Paid bundle guides
  {
    slug: "ai-skeleton-video-system",
    isPaid: true,
    title: "The AI Skeleton Video System: Full Workflow",
    description:
      "The complete production workflow - which AI tools, which models, which settings, and the exact prompt structure behind 10M+ view videos.",
    publishedAt: "2026-05-01",
    readingTime: "15 min read",
    category: "AI Videos",
  },
  {
    slug: "full-software-stack",
    isPaid: true,
    title: "Full Software Stack and Settings",
    description:
      "Every piece of software in the production chain from generation to final export, with exact settings so you skip the trial-and-error phase entirely.",
    publishedAt: "2026-05-01",
    readingTime: "10 min read",
    category: "Tools",
  },
  {
    slug: "editing-for-virality",
    isPaid: true,
    title: "Editing for Virality: Watch Time, Pacing, and Sound",
    description:
      "The editing decisions that drive completion rate - pacing, caption timing, sound layering, and text overlays pulled from videos that hit millions of views.",
    publishedAt: "2026-05-01",
    readingTime: "12 min read",
    category: "Editing",
  },
  {
    slug: "script-writing-framework",
    isPaid: true,
    title: "The Script Writing Framework",
    description:
      "The hook, bridge, and CTA structure used in every top-converting video, with word-for-word templates you can adapt and record the same day.",
    publishedAt: "2026-05-01",
    readingTime: "11 min read",
    category: "Script Writing",
  },
  {
    slug: "violation-avoidance",
    isPaid: true,
    title: "Violation Avoidance and Appeals That Win",
    description:
      "The specific words, frames, and patterns that trigger TikTok's content policy, plus the exact appeal process used to reverse strikes and reinstate content.",
    publishedAt: "2026-05-01",
    readingTime: "9 min read",
    category: "TikTok Policy",
  },
  {
    slug: "conversion-rate-optimization",
    isPaid: true,
    title: "Conversion Rate Optimization: From View to Sale",
    description:
      "How to optimize your TikTok Shop link, product listing, caption, and profile to turn views into clicks and clicks into purchases.",
    publishedAt: "2026-05-01",
    readingTime: "10 min read",
    category: "Conversion",
  },
  {
    slug: "product-selection-playbook",
    isPaid: true,
    title: "The Product Selection Playbook",
    description:
      "The full criteria for picking products before you film - all five filters, margin analysis, demand signals, and worked examples from products that hit.",
    publishedAt: "2026-05-01",
    readingTime: "13 min read",
    category: "Product Selection",
  },
  {
    slug: "retainer-deals",
    isPaid: true,
    title: "How to Land Retainer Deals",
    description:
      "The exact outreach message, pitch structure, and pricing framework used to sign 3 brand retainer clients directly from TikTok content.",
    publishedAt: "2026-05-01",
    readingTime: "10 min read",
    category: "Brand Deals",
  },
  {
    slug: "analytics-iteration",
    isPaid: true,
    title: "Analytics and Iteration: Reading the Data",
    description:
      "Which TikTok Shop metrics actually predict sales, how to read the dashboard, and the decision framework for doubling down on what works.",
    publishedAt: "2026-05-01",
    readingTime: "11 min read",
    category: "Analytics",
  },
  {
    slug: "budget-tool-alternatives",
    isPaid: true,
    title: "Budget-Friendly Alternatives to the Premium Tool Stack",
    description:
      "Cheaper alternatives to the MidJourney plus Kling Pro stack, including all-in-one tools that replace two subscriptions with one, what you give up, and how to think about the tradeoff between cost and quality.",
    publishedAt: "2026-06-10",
    readingTime: "9 min read",
    category: "Tools",
  },
];

export const freeGuides = guides.filter((g) => !g.isPaid);
export const paidGuides = guides.filter((g) => g.isPaid);

export function getGuide(slug: string): Guide | undefined {
  return guides.find((g) => g.slug === slug);
}
