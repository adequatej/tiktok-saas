INSERT INTO affiliate_links (code, name, destination_url, category) VALUES
  ('convertkit', 'ConvertKit',    'https://convertkit.com?lmref=REPLACE_ME',    'Email Marketing'),
  ('beehiiv',    'Beehiiv',       'https://www.beehiiv.com?via=REPLACE_ME',     'Newsletter'),
  ('gumroad',    'Gumroad',       'https://gumroad.com?affiliate=REPLACE_ME',   'Digital Products'),
  ('lemon',      'Lemon Squeezy', 'https://lemonsqueezy.com?aff=REPLACE_ME',    'Digital Products'),
  ('shopify',    'Shopify',       'https://shopify.pxf.io/REPLACE_ME',          'Ecommerce'),
  ('perplexity', 'Perplexity',    'https://perplexity.ai?via=REPLACE_ME',       'AI Tools')
ON CONFLICT (code) DO NOTHING;
