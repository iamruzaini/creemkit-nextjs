# Blueprint Implementation Plan

## Overview

This implementation plan breaks the **Next.js + Supabase + Creem Boilerplate** into discrete, ordered tasks. Each task lists the files it produces, the commands to run, and the requirement IDs it satisfies (cross-referencing `blueprint-requirements.md`). An AI agent should execute the tasks sequentially; checkpoints gate forward progress.

> **Convention:** `[x]` = completed in the current repo, `[ ]` = to be done when reconstructing.

## Tasks

- [/] 1. Initialise project skeleton and tooling
  - [x] 1.1 Create the Next.js project with TypeScript with App router
    - [x] Ensure `tsconfig.json` has `"paths": { "@/*": ["./*"] }` and `strict: true`
    - _Requirements: N1.1, N1.2, N1.3_
    - _Files: `tsconfig.json`, `next.config.ts`_

  - [x] 1.2 Install and configure Tailwind CSS v4 (CSS-first)
    - [x] Install `@tailwindcss/postcss` as a dev dependency
    - [x] Create `postcss.config.mjs` exporting `@tailwindcss/postcss` plugin
    - [x] Delete any generated `tailwind.config.ts` (v4 uses CSS-only config)
    - [x] Create `app/globals.css` with `@import "tailwindcss"`, `@theme` block defining custom properties (colours, radii, shadows), and `@utility` blocks for `btn-primary` and `btn-dark`
    - _Requirements: N1.4, N1.6, N3.1, N3.2_
    - _Files: `postcss.config.mjs`, `app/globals.css`_

  - [x] 1.3 Configure Biome for linting / formatting
    - [x] Install `@biomejs/biome` as a dev dependency using `bun add`
    - [x] Create `biome.json` — enable `recommended` rules, 100-char line width, double-quote style, tab indentation
    - [x] Add `"check"` and `"format"` scripts to `package.json`
    - _Requirements: N1.5_
    - _Files: `biome.json`, `package.json` (scripts section)_

  - [x] 1.4 Create `.env.example` with all environment variables
    - [x] Document every variable: Supabase URL / keys, Creem API key / webhook secret, product IDs, Resend key, Upstash Redis, site URL, admin email
    - [x] Leave placeholder values that trigger Demo Mode
    - _Requirements: FR-14.1_
    - _Files: `.env.example`_

  - [x] 1.5 Create `components.json` for shadcn/ui
    - [x] Configure aliases (`@/components`, `@/lib/utils`), style `default`, Tailwind CSS path, RSC enabled
    - _Files: `components.json`_

- [x] 2. Checkpoint — verify build compiles with `bun run build`

- [x] 3. Set up Supabase client infrastructure
  - [x] 3.1 Install Supabase packages
    - [x] `bun add @supabase/supabase-js @supabase/ssr`
    - _Requirements: FR-1, FR-2, FR-3_

  - [x] 3.2 Create Supabase client factories
    - [x] `lib/supabase/client.ts` — `createSupabaseBrowser()` using `createBrowserClient`
    - [x] `lib/supabase/server.ts` — `createSupabaseServer()` using `createServerClient` + `cookies()` from `next/headers`
    - [x] `lib/supabase/admin.ts` — `getSupabaseAdmin()` using service-role key
    - [x] `lib/supabase/middleware.ts` — `updateSession()` with cookie get/set, auth redirect logic
    - _Requirements: FR-3.1, FR-3.2, FR-3.3, FR-3.4_
    - _Files: `lib/supabase/client.ts`, `lib/supabase/server.ts`, `lib/supabase/admin.ts`, `lib/supabase/middleware.ts`_

  - [x] 3.3 Create root middleware
    - [x] `middleware.ts` — import `isDemoMode`, bypass Supabase when true; otherwise delegate to `updateSession()`
    - [x] Export `config.matcher` = `["/dashboard/:path*", "/login", "/signup"]`
    - [x] **CRITICAL:** Ensure the middleware logic explicitly states: Dashboard & protected pages (including subscription pages) — middleware redirects unauthenticated users to `/login`.
    - _Requirements: FR-3.1, FR-3.2, FR-3.3, FR-14.1_
    - _Files: `middleware.ts`_

- [x] 4. Implement Demo Mode layer
  - [x] 4.1 Create demo mode detection
    - [x] `lib/demo/mode.ts` — `isDemoMode()` returns `true` when env is placeholder
    - _Requirements: FR-14.1_
    - _Files: `lib/demo/mode.ts`_

  - [x] 4.2 Create in-memory demo store
    - [x] `lib/demo/store.ts` — `DemoStore` interface with Maps for users, sessions, subscriptions, creditWallets, creditTransactions, licenses, webhookEvents, billingEvents
    - [x] Attach to `globalThis.__demoStore` as singleton
    - [x] Seed with demo user `demo@saaskit.dev`, active Pro subscription, 50 credits, sample transactions, one active license
    - [x] Export `getDemoStore()` and `resetDemoStore()`
    - _Requirements: FR-14.2, FR-14.3, FR-14.4_
    - _Files: `lib/demo/store.ts`_

  - [x] 4.3 Create Supabase mock client
    - [x] `lib/demo/supabase-mock.ts` — `createDemoClient()` returns chainable query builder reading/writing the demo store
    - [x] Mock `auth.getUser()`, `auth.signInWithPassword()`, `auth.signUp()`, `auth.signOut()`, `auth.signInWithOAuth()`
    - [x] Mock `from(table).select().eq().order().limit().single().maybeSingle()` and `insert/upsert/update`
    - [x] Mock `rpc("spend_credits", params)`
    - _Requirements: FR-14.2_
    - _Files: `lib/demo/supabase-mock.ts`_

- [x] 5. Checkpoint — verify `bun dev` starts in demo mode without any env vars

- [x] 6. Build authentication pages
  - [x] 6.1 Create login page
    - [x] `app/(auth)/login/page.tsx` — form with Email, Password, "Sign In" button; calls `supabase.auth.signInWithPassword`; shows error messages; link to `/signup`
    - _Requirements: FR-1.1, FR-1.3, FR-1.5, FR-1.6_

  - [x] 6.2 Create signup page
    - [x] `app/(auth)/signup/page.tsx` — form with Email, Password, "Sign Up" button; calls `supabase.auth.signUp`; shows confirmation or redirects; link to `/login`
    - _Requirements: FR-1.2, FR-1.4, FR-1.5, FR-1.6_

  - [x] 6.3 Create OAuth buttons component
    - [x] `components/oauth-buttons.tsx` — Google + GitHub buttons calling `supabase.auth.signInWithOAuth`
    - _Requirements: FR-2.1, FR-2.2_

  - [x] 6.4 Create auth callback route
    - [x] `app/(auth)/callback/route.ts` — exchange code for session, redirect to `/dashboard`
    - _Requirements: FR-2.3_

  - [x] 6.5 Create sign-out button component
    - [x] `components/sign-out-button.tsx` — calls `supabase.auth.signOut()`, redirects to `/`
    - _Requirements: FR-1 (logout)_

- [x] 7. Checkpoint — verify login/signup/OAuth/signout cycle in demo mode

- [x] 8. Build landing page and pricing
  - [x] 8.1 Create root layout
    - [x] `app/layout.tsx` — HTML skeleton, import `globals.css`, metadata, `<body>` with `{children}`
    - _Files: `app/layout.tsx`_

  - [x] 8.2 Create landing page
    - [x] `app/(public)/page.tsx` — Hero section ("Launch your SaaS in hours, not weeks"), feature cards (Auth, Payments, Database, Webhooks, Billing Portal), tech stack badges (Next.js 16, React 19, TypeScript, Supabase, Creem), CTA buttons
    - [x] Apply Neobrutalist styling throughout
    - _Requirements: N3.1_

  - [x] 8.3 Create pricing page
    - [x] `app/(public)/pricing/page.tsx` — renders three `PricingCard` components (Starter $9, Pro $29 popular, Enterprise $99)
    - _Requirements: FR-4.1, FR-4.2, FR-4.3_

  - [x] 8.4 Create PricingCard component
    - [x] `components/pricing-card.tsx` — displays name, price, period, features, "Get Started" button; POSTs to `/api/checkout`; handles Unauthorized redirect
    - _Requirements: FR-4.4, FR-4.5, FR-4.6_

- [x] 9. Checkpoint — verify landing and pricing pages render correctly

- [x] 10. Implement Creem payment integration
  - [x] 10.1 Install Creem packages
    - [x] `bun add creem @creem_io/nextjs`
    - [x] `creem` — core TypeScript SDK for API calls (checkouts, subscriptions, licenses, discounts, transactions, customers)
    - [x] `@creem_io/nextjs` — Next.js adapter providing `Webhook` handler (used in webhook route for HMAC verification) and optional React components (`Checkout`, `CreemCheckout`, `CreemPortal`)
    - _Requirements: FR-5_

  - [x] 10.2 Create Creem client wrapper
    - [x] `lib/creem.ts` — `import { Creem } from "creem"` (core SDK); `getServerIdx(apiKey)` returns 1 for test keys; export singleton `creem` instance
    - _Requirements: FR-5.4_
    - _Files: `lib/creem.ts`_

  - [x] 10.3 Create checkout API route
    - [x] `app/api/checkout/route.ts` — POST handler: auth check, validate body, create Creem checkout session, return `{ url }`
    - [x] `app/api/checkout/validators.ts` — `validateCheckoutRequest` requiring `productId` string, optional `discountCode`
    - _Requirements: FR-5.1, FR-5.2, FR-5.3, FR-5.4_

  - [x] 10.4 Create checkout success-sync route
    - [x] `app/api/checkout/success-sync/route.ts` — verifies subscription exists after redirect
    - _Requirements: FR-7.4_

  - [x] 10.5 Create CheckoutSync component
    - [x] `components/checkout-sync.tsx` — detects `?checkout=success` and POSTs to success-sync
    - _Requirements: FR-7.4_

- [x] 11. Implement webhook pipeline
  - [x] 11.1 Create webhook route handler
    - [x] `app/api/webhooks/creem/route.ts` — uses `import { Webhook } from "@creem_io/nextjs"` (Next.js adapter) for HMAC signature verification and event routing
    - _Requirements: FR-6.1_

  - [x] 11.2 Create webhook handler functions
    - [x] `app/api/webhooks/creem/handlers.ts` — export `extractUserId`, `mapSubscriptionStatus`, `buildSubscriptionUpsert`, `buildSubscriptionUpdate`
    - _Requirements: FR-6.2, FR-6.3, FR-6.4_

- [x] 12. Build dashboard
  - [x] 12.1 Create dashboard layout
    - [x] `app/(main)/dashboard/layout.tsx` — sidebar/header with user info, navigation links
    - [x] Dashboard & protected pages (including subscription pages) — middleware redirects unauthenticated users to `/login`. Ensure this layout cannot be viewed by unauthorized users.
    - _Requirements: FR-7.1_

  - [x] 12.2 Create dashboard page
    - [x] `app/(main)/dashboard/page.tsx` — fetch user + subscription from Supabase, render email, SubscriptionCard, feature entitlements
    - _Requirements: FR-7.1, FR-7.2, FR-7.3_

  - [x] 12.3 Create SubscriptionCard component
    - [x] `components/subscription-card.tsx` — shows "No active subscription." or plan details with status badge, billing date, "Manage Billing" button
    - _Requirements: FR-7.2, FR-7.3_

  - [x] 12.4 Create dashboard sub-pages
    - [x] `app/(main)/dashboard/admin/page.tsx` — admin panel (gated by `ADMIN_EMAIL`)
    - [x] `app/(main)/dashboard/licenses/page.tsx` — license key management
    - [x] `app/(main)/dashboard/transactions/page.tsx` — transaction history

- [x] 13. Checkpoint — verify full checkout → webhook → dashboard flow in demo mode

- [x] 14. Implement subscription management API routes
  - [x] 14.1 Cancel subscription
    - [x] `app/api/subscriptions/cancel/route.ts` + `validators.ts` — `validateCancelRequest` defaults mode to `"scheduled"`
    - _Requirements: FR-8.1_

  - [x] 14.2 Upgrade subscription
    - [x] `app/api/subscriptions/upgrade/route.ts` — `validateUpgradeRequest` requiring `subscriptionId` + `newProductId`
    - _Requirements: FR-8.2_

  - [x] 14.3 Update seats
    - [x] `app/api/subscriptions/update-seats/route.ts` — `validateSeatUpdate` requiring positive integer `units`
    - _Requirements: FR-8.3_

  - [x] 14.4 Billing portal
    - [x] `app/api/billing-portal/route.ts` — returns Creem portal URL
    - _Requirements: FR-8.4_

  - [x] 14.5 Create subscription management UI components
    - [x] `components/cancel-dialog.tsx`, `components/upgrade-dialog.tsx`, `components/seat-manager.tsx`

- [x] 15. Implement credits system
  - [x] 15.1 Credits API routes
    - [x] `app/api/credits/route.ts` — GET returns balance
    - [x] `app/api/credits/spend/route.ts` — POST validates and deducts
    - [x] `app/api/credits/helpers.ts` — `getCreditAllocation`, `isUnlimited`, `CREDIT_UNLIMITED`
    - _Requirements: FR-9.1, FR-9.2, FR-9.3, FR-9.4_

  - [x] 15.2 Create CreditsCard component
    - [x] `components/credits-card.tsx` — displays balance, spend button
    - _Requirements: FR-9_

- [x] 16. Implement license key management
  - [x] 16.1 License API routes
    - [x] `app/api/licenses/activate/route.ts`, `validate/route.ts`, `deactivate/route.ts`
    - [x] `app/api/licenses/validators.ts` — `validateActivateRequest`, `validateValidateRequest`, `validateDeactivateRequest`
    - _Requirements: FR-10.1, FR-10.2, FR-10.3_

  - [x] 16.2 Create LicenseCard component
    - [x] `components/license-card.tsx`

- [x] 17. Implement discounts and transactions
  - [x] 17.1 Discounts API
    - [x] `app/api/discounts/route.ts` + `validators.ts` — `validateDiscountCreate`, `buildCheckoutWithDiscount`
    - _Requirements: FR-11.1, FR-11.2_

  - [x] 17.2 Transactions API
    - [x] `app/api/transactions/route.ts` + `helpers.ts` — `formatTransaction` with `CURRENCY_MAP`
    - _Requirements: FR-13.1_

  - [x] 17.3 Create remaining UI
    - [x] `components/discount-input.tsx`, `components/transaction-list.tsx`, `components/alert-banner.tsx`

- [x] 18. Implement utility libraries
  - [x] 18.1 Entitlements engine
    - [x] `lib/entitlements.ts` — `PLAN_FEATURES`, `getPlanFeatures`, `planHasFeature`, `hasAccess`
    - _Requirements: FR-12.1, FR-12.2, FR-12.3_

  - [x] 18.2 Email service
    - [x] `lib/email.ts` — `sendWelcomeEmail`, `sendPaymentConfirmation`; no-op when `RESEND_API_KEY` is unset
    - _Requirements: N5.1_

  - [x] 18.3 Rate limiter
    - [x] `lib/rate-limit.ts` — `checkRateLimit`; no-op when Redis is unconfigured
    - _Requirements: N4.1_

- [x] 19. Implement SEO
  - [x] 19.1 Sitemap
    - [x] `app/sitemap.ts` — 4 entries: `/`, `/pricing`, `/login`, `/signup`
    - _Requirements: FR-15.1_

  - [x] 19.2 Robots
    - [x] `app/robots.ts` — disallow `/api/`, `/dashboard/`; include sitemap URL
    - _Requirements: FR-15.2_

- [x] 20. Create database schema
  - [x] 20.1 Initial schema
    - [x] `supabase/schema.sql` — `subscriptions` table with RLS, `webhook_events` table, indexes, `handle_updated_at` trigger
    - _Requirements: FR-6, FR-7_

  - [x] 20.2 Expansion migration
    - [x] `supabase/migrations/002_expand.sql` — `profiles`, `credits`, `credit_transactions`, `licenses`, `billing_events` tables; expanded subscription status CHECK; `spend_credits` RPC function; RLS policies; triggers
    - _Requirements: FR-9, FR-10, FR-12_

- [x] 21. Checkpoint — full manual smoke test of all features in demo mode

- [ ] 22. Install shadcn/ui primitives
  - [ ] 22.1 Initialize shadcn/ui
    - [ ] Run `bunx --bun shadcn@latest init -y` to set up `components.json`, configure CSS variables, and create the `cn()` utility (using `clsx` + `tailwind-merge`) at `lib/utils.ts`.
    - *Reference context:* `@[.ai/shadcn/shadcn-llm-full.md]` and online docs per `@[.ai/shadcn/shadcn-llm.md]`
  - [ ] 22.2 Install required UI components
    - [ ] Run `bunx --bun shadcn@latest add button card dialog input label`
    - [ ] Components will be installed into `components/ui/` for full codebase ownership and customization.

- [ ] 23. Write unit tests (Vitest)
  - [ ] 23.1 Configure Vitest
    - [ ] `vitest.config.ts` — node environment, path alias `@/` → `./`, v8 coverage, exclude `e2e/`
    - _Requirements: N2.1, N2.3_

  - [ ] 23.2 API tests
    - [ ] `tests/api/checkout-validators.test.ts` — `validateCheckoutRequest` edge cases
    - [ ] `tests/api/credit-helpers.test.ts` — `getCreditAllocation`, `isUnlimited`
    - [ ] `tests/api/discount-validators.test.ts` — percentage/fixed/invalid discount validation
    - [ ] `tests/api/license-validators.test.ts` — activate/validate/deactivate validators
    - [ ] `tests/api/subscription-validators.test.ts` — cancel/upgrade/seat-update validators
    - [ ] `tests/api/transaction-helpers.test.ts` — `formatTransaction` with USD/EUR/GBP/unknown
    - [ ] `tests/api/webhook-extract-user.test.ts` — `extractUserId` from metadata
    - [ ] `tests/api/webhook-handler.test.ts` — `mapSubscriptionStatus`, `buildSubscriptionUpsert`, `buildSubscriptionUpdate`

  - [ ] 23.3 Library tests
    - [ ] `tests/lib/creem-client.test.ts` — `getServerIdx` for test/live keys
    - [ ] `tests/lib/demo-store.test.ts` — `isDemoMode`, `getDemoStore`, `resetDemoStore`, credit spend
    - [ ] `tests/lib/email.test.ts` — no-op behaviour without API key
    - [ ] `tests/lib/entitlements.test.ts` — `PLAN_FEATURES`, `getPlanFeatures`, `planHasFeature`, `hasAccess` (mocked)
    - [ ] `tests/lib/middleware.test.ts` — `config.matcher` entries
    - [ ] `tests/lib/rate-limit.test.ts` — graceful no-op
    - [ ] `tests/lib/seo.test.ts` — sitemap entries, robots disallow rules

  - [ ] 23.4 Component tests
    - [ ] `tests/components/pricing-card.test.tsx` — rendering, checkout POST, loading state, unauthorized redirect
    - [ ] `tests/components/sign-out-button.test.tsx` — renders button
    - [ ] `tests/components/subscription-card.test.tsx` — null state, active state, cancelled state, billing date, manage button

- [ ] 24. Write E2E tests (Playwright)
  - [ ] 24.1 Configure Playwright
    - [ ] `playwright.config.ts` — Chromium only, auto-start dev server, fullyParallel, html reporter
    - _Requirements: N2.2, N2.4_

  - [ ] 24.2 Landing page tests
    - [ ] `e2e/landing.spec.ts` — hero elements, feature cards, tech stack, navigation to pricing/signup/login

  - [ ] 24.3 Pricing page tests
    - [ ] `e2e/pricing.spec.ts` — three plans rendered, prices, features, Most Popular badge, subscribe buttons

  - [ ] 24.4 Auth tests
    - [ ] `e2e/auth.spec.ts` — login form rendering, validation, invalid credentials error, signup form, navigation between login/signup

  - [ ] 24.5 Dashboard tests
    - [ ] `e2e/dashboard.spec.ts` — unauthenticated redirect, authenticated content (requires env vars)

  - [ ] 24.6 Checkout tests
    - [ ] `e2e/checkout.spec.ts` — unauthenticated subscribe triggers redirect, authenticated subscribe redirects to Creem

  - [ ] 24.7 Demo mode tests
    - [ ] `e2e/demo-mode.spec.ts` — landing loads, pricing shows plans, checkout buttons work, demo checkout redirects to dashboard

  - [ ] 24.8 Webhook tests
    - [ ] `e2e/webhook.spec.ts` — rejects without signature, rejects invalid signature, accepts valid HMAC

- [ ] 25. Checkpoint — all Vitest tests pass (`bun test`), Playwright tests pass (`bunx playwright test`)

- [ ] 26. Final verification
  - [ ] 26.1 Run `bun run build` — zero errors
  - [ ] 26.2 Run `bunx biome check .` — zero lint/format issues
  - [ ] 26.3 Run `bun test` — all unit tests green
  - [ ] 26.4 Run `bunx playwright test` — all E2E tests green
  - [ ] 26.5 Manually verify demo mode works end-to-end without any environment variables

## Notes

- Tasks reference requirement IDs from `blueprint-requirements.md` (e.g., `FR-5.2`, `N1.4`).
- Every checkpoint is a hard gate — do not proceed until the check passes.
- Demo Mode is the primary development workflow; real Supabase/Creem credentials are only needed for production or the authenticated E2E test suites.
- The Neobrutalist design system (`border-2 border-black`, `shadow-[4px_4px_0px_#000]`, `btn-primary`/`btn-dark` utilities) must be applied consistently across all UI components.
- Tailwind CSS v4 uses CSS-first configuration — there is **no** `tailwind.config.js/ts` file.
- Biome replaces ESLint + Prettier — there are **no** `.eslintrc` or `.prettierrc` files.
