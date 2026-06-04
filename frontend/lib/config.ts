export const siteConfig = {
  name: "Earnflow AI",
  tagline: "AI-powered income streams for builders.",
  description:
    "Guides, playbooks, and tools for building durable revenue online. No side-hustle filler — just signal.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  twitter: "@earnflow",
  github: "https://github.com/adequatej/tiktok-saas",

  // TikTok creator profile — update before launch
  tiktokHandle: "@billyexplains",
  tiktokUrl: "https://www.tiktok.com/@billyexplains",

  // Most viral video — used on the pricing page proof section
  proofVideoUrl: "https://www.tiktok.com/@billyexplains/video/0000000000000000000",
  proofVideoViews: "[X]M",
} as const;

export const navLinks = [
  { href: "/guides", label: "Guides" },
  { href: "/pricing", label: "Pricing" },
  { href: "/about", label: "About" },
] as const;

export const footerLinks = {
  product: [
    { href: "/guides", label: "Guides" },
    { href: "/pricing", label: "Pricing" },
  ],
  company: [
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ],
  social: [
    { href: "https://www.tiktok.com/@billyexplains", label: "TikTok", external: true },
  ],
} as const;
