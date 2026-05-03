export type AffiliateLink = {
  code: string;
  name: string;
  destination: string;
  category: string;
};

// Replace destination URLs with your actual affiliate tracking links
export const affiliateLinks: AffiliateLink[] = [
  {
    code: "convertkit",
    name: "ConvertKit",
    destination: "https://convertkit.com?lmref=REPLACE_ME",
    category: "Email Marketing",
  },
  {
    code: "beehiiv",
    name: "Beehiiv",
    destination: "https://www.beehiiv.com?via=REPLACE_ME",
    category: "Newsletter",
  },
  {
    code: "gumroad",
    name: "Gumroad",
    destination: "https://gumroad.com?affiliate=REPLACE_ME",
    category: "Digital Products",
  },
  {
    code: "lemon",
    name: "Lemon Squeezy",
    destination: "https://lemonsqueezy.com?aff=REPLACE_ME",
    category: "Digital Products",
  },
  {
    code: "shopify",
    name: "Shopify",
    destination: "https://shopify.pxf.io/REPLACE_ME",
    category: "Ecommerce",
  },
  {
    code: "perplexity",
    name: "Perplexity",
    destination: "https://perplexity.ai?via=REPLACE_ME",
    category: "AI Tools",
  },
];

const linksByCode = new Map(affiliateLinks.map((l) => [l.code, l]));

export function getAffiliateLink(code: string): AffiliateLink | undefined {
  return linksByCode.get(code);
}
