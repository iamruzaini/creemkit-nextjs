-- ============================================================
-- Initial Schema: Core tables for Creem + Supabase integration
-- Creates: subscriptions, webhook_events tables
-- Includes: RLS policies, indexes, handle_updated_at trigger
-- Requirements: FR-6, FR-7
-- ============================================================

-- ============================================================
-- 1. Utility: handle_updated_at trigger function
-- ============================================================
create or replace function public.handle_updated_at()
returns trigger as $$
begin
  new.updated_at = now();
  return new;
end;
$$ language plpgsql;

-- ============================================================
-- 2. Subscriptions table
-- ============================================================
create table if not exists public.subscriptions (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references auth.users(id) on delete cascade not null unique,
  creem_customer_id text,
  creem_subscription_id text unique,
  creem_product_id text,
  product_name text,
  status text not null default 'inactive'
    check (status in ('active', 'trialing', 'past_due', 'cancelled', 'paused', 'expired', 'inactive')),
  current_period_end timestamptz,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

-- Indexes
create index if not exists idx_subscriptions_user_id on public.subscriptions(user_id);
create index if not exists idx_subscriptions_creem_subscription_id on public.subscriptions(creem_subscription_id);
create index if not exists idx_subscriptions_status on public.subscriptions(status);

-- RLS
alter table public.subscriptions enable row level security;

create policy "Users can view own subscription"
  on public.subscriptions for select
  using (auth.uid() = user_id);

create policy "Service role can manage subscriptions"
  on public.subscriptions for all
  using (true)
  with check (true);

-- Updated_at trigger
create trigger subscriptions_updated_at
  before update on public.subscriptions
  for each row execute function public.handle_updated_at();

-- ============================================================
-- 3. Webhook events table (idempotency)
-- ============================================================
create table if not exists public.webhook_events (
  id text primary key,
  event_type text not null,
  processed_at timestamptz default now()
);

-- Index for quick lookups
create index if not exists idx_webhook_events_type on public.webhook_events(event_type);
