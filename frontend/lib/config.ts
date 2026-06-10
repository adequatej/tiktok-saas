export const siteConfig = {
  name: "Billy Explains",
  tagline: "TikTok Shop systems that actually work.",
  description:
    "Guides, scripts, and systems from a top TikTok Shop creator. Real numbers, no filler.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  twitter: "@billyexplains",
  github: "https://github.com/adequatej/tiktok-saas",

  // TikTok creator profile - update before launch
  tiktokHandle: "@billyexplains",
  tiktokUrl: "https://www.tiktok.com/@billyexplains",

  // Viral videos - used on the pricing page proof section
  proofVideos: [
    {
      url: "https://www.tiktok.com/@billyexplains/video/7636126479507574029",
      label: "Video 1",
    },
    {
      url: "https://www.tiktok.com/@billyexplains/video/7643934364836941086",
      label: "Video 2",
    },
  ],
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
