# Blueprint Requirements Specification

## Introduction

This document provides a complete functional and non-functional requirements specification for the **Next.js + Supabase + Creem Boilerplate**. It captures every capability present in the current repository so that an AI can reconstruct the project from scratch. The requirements are written in a testable, SHALL-style format.

## Glossary

- **Boilerplate**: The complete Next.js application as it exists in this repository.
- **Auth_Flow**: The login / signup / OAuth / callback pipeline built on Supabase Auth.
- **Creem_Integration**: Server-side SDK usage via two packages: `creem` (core TypeScript SDK for API calls — checkouts, subscriptions, licenses, billing portal) and `@creem_io/nextjs` (Next.js adapter providing `Webhook` handler for webhook routes, plus optional `Checkout`, `CreemCheckout`, and `CreemPortal` React components).
- **Demo_Mode**: An automatic fallback that replaces Supabase and Creem calls with in-memory mocks when the `NEXT_PUBLIC_SUPABASE_URL` environment variable is missing or contains the placeholder value `https://your-project.supabase.co`.
- **Neobrutalist_UI**: The visual design system characterised by thick borders (`border-2 border-black`), hard box-shadows (`4px 4px 0px #000`), bold colours, and high contrast.
- **Credits_Wallet**: A per-user integer balance that can be spent on metered actions.
- **License_Key**: A string credential issued via Creem that can be activated, validated, and deactivated against named instances.
- **Webhook_Pipeline**: The `POST /api/webhooks/creem` endpoint that verifies HMAC signatures and upserts subscription / transaction records.
- **Entitlements_Engine**: Server-side logic (`lib/entitlements.ts`) that maps a product name to a feature set and gates access.

## Functional Requirements

### FR-1  Email / Password Authentication

| # | Requirement |
|---|-------------|
| 1.1 | THE Auth_Flow SHALL render a **Sign In** page at `/login` with Email and Password fields and a submit button labelled "Sign In". |
| 1.2 | THE Auth_Flow SHALL render a **Sign Up** page at `/signup` with Email and Password fields and a submit button labelled "Sign Up". |
| 1.3 | WHEN a user submits valid credentials on `/login`, THE Auth_Flow SHALL call `supabase.auth.signInWithPassword` and redirect to `/dashboard`. |
| 1.4 | WHEN a user submits the signup form, THE Auth_Flow SHALL call `supabase.auth.signUp` and show a confirmation message or redirect to `/dashboard`. |
| 1.5 | THE Auth_Flow SHALL display inline error messages when Supabase returns an authentication error. |
| 1.6 | THE Auth_Flow SHALL provide a link on `/login` to navigate to `/signup` and vice-versa. |

### FR-2  OAuth Authentication

| # | Requirement |
|---|-------------|
| 2.1 | THE Auth_Flow SHALL render OAuth buttons (Google, GitHub) on both `/login` and `/signup` via the `OAuthButtons` component. |
| 2.2 | WHEN a user clicks an OAuth button, THE Auth_Flow SHALL call `supabase.auth.signInWithOAuth` with the correct `provider` and a redirect URL pointing to `/callback`. |
| 2.3 | THE `/callback` route handler SHALL exchange the auth code for a session and redirect the user to `/dashboard`. |

### FR-3  Session & Middleware

| # | Requirement |
|---|-------------|
| 3.1 | THE middleware SHALL intercept requests matching `/dashboard/:path*` (including any subscription or protected subpages), `/login`, and `/signup`. |
| 3.2 | WHEN an unauthenticated user accesses `/dashboard/*` or any protected/subscription page, THE middleware SHALL redirect to `/login`. |
| 3.3 | WHEN an authenticated user accesses `/login` or `/signup`, THE middleware SHALL redirect to `/dashboard`. |
| 3.4 | THE middleware SHALL refresh the Supabase session cookie on every matched request. |

### FR-4  Pricing Page

| # | Requirement |
|---|-------------|
| 4.1 | THE Boilerplate SHALL render a `/pricing` page listing at least three plan tiers using the `PricingCard` component. |
| 4.2 | Each `PricingCard` SHALL display the plan name, price, billing period, feature list, and a "Get Started" button. |
| 4.3 | WHEN a plan is marked `popular: true`, THE card SHALL display a "Most Popular" badge. |
| 4.4 | WHEN the user clicks "Get Started", THE component SHALL POST to `/api/checkout` with the `productId`. |
| 4.5 | IF the API returns `{ error: "Unauthorized" }`, THE component SHALL redirect the browser to `/login`. |
| 4.6 | IF the API returns a `url`, THE component SHALL redirect the browser to the Creem checkout URL. |

### FR-5  Checkout API

| # | Requirement |
|---|-------------|
| 5.1 | `POST /api/checkout` SHALL validate the request body using `validateCheckoutRequest`. |
| 5.2 | THE validator SHALL require a non-empty string `productId` and optionally accept a string `discountCode`. |
| 5.3 | IF the user is not authenticated, THE endpoint SHALL return 401 `{ error: "Unauthorized" }`. |
| 5.4 | THE endpoint SHALL call the Creem SDK to create a checkout session and return `{ url }`. |

### FR-6  Webhook Processing

| # | Requirement |
|---|-------------|
| 6.1 | `POST /api/webhooks/creem` SHALL verify the request HMAC signature before processing. |
| 6.2 | On `checkout.completed`, THE handler SHALL upsert a row in the `subscriptions` table using `buildSubscriptionUpsert`. |
| 6.3 | On subscription lifecycle events (`subscription.active`, `subscription.canceled`, `subscription.past_due`, etc.), THE handler SHALL update the subscription status using `mapSubscriptionStatus` and `buildSubscriptionUpdate`. |
| 6.4 | `extractUserId` SHALL read `user_id` from webhook `metadata` and return `undefined` when absent. |

### FR-7  Dashboard

| # | Requirement |
|---|-------------|
| 7.1 | THE Dashboard layout SHALL be a protected page at `/dashboard` (and all sub-routes like subscriptions) showing the user's email, subscription status, and entitlements. Middleware redirects unauthenticated users to `/login`. |
| 7.2 | THE `SubscriptionCard` component SHALL show "No active subscription." with a "View Plans" link when `subscription` is `null`. |
| 7.3 | WHEN a subscription exists, THE card SHALL display the plan name, status badge, next billing date, and a "Manage Billing" button. |
| 7.4 | THE `CheckoutSync` component SHALL detect `?checkout=success` query params and sync the subscription record client-side. |

### FR-8  Subscription Management

| # | Requirement |
|---|-------------|
| 8.1 | `POST /api/subscriptions/cancel` SHALL validate via `validateCancelRequest`, defaulting `mode` to `"scheduled"`. |
| 8.2 | `POST /api/subscriptions/upgrade` SHALL validate via `validateUpgradeRequest`, requiring `subscriptionId` and `newProductId`. |
| 8.3 | `POST /api/subscriptions/update-seats` SHALL validate via `validateSeatUpdate`, requiring a positive integer `units`. |
| 8.4 | `POST /api/billing-portal` SHALL return a Creem billing portal URL for the authenticated user's customer ID. |

### FR-9  Credits System

| # | Requirement |
|---|-------------|
| 9.1 | `GET /api/credits` SHALL return the authenticated user's credit balance. |
| 9.2 | `POST /api/credits/spend` SHALL validate via `validateSpendRequest`, requiring a positive `amount` and non-empty `reason`. |
| 9.3 | `getCreditAllocation` SHALL return 100 for "starter", 500 for "pro", and -1 (unlimited) for "enterprise". |
| 9.4 | `isUnlimited` SHALL return `true` only when the balance equals `CREDIT_UNLIMITED` (-1). |

### FR-10  License Key Management

| # | Requirement |
|---|-------------|
| 10.1 | `POST /api/licenses/activate` SHALL validate via `validateActivateRequest`, requiring `key` and `instanceName`. |
| 10.2 | `POST /api/licenses/validate` SHALL validate via `validateValidateRequest`, requiring `key` and `instanceId`. |
| 10.3 | `POST /api/licenses/deactivate` SHALL validate via `validateDeactivateRequest`, requiring `key` and `instanceId`. |

### FR-11  Discounts

| # | Requirement |
|---|-------------|
| 11.1 | `validateDiscountCreate` SHALL accept percentage (1-100) and fixed (>0) discount types with a non-empty `appliesToProducts` array. |
| 11.2 | `buildCheckoutWithDiscount` SHALL include `discountCode` only when provided, and always include `metadata.user_id`. |

### FR-12  Entitlements

| # | Requirement |
|---|-------------|
| 12.1 | `PLAN_FEATURES` SHALL define feature sets for "starter" (`analytics`, `support`), "pro" (adds `api`, `priority_support`, `custom_integrations`), and "enterprise" (adds `sso`, `unlimited_team`). |
| 12.2 | `getPlanFeatures` SHALL be case-insensitive and extract the plan key from strings like "Pro Plan". |
| 12.3 | `hasAccess(userId, feature)` SHALL query the `subscriptions` table for an active subscription and check the plan's feature set. |

### FR-13  Transaction Formatting

| # | Requirement |
|---|-------------|
| 13.1 | `formatTransaction` SHALL divide `amount` by 100 and format using `Intl.NumberFormat` with currency from `CURRENCY_MAP` (usd, eur, gbp), defaulting to USD. |

### FR-14  Demo Mode

| # | Requirement |
|---|-------------|
| 14.1 | `isDemoMode()` SHALL return `true` when `NEXT_PUBLIC_SUPABASE_URL` is empty or equals `https://your-project.supabase.co`. |
| 14.2 | In demo mode, all Supabase client calls SHALL be intercepted by `supabase-mock.ts` returning data from `store.ts`. |
| 14.3 | `getDemoStore()` SHALL return a singleton in-memory store with seeded users, subscriptions, credit wallets, and licenses. |
| 14.4 | `resetDemoStore()` SHALL clear and re-seed the store. |

### FR-15  SEO

| # | Requirement |
|---|-------------|
| 15.1 | `sitemap()` SHALL return 4 entries: `/`, `/pricing`, `/login`, `/signup`. |
| 15.2 | `robots()` SHALL disallow `/api/` and `/dashboard/` and include a sitemap URL. |

## Non-Functional Requirements

### NFR-1  Technology Stack

| # | Requirement |
|---|-------------|
| N1.1 | THE Boilerplate SHALL use **Next.js** with the App Router (no Pages Router). |
| N1.2 | THE Boilerplate SHALL use **React 19** with Server Components. |
| N1.3 | THE Boilerplate SHALL use **TypeScript** in strict mode. |
| N1.4 | THE Boilerplate SHALL use **Tailwind CSS v4** with CSS-first configuration (`@theme`, `@utility`). |
| N1.5 | THE Boilerplate SHALL use **Biome** for linting and formatting (not ESLint/Prettier). |
| N1.6 | THE Boilerplate SHALL use **PostCSS** with `@tailwindcss/postcss` plugin. |

### NFR-2  Testing

| # | Requirement |
|---|-------------|
| N2.1 | Unit tests SHALL use **Vitest** with `@testing-library/react` for component tests. |
| N2.2 | E2E tests SHALL use **Playwright** targeting Chromium. |
| N2.3 | Vitest SHALL exclude `e2e/` and `node_modules/` directories. |
| N2.4 | Playwright SHALL auto-start `bun run dev` when the base URL is `http://localhost:3000`. |

### NFR-3  Design System

| # | Requirement |
|---|-------------|
| N3.1 | All interactive components SHALL follow the Neobrutalist style: `border-2 border-black`, `shadow-[4px_4px_0px_#000]`, bold accent colours. |
| N3.2 | The global CSS SHALL define `@utility` classes `btn-primary` and `btn-dark` with hover transforms. |

### NFR-4  Rate Limiting

| # | Requirement |
|---|-------------|
| N4.1 | `checkRateLimit(identifier)` SHALL return `{ success: true }` when no Redis is configured (graceful degradation). |

### NFR-5  Email

| # | Requirement |
|---|-------------|
| N5.1 | Email functions (`sendWelcomeEmail`, `sendPaymentConfirmation`) SHALL be no-ops returning `{ success: true, skipped: true }` when `RESEND_API_KEY` is not set. |

