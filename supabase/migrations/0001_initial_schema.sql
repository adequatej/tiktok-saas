-- users: synced from Clerk via webhook
CREATE TABLE IF NOT EXISTS users (
  id             UUID        PRIMARY KEY DEFAULT gen_random_uuid(),
  clerk_user_id  TEXT        UNIQUE NOT NULL,
  email          TEXT        NOT NULL,
  created_at     TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at     TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- guides: mirrors the MDX content registry
CREATE TABLE IF NOT EXISTS guides (
  id           UUID        PRIMARY KEY DEFAULT gen_random_uuid(),
  slug         TEXT        UNIQUE NOT NULL,
  title        TEXT        NOT NULL,
  description  TEXT,
  published_at TIMESTAMPTZ,
  created_at   TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- affiliate_links: seeded to match lib/affiliates.ts
CREATE TABLE IF NOT EXISTS affiliate_links (
  id              UUID        PRIMARY KEY DEFAULT gen_random_uuid(),
  code            TEXT        UNIQUE NOT NULL,
  name            TEXT        NOT NULL,
  destination_url TEXT        NOT NULL,
  category        TEXT        NOT NULL,
  created_at      TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- affiliate_clicks: anonymous click tracking
CREATE TABLE IF NOT EXISTS affiliate_clicks (
  id         UUID        PRIMARY KEY DEFAULT gen_random_uuid(),
  code       TEXT        NOT NULL REFERENCES affiliate_links(code),
  user_id    UUID        REFERENCES users(id),
  ip_hash    TEXT,
  referer    TEXT,
  user_agent TEXT,
  clicked_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- RLS
ALTER TABLE users           ENABLE ROW LEVEL SECURITY;
ALTER TABLE guides          ENABLE ROW LEVEL SECURITY;
ALTER TABLE affiliate_links ENABLE ROW LEVEL SECURITY;
ALTER TABLE affiliate_clicks ENABLE ROW LEVEL SECURITY;

-- Public read for guides and affiliate_links
CREATE POLICY "public_read_guides"          ON guides          FOR SELECT USING (true);
CREATE POLICY "public_read_affiliate_links" ON affiliate_links FOR SELECT USING (true);

-- Users can only read their own row; service role inserts via webhook
CREATE POLICY "users_read_own" ON users FOR SELECT USING (auth.uid()::text = clerk_user_id);

-- Indexes
CREATE INDEX idx_affiliate_clicks_code       ON affiliate_clicks(code);
CREATE INDEX idx_affiliate_clicks_clicked_at ON affiliate_clicks(clicked_at DESC);

-- Auto-update users.updated_at on row changes
CREATE OR REPLACE FUNCTION set_updated_at()
RETURNS TRIGGER LANGUAGE plpgsql AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$;

CREATE TRIGGER users_set_updated_at
  BEFORE UPDATE ON users
  FOR EACH ROW EXECUTE FUNCTION set_updated_at();
