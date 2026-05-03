import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/config";
import { guides } from "@/lib/guides";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.url;
  const now = new Date();

  const guideEntries: MetadataRoute.Sitemap = guides.map((g) => ({
    url: `${base}/guides/${g.slug}`,
    lastModified: new Date(g.publishedAt),
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [
    { url: `${base}/`, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${base}/about`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${base}/pricing`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/contact`, lastModified: now, changeFrequency: "yearly", priority: 0.4 },
    { url: `${base}/guides`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    ...guideEntries,
  ];
}
