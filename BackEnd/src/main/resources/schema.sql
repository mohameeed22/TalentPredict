-- Align users table with JPA entity fields used during auth/registration
ALTER TABLE IF EXISTS users
    ADD COLUMN IF NOT EXISTS failed_login_attempts INTEGER NOT NULL DEFAULT 0,
    ADD COLUMN IF NOT EXISTS lock_until TIMESTAMPTZ,
    ADD COLUMN IF NOT EXISTS last_login_at TIMESTAMPTZ,
    ADD COLUMN IF NOT EXISTS phone_number VARCHAR(30);

-- Ensure refresh token lookup index exists without failing if already present
CREATE INDEX IF NOT EXISTS idx_user_id ON refresh_tokens (user_id);

-- Assessment: profile skill test snapshot + public slug
ALTER TABLE profiles
    ADD COLUMN IF NOT EXISTS real_score INTEGER,
    ADD COLUMN IF NOT EXISTS test_taken_at TIMESTAMPTZ,
    ADD COLUMN IF NOT EXISTS skill_real_scores TEXT,
    ADD COLUMN IF NOT EXISTS test_passed BOOLEAN,
    ADD COLUMN IF NOT EXISTS fraud_risk VARCHAR(20),
    ADD COLUMN IF NOT EXISTS public_slug VARCHAR(80);

CREATE UNIQUE INDEX IF NOT EXISTS idx_profiles_public_slug ON profiles (public_slug)
    WHERE public_slug IS NOT NULL;

CREATE TABLE IF NOT EXISTS candidate_test_results (
    id UUID PRIMARY KEY,
    user_id UUID NOT NULL REFERENCES users (id),
    overall_score INTEGER,
    skill_scores TEXT,
    fraud_flags TEXT,
    taken_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    passed BOOLEAN,
    test_type VARCHAR(20)
);

CREATE INDEX IF NOT EXISTS idx_ctr_user_taken ON candidate_test_results (user_id, taken_at DESC);

CREATE TABLE IF NOT EXISTS job_matches (
    id UUID PRIMARY KEY,
    user_id UUID NOT NULL REFERENCES users (id),
    job_url VARCHAR(2000),
    job_title VARCHAR(500),
    match_score INTEGER,
    skill_breakdown TEXT,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS candidate_badges (
    id UUID PRIMARY KEY,
    user_id UUID NOT NULL REFERENCES users (id),
    skill VARCHAR(200) NOT NULL,
    score INTEGER,
    issued_at TIMESTAMPTZ,
    badge_svg_url VARCHAR(1000),
    CONSTRAINT uk_user_skill_badge UNIQUE (user_id, skill)
);

CREATE TABLE IF NOT EXISTS ai_async_jobs (
    id UUID PRIMARY KEY,
    job_type VARCHAR(50),
    status VARCHAR(20),
    payload TEXT,
    result TEXT,
    error TEXT,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    completed_at TIMESTAMPTZ
);
