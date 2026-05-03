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
    slug: "tiktok-affiliate-marketing",
    title: "How to Make $1,000/Month with TikTok Affiliate Marketing",
    description:
      "A step-by-step system for finding winning products, building trust with your audience, and generating consistent affiliate commissions on TikTok.",
    publishedAt: "2024-03-15",
    readingTime: "9 min read",
    category: "Affiliate Marketing",
  },
  {
    slug: "digital-products-passive-income",
    title: "The Builder's Guide to Digital Product Income",
    description:
      "How to identify a profitable digital product, validate demand before building, and set up a sales system that runs while you sleep.",
    publishedAt: "2024-03-22",
    readingTime: "11 min read",
    category: "Digital Products",
  },
  {
    slug: "ai-content-creation",
    title: "How to Use AI to Build a Content Income Machine",
    description:
      "Practical workflows for using AI tools to research, create, and distribute content at scale — without sounding like a robot.",
    publishedAt: "2024-04-01",
    readingTime: "8 min read",
    category: "AI Tools",
  },
];

export function getGuide(slug: string): Guide | undefined {
  return guides.find((g) => g.slug === slug);
}
