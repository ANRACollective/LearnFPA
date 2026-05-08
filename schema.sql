-- LearnFPA — Supabase schema
-- Run this in: Supabase Dashboard → SQL Editor → New query

-- ─────────────────────────────────────────
-- Tables
-- ─────────────────────────────────────────

CREATE TABLE IF NOT EXISTS lessons (
  id           SERIAL PRIMARY KEY,
  week_number  INT  NOT NULL UNIQUE,
  title        TEXT NOT NULL,
  description  TEXT,
  duration_mins INT DEFAULT 60,
  created_at   TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS lesson_progress (
  id              UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id         UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  week_number     INT  NOT NULL,
  completed_at    TIMESTAMPTZ,
  quiz_score      INT,
  last_visited_at TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(user_id, week_number)
);

-- ─────────────────────────────────────────
-- Row Level Security
-- ─────────────────────────────────────────

ALTER TABLE lessons         ENABLE ROW LEVEL SECURITY;
ALTER TABLE lesson_progress ENABLE ROW LEVEL SECURITY;

-- Anyone can read lesson metadata
CREATE POLICY "Lessons are public"
  ON lessons FOR SELECT USING (true);

-- Users can only see / write their own progress
CREATE POLICY "Users can view own progress"
  ON lesson_progress FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can insert own progress"
  ON lesson_progress FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update own progress"
  ON lesson_progress FOR UPDATE USING (auth.uid() = user_id);

-- ─────────────────────────────────────────
-- Seed lesson metadata
-- ─────────────────────────────────────────

INSERT INTO lessons (week_number, title, description, duration_mins) VALUES
  (1,  'What is FP&A?',                           'Vocabulary, the FP&A calendar, and how it differs from accounting', 60),
  (2,  'The 3-Statement Model',                   'Build a linked P&L, Balance Sheet, and Cash Flow model in Excel', 60),
  (3,  'Budgeting',                               'Zero-based vs incremental, top-down vs bottom-up, budget calendar', 60),
  (4,  'Revenue Forecasting',                     'Driver-based models: volume × price × mix', 60),
  (5,  'Cost Forecasting & Headcount',            'Fixed vs variable costs, headcount roster model, OPEX build', 60),
  (6,  'Variance Analysis & Bridge Reporting',    'Price/volume/mix decomposition, waterfall charts, BVA commentary', 60),
  (7,  'Working Capital & Cash Flow',             'DSO, DPO, DIO, cash conversion cycle — what a CFO watches most', 60),
  (8,  'Data Viz & Executive Dashboards',         'Power BI, Excel charts, EBITDA / FCF / ROIC metrics', 60),
  (9,  'Capital Budgeting & DCF',                 'NPV, IRR, payback period, full discounted cash flow model', 60),
  (10, 'Scenario Planning & Risk Analysis',       'Rolling forecasts, two-variable sensitivity tables, risk management', 60),
  (11, 'Financial Storytelling & Partnering',     'The "so what" discipline, CFO update format, narrative over numbers', 60),
  (12, 'AI in FP&A + Capstone',                   'AI forecasting tools, Copilot in finance, build a full FP&A model', 90)
ON CONFLICT (week_number) DO NOTHING;
