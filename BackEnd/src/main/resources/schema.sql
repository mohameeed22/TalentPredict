-- Align users table with JPA entity fields used during auth/registration
ALTER TABLE IF EXISTS users
    ADD COLUMN IF NOT EXISTS failed_login_attempts INTEGER NOT NULL DEFAULT 0,
    ADD COLUMN IF NOT EXISTS lock_until TIMESTAMPTZ,
    ADD COLUMN IF NOT EXISTS last_login_at TIMESTAMPTZ,
    ADD COLUMN IF NOT EXISTS phone_number VARCHAR(30);

-- Ensure refresh token lookup index exists without failing if already present
CREATE INDEX IF NOT EXISTS idx_user_id ON refresh_tokens (user_id);
