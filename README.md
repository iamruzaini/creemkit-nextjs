# CreemKit — Next.js + Supabase + Creem

> **Live Demo:** Coming Soon | **Demo Mode:** Clone and run — works without any accounts

The most comprehensive SaaS boilerplate with Creem payments. Launch your paid SaaS in hours, not weeks.

**Auth + Payments + Subscriptions + License Keys + Credits + Discount Codes + Email Notifications + Rate Limiting + SEO** — everything you need to ship fast.

## Demo Mode

No accounts needed. Clone and run:

```bash
git clone https://github.com/iamruzaini/creemkit-nextjs.git my-saas
cd my-saas
bun install
bun dev
```

Open [http://localhost:3000]. Demo mode activates automatically when Supabase credentials are missing — all features work with in-memory data. No external services required.

### Demo Account Credentials

```
Email: demo@creemkit.dev
Password: demo1234
```

The demo account comes pre-seeded with:
- Active Pro Plan subscription ($49/month)
- 50 credits in wallet
- 1 active license key (DEMO-XXXX-YYYY-ZZZZ)
- Transaction history with sample data

## Stack

- **Next.js 16** — App Router, Server Components, React 19, TypeScript strict
- **Supabase** — Auth (email + OAuth), Postgres, Row Level Security
- **Creem** — Payments, subscriptions, webhooks, licenses, discounts, billing portal
- **Tailwind CSS 4** — Neo-brutalist design system
- **Drizzle ORM** — Type-safe database queries
- **Biome** — Linting and formatting
- **Resend** — Transactional email (welcome + payment confirmation)
- **Upstash** — Rate limiting on sensitive API routes
- **Vitest** — Unit tests (all importing from source)
- **Playwright** — E2E tests
- **Framer Motion** — Smooth animations

## Features

### Authentication
- Email/password signup and login
- Google and GitHub OAuth
- Protected routes via middleware
- Session management with Supabase SSR

### Payments & Subscriptions
- Creem hosted checkout with discount code support
- 3-tier pricing (Starter $19 / Pro $49 / Enterprise $149)
- Subscription upgrade/downgrade with proration
- Scheduled and immediate cancellation
- Seat-based pricing (add/remove team seats)
- Billing portal access

### Webhook Integration
- `checkout.completed` — subscription creation + license key delivery
- `subscription.active` / `subscription.paid` — renewal tracking
- `subscription.canceled` / `subscription.expired` — access revocation
- `subscription.trialing` / `subscription.paused` — status sync
- `subscription.past_due` / `subscription.update` — lifecycle management
- `refund.created` / `dispute.created` — billing event logging
- HMAC-SHA256 signature verification via `@creem_io/nextjs`
- Idempotent event processing (webhook_events table)

### License Keys
- Activate / validate / deactivate API
- Per-device instance tracking
- Dashboard license management page

### Credits Wallet
- Balance tracking with atomic Postgres operations (no race conditions)
- Earn credits on subscription activation/renewal
- Spend credits via API with audit log
- Unlimited credits sentinel for enterprise plans
- Full transaction history

### Discount Codes
- Create percentage or fixed-amount discounts
- Apply at checkout (integrated with pricing page)
- Duration control (once / forever / repeating)
- Product-scoped restrictions

### Admin Panel
- Subscription and license statistics
- Billing event monitoring (refunds, disputes)
- Discount code creation guide

### Email Notifications
- Welcome email on signup (via Resend)
- Payment confirmation on checkout
- Graceful no-op without `RESEND_API_KEY` (works in demo mode)

### SEO
- Auto-generated `sitemap.xml` and `robots.txt`
- Open Graph metadata
- Full metadata (OpenGraph, Twitter cards, keywords)

### Rate Limiting
- Sliding window rate limiting on sensitive API routes (Upstash)
- Protected routes: checkout, billing portal, credit spend, subscription mutations
- Graceful degradation without Redis (disabled in dev/demo)

### Additional
- Demo mode — full-featured, zero-config, pre-seeded with Pro subscription, credits, and license
- Transaction history page with pagination
- Alert banners for disputes and refunds
- Dynamic feature gating via entitlements system
- Auto-detect test/production Creem environment from API key prefix

## Architecture

```
app/
├── (auth)/
│   ├── login/page.tsx           # Email + OAuth login
│   ├── signup/page.tsx          # Email + OAuth signup
│   └── callback/route.ts        # OAuth callback
├── (public)/
│   ├── page.tsx                 # Landing page
│   └── pricing/page.tsx         # Pricing + discount input
├── (main)/dashboard/
│   ├── page.tsx                 # Main dashboard
│   ├── transactions/page.tsx    # Payment history
│   ├── licenses/page.tsx        # License management
│   └── admin/page.tsx           # Admin panel
├── api/
│   ├── checkout/route.ts        # Create checkout + discount codes
│   ├── billing-portal/route.ts  # Billing portal access
│   ├── webhooks/creem/
│   │   ├── route.ts             # Webhook handler via @creem_io/nextjs
│   │   └── handlers.ts          # Pure functions (testable)
│   ├── subscriptions/
│   │   ├── cancel/route.ts
│   │   ├── upgrade/route.ts
│   │   ├── update-seats/route.ts
│   │   └── validators.ts
│   ├── licenses/
│   │   ├── activate/route.ts
│   │   ├── validate/route.ts
│   │   ├── deactivate/route.ts
│   │   └── validators.ts
│   ├── discounts/
│   │   ├── route.ts             # Create + lookup
│   │   └── helpers.ts
│   ├── transactions/
│   │   ├── route.ts
│   │   └── helpers.ts
│   └── credits/
│       ├── route.ts             # Get balance
│       ├── spend/route.ts       # Atomic spend
│       └── helpers.ts
components/
├── pricing-card.tsx             # Plan card with checkout
├── pricing-section.tsx          # Cards + discount code input
├── subscription-card.tsx        # Status display
├── cancel-dialog.tsx            # Two-step cancel confirmation
├── upgrade-dialog.tsx           # Plan switching with proration
├── seat-manager.tsx             # Add/remove seats
├── credits-card.tsx             # Balance + recent activity
├── license-card.tsx             # Keys + activation
├── transaction-list.tsx         # Paginated payment history
├── alert-banner.tsx             # Refund/dispute alerts
├── oauth-buttons.tsx            # Google + GitHub
├── checkout-sync.tsx            # Post-checkout URL sync
└── sign-out-button.tsx
lib/
├── creem.ts                     # SDK client (auto-detect test/prod)
├── email.ts                     # Resend email functions
├── demo/
│   ├── mode.ts                  # isDemoMode() detection
│   └── store.ts                 # In-memory data store
└── supabase/
    ├── client.ts                # Browser client
    ├── server.ts                # Server client (SSR)
    ├── admin.ts                 # Service role (webhooks)
    └── middleware.ts            # Session refresh
middleware.ts                    # Route protection
supabase/migrations/             # Database migrations
tests/                           # Unit tests
e2e/                             # Playwright E2E tests
```

## Database Schema

| Table | Purpose |
|-------|---------|
| `subscriptions` | Creem subscription state (one per user) |
| `profiles` | User profiles synced from auth.users |
| `credits` | Credit wallet balance (one per user) |
| `credit_transactions` | Signed audit log for earn/spend |
| `licenses` | License keys with device activation |
| `webhook_events` | Idempotent event processing |
| `billing_events` | Refund and dispute tracking |

All tables have Row Level Security. Users can only read their own data. Service role (webhooks) bypasses RLS.

## Connecting Real Services

### 1. Configure environment

Create a `.env.local` file with the following variables:

```bash
# Supabase
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key

# Creem
CREEM_API_KEY=creem_test_xxx
CREEM_WEBHOOK_SECRET=whsec_xxx

# Product IDs (from Creem dashboard)
NEXT_PUBLIC_CREEM_STARTER_PRODUCT_ID=prod_xxx
NEXT_PUBLIC_CREEM_PRO_PRODUCT_ID=prod_xxx
NEXT_PUBLIC_CREEM_ENTERPRISE_PRODUCT_ID=prod_xxx

# App
NEXT_PUBLIC_APP_URL=http://localhost:3000
ADMIN_EMAIL=admin@example.com

# Email (Resend) — optional
RESEND_API_KEY=
RESEND_FROM_EMAIL=CreemKit <noreply@resend.dev>

# Rate Limiting (Upstash) — optional
UPSTASH_REDIS_REST_URL=
UPSTASH_REDIS_REST_TOKEN=

# SEO — optional
NEXT_PUBLIC_SITE_URL=https://your-app.vercel.app
```

### 2. Set up Supabase

1. Create a project at [supabase.com](https://supabase.com)
2. Get credentials from Project Settings > API Keys
3. Run migrations using Drizzle:
   ```bash
   bun run db:push
   ```
4. Enable OAuth providers (Authentication > Providers):
   - Google: add OAuth client from [Google Cloud Console](https://console.cloud.google.com/apis/credentials)
   - GitHub: add OAuth app from [GitHub Developer Settings](https://github.com/settings/developers)
5. Add redirect URL: `http://localhost:3000/callback`

### 3. Set up Creem

1. Create account at [creem.io](https://creem.io)
2. Enable Test Mode
3. Create API key (Developers > API & Webhooks)
4. Create 3 subscription products (Starter $19, Pro $49, Enterprise $149)
5. Copy product IDs to `.env.local`
6. Create webhook pointing to `https://your-app.vercel.app/api/webhooks/creem` (select all events)

### 4. Deploy to Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

Add all environment variables from `.env.local` to Vercel project settings.

## Environment Variables

| Variable | Description |
|----------|-------------|
| `NEXT_PUBLIC_SUPABASE_URL` | Supabase project URL (leave placeholder for demo mode) |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Supabase publishable key |
| `SUPABASE_SERVICE_ROLE_KEY` | Supabase secret key (server-only) |
| `CREEM_API_KEY` | Creem API key (`creem_test_` prefix auto-detects test mode) |
| `CREEM_WEBHOOK_SECRET` | Creem webhook signing secret |
| `NEXT_PUBLIC_APP_URL` | Your app URL |
| `NEXT_PUBLIC_CREEM_STARTER_PRODUCT_ID` | Starter plan product ID |
| `NEXT_PUBLIC_CREEM_PRO_PRODUCT_ID` | Pro plan product ID |
| `NEXT_PUBLIC_CREEM_ENTERPRISE_PRODUCT_ID` | Enterprise plan product ID |
| `ADMIN_EMAIL` | Email for admin panel access |
| `RESEND_API_KEY` | Resend API key for email (optional — emails skipped without this) |
| `RESEND_FROM_EMAIL` | From address for emails (default: `CreemKit <noreply@resend.dev>`) |
| `UPSTASH_REDIS_REST_URL` | Upstash Redis URL for rate limiting (optional — disabled without this) |
| `UPSTASH_REDIS_REST_TOKEN` | Upstash Redis token |
| `NEXT_PUBLIC_SITE_URL` | Site URL for SEO sitemap/robots (default: Vercel URL) |

## Testing

```bash
bun test              # Run unit tests
bun run test:watch    # Watch mode
bun run test:coverage # With coverage report
bun run e2e           # Playwright E2E tests
bun run check         # Full check (lint + typecheck + tests)
```

## Test Cards

For Creem test mode: `4242 4242 4242 4242` (any future expiry, any CVC).

## Why Creem?

- **Merchant of Record** — Creem handles all tax compliance in 190+ countries
- **3.9% + 30¢** — No monthly fees, no hidden costs
- **TypeScript SDK** — First-class developer experience
- **Hosted Checkout** — PCI compliant, no card data on your servers
- **License Keys** — Built-in for desktop/CLI apps
- **Billing Portal** — Customer self-service
- **Revenue Splits** — Automatic partner payouts

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) for development guidelines.

## License

MIT
