export const siteConfig = {
  name: "Earnflow AI",
  tagline: "AI-powered income streams for builders.",
  description:
    "Guides, playbooks, and tools for building durable revenue online. No side-hustle filler — just signal.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  twitter: "@earnflow",
  github: "https://github.com/adequatej/tiktok-saas",
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
} as const;
