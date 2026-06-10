-- purchases: records completed Stripe payments
CREATE TABLE IF NOT EXISTS purchases (
  id                UUID        PRIMARY KEY DEFAULT gen_random_uuid(),
  clerk_user_id     TEXT        NOT NULL,
  stripe_session_id TEXT        UNIQUE NOT NULL,
  email             TEXT        NOT NULL,
  created_at        TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

ALTER TABLE purchases ENABLE ROW LEVEL SECURITY;

-- Service role inserts via Stripe webhook; users can read their own row
CREATE POLICY "service_role_insert_purchases" ON purchases FOR INSERT WITH CHECK (true);
CREATE POLICY "users_read_own_purchases"      ON purchases FOR SELECT USING (auth.uid()::text = clerk_user_id);

CREATE INDEX idx_purchases_clerk_user_id ON purchases(clerk_user_id);
