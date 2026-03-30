# Blueprint System Design & Architecture

## Overview

This document describes the architecture of the **Next.js + Supabase + Creem Boilerplate** as it exists in the current repository. It covers the technology stack, directory layout, component hierarchy, data flow, API surface, demo-mode architecture, design system, and testing strategy.

## Technology Stack

| Layer | Technology | Version / Notes |
|-------|-----------|-----------------|
| Framework | Next.js (App Router) | `next` — uses `app/` directory, Server Components, Route Handlers |
| UI Library | React | 19 (RC) — Server & Client Components |
| Language | TypeScript | Strict mode, path alias `@/` → `./` |
| Styling | Tailwind CSS | v4 — CSS-first config via `@theme` / `@utility` in `globals.css` |
| PostCSS | `@tailwindcss/postcss` | Configured in `postcss.config.mjs` |
| Linting | Biome | Configured in `biome.json` — replaces ESLint + Prettier |
| Auth | Supabase Auth | `@supabase/ssr` for cookie-based SSR sessions |
| Payments | Creem | Two packages: `creem` (core SDK — checkout, subscriptions, licenses, billing portal) + `@creem_io/nextjs` (Next.js adapter — `Webhook` handler, optional React components) |
| Database | Supabase (PostgreSQL) | Migrations in `supabase/migrations/` |
| Unit Tests | Vitest | `@testing-library/react` for component tests, `v8` coverage |
| E2E Tests | Playwright | Chromium only, auto-starts dev server |
| Components | Radix UI | Via `shadcn/ui` pattern (hand-copied components) |

## Directory Structure

```
├── docs/                          # Documentation
├── e2e/                           # Playwright E2E tests
│   ├── auth.spec.ts
│   ├── checkout.spec.ts
│   └── dashboard.spec.ts
├── public/                        # Static assets (images)
├── app/
│   ├── (public)/                  # Public marketing pages (no auth required)
│   │   ├── layout.tsx             # Public layout (navbar, footer)
│   │   ├── page.tsx               # Landing / hero page
│   │   └── pricing/page.tsx       # Pricing page
│   ├── (auth)/                    # Auth pages (redirects away if authenticated)
│   │   ├── layout.tsx             # Auth-specific layout (centered card)
│   │   ├── login/page.tsx
│   │   ├── signup/page.tsx
│   │   └── callback/route.ts      # OAuth callback handler
│   ├── (main)/                    # Protected routes (requires authentication)
│   │   ├── layout.tsx             # Dashboard shell (sidebar, topbar)
│   │   ├── dashboard/
│   │   │   ├── page.tsx           # Dashboard overview
│   │   │   ├── admin/page.tsx
│   │   │   ├── licenses/page.tsx
│   │   │   └── transactions/page.tsx
│   ├── api/                       # API Route Handlers
│   │   ├── billing-portal/route.ts
│   │   ├── checkout/
│   │   │   ├── route.ts
│   │   │   ├── validators.ts
│   │   │   └── success-sync/route.ts
│   │   ├── credits/
│   │   │   ├── route.ts
│   │   │   ├── helpers.ts
│   │   │   └── spend/route.ts
│   │   ├── discounts/
│   │   │   ├── route.ts
│   │   │   └── helpers.ts
│   │   ├── licenses/
│   │   │   ├── validators.ts
│   │   │   ├── activate/route.ts
│   │   │   ├── deactivate/route.ts
│   │   │   └── validate/route.ts
│   │   ├── subscriptions/
│   │   │   ├── validators.ts
│   │   │   ├── cancel/route.ts
│   │   │   ├── upgrade/route.ts
│   │   │   └── update-seats/route.ts
│   │   ├── transactions/
│   │   │   ├── route.ts
│   │   │   └── helpers.ts
│   │   └── webhooks/creem/
│   │       ├── route.ts
│   │       └── handlers.ts
│   ├── layout.tsx                 # Root layout (html, body, providers)
│   ├── globals.css                # Tailwind v4 theme + utilities
│   ├── robots.ts
│   └── sitemap.ts
├── components/                    # Shared UI components
│   ├── pricing-card.tsx
│   ├── subscription-card.tsx
│   ├── license-card.tsx
│   ├── credits-card.tsx
│   ├── transaction-list.tsx
│   ├── seat-manager.tsx
│   ├── cancel-dialog.tsx
│   ├── upgrade-dialog.tsx
│   ├── alert-banner.tsx
│   ├── checkout-sync.tsx
│   ├── discount-input.tsx
│   ├── oauth-buttons.tsx
│   ├── sign-out-button.tsx
│   └── ui/                        # shadcn/ui primitives
├── lib/
│   ├── creem.ts                   # Creem SDK client init
│   ├── email.ts                   # Email service (Resend)
│   ├── entitlements.ts            # Plan → feature mapping
│   ├── rate-limit.ts              # Rate limiter (Redis optional)
│   ├── demo/
│   │   ├── mode.ts                # isDemoMode()
│   │   ├── store.ts               # In-memory demo state
│   │   └── supabase-mock.ts       # Demo Supabase client
│   └── supabase/
│       ├── admin.ts               # Service-role admin client
│       ├── client.ts              # Browser client factory
│       ├── server.ts              # Server-component client
│       └── middleware.ts          # Session refresh + route guards
├── middleware.ts                   # Root middleware entry
├── supabase/                      # Supabase config + migrations
├── tests/                         # Vitest unit tests
│   ├── api/
│   ├── components/
│   └── lib/
├── .env.example
├── biome.json
├── next.config.ts
├── package.json
├── playwright.config.ts
├── postcss.config.mjs
├── tailwind.config.ts
├── tsconfig.json
└── vitest.config.ts
```

## Architecture Layers

### 1. Presentation Layer (React Components)

All UI lives under `components/`. Components are **Client Components** (with `"use client"`) that receive data as props from Server Components in `app/`.

**Neobrutalist Design System** — defined in `app/globals.css`:
- `@theme` block declares CSS custom properties for colours, radii, shadows.
- `@utility btn-primary` and `@utility btn-dark` define reusable button styles with `border-2 border-black`, hard box-shadow, and hover transform (`translate(-2px, -2px)`).
- All cards use `border-2 border-black shadow-[4px_4px_0px_#000]`.

### 2. Routing Layer (Next.js App Router)

| Route Group | Purpose |
|-------------|---------|
| `(public)/` | Landing page, pricing — public marketing pages, no auth required |
| `(auth)/` | Login, Signup, Callback — auth pages, middleware redirects authenticated users away |
| `(main)/` | Dashboard & protected pages — middleware redirects unauthenticated users to `/login` |
| `api/` | Route Handlers — REST-style JSON endpoints |

### 3. Middleware Layer

`middleware.ts` (project root) is the entry point. Matcher: `["/dashboard/:path*", "/login", "/signup"]`.

**Demo mode bypass**: When `isDemoMode()` returns `true`, middleware returns `NextResponse.next()` immediately — no Supabase calls are made.

**Normal mode**: Delegates to `updateSession()` in `lib/supabase/middleware.ts` which:
1. Creates a Supabase server client using request cookies.
2. Calls `supabase.auth.getUser()` to refresh the session.
3. Redirects unauthenticated users from `(main)/*` routes → `/login`.
4. Redirects authenticated users from `(auth)/*` routes → `/dashboard`.

### 4. API Layer (Route Handlers)

All API routes follow this pattern:
1. **Authenticate** — get user from Supabase session (or demo mock).
2. **Validate** — pure-function validators return `ValidationResult<T>`.
3. **Execute** — call Creem SDK or Supabase DB.
4. **Respond** — return JSON with appropriate status codes.

**Validation Architecture**: Each API domain has a `validators.ts` or `helpers.ts` with pure functions:
- `ValidationResult<T> = { valid: true; data: T } | { valid: false; error: string }`
- This pattern is shared across checkout, subscriptions, credits, licenses, and discounts.

### 5. Webhook Pipeline

`POST /api/webhooks/creem` (at `app/api/webhooks/creem/route.ts`) handles all payment lifecycle events:

```
Request → HMAC Verification → Event Routing → DB Upsert/Update → 200 OK
```

Key handler functions in `handlers.ts`:
- `extractUserId(metadata)` — reads `user_id` from webhook metadata
- `mapSubscriptionStatus(eventType)` — maps Creem event types to internal statuses
- `buildSubscriptionUpsert(payload)` — creates a full row for `checkout.completed`
- `buildSubscriptionUpdate(status, subscription)` — creates a partial update for lifecycle events

### 6. Data Layer

**Supabase PostgreSQL** with three client factories:
- `createSupabaseBrowser()` (`lib/supabase/client.ts`) — browser-side, uses anon key
- `createSupabaseServer()` (`lib/supabase/server.ts`) — server components, reads cookies from `next/headers`
- `getSupabaseAdmin()` (`lib/supabase/admin.ts`) — service-role key, bypasses RLS

**Schema** (tables referenced in code):
- `subscriptions` — user_id, creem_subscription_id, creem_product_id, product_name, status, current_period_end, cancel_at, seats
- `credits` / `credit_transactions` — balance tracking and spend history
- `licenses` — key, product_id, status, instance_name, instance_id
- `profiles` — user metadata

### 7. External Integrations

**Creem SDK** — two packages (installed via `bun add`) are used:

1. **`creem`** (core TypeScript SDK) — initialised in `lib/creem.ts`:
   - `getServerIdx(apiKey)` returns `1` for test keys (`creem_test_*`), `0` for production.
   - Singleton `creem` instance (from `new Creem(...)`) exported for use across all API routes.
   - Used for: `creem.checkouts.create()`, `creem.subscriptions.*`, `creem.licenses.*`, `creem.discounts.*`, `creem.transactions.*`, `creem.customers.*`.

2. **`@creem_io/nextjs`** (Next.js adapter) — used in the webhook route:
   - Provides the `Webhook` function used in `app/api/webhooks/creem/route.ts` for HMAC signature verification and event routing.
   - Also exports optional React components (`Checkout`, `CreemCheckout`, `CreemPortal`) not currently used in this boilerplate.

**Email** (`lib/email.ts`):
- Gracefully degrades — returns `{ success: true, skipped: true }` when `RESEND_API_KEY` is not set.

**Rate Limiting** (`lib/rate-limit.ts`):
- Returns `{ success: true }` when Redis is not configured.

### 8. Entitlements Engine

`lib/entitlements.ts` maps product names to feature sets:

| Plan | Features |
|------|----------|
| starter | analytics, support |
| pro | analytics, api, support, priority_support, custom_integrations, unlimited_projects |
| enterprise | all of pro + sso, unlimited_team |

- `getPlanFeatures(name)` is case-insensitive, extracts the first word (e.g., "Pro Plan" → "pro").
- `hasAccess(userId, feature)` queries the DB for an active subscription and checks the feature set.

## Demo Mode Architecture

Demo mode is the most architecturally significant pattern in the codebase. It allows the app to run fully without any external services.

### Detection

`isDemoMode()` in `lib/demo/mode.ts` checks if `NEXT_PUBLIC_SUPABASE_URL` is empty, equals `"https://your-project.supabase.co"`, or equals `"your-supabase-url"`.

### In-Memory Store

`lib/demo/store.ts` provides a singleton `DemoStore` attached to `globalThis.__demoStore`. It contains:
- `users: Map<string, DemoUser>` — seeded with `demo@saaskit.dev`
- `sessions: Map<string, DemoSession>`
- `subscriptions: Map<string, DemoSubscription>` — seeded with "Pro Plan" active
- `creditWallets: Map<string, DemoCreditWallet>` — seeded with balance of 50
- `creditTransactions: Map<string, DemoCreditTransaction>` — seeded with 3 transactions
- `licenses: Map<string, DemoLicense>` — seeded with one active license
- `webhookEvents`, `billingEvents` — empty Maps

### Supabase Mock

`lib/demo/supabase-mock.ts` exports `createDemoClient()` which returns an object matching the Supabase client shape:
- `auth.getUser()` always returns the demo user
- `auth.signInWithPassword()`, `auth.signUp()`, `auth.signOut()` return success
- `auth.signInWithOAuth()` returns `{ url: "/dashboard" }`
- `from(table)` returns a chainable query builder (`select`, `eq`, `order`, `limit`, `single`, `maybeSingle`, `insert`, `upsert`, `update`) backed by the store's Maps
- `rpc("spend_credits", params)` deducts from the credit wallet

### Middleware Bypass

In demo mode, `middleware.ts` skips all Supabase session checks and returns `NextResponse.next()`.

## Data Flow Diagrams

### Authentication Flow
```
User → /login → signInWithPassword() → Supabase Auth → Session Cookie → Redirect /dashboard
User → /login → OAuth Button → signInWithOAuth() → Supabase → /callback → Exchange Code → /dashboard
```

### Checkout Flow
```
User → PricingCard "Get Started" → POST /api/checkout { productId } → Creem SDK createCheckout()
→ Redirect to Creem Hosted Checkout → Payment → Webhook POST /api/webhooks/creem
→ buildSubscriptionUpsert() → DB upsert subscriptions → Redirect /dashboard?checkout=success
→ CheckoutSync component → POST /api/checkout/success-sync → Verify subscription
```

### Credit Spend Flow
```
POST /api/credits/spend { amount, reason } → validateSpendRequest() → Auth Check
→ DB: check balance → isUnlimited() check → Deduct balance → Insert credit_transaction → 200 OK
```

## Testing Strategy

### Unit Tests (Vitest)

Located in `tests/` mirroring the project structure. Configuration in `vitest.config.ts`:
- Environment: `node` (default), `jsdom` via `// @vitest-environment jsdom` pragma for component tests
- Path alias: `@/` → `./`
- Coverage: `v8` provider, `["text", "lcov", "html"]` reporters

**Test categories:**
- `tests/api/` — validator and helper function tests (pure functions, no mocking required)
- `tests/components/` — React component rendering tests using `@testing-library/react`
- `tests/lib/` — library function tests (creem client, demo store, email, entitlements, middleware config, rate limit, SEO)

### E2E Tests (Playwright)

Located in `e2e/`. Configuration in `playwright.config.ts`:
- Single project: Chromium
- Auto-starts dev server at `http://localhost:3000` when `BASE_URL` is not set
- `fullyParallel: true`, retries `2` on CI

**Test suites:**
- `auth.spec.ts` — login/signup form rendering, validation, navigation, error handling
- `checkout.spec.ts` — unauthenticated checkout redirect, authenticated checkout flow (skip without env vars)
- `dashboard.spec.ts` — unauthenticated redirect, authenticated dashboard content, sign out

## Environment Variables

Defined in `.env.example`:

| Variable | Required | Purpose |
|----------|----------|---------|
| `NEXT_PUBLIC_SUPABASE_URL` | Yes (or demo mode) | Supabase project URL |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Yes (or demo mode) | Supabase anon/public key |
| `SUPABASE_SERVICE_ROLE_KEY` | For admin operations | Supabase service role key |
| `CREEM_API_KEY` | For payments | Creem API key (`creem_test_*` or `creem_live_*`) |
| `CREEM_WEBHOOK_SECRET` | For webhooks | HMAC verification secret |
| `RESEND_API_KEY` | Optional | Email sending via Resend |
| `NEXT_PUBLIC_SITE_URL` | Optional | Base URL for SEO (defaults to Vercel URL) |

