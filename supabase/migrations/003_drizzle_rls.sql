-- Migration 003: Drizzle ORM RLS policy alignment
-- Ensures all tables have service_role bypass policies for admin operations.
-- This migration is additive — it adds missing service_role policies
-- that were not present in the original hand-written SQL schema.
-- The Drizzle ORM schema (lib/db/schema.ts) is now the single source of
-- truth for table definitions and RLS policies going forward.

-- ============================================================
-- 1. Add service_role bypass policies where missing
-- ============================================================

-- Profiles: add service_role policy (insert was missing)
DO $$ BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_policies
    WHERE tablename = 'profiles' AND policyname = 'Service role can manage profiles'
  ) THEN
    CREATE POLICY "Service role can manage profiles"
      ON public.profiles FOR ALL
      TO service_role
      USING (true)
      WITH CHECK (true);
  END IF;
END $$;

-- Credits: add service_role policy
DO $$ BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_policies
    WHERE tablename = 'credits' AND policyname = 'Service role can manage credits'
  ) THEN
    CREATE POLICY "Service role can manage credits"
      ON public.credits FOR ALL
      TO service_role
      USING (true)
      WITH CHECK (true);
  END IF;
END $$;

-- Credit transactions: add service_role policy
DO $$ BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_policies
    WHERE tablename = 'credit_transactions' AND policyname = 'Service role can manage credit transactions'
  ) THEN
    CREATE POLICY "Service role can manage credit transactions"
      ON public.credit_transactions FOR ALL
      TO service_role
      USING (true)
      WITH CHECK (true);
  END IF;
END $$;

-- Licenses: add service_role policy
DO $$ BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_policies
    WHERE tablename = 'licenses' AND policyname = 'Service role can manage licenses'
  ) THEN
    CREATE POLICY "Service role can manage licenses"
      ON public.licenses FOR ALL
      TO service_role
      USING (true)
      WITH CHECK (true);
  END IF;
END $$;

-- Billing events: add service_role policy
DO $$ BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_policies
    WHERE tablename = 'billing_events' AND policyname = 'Service role can manage billing events'
  ) THEN
    CREATE POLICY "Service role can manage billing events"
      ON public.billing_events FOR ALL
      TO service_role
      USING (true)
      WITH CHECK (true);
  END IF;
END $$;

-- ============================================================
-- 2. Verify RLS is enabled on all tables
-- ============================================================
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.subscriptions ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.credits ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.credit_transactions ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.licenses ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.billing_events ENABLE ROW LEVEL SECURITY;

-- Note: webhook_events does NOT have RLS — it is only written/read
-- by the service_role via webhook handlers, never by end-users.

