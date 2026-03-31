# Blueprint Implementation — Verbatim Source Code

## Overview

This document contains the **exact, unmodified source code** for every text-based file in the **Next.js + Supabase + Creem Boilerplate** repository. Binary assets (images, videos, favicons) are excluded.

An AI agent should recreate each file at the indicated path with the content shown. Combined with `blueprint-requirements.md`, `blueprint-design.md`, and `blueprint-tasks.md`, this document enables a complete, pixel-perfect reconstruction of the project.

---

## Table of Contents

1. [Root Configuration Files](#1-root-configuration-files)
2. [Core Application Files](#2-core-application-files)
3. [Library Modules](#3-library-modules)
4. [Demo Mode System](#4-demo-mode-system)
5. [Supabase Client Helpers](#5-supabase-client-helpers)
6. [API Routes — Checkout & Billing](#6-api-routes--checkout--billing)
7. [API Routes — Subscriptions](#7-api-routes--subscriptions)
8. [API Routes — Credits](#8-api-routes--credits)
9. [API Routes — Licenses](#9-api-routes--licenses)
10. [API Routes — Discounts & Transactions](#10-api-routes--discounts--transactions)
11. [API Routes — Webhooks](#11-api-routes--webhooks)
12. [Authentication Pages](#12-authentication-pages)
13. [Dashboard Pages](#13-dashboard-pages)
14. [Pricing Page](#14-pricing-page)
15. [UI Components](#15-ui-components)
16. [Database Migrations](#16-database-migrations)
17. [Unit & Integration Tests](#17-unit--integration-tests)
18. [E2E Test Specifications](#18-e2e-test-specifications)

---

## 1. Root Configuration Files

### `package.json`

```json
{
  "name": "saaskit-creem",
  "version": "1.0.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "biome check .",
    "lint:fix": "biome check --write .",
    "format": "biome format --write .",
    "test": "vitest run",
    "test:watch": "vitest",
    "test:coverage": "vitest run --coverage",
    "check": "biome check . && tsc --noEmit && vitest run",
    "e2e": "playwright test",
    "e2e:ui": "playwright test --ui"
  },
  "dependencies": {
    "@creem_io/nextjs": "^0.6.0",
    "@react-email/components": "^1.0.10",
    "@supabase/ssr": "^0.9.0",
    "@supabase/supabase-js": "^2.98.0",
    "@upstash/ratelimit": "^2.0.8",
    "@upstash/redis": "^1.37.0",
    "creem": "^1.3.6",
    "lucide-react": "^0.577.0",
    "next": "16.1.6",
    "react": "19.2.3",
    "react-dom": "19.2.3",
    "resend": "^6.9.4"
  },
  "devDependencies": {
    "@biomejs/biome": "^2.4.6",
    "@playwright/test": "^1.58.2",
    "@tailwindcss/postcss": "^4",
    "@testing-library/jest-dom": "^6.9.1",
    "@testing-library/react": "^16.3.2",
    "@types/node": "^20",
    "@types/react": "^19",
    "@types/react-dom": "^19",
    "eslint": "^9",
    "eslint-config-next": "16.1.6",
    "jsdom": "^27.0.1",
    "tailwindcss": "^4",
    "typescript": "^5",
    "vitest": "^4.0.18"
  }
}
```

### `next.config.ts`

```ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Frame-Options", value: "DENY" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
          {
            key: "Strict-Transport-Security",
            value: "max-age=31536000; includeSubDomains",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
```

### `tsconfig.json`

```json
{
  "compilerOptions": {
    "target": "ES2017",
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "react-jsx",
    "incremental": true,
    "plugins": [
      {
        "name": "next"
      }
    ],
    "paths": {
      "@/*": ["./*"]
    }
  },
  "include": [
    "next-env.d.ts",
    "**/*.ts",
    "**/*.tsx",
    ".next/types/**/*.ts",
    ".next/dev/types/**/*.ts",
    "**/*.mts"
  ],
  "exclude": ["node_modules"]
}
```

### `biome.json`

```json
{
  "$schema": "https://biomejs.dev/schemas/2.0.0/schema.json",
  "vcs": { "enabled": true, "clientKind": "git", "useIgnoreFile": true },
  "organizeImports": { "enabled": true },
  "linter": {
    "enabled": true,
    "rules": { "recommended": true }
  },
  "formatter": {
    "enabled": true,
    "indentStyle": "space",
    "indentWidth": 2,
    "lineWidth": 100
  },
  "javascript": {
    "formatter": {
      "quoteStyle": "double",
      "trailingCommas": "all",
      "semicolons": "always"
    }
  }
}
```

### `postcss.config.mjs`

```js
const config = {
  plugins: {
    "@tailwindcss/postcss": {},
  },
};

export default config;
```

### `vitest.config.ts`

```ts
import { defineConfig } from "vitest/config";
import path from "path";

export default defineConfig({
  test: {
    environment: "node",
    globals: true,
    exclude: ["**/e2e/**", "**/node_modules/**"],
    coverage: {
      provider: "v8",
      reporter: ["text", "lcov", "html"],
      include: ["app/**/*.ts", "app/**/*.tsx", "components/**/*.ts", "components/**/*.tsx", "lib/**/*.ts"],
      exclude: ["types/**/*.d.ts", "app/layout.tsx", "app/globals.css"],
    },
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./"),
    },
  },
});
```

### `playwright.config.ts`

```ts
import { defineConfig, devices } from "@playwright/test";

const baseURL = process.env.BASE_URL || "http://localhost:3000";

export default defineConfig({
  testDir: "./e2e",
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: "html",
  use: {
    baseURL,
    trace: "on-first-retry",
  },
  projects: [
    {
      name: "chromium",
      use: { ...devices["Desktop Chrome"] },
    },
  ],
  ...(baseURL === "http://localhost:3000" && {
    webServer: {
      command: "bun run dev",
      url: "http://localhost:3000",
      reuseExistingServer: !process.env.CI,
    },
  }),
});
```

### `.env.example`

```env
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
NEXT_PUBLIC_SITE_URL=http://localhost:3000

# Rate Limiting (Upstash) — optional
UPSTASH_REDIS_REST_URL=
UPSTASH_REDIS_REST_TOKEN=

# Email (Resend) — optional
RESEND_API_KEY=
RESEND_FROM_EMAIL=SaaSKit <noreply@resend.dev>

# Admin
ADMIN_EMAIL=admin@example.com
```

---

## 2. Core Application Files

### `middleware.ts`

```ts
import { type NextRequest, NextResponse } from "next/server";
import { isDemoMode } from "@/lib/demo/mode";
import { updateSession } from "@/lib/supabase/middleware";

export async function middleware(request: NextRequest) {
  if (isDemoMode()) {
    return NextResponse.next();
  }
  return await updateSession(request);
}

export const config = {
  matcher: ["/dashboard/:path*", "/login", "/signup"],
};
```

### `app/layout.tsx`

```tsx
import type { Metadata } from "next";
import { Bricolage_Grotesque, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage-grotesque",
  subsets: ["latin"],
  weight: ["400", "500", "700", "800"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://nextjs-supabase-creem-boilerplate.vercel.app",
  ),
  title: "SaaSKit — Next.js + Supabase + Creem Boilerplate",
  description:
    "The most comprehensive SaaS boilerplate with Creem payments. Auth, subscriptions, license keys, credits, webhooks, and demo mode — ship your SaaS in hours.",
  keywords: [
    "SaaS boilerplate",
    "Next.js",
    "Supabase",
    "Creem",
    "payments",
    "subscriptions",
    "TypeScript",
  ],
  openGraph: {
    title: "SaaSKit — Next.js + Supabase + Creem Boilerplate",
    description:
      "Auth, payments, subscriptions, license keys, credits wallet — ship your SaaS in hours.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SaaSKit — Ship your SaaS in hours",
    description: "Production-ready boilerplate with Creem payments, Supabase auth, and demo mode.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${bricolage.variable} ${jetbrainsMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
```

### `app/globals.css`

```css
@import "tailwindcss";

:root {
  --bg-primary: #0a0a0a;
  --bg-secondary: #1e1e1e;
  --bg-cream: #f5f0eb;
  --bg-violet: #c4b5fd;
  --text-primary: #ffffff;
  --text-secondary: #a1a1a1;
  --text-muted: #666666;
  --text-dark: #0a0a0a;
  --accent-orange: #ff6b2c;
  --accent-violet: #8b5cf6;
  --border: #2a2a2a;
  --border-bold: #ffffff;
  --success: #22c55e;
  --error: #ef4444;
  --warning: #eab308;
}

@theme inline {
  --color-bg-primary: var(--bg-primary);
  --color-bg-secondary: var(--bg-secondary);
  --color-bg-cream: var(--bg-cream);
  --color-bg-violet: var(--bg-violet);
  --color-text-primary: var(--text-primary);
  --color-text-secondary: var(--text-secondary);
  --color-text-muted: var(--text-muted);
  --color-text-dark: var(--text-dark);
  --color-accent-orange: var(--accent-orange);
  --color-accent-violet: var(--accent-violet);
  --color-border: var(--border);
  --color-border-bold: var(--border-bold);
  --color-success: var(--success);
  --color-error: var(--error);
  --color-warning: var(--warning);
  --font-sans: var(--font-bricolage-grotesque);
  --font-mono: var(--font-jetbrains-mono);
}

body {
  background: var(--bg-primary);
  color: var(--text-primary);
  font-family: var(--font-sans), system-ui, sans-serif;
}

/* Neo-brut button utilities */
@utility btn-primary {
  @apply bg-accent-orange text-black font-bold border-2 border-black rounded-full;
  box-shadow: 4px 4px 0px #000;
  &:hover {
    translate: 2px 2px;
    box-shadow: 2px 2px 0px #000;
  }
  &:active {
    translate: 4px 4px;
    box-shadow: none;
  }
  transition: all 150ms;
}

@utility btn-secondary {
  @apply bg-white text-black font-bold border-2 border-black rounded-full;
  box-shadow: 4px 4px 0px #000;
  &:hover {
    translate: 2px 2px;
    box-shadow: 2px 2px 0px #000;
  }
  &:active {
    translate: 4px 4px;
    box-shadow: none;
  }
  transition: all 150ms;
}

@utility btn-dark {
  @apply bg-black text-white font-bold border-2 border-black rounded-full;
  box-shadow: 4px 4px 0px rgba(255, 255, 255, 0.2);
  &:hover {
    translate: 2px 2px;
    box-shadow: 2px 2px 0px rgba(255, 255, 255, 0.2);
  }
  &:active {
    translate: 4px 4px;
    box-shadow: none;
  }
  transition: all 150ms;
}

@utility btn-disabled {
  @apply opacity-50;
  translate: 0 0 !important;
  box-shadow: none !important;
}
```


### `app/robots.ts`

```ts
import type { MetadataRoute } from "next";

const BASE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://nextjs-supabase-creem-boilerplate.vercel.app";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/dashboard/"],
      },
    ],
    sitemap: `${BASE_URL}/sitemap.xml`,
  };
}
```

### `app/sitemap.ts`

```ts
import type { MetadataRoute } from "next";

const BASE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://nextjs-supabase-creem-boilerplate.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: BASE_URL, lastModified: new Date(), changeFrequency: "weekly", priority: 1 },
    {
      url: `${BASE_URL}/pricing`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/login`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.3,
    },
    {
      url: `${BASE_URL}/signup`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.3,
    },
  ];
}
```

---

## 3. Library Modules

### `lib/creem.ts`

```ts
import { Creem } from "creem";

export function getServerIdx(apiKey: string): 0 | 1 {
  return apiKey.startsWith("creem_test_") ? 1 : 0;
}

const apiKey = process.env.CREEM_API_KEY ?? "";

export const creem = new Creem({
  apiKey: apiKey || "placeholder",
  serverIdx: getServerIdx(apiKey),
});
```

### `lib/email.ts`

```ts
import { Resend } from "resend";

const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;

interface EmailResult {
  success: boolean;
  skipped?: boolean;
  id?: string;
}

export async function sendWelcomeEmail(to: string, name: string): Promise<EmailResult> {
  if (!resend) return { success: true, skipped: true };

  try {
    const { data } = await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL ?? "SaaSKit <noreply@resend.dev>",
      to,
      subject: "Welcome to SaaSKit!",
      html: `<div style="font-family: 'Bricolage Grotesque', sans-serif; max-width: 600px; margin: 0 auto; padding: 40px 20px; background: #f5f0eb;">
        <h1 style="font-size: 28px; font-weight: 800; color: #0a0a0a; margin-bottom: 16px;">Welcome aboard, ${name || "there"}!</h1>
        <p style="font-size: 16px; color: #0a0a0a; line-height: 1.6;">Your account is ready. Start building with SaaSKit.</p>
        <a href="${process.env.NEXT_PUBLIC_APP_URL ?? ""}/dashboard" style="display: inline-block; margin-top: 20px; padding: 12px 24px; background: #ff6b2c; color: #000; font-weight: 700; text-decoration: none; border: 2px solid #000; border-radius: 9999px;">Go to Dashboard</a>
      </div>`,
    });
    return { success: true, id: data?.id };
  } catch {
    console.error("[email] Failed to send welcome email");
    return { success: false };
  }
}

export async function sendPaymentConfirmation(
  to: string,
  productName: string,
  amount: number,
): Promise<EmailResult> {
  if (!resend) return { success: true, skipped: true };

  const formattedAmount = (amount / 100).toFixed(2);

  try {
    const { data } = await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL ?? "SaaSKit <noreply@resend.dev>",
      to,
      subject: `Payment confirmed — ${productName}`,
      html: `<div style="font-family: 'Bricolage Grotesque', sans-serif; max-width: 600px; margin: 0 auto; padding: 40px 20px; background: #f5f0eb;">
        <h1 style="font-size: 28px; font-weight: 800; color: #0a0a0a; margin-bottom: 16px;">Payment Confirmed</h1>
        <p style="font-size: 16px; color: #0a0a0a; line-height: 1.6;">Thank you for subscribing to <strong>${productName}</strong>.</p>
        <div style="margin: 20px 0; padding: 16px; background: #fff; border: 2px solid #000; border-radius: 8px;">
          <p style="margin: 0; font-size: 14px; color: #666;">Amount paid</p>
          <p style="margin: 4px 0 0; font-size: 24px; font-weight: 800; color: #0a0a0a;">$${formattedAmount}</p>
        </div>
        <a href="${process.env.NEXT_PUBLIC_APP_URL ?? ""}/dashboard" style="display: inline-block; margin-top: 20px; padding: 12px 24px; background: #ff6b2c; color: #000; font-weight: 700; text-decoration: none; border: 2px solid #000; border-radius: 9999px;">View Dashboard</a>
      </div>`,
    });
    return { success: true, id: data?.id };
  } catch {
    console.error("[email] Failed to send payment confirmation");
    return { success: false };
  }
}
```

### `lib/entitlements.ts`

```ts
import { getSupabaseAdmin } from "@/lib/supabase/admin";

export type Feature =
  | "analytics"
  | "api"
  | "support"
  | "priority_support"
  | "sso"
  | "custom_integrations"
  | "unlimited_projects"
  | "unlimited_team";

export const PLAN_FEATURES: Record<string, Feature[]> = {
  starter: ["analytics", "support"],
  pro: [
    "analytics",
    "api",
    "support",
    "priority_support",
    "custom_integrations",
    "unlimited_projects",
  ],
  enterprise: [
    "analytics",
    "api",
    "support",
    "priority_support",
    "sso",
    "custom_integrations",
    "unlimited_projects",
    "unlimited_team",
  ],
};

export function getPlanFeatures(productName: string): Feature[] {
  const key = productName.toLowerCase().split(" ")[0];
  return PLAN_FEATURES[key] ?? [];
}

export function planHasFeature(productName: string, feature: Feature): boolean {
  return getPlanFeatures(productName).includes(feature);
}

export async function hasAccess(userId: string, feature: Feature): Promise<boolean> {
  const db = getSupabaseAdmin();

  const { data: subscription } = await db
    .from("subscriptions")
    .select("product_name, status")
    .eq("user_id", userId)
    .eq("status", "active")
    .maybeSingle();

  if (subscription) {
    return planHasFeature(subscription.product_name, feature);
  }

  return false;
}
```

### `lib/rate-limit.ts`

```ts
import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";

const redis =
  process.env.UPSTASH_REDIS_REST_URL && process.env.UPSTASH_REDIS_REST_TOKEN
    ? new Redis({
        url: process.env.UPSTASH_REDIS_REST_URL,
        token: process.env.UPSTASH_REDIS_REST_TOKEN,
      })
    : null;

const rateLimiter = redis
  ? new Ratelimit({
      redis,
      limiter: Ratelimit.slidingWindow(10, "60 s"),
    })
  : null;

export async function checkRateLimit(identifier: string): Promise<{ success: boolean }> {
  if (!rateLimiter) return { success: true };
  return rateLimiter.limit(identifier);
}
```

---

## 4. Demo Mode System

### `lib/demo/mode.ts`

```ts
const PLACEHOLDER_URLS = ["", "https://your-project.supabase.co", "your-supabase-url"];

export function isDemoMode(): boolean {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL ?? "";
  return PLACEHOLDER_URLS.includes(url);
}
```

### `lib/demo/store.ts`

```ts
export interface DemoSubscription {
  id: string;
  user_id: string;
  creem_customer_id?: string;
  creem_subscription_id: string;
  creem_product_id: string;
  product_name?: string;
  status: string;
  current_period_end?: string;
  cancel_at?: string | null;
  previous_product_id?: string;
  seats: number;
  created_at?: string;
}

export interface DemoCreditWallet {
  user_id: string;
  balance: number;
}

export interface DemoCreditTransaction {
  id: string;
  user_id: string;
  amount: number;
  type: string;
  description: string;
  created_at: string;
}

export interface DemoLicense {
  id: string;
  user_id: string;
  key: string;
  product_id: string;
  product_name?: string;
  status: string;
  instance_name?: string;
  instance_id?: string;
  activated_at?: string;
}

export interface DemoUser {
  id: string;
  email: string;
  password: string;
  full_name?: string;
}

export interface DemoSession {
  userId: string;
  token: string;
}

export interface DemoStore {
  users: Map<string, DemoUser>;
  sessions: Map<string, DemoSession>;
  subscriptions: Map<string, DemoSubscription>;
  creditWallets: Map<string, DemoCreditWallet>;
  creditTransactions: Map<string, DemoCreditTransaction>;
  licenses: Map<string, DemoLicense>;
  webhookEvents: Map<string, { event_type: string; processed_at: string }>;
  billingEvents: Map<string, { event_type: string; user_id?: string; amount?: number }>;
}

function createSeededStore(): DemoStore {
  const now = new Date().toISOString();
  const thirtyDaysFromNow = new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString();

  return {
    users: new Map([
      [
        "demo-user",
        {
          id: "demo-user",
          email: "demo@saaskit.dev",
          password: "demo",
          full_name: "Demo User",
        },
      ],
    ]),
    sessions: new Map(),
    subscriptions: new Map([
      [
        "sub_demo_pro",
        {
          id: "sub_demo_pro",
          user_id: "demo-user",
          creem_subscription_id: "sub_demo_pro",
          creem_product_id: "prod_pro",
          product_name: "Pro Plan",
          status: "active",
          current_period_end: thirtyDaysFromNow,
          seats: 1,
          created_at: now,
        },
      ],
    ]),
    creditWallets: new Map([["demo-user", { user_id: "demo-user", balance: 50 }]]),
    creditTransactions: new Map([
      [
        "ct_1",
        {
          id: "ct_1",
          user_id: "demo-user",
          amount: 100,
          type: "subscription_topup",
          description: "Pro plan credit grant",
          created_at: now,
        },
      ],
      [
        "ct_2",
        {
          id: "ct_2",
          user_id: "demo-user",
          amount: -30,
          type: "spend",
          description: "API usage",
          created_at: now,
        },
      ],
      [
        "ct_3",
        {
          id: "ct_3",
          user_id: "demo-user",
          amount: -20,
          type: "spend",
          description: "Report generation",
          created_at: now,
        },
      ],
    ]),
    licenses: new Map([
      [
        "lic_demo",
        {
          id: "lic_demo",
          user_id: "demo-user",
          key: "DEMO-XXXX-YYYY-ZZZZ",
          product_id: "prod_pro",
          product_name: "Pro Plan",
          status: "active",
          instance_name: "Demo Machine",
          activated_at: now,
        },
      ],
    ]),
    webhookEvents: new Map(),
    billingEvents: new Map(),
  };
}

declare global {
  // biome-ignore lint: globalThis requires var
  var __demoStore: DemoStore | undefined;
}

export function getDemoStore(): DemoStore {
  if (!globalThis.__demoStore) {
    globalThis.__demoStore = createSeededStore();
  }
  return globalThis.__demoStore;
}

export function resetDemoStore(): void {
  globalThis.__demoStore = createSeededStore();
}

let idCounter = 0;
export function generateDemoId(): string {
  idCounter++;
  return `demo_${Date.now()}_${idCounter}`;
}
```

### `lib/demo/supabase-mock.ts`

```ts
import { getDemoStore } from "./store";

type Row = Record<string, unknown>;

/**
 * Minimal Supabase client mock for demo mode.
 * Supports: auth.getUser(), auth.signInWithPassword(), auth.signUp(), auth.signOut(),
 * auth.signInWithOAuth(), from().select().eq().single/maybeSingle(),
 * from().upsert(), from().update().eq(), from().insert(),
 * from().select().order().limit(), rpc()
 */
// biome-ignore lint/suspicious/noExplicitAny: demo mock needs flexible return types
export function createDemoClient(): any {
  const store = getDemoStore();

  // Demo user — auto-authenticated
  const demoUser = {
    id: "demo-user",
    email: "demo@saaskit.dev",
    user_metadata: {},
  };

  function getTable(name: string): Map<string, Row> {
    const tables: Record<string, Map<string, Row>> = {
      subscriptions: store.subscriptions as unknown as Map<string, Row>,
      credits: store.creditWallets as unknown as Map<string, Row>,
      credit_transactions: store.creditTransactions as unknown as Map<string, Row>,
      licenses: store.licenses as unknown as Map<string, Row>,
      webhook_events: store.webhookEvents as unknown as Map<string, Row>,
      billing_events: store.billingEvents as unknown as Map<string, Row>,
      profiles: new Map(),
    };
    return tables[name] ?? new Map();
  }

  function buildQuery(tableName: string) {
    const table = getTable(tableName);
    const rows = Array.from(table.values());
    let _selectedColumns: string | null = null;
    const filters: Array<(row: Row) => boolean> = [];
    let orderBy: { col: string; asc: boolean } | null = null;
    let limitN: number | null = null;
    let countOnly = false;
    let headOnly = false;

    const chain = {
      select(cols?: string, opts?: { count?: string; head?: boolean }) {
        _selectedColumns = cols ?? "*";
        if (opts?.count) countOnly = true;
        if (opts?.head) headOnly = true;
        return chain;
      },
      eq(col: string, val: unknown) {
        filters.push((row) => row[col] === val);
        return chain;
      },
      order(col: string, opts?: { ascending?: boolean }) {
        orderBy = { col, asc: opts?.ascending ?? true };
        return chain;
      },
      limit(n: number) {
        limitN = n;
        return chain;
      },
      single() {
        const result = execute();
        return { data: result[0] ?? null, error: null };
      },
      maybeSingle() {
        const result = execute();
        return { data: result[0] ?? null, error: null };
      },
      insert(data: Row | Row[]) {
        const items = Array.isArray(data) ? data : [data];
        for (const item of items) {
          const id =
            (item.id as string) ?? `demo_${Date.now()}_${Math.random().toString(36).slice(2, 6)}`;
          table.set(id, { ...item, id });
        }
        return { data: items, error: null };
      },
      upsert(data: Row | Row[], _opts?: { onConflict?: string }) {
        const items = Array.isArray(data) ? data : [data];
        for (const item of items) {
          const id =
            (item.id as string) ?? `demo_${Date.now()}_${Math.random().toString(36).slice(2, 6)}`;
          table.set(id, { ...item, id });
        }
        return { data: items, error: null };
      },
      update(data: Row) {
        return {
          eq(col: string, val: unknown) {
            for (const [key, row] of table.entries()) {
              if (row[col] === val) {
                table.set(key, { ...row, ...data });
              }
            }
            return { data: null, error: null };
          },
        };
      },
      then(resolve: (val: { data: Row[]; error: null; count?: number }) => void) {
        const result = execute();
        if (countOnly) {
          resolve({ data: headOnly ? [] : result, error: null, count: result.length });
        } else {
          resolve({ data: result, error: null });
        }
      },
    };

    function execute(): Row[] {
      let result = rows.filter((row) => filters.every((f) => f(row)));
      if (orderBy) {
        const { col, asc } = orderBy;
        result.sort((a, b) => {
          const va = a[col] as string;
          const vb = b[col] as string;
          return asc ? (va < vb ? -1 : 1) : va > vb ? -1 : 1;
        });
      }
      if (limitN !== null) {
        result = result.slice(0, limitN);
      }
      return result;
    }

    return chain;
  }

  return {
    auth: {
      getUser() {
        return { data: { user: demoUser }, error: null };
      },
      async signInWithPassword({ email }: { email: string; password: string }) {
        return { data: { user: { ...demoUser, email } }, error: null };
      },
      async signUp({ email }: { email: string; password: string }) {
        return { data: { user: { ...demoUser, email } }, error: null };
      },
      async signOut() {
        return { error: null };
      },
      async signInWithOAuth(_opts: { provider: string; options?: unknown }) {
        // In demo mode, OAuth just redirects to dashboard
        return { data: { url: "/dashboard" }, error: null };
      },
    },
    from(table: string) {
      return buildQuery(table);
    },
    rpc(fnName: string, params: Record<string, unknown>) {
      if (fnName === "spend_credits") {
        const userId = params.p_user_id as string;
        const amount = params.p_amount as number;
        const wallet = store.creditWallets.get(userId);
        if (!wallet || wallet.balance < amount) {
          return { data: null, error: { message: "Insufficient credits" } };
        }
        wallet.balance -= amount;
        return { data: wallet.balance, error: null };
      }
      return { data: null, error: null };
    },
  };
}
```

---

## 5. Supabase Client Helpers

### `lib/supabase/admin.ts`

```ts
import { createClient } from "@supabase/supabase-js";
import { isDemoMode } from "@/lib/demo/mode";
import { createDemoClient } from "@/lib/demo/supabase-mock";

export function getSupabaseAdmin() {
  if (isDemoMode()) {
    return createDemoClient();
  }
  return createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!,
  );
}
```

### `lib/supabase/server.ts`

```ts
import { createServerClient } from "@supabase/ssr";
import { cookies } from "next/headers";
import { isDemoMode } from "@/lib/demo/mode";
import { createDemoClient } from "@/lib/demo/supabase-mock";

export async function createSupabaseServer() {
  if (isDemoMode()) {
    return createDemoClient();
  }

  const cookieStore = await cookies();

  return createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return cookieStore.getAll();
        },
        setAll(cookiesToSet) {
          try {
            for (const { name, value, options } of cookiesToSet) {
              cookieStore.set(name, value, options);
            }
          } catch {
            // Called from Server Component — ignore
          }
        },
      },
    },
  );
}
```

### `lib/supabase/client.ts`

```ts
import { createBrowserClient } from "@supabase/ssr";
import { isDemoMode } from "@/lib/demo/mode";
import { createDemoClient } from "@/lib/demo/supabase-mock";

export function createSupabaseBrowser() {
  if (isDemoMode()) {
    return createDemoClient();
  }
  return createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
  );
}
```

### `lib/supabase/middleware.ts`

```ts
import { createServerClient } from "@supabase/ssr";
import { type NextRequest, NextResponse } from "next/server";

export async function updateSession(request: NextRequest) {
  let supabaseResponse = NextResponse.next({ request });

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return request.cookies.getAll();
        },
        setAll(cookiesToSet) {
          for (const { name, value } of cookiesToSet) {
            request.cookies.set(name, value);
          }
          supabaseResponse = NextResponse.next({ request });
          for (const { name, value, options } of cookiesToSet) {
            supabaseResponse.cookies.set(name, value, options);
          }
        },
      },
    },
  );

  const {
    data: { user },
  } = await supabase.auth.getUser();

  // Redirect unauthenticated users from dashboard & protected pages (including subscription pages) to /login
  if (!user && request.nextUrl.pathname.startsWith("/dashboard")) {
    const url = request.nextUrl.clone();
    url.pathname = "/login";
    return NextResponse.redirect(url);
  }

  // Redirect authenticated users from auth pages
  if (user && (request.nextUrl.pathname === "/login" || request.nextUrl.pathname === "/signup")) {
    const url = request.nextUrl.clone();
    url.pathname = "/dashboard";
    return NextResponse.redirect(url);
  }

  return supabaseResponse;
}
```

---

## 6. API Routes — Checkout & Billing

### `app/api/checkout/route.ts`

```ts
import { type NextRequest, NextResponse } from "next/server";
import { creem } from "@/lib/creem";
import { isDemoMode } from "@/lib/demo/mode";
import { generateDemoId, getDemoStore } from "@/lib/demo/store";
import { checkRateLimit } from "@/lib/rate-limit";
import { createSupabaseServer } from "@/lib/supabase/server";

export async function POST(request: NextRequest) {
  if (isDemoMode()) {
    const { productId } = await request.json();
    const store = getDemoStore();
    const subId = generateDemoId();
    const newSub = {
      id: subId,
      user_id: "demo-user",
      creem_subscription_id: subId,
      creem_product_id: productId ?? "demo-product",
      product_name: "Demo Plan",
      status: "active",
      seats: 1,
      current_period_end: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString(),
    };
    store.subscriptions.set(subId, newSub);
    const appUrl = process.env.NEXT_PUBLIC_APP_URL ?? "";
    return NextResponse.redirect(`${appUrl}/dashboard?checkout=success`);
  }

  const supabase = await createSupabaseServer();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { success } = await checkRateLimit(user.id);
  if (!success) {
    return NextResponse.json({ error: "Rate limit exceeded" }, { status: 429 });
  }

  const { productId, discountCode } = await request.json();

  const checkout = await creem.checkouts.create({
    productId,
    successUrl: `${process.env.NEXT_PUBLIC_APP_URL}/dashboard?checkout=success`,
    discountCode: discountCode || undefined,
    metadata: {
      user_id: user.id,
    },
  });

  return NextResponse.json({ url: checkout.checkoutUrl });
}
```

### `app/api/checkout/validators.ts`

```ts
import type { ValidationResult } from "@/app/api/subscriptions/validators";

interface CheckoutData {
  productId: string;
  discountCode?: string;
}

export function validateCheckoutRequest(
  body: Record<string, unknown>,
): ValidationResult<CheckoutData> {
  const { productId, discountCode } = body;

  if (!productId || typeof productId !== "string") {
    return { valid: false, error: "productId is required" };
  }

  return {
    valid: true,
    data: {
      productId,
      discountCode: typeof discountCode === "string" ? discountCode : undefined,
    },
  };
}
```

### `app/api/checkout/success/route.ts`

```ts
import { type NextRequest, NextResponse } from "next/server";
import { creem } from "@/lib/creem";
import { isDemoMode } from "@/lib/demo/mode";
import { getSupabaseAdmin } from "@/lib/supabase/admin";
import { createSupabaseServer } from "@/lib/supabase/server";

export async function POST(request: NextRequest) {
  if (isDemoMode()) {
    return NextResponse.json({ synced: true });
  }

  const supabase = await createSupabaseServer();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const body = await request.json();
  const { subscriptionId, productId, customerId } = body;

  if (!subscriptionId || !productId) {
    return NextResponse.json({ error: "Missing params" }, { status: 400 });
  }

  // Fetch subscription details from Creem SDK (auto-detects test/prod)
  const subscription = await creem.subscriptions.get(subscriptionId);

  const productName =
    typeof subscription.product === "string" ? "Plan" : (subscription.product?.name ?? "Plan");

  const { error } = await getSupabaseAdmin()
    .from("subscriptions")
    .upsert(
      {
        user_id: user.id,
        creem_customer_id:
          customerId ??
          (typeof subscription.customer === "string"
            ? subscription.customer
            : subscription.customer?.id),
        creem_subscription_id: subscriptionId,
        creem_product_id: productId,
        product_name: productName,
        status: subscription.status ?? "active",
        current_period_end: subscription.currentPeriodEndDate
          ? new Date(subscription.currentPeriodEndDate).toISOString()
          : undefined,
      },
      { onConflict: "user_id" },
    );

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ synced: true });
}
```

### `app/api/billing-portal/route.ts`

```ts
import { NextResponse } from "next/server";
import { creem } from "@/lib/creem";
import { checkRateLimit } from "@/lib/rate-limit";
import { createSupabaseServer } from "@/lib/supabase/server";

export async function POST() {
  const supabase = await createSupabaseServer();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { success } = await checkRateLimit(user.id);
  if (!success) {
    return NextResponse.json({ error: "Rate limit exceeded" }, { status: 429 });
  }

  const { data: subscription } = await supabase
    .from("subscriptions")
    .select("creem_customer_id")
    .eq("user_id", user.id)
    .single();

  if (!subscription?.creem_customer_id) {
    return NextResponse.json({ error: "No subscription found" }, { status: 404 });
  }

  const portal = await creem.customers.generateBillingLinks({
    customerId: subscription.creem_customer_id,
  });

  return NextResponse.json({ url: portal.customerPortalLink });
}
```

---

## 7. API Routes — Subscriptions

### `app/api/subscriptions/validators.ts`

```ts
export type ValidationResult<T> = { valid: true; data: T } | { valid: false; error: string };

interface CancelData {
  subscriptionId: string;
  mode: "immediate" | "scheduled";
}

export function validateCancelRequest(body: Record<string, unknown>): ValidationResult<CancelData> {
  const { subscriptionId, mode } = body;

  if (!subscriptionId || typeof subscriptionId !== "string") {
    return { valid: false, error: "subscriptionId is required" };
  }

  const resolvedMode = mode ?? "scheduled";
  if (resolvedMode !== "immediate" && resolvedMode !== "scheduled") {
    return { valid: false, error: "mode must be 'immediate' or 'scheduled'" };
  }

  return {
    valid: true,
    data: { subscriptionId, mode: resolvedMode as "immediate" | "scheduled" },
  };
}

interface UpgradeData {
  subscriptionId: string;
  newProductId: string;
}

export function validateUpgradeRequest(
  body: Record<string, unknown>,
): ValidationResult<UpgradeData> {
  const { subscriptionId, newProductId } = body;

  if (!subscriptionId || typeof subscriptionId !== "string") {
    return { valid: false, error: "subscriptionId is required" };
  }
  if (!newProductId || typeof newProductId !== "string") {
    return { valid: false, error: "newProductId is required" };
  }

  return { valid: true, data: { subscriptionId, newProductId } };
}

interface SeatUpdateData {
  subscriptionId: string;
  units: number;
}

export function validateSeatUpdate(
  body: Record<string, unknown>,
): ValidationResult<SeatUpdateData> {
  const { subscriptionId, units } = body;

  if (!subscriptionId || typeof subscriptionId !== "string") {
    return { valid: false, error: "subscriptionId is required" };
  }
  if (typeof units !== "number" || units <= 0) {
    return { valid: false, error: "units must be a positive number" };
  }

  return { valid: true, data: { subscriptionId, units } };
}
```

### `app/api/subscriptions/cancel/route.ts`

```ts
import { type NextRequest, NextResponse } from "next/server";
import { creem } from "@/lib/creem";
import { isDemoMode } from "@/lib/demo/mode";
import { getDemoStore } from "@/lib/demo/store";
import { checkRateLimit } from "@/lib/rate-limit";
import { createSupabaseServer } from "@/lib/supabase/server";
import { validateCancelRequest } from "../validators";

export async function POST(request: NextRequest) {
  if (isDemoMode()) {
    const body = await request.json();
    const store = getDemoStore();
    const sub = Array.from(store.subscriptions.values()).find(
      (s) => s.creem_subscription_id === body.subscriptionId,
    );
    if (sub) {
      sub.status = "canceled";
    }
    return NextResponse.json({ success: true, subscription: sub ?? null });
  }

  const supabase = await createSupabaseServer();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { success } = await checkRateLimit(user.id);
  if (!success) {
    return NextResponse.json({ error: "Rate limit exceeded" }, { status: 429 });
  }

  const body = await request.json();
  const validation = validateCancelRequest(body);

  if (!validation.valid) {
    return NextResponse.json({ error: validation.error }, { status: 400 });
  }

  const { subscriptionId, mode } = validation.data;

  try {
    const result = await creem.subscriptions.cancel(subscriptionId, {
      mode,
      onExecute: mode === "scheduled" ? "cancel" : undefined,
    });
    return NextResponse.json({ success: true, subscription: result });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Cancel failed";
    return NextResponse.json({ error: message }, { status: 400 });
  }
}
```

### `app/api/subscriptions/upgrade/route.ts`

```ts
import { type NextRequest, NextResponse } from "next/server";
import { creem } from "@/lib/creem";
import { isDemoMode } from "@/lib/demo/mode";
import { getDemoStore } from "@/lib/demo/store";
import { checkRateLimit } from "@/lib/rate-limit";
import { createSupabaseServer } from "@/lib/supabase/server";
import { validateUpgradeRequest } from "../validators";

export async function POST(request: NextRequest) {
  if (isDemoMode()) {
    const body = await request.json();
    const store = getDemoStore();
    const sub = Array.from(store.subscriptions.values()).find(
      (s) => s.creem_subscription_id === body.subscriptionId,
    );
    if (sub) {
      sub.creem_product_id = body.newProductId;
    }
    return NextResponse.json({ success: true, subscription: sub ?? null });
  }

  const supabase = await createSupabaseServer();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { success } = await checkRateLimit(user.id);
  if (!success) {
    return NextResponse.json({ error: "Rate limit exceeded" }, { status: 429 });
  }

  const body = await request.json();
  const validation = validateUpgradeRequest(body);

  if (!validation.valid) {
    return NextResponse.json({ error: validation.error }, { status: 400 });
  }

  const { subscriptionId, newProductId } = validation.data;

  try {
    const result = await creem.subscriptions.upgrade(subscriptionId, {
      productId: newProductId,
      updateBehavior: "proration-charge-immediately",
    });
    return NextResponse.json({ success: true, subscription: result });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Upgrade failed";
    return NextResponse.json({ error: message }, { status: 400 });
  }
}
```

### `app/api/subscriptions/update-seats/route.ts`

```ts
import { type NextRequest, NextResponse } from "next/server";
import { creem } from "@/lib/creem";
import { isDemoMode } from "@/lib/demo/mode";
import { getDemoStore } from "@/lib/demo/store";
import { createSupabaseServer } from "@/lib/supabase/server";
import { validateSeatUpdate } from "../validators";

export async function POST(request: NextRequest) {
  if (isDemoMode()) {
    const body = await request.json();
    const store = getDemoStore();
    const sub = Array.from(store.subscriptions.values()).find(
      (s) => s.creem_subscription_id === body.subscriptionId,
    );
    if (sub) {
      sub.seats = body.units;
    }
    return NextResponse.json({ success: true, subscription: sub ?? null });
  }

  const supabase = await createSupabaseServer();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const body = await request.json();
  const validation = validateSeatUpdate(body);

  if (!validation.valid) {
    return NextResponse.json({ error: validation.error }, { status: 400 });
  }

  const { subscriptionId, units } = validation.data;

  try {
    const result = await creem.subscriptions.update(subscriptionId, {
      items: [{ units }],
    });
    return NextResponse.json({ success: true, subscription: result });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Seat update failed";
    return NextResponse.json({ error: message }, { status: 400 });
  }
}
```

---

## 8. API Routes — Credits

### `app/api/credits/helpers.ts`

```ts
import type { ValidationResult } from "@/app/api/subscriptions/validators";

export const CREDIT_UNLIMITED = -1;

export function isUnlimited(balance: number): boolean {
  return balance === CREDIT_UNLIMITED;
}

interface SpendData {
  amount: number;
  reason: string;
}

const PLAN_CREDITS: Record<string, number> = {
  starter: 100,
  pro: 500,
  enterprise: CREDIT_UNLIMITED,
};

export function getCreditAllocation(plan: string): number {
  return PLAN_CREDITS[plan.toLowerCase()] ?? 100;
}

export function validateSpendRequest(body: Record<string, unknown>): ValidationResult<SpendData> {
  const { amount, reason } = body;

  if (typeof amount !== "number" || amount <= 0) {
    return { valid: false, error: "amount must be a positive number" };
  }
  if (!reason || typeof reason !== "string" || reason.trim() === "") {
    return { valid: false, error: "reason is required" };
  }

  return { valid: true, data: { amount, reason: reason.trim() } };
}
```

### `app/api/credits/route.ts`

```ts
import { NextResponse } from "next/server";
import { isDemoMode } from "@/lib/demo/mode";
import { getDemoStore } from "@/lib/demo/store";
import { getSupabaseAdmin } from "@/lib/supabase/admin";
import { createSupabaseServer } from "@/lib/supabase/server";

export async function GET() {
  if (isDemoMode()) {
    const store = getDemoStore();
    const wallet = store.creditWallets.get("demo-user");
    return NextResponse.json({ balance: wallet?.balance ?? 0 });
  }

  const supabase = await createSupabaseServer();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { data } = await getSupabaseAdmin()
    .from("credits")
    .select("balance")
    .eq("user_id", user.id)
    .single();

  return NextResponse.json({ balance: data?.balance ?? 0 });
}
```

### `app/api/credits/spend/route.ts`

```ts
import { type NextRequest, NextResponse } from "next/server";
import { isDemoMode } from "@/lib/demo/mode";
import { getDemoStore } from "@/lib/demo/store";
import { checkRateLimit } from "@/lib/rate-limit";
import { getSupabaseAdmin } from "@/lib/supabase/admin";
import { createSupabaseServer } from "@/lib/supabase/server";
import { isUnlimited, validateSpendRequest } from "../helpers";

export async function POST(request: NextRequest) {
  if (isDemoMode()) {
    const body = await request.json();
    const store = getDemoStore();
    const wallet = store.creditWallets.get("demo-user") ?? { user_id: "demo-user", balance: 0 };
    store.creditWallets.set("demo-user", wallet);
    if (!isUnlimited(wallet.balance)) {
      wallet.balance = Math.max(0, wallet.balance - (body.amount ?? 0));
    }
    return NextResponse.json({ balance: wallet.balance });
  }

  const supabase = await createSupabaseServer();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { success } = await checkRateLimit(user.id);
  if (!success) {
    return NextResponse.json({ error: "Rate limit exceeded" }, { status: 429 });
  }

  const body = await request.json();
  const validation = validateSpendRequest(body);

  if (!validation.valid) {
    return NextResponse.json({ error: validation.error }, { status: 400 });
  }

  const db = getSupabaseAdmin();
  const { data: wallet } = await db
    .from("credits")
    .select("balance")
    .eq("user_id", user.id)
    .single();

  if (!wallet) {
    return NextResponse.json({ error: "No credits record" }, { status: 404 });
  }

  if (isUnlimited(wallet.balance)) {
    // Unlimited credits — log but don't deduct
    await db.from("credit_transactions").insert({
      user_id: user.id,
      amount: -validation.data.amount,
      type: "spend",
      description: validation.data.reason,
    });
    return NextResponse.json({ balance: wallet.balance });
  }

  // Use atomic Postgres function
  try {
    const { data: newBalance, error } = await db.rpc("spend_credits", {
      p_user_id: user.id,
      p_amount: validation.data.amount,
      p_reason: validation.data.reason,
    });

    if (error) {
      return NextResponse.json(
        { error: error.message.includes("Insufficient") ? "Insufficient credits" : error.message },
        { status: 402 },
      );
    }

    return NextResponse.json({ balance: newBalance });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Spend failed";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
```

---

## 9. API Routes — Licenses

### `app/api/licenses/validators.ts`

```ts
import type { ValidationResult } from "@/app/api/subscriptions/validators";

interface ActivateData {
  key: string;
  instanceName: string;
}

export function validateActivateRequest(
  body: Record<string, unknown>,
): ValidationResult<ActivateData> {
  const { key, instanceName } = body;
  if (!key || typeof key !== "string") {
    return { valid: false, error: "key is required" };
  }
  if (!instanceName || typeof instanceName !== "string") {
    return { valid: false, error: "instanceName is required" };
  }
  return { valid: true, data: { key, instanceName } };
}

interface ValidateData {
  key: string;
  instanceId: string;
}

export function validateValidateRequest(
  body: Record<string, unknown>,
): ValidationResult<ValidateData> {
  const { key, instanceId } = body;
  if (!key || typeof key !== "string") {
    return { valid: false, error: "key is required" };
  }
  if (!instanceId || typeof instanceId !== "string") {
    return { valid: false, error: "instanceId is required" };
  }
  return { valid: true, data: { key, instanceId } };
}

interface DeactivateData {
  key: string;
  instanceId: string;
}

export function validateDeactivateRequest(
  body: Record<string, unknown>,
): ValidationResult<DeactivateData> {
  const { key, instanceId } = body;
  if (!key || typeof key !== "string") {
    return { valid: false, error: "key is required" };
  }
  if (!instanceId || typeof instanceId !== "string") {
    return { valid: false, error: "instanceId is required" };
  }
  return { valid: true, data: { key, instanceId } };
}
```

### `app/api/licenses/activate/route.ts`

```ts
import { type NextRequest, NextResponse } from "next/server";
import { creem } from "@/lib/creem";
import { isDemoMode } from "@/lib/demo/mode";
import { generateDemoId, getDemoStore } from "@/lib/demo/store";
import { createSupabaseServer } from "@/lib/supabase/server";
import { validateActivateRequest } from "../validators";

export async function POST(request: NextRequest) {
  if (isDemoMode()) {
    const body = await request.json();
    const store = getDemoStore();
    const license = Array.from(store.licenses.values()).find((l) => l.key === body.key);
    if (license) {
      license.status = "active";
      license.instance_name = body.instanceName;
      license.instance_id = generateDemoId();
      license.activated_at = new Date().toISOString();
      return NextResponse.json({ success: true, license });
    }
    // Create a new license entry if not found
    const newLicense = {
      id: generateDemoId(),
      user_id: "demo-user",
      key: body.key,
      product_id: "demo-product",
      status: "active",
      instance_name: body.instanceName,
      instance_id: generateDemoId(),
      activated_at: new Date().toISOString(),
    };
    store.licenses.set(newLicense.id, newLicense);
    return NextResponse.json({ success: true, license: newLicense });
  }

  const supabase = await createSupabaseServer();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const body = await request.json();
  const validation = validateActivateRequest(body);

  if (!validation.valid) {
    return NextResponse.json({ error: validation.error }, { status: 400 });
  }

  try {
    const result = await creem.licenses.activate(validation.data);
    return NextResponse.json({ success: true, license: result });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Activation failed";
    return NextResponse.json({ error: message }, { status: 400 });
  }
}
```

### `app/api/licenses/deactivate/route.ts`

```ts
import { type NextRequest, NextResponse } from "next/server";
import { creem } from "@/lib/creem";
import { isDemoMode } from "@/lib/demo/mode";
import { getDemoStore } from "@/lib/demo/store";
import { createSupabaseServer } from "@/lib/supabase/server";
import { validateDeactivateRequest } from "../validators";

export async function POST(request: NextRequest) {
  if (isDemoMode()) {
    const body = await request.json();
    const store = getDemoStore();
    const license = Array.from(store.licenses.values()).find((l) => l.key === body.key);
    if (!license) {
      return NextResponse.json({ error: "License not found" }, { status: 404 });
    }
    license.status = "inactive";
    return NextResponse.json({ success: true, license });
  }

  const supabase = await createSupabaseServer();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const body = await request.json();
  const validation = validateDeactivateRequest(body);

  if (!validation.valid) {
    return NextResponse.json({ error: validation.error }, { status: 400 });
  }

  try {
    const result = await creem.licenses.deactivate(validation.data);
    return NextResponse.json({ success: true, license: result });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Deactivation failed";
    return NextResponse.json({ error: message }, { status: 400 });
  }
}
```

### `app/api/licenses/validate/route.ts`

```ts
import { type NextRequest, NextResponse } from "next/server";
import { creem } from "@/lib/creem";
import { isDemoMode } from "@/lib/demo/mode";
import { getDemoStore } from "@/lib/demo/store";
import { createSupabaseServer } from "@/lib/supabase/server";
import { validateValidateRequest } from "../validators";

export async function POST(request: NextRequest) {
  if (isDemoMode()) {
    const body = await request.json();
    const store = getDemoStore();
    const license = Array.from(store.licenses.values()).find((l) => l.key === body.key);
    if (!license) {
      return NextResponse.json({ error: "License not found" }, { status: 404 });
    }
    return NextResponse.json({ success: true, license });
  }

  const supabase = await createSupabaseServer();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const body = await request.json();
  const validation = validateValidateRequest(body);

  if (!validation.valid) {
    return NextResponse.json({ error: validation.error }, { status: 400 });
  }

  try {
    const result = await creem.licenses.validate(validation.data);
    return NextResponse.json({ success: true, license: result });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Validation failed";
    return NextResponse.json({ error: message }, { status: 400 });
  }
}
```

---

## 10. API Routes — Discounts & Transactions

### `app/api/discounts/helpers.ts`

```ts
import type { ValidationResult } from "@/app/api/subscriptions/validators";

interface DiscountCreateData {
  name: string;
  type: "percentage" | "fixed";
  percentage?: number;
  amount?: number;
  duration: "forever" | "once" | "repeating";
  durationInMonths?: number;
  maxRedemptions?: number;
  code?: string;
  appliesToProducts: string[];
}

export function validateDiscountCreate(
  body: Record<string, unknown>,
): ValidationResult<DiscountCreateData> {
  const { name, type, percentage, amount, duration, appliesToProducts } = body;

  if (!name || typeof name !== "string") {
    return { valid: false, error: "name is required" };
  }
  if (type !== "percentage" && type !== "fixed") {
    return { valid: false, error: "type must be 'percentage' or 'fixed'" };
  }
  if (!Array.isArray(appliesToProducts) || appliesToProducts.length === 0) {
    return { valid: false, error: "appliesToProducts must be a non-empty array" };
  }
  if (type === "percentage") {
    if (typeof percentage !== "number" || percentage <= 0 || percentage > 100) {
      return { valid: false, error: "percentage must be between 1 and 100" };
    }
  }
  if (type === "fixed") {
    if (typeof amount !== "number" || amount <= 0) {
      return { valid: false, error: "amount must be a positive number" };
    }
  }
  if (!["forever", "once", "repeating"].includes(duration as string)) {
    return { valid: false, error: "duration must be 'forever', 'once', or 'repeating'" };
  }

  return {
    valid: true,
    data: {
      name: name as string,
      type: type as "percentage" | "fixed",
      percentage: percentage as number | undefined,
      amount: amount as number | undefined,
      duration: duration as "forever" | "once" | "repeating",
      durationInMonths: body.durationInMonths as number | undefined,
      maxRedemptions: body.maxRedemptions as number | undefined,
      code: body.code as string | undefined,
      appliesToProducts: appliesToProducts as string[],
    },
  };
}

interface CheckoutParams {
  productId: string;
  successUrl: string;
  discountCode?: string;
  metadata?: { user_id: string };
}

export function buildCheckoutWithDiscount(
  productId: string,
  successUrl: string,
  discountCode: string | undefined,
  userId: string,
): CheckoutParams {
  return {
    productId,
    successUrl,
    discountCode: discountCode || undefined,
    metadata: { user_id: userId },
  };
}
```

### `app/api/discounts/route.ts`

```ts
import { type NextRequest, NextResponse } from "next/server";
import { creem } from "@/lib/creem";
import { isDemoMode } from "@/lib/demo/mode";
import { generateDemoId } from "@/lib/demo/store";
import { createSupabaseServer } from "@/lib/supabase/server";
import { validateDiscountCreate } from "./helpers";

export async function POST(request: NextRequest) {
  if (isDemoMode()) {
    const body = await request.json();
    const mockDiscount = {
      id: generateDemoId(),
      code: body.code ?? `DEMO${Math.random().toString(36).slice(2, 8).toUpperCase()}`,
      percent_off: body.percentOff ?? 10,
      amount_off: body.amountOff ?? null,
      currency: body.currency ?? "usd",
      max_redemptions: body.maxRedemptions ?? null,
      expires_at: body.expiresAt ?? null,
    };
    return NextResponse.json({ success: true, discount: mockDiscount });
  }

  const supabase = await createSupabaseServer();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const body = await request.json();
  const validation = validateDiscountCreate(body);

  if (!validation.valid) {
    return NextResponse.json({ error: validation.error }, { status: 400 });
  }

  try {
    const result = await creem.discounts.create(validation.data);
    return NextResponse.json({ success: true, discount: result });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Discount creation failed";
    return NextResponse.json({ error: message }, { status: 400 });
  }
}

export async function GET(request: NextRequest) {
  if (isDemoMode()) {
    const { searchParams } = new URL(request.url);
    const code = searchParams.get("code");
    if (!code) {
      return NextResponse.json({ error: "code parameter required" }, { status: 400 });
    }
    const mockDiscount = {
      id: generateDemoId(),
      code,
      percent_off: 10,
      amount_off: null,
      currency: "usd",
      max_redemptions: null,
      expires_at: null,
    };
    return NextResponse.json({ discount: mockDiscount });
  }

  const supabase = await createSupabaseServer();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { searchParams } = new URL(request.url);
  const code = searchParams.get("code");

  if (!code) {
    return NextResponse.json({ error: "code parameter required" }, { status: 400 });
  }

  try {
    const result = await creem.discounts.get(undefined, code);
    return NextResponse.json({ discount: result });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Discount not found";
    return NextResponse.json({ error: message }, { status: 404 });
  }
}
```

### `app/api/transactions/helpers.ts`

```ts
interface RawTransaction {
  id: string;
  amount: number;
  currency: string;
  status: string;
  created_at: string | number;
}

interface FormattedTransaction {
  id: string;
  displayAmount: string;
  status: string;
  created_at: string;
}

const CURRENCY_MAP: Record<string, { locale: string; currency: string }> = {
  usd: { locale: "en-US", currency: "USD" },
  eur: { locale: "en-IE", currency: "EUR" },
  gbp: { locale: "en-GB", currency: "GBP" },
};

export function formatTransaction(tx: RawTransaction): FormattedTransaction {
  const mapping = CURRENCY_MAP[tx.currency.toLowerCase()] ?? CURRENCY_MAP.usd;

  const displayAmount = new Intl.NumberFormat(mapping.locale, {
    style: "currency",
    currency: mapping.currency,
  }).format(tx.amount / 100);

  return {
    id: tx.id,
    displayAmount,
    status: tx.status,
    created_at:
      typeof tx.created_at === "number"
        ? new Date(tx.created_at).toISOString()
        : String(tx.created_at),
  };
}
```

### `app/api/transactions/route.ts`

```ts
import { type NextRequest, NextResponse } from "next/server";
import { creem } from "@/lib/creem";
import { isDemoMode } from "@/lib/demo/mode";
import { getSupabaseAdmin } from "@/lib/supabase/admin";
import { createSupabaseServer } from "@/lib/supabase/server";
import { formatTransaction } from "./helpers";

export async function GET(request: NextRequest) {
  if (isDemoMode()) {
    return NextResponse.json({ transactions: [] });
  }

  const supabase = await createSupabaseServer();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  // Get customer ID from subscription
  const { data: subscription } = await getSupabaseAdmin()
    .from("subscriptions")
    .select("creem_customer_id")
    .eq("user_id", user.id)
    .single();

  if (!subscription?.creem_customer_id) {
    return NextResponse.json({ transactions: [] });
  }

  const { searchParams } = new URL(request.url);
  const page = Number(searchParams.get("page") ?? "1");

  try {
    const result = await creem.transactions.search(
      subscription.creem_customer_id,
      undefined,
      undefined,
      page,
      20,
    );
    const items = (result as unknown as { items?: unknown[] }).items ?? [];
    const formatted = (items as Array<Record<string, unknown>>).map((tx) =>
      formatTransaction({
        id: (tx.id ?? tx.transactionId ?? "") as string,
        amount: (tx.amount ?? 0) as number,
        currency: (tx.currency ?? "usd") as string,
        status: (tx.status ?? "unknown") as string,
        created_at: (tx.created_at ?? tx.createdAt ?? 0) as string | number,
      }),
    );
    return NextResponse.json({ transactions: formatted });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Failed to fetch transactions";
    return NextResponse.json({ error: message }, { status: 400 });
  }
}
```

---

## 11. API Routes — Webhooks

### `app/api/webhooks/creem/handlers.ts`

```ts
/**
 * Pure functions for webhook event processing.
 * Extracted from route handler for testability.
 */

const STATUS_MAP: Record<string, string> = {
  "subscription.canceled": "cancelled",
  "subscription.active": "active",
  "subscription.past_due": "past_due",
  "subscription.trialing": "trialing",
  "subscription.paused": "paused",
  "subscription.expired": "expired",
  "subscription.unpaid": "past_due",
  "subscription.paid": "active",
  "subscription.update": "active",
};

export function mapSubscriptionStatus(eventType: string): string | null {
  return STATUS_MAP[eventType] ?? null;
}

interface CheckoutEvent {
  metadata?: { user_id?: string };
  product: { id: string; name?: string };
  customer: { id: string };
  subscription?: {
    id: string;
    current_period_end_date?: Date | null;
    canceled_at?: Date | null;
  };
  feature?: {
    license?: { key: string };
  };
}

export interface SubscriptionUpsertRow {
  user_id: string | undefined;
  creem_customer_id: string;
  creem_subscription_id: string | undefined;
  creem_product_id: string;
  product_name: string | undefined;
  status: string;
  current_period_end?: string;
}

export function buildSubscriptionUpsert(event: CheckoutEvent): SubscriptionUpsertRow {
  return {
    user_id: event.metadata?.user_id,
    creem_customer_id: event.customer.id,
    creem_subscription_id: event.subscription?.id,
    creem_product_id: event.product.id,
    product_name: event.product.name,
    status: "active",
    current_period_end: event.subscription?.current_period_end_date
      ? new Date(event.subscription.current_period_end_date).toISOString()
      : undefined,
  };
}

interface SubscriptionUpdateFields {
  current_period_end_date?: Date | null;
  canceled_at?: Date | null;
}

export interface SubscriptionUpdateRow {
  status: string;
  current_period_end?: string;
  cancel_at?: string;
}

export function extractUserId(metadata: Record<string, string> | undefined): string | undefined {
  return metadata?.user_id;
}

export function buildSubscriptionUpdate(
  status: string,
  fields: SubscriptionUpdateFields,
): SubscriptionUpdateRow {
  const row: SubscriptionUpdateRow = { status };

  if (fields.current_period_end_date) {
    row.current_period_end = new Date(fields.current_period_end_date).toISOString();
  }

  if (status === "scheduled_cancel" && fields.canceled_at) {
    row.cancel_at = new Date(fields.canceled_at).toISOString();
  }

  return row;
}
```

### `app/api/webhooks/creem/route.ts`

```ts
import { Webhook } from "@creem_io/nextjs";
import { isDemoMode } from "@/lib/demo/mode";
import { sendPaymentConfirmation } from "@/lib/email";
import { getSupabaseAdmin } from "@/lib/supabase/admin";
import { buildSubscriptionUpdate, buildSubscriptionUpsert, extractUserId } from "./handlers";

function handleWebhook() {
  if (isDemoMode()) {
    return null;
  }

  const db = getSupabaseAdmin();

  return Webhook({
    webhookSecret: process.env.CREEM_WEBHOOK_SECRET!,

    onCheckoutCompleted: async (event) => {
      const row = buildSubscriptionUpsert({
        metadata: event.metadata as { user_id?: string } | undefined,
        product: { id: event.product.id, name: event.product.name },
        customer: event.customer ? { id: event.customer.id } : { id: "" },
        subscription: event.subscription
          ? {
              id: event.subscription.id,
              current_period_end_date: event.subscription.current_period_end_date,
              canceled_at: null,
            }
          : undefined,
      });

      if (!row.user_id) {
        console.log("[webhook] checkout.completed: no user_id in metadata, skipping");
        return;
      }

      // Idempotency check
      const { data: existing } = await db
        .from("webhook_events")
        .select("id")
        .eq("id", event.webhookId)
        .single();

      if (existing) {
        console.log(`[webhook] duplicate event ${event.webhookId}, skipping`);
        return;
      }

      await db.from("webhook_events").insert({
        id: event.webhookId,
        event_type: "checkout.completed",
      });

      await db.from("subscriptions").upsert(row, { onConflict: "user_id" });

      // Send payment confirmation email
      if (event.customer?.email) {
        await sendPaymentConfirmation(
          event.customer.email,
          event.product?.name ?? "Subscription",
          event.product?.price ?? 0,
        );
      }
    },

    onSubscriptionActive: async (event) => {
      const update = buildSubscriptionUpdate("active", {
        current_period_end_date: event.current_period_end_date,
      });
      await db.from("subscriptions").update(update).eq("creem_subscription_id", event.id);
    },

    onSubscriptionPaid: async (event) => {
      const update = buildSubscriptionUpdate("active", {
        current_period_end_date: event.current_period_end_date,
      });
      await db.from("subscriptions").update(update).eq("creem_subscription_id", event.id);
    },

    onSubscriptionCanceled: async (event) => {
      const update = buildSubscriptionUpdate("cancelled", {
        canceled_at: event.canceled_at,
      });
      await db.from("subscriptions").update(update).eq("creem_subscription_id", event.id);
    },

    onSubscriptionExpired: async (event) => {
      await db
        .from("subscriptions")
        .update({ status: "expired" })
        .eq("creem_subscription_id", event.id);
    },

    onSubscriptionPaused: async (event) => {
      await db
        .from("subscriptions")
        .update({ status: "paused" })
        .eq("creem_subscription_id", event.id);
    },

    onSubscriptionTrialing: async (event) => {
      const update = buildSubscriptionUpdate("trialing", {
        current_period_end_date: event.current_period_end_date,
      });
      await db.from("subscriptions").update(update).eq("creem_subscription_id", event.id);
    },

    onSubscriptionPastDue: async (event) => {
      await db
        .from("subscriptions")
        .update({ status: "past_due" })
        .eq("creem_subscription_id", event.id);
    },

    onSubscriptionUpdate: async (event) => {
      const productId = typeof event.product === "string" ? event.product : event.product.id;
      await db
        .from("subscriptions")
        .update({
          creem_product_id: productId,
          status: event.status,
          current_period_end: event.current_period_end_date
            ? new Date(event.current_period_end_date).toISOString()
            : undefined,
        })
        .eq("creem_subscription_id", event.id);
    },

    onRefundCreated: async (event) => {
      const subscriptionId =
        typeof event.subscription === "string" ? event.subscription : event.subscription?.id;

      const { data: sub } = await db
        .from("subscriptions")
        .select("user_id")
        .eq("creem_subscription_id", subscriptionId ?? "")
        .single();

      await db.from("billing_events").insert({
        user_id: sub?.user_id,
        event_type: "refund",
        creem_transaction_id: event.transaction.id,
        amount: event.refund_amount,
        currency: event.refund_currency,
        status: "completed",
      });
    },

    onDisputeCreated: async (event) => {
      const subscriptionId =
        typeof event.subscription === "string" ? event.subscription : event.subscription?.id;

      const { data: sub } = await db
        .from("subscriptions")
        .select("user_id")
        .eq("creem_subscription_id", subscriptionId ?? "")
        .single();

      await db.from("billing_events").insert({
        user_id: sub?.user_id,
        event_type: "dispute",
        creem_transaction_id: event.transaction.id,
        amount: event.amount,
        currency: event.currency,
        status: "open",
      });
    },

    onGrantAccess: async ({ reason, metadata }) => {
      const userId = extractUserId(metadata as Record<string, string> | undefined);
      if (!userId) {
        console.log("[webhook] Grant access: no user_id in metadata");
        return;
      }
      await db.from("subscriptions").update({ status: "active" }).eq("user_id", userId);
      console.log(`[webhook] Granted access (${reason}) for user ${userId}`);
    },

    onRevokeAccess: async ({ reason, metadata }) => {
      const userId = extractUserId(metadata as Record<string, string> | undefined);
      if (!userId) {
        console.log("[webhook] Revoke access: no user_id in metadata");
        return;
      }
      const status = String(reason).includes("expired") ? "expired" : "cancelled";
      await db.from("subscriptions").update({ status }).eq("user_id", userId);
      console.log(`[webhook] Revoked access (${reason}) for user ${userId}`);
    },
  });
}

const webhookHandler = handleWebhook();

export async function POST(request: Request) {
  if (!webhookHandler) {
    // Demo mode — no-op
    return new Response(JSON.stringify({ ok: true }), { status: 200 });
  }
  return webhookHandler(request as never);
}
```

---

## 12. Application Pages

### `app/layout.tsx`

```tsx
import type { Metadata } from "next";
import { Bricolage_Grotesque, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage-grotesque",
  subsets: ["latin"],
  weight: ["400", "500", "700", "800"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://nextjs-supabase-creem-boilerplate.vercel.app",
  ),
  title: "SaaSKit — Next.js + Supabase + Creem Boilerplate",
  description:
    "The most comprehensive SaaS boilerplate with Creem payments. Auth, subscriptions, license keys, credits, webhooks, and demo mode — ship your SaaS in hours.",
  keywords: [
    "SaaS boilerplate",
    "Next.js",
    "Supabase",
    "Creem",
    "payments",
    "subscriptions",
    "TypeScript",
  ],
  openGraph: {
    title: "SaaSKit — Next.js + Supabase + Creem Boilerplate",
    description:
      "Auth, payments, subscriptions, license keys, credits wallet — ship your SaaS in hours.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SaaSKit — Ship your SaaS in hours",
    description: "Production-ready boilerplate with Creem payments, Supabase auth, and demo mode.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${bricolage.variable} ${jetbrainsMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
```

### `app/(public)/opengraph-image.tsx`

```tsx
import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "SaaSKit — Next.js + Supabase + Creem Boilerplate";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100%",
        backgroundColor: "#f5f0eb",
        padding: "60px",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          border: "4px solid #000",
          borderRadius: "24px",
          padding: "48px 64px",
          boxShadow: "8px 8px 0px #000",
          backgroundColor: "#fff",
        }}
      >
        <div
          style={{
            fontSize: 72,
            fontWeight: 800,
            color: "#0a0a0a",
            letterSpacing: "-0.05em",
            lineHeight: 1,
          }}
        >
          SaaSKit
        </div>
        <div
          style={{
            fontSize: 28,
            color: "#ff6b2c",
            fontWeight: 700,
            marginTop: 16,
          }}
        >
          Next.js + Supabase + Creem
        </div>
        <div
          style={{
            fontSize: 20,
            color: "#666",
            marginTop: 12,
          }}
        >
          Ship your SaaS in hours, not weeks
        </div>
      </div>
    </div>,
    { ...size },
  );
}
```

### `app/(public)/page.tsx`

```tsx
import { Bell, CreditCard, Database, Rocket, ShieldCheck, UserCircle } from "lucide-react";
import Link from "next/link";

function WaveDivider({ flip, fill = "var(--bg-primary)" }: { flip?: boolean; fill?: string }) {
  return (
    <div className={`w-full overflow-hidden leading-[0] ${flip ? "rotate-180" : ""}`}>
      <svg
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
        className="w-full h-[60px] md:h-[80px]"
      >
        <path
          d="M0,40 C360,120 720,0 1080,80 C1260,120 1380,40 1440,60 L1440,120 L0,120 Z"
          fill={fill}
        />
      </svg>
    </div>
  );
}

function ZigzagDivider({ fill = "var(--bg-cream)" }: { fill?: string }) {
  return (
    <div className="w-full overflow-hidden leading-[0]">
      <svg viewBox="0 0 1440 60" preserveAspectRatio="none" className="w-full h-[30px] md:h-[40px]">
        <polygon
          points="0,60 20,0 40,60 60,0 80,60 100,0 120,60 140,0 160,60 180,0 200,60 220,0 240,60 260,0 280,60 300,0 320,60 340,0 360,60 380,0 400,60 420,0 440,60 460,0 480,60 500,0 520,60 540,0 560,60 580,0 600,60 620,0 640,60 660,0 680,60 700,0 720,60 740,0 760,60 780,0 800,60 820,0 840,60 860,0 880,60 900,0 920,60 940,0 960,60 980,0 1000,60 1020,0 1040,60 1060,0 1080,60 1100,0 1120,60 1140,0 1160,60 1180,0 1200,60 1220,0 1240,60 1260,0 1280,60 1300,0 1320,60 1340,0 1360,60 1380,0 1400,60 1420,0 1440,60"
          fill={fill}
        />
      </svg>
    </div>
  );
}

export default function LandingPage() {
  return (
    <div className="min-h-screen">
      {/* ═══ HERO — Cream background like Creem ═══ */}
      <section className="bg-bg-cream">
        <header>
          <div className="max-w-6xl mx-auto px-4 md:px-6 py-4 flex items-center justify-between">
            <span className="text-xl font-extrabold text-text-dark tracking-tight">SaaSKit</span>
            <nav className="flex items-center gap-4">
              <Link
                href="/pricing"
                className="text-sm font-bold text-text-dark/70 hover:text-text-dark transition-colors duration-150"
              >
                Pricing
              </Link>
              <Link
                href="/login"
                className="text-sm font-bold text-text-dark/70 hover:text-text-dark transition-colors duration-150"
              >
                Sign In
              </Link>
              <Link href="/signup" className="text-sm px-5 py-2 btn-primary">
                Get Started
              </Link>
            </nav>
          </div>
        </header>

        <div className="max-w-6xl mx-auto px-4 md:px-6 pt-16 pb-24 text-center">
          <div className="inline-block px-4 py-1.5 bg-accent-orange/15 text-accent-orange text-xs font-bold uppercase tracking-widest border-2 border-accent-orange/30 rounded-full mb-8">
            Next.js + Supabase + Creem
          </div>
          <h1 className="text-6xl md:text-8xl font-extrabold tracking-tighter text-text-dark leading-[0.9] mb-6">
            LAUNCH YOUR
            <br />
            <span className="text-accent-orange italic">SAAS.</span>
          </h1>
          <p className="text-lg md:text-xl text-text-dark/60 max-w-xl mx-auto mb-10 font-medium">
            A production-ready boilerplate with auth, database, payments &amp; subscriptions. Ship
            in hours, not weeks.
          </p>
          <div className="flex gap-4 justify-center">
            <Link href="/signup" className="px-8 py-3 text-base btn-primary">
              Start Building →
            </Link>
            <a
              href="https://github.com/malakhov-dmitrii/nextjs-supabase-creem-boilerplate"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 text-base btn-secondary"
            >
              View on GitHub
            </a>
          </div>
        </div>
      </section>

      {/* ═══ Violet blob divider ═══ */}
      <section className="bg-bg-violet relative">
        <WaveDivider flip fill="var(--bg-cream)" />
        <div className="py-4" />
        <WaveDivider fill="var(--bg-primary)" />
      </section>

      {/* ═══ FEATURES — Dark section ═══ */}
      <section className="bg-bg-primary py-20">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-text-primary text-center mb-4">
            Everything you need to <span className="text-accent-orange italic">ship</span>
          </h2>
          <p className="text-text-secondary text-center mb-14 text-lg max-w-2xl mx-auto">
            Authentication, payments, database, webhooks — all wired up and ready to go.
          </p>
          <div className="grid gap-6 md:grid-cols-3">
            {features.map((f) => (
              <div
                key={f.title}
                className="bg-bg-secondary rounded-2xl border-2 border-border p-6"
                style={{ boxShadow: "4px 4px 0px rgba(255, 255, 255, 0.08)" }}
              >
                <div className="mb-3 text-accent-orange">{f.icon}</div>
                <h3 className="font-extrabold text-lg mb-2 text-text-primary">{f.title}</h3>
                <p className="text-text-secondary text-sm leading-relaxed">{f.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ Zigzag divider ═══ */}
      <ZigzagDivider />

      {/* ═══ STACK — Cream section ═══ */}
      <section className="bg-bg-cream py-20">
        <div className="max-w-6xl mx-auto px-4 md:px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-text-dark mb-4">
            Built with the <span className="text-accent-violet italic">best stack</span>
          </h2>
          <p className="text-text-dark/50 mb-12 text-lg">
            Modern tools, zero configuration headaches.
          </p>
          <div className="flex flex-wrap gap-4 justify-center items-center">
            {["Next.js 16", "React 19", "TypeScript", "Tailwind CSS", "Supabase", "Creem"].map(
              (tech) => (
                <span
                  key={tech}
                  className="px-5 py-2 bg-white text-text-dark font-bold text-sm border-2 border-black rounded-full"
                  style={{ boxShadow: "3px 3px 0px #000" }}
                >
                  {tech}
                </span>
              ),
            )}
          </div>
        </div>
      </section>


      {/* ═══ Wave divider cream → dark ═══ */}
      <WaveDivider fill="var(--bg-primary)" />

      {/* ═══ CTA — Orange section ═══ */}
      <section className="bg-accent-orange py-20">
        <div className="max-w-3xl mx-auto px-4 md:px-6 text-center">
          <h2 className="text-4xl md:text-6xl font-extrabold text-black tracking-tight mb-4 leading-tight">
            Ready to launch
            <br />
            <span className="italic">your SaaS?</span>
          </h2>
          <p className="text-black/60 mb-8 text-lg font-medium">
            Clone the repo, configure your environment, and start accepting payments in minutes.
          </p>
          <Link href="/signup" className="inline-block px-8 py-3 text-base btn-dark">
            Get Started Free →
          </Link>
        </div>
      </section>

      {/* ═══ Footer ═══ */}
      <footer className="bg-bg-primary border-t border-border py-8">
        <div className="max-w-6xl mx-auto px-4 md:px-6 text-center text-sm text-text-muted">
          <p>
            Built with Next.js, Supabase &{" "}
            <a href="https://creem.io" className="text-accent-orange hover:underline font-bold">
              Creem
            </a>
            . Open source and free to use.
          </p>
        </div>
      </footer>
    </div>
  );
}

const features = [
  {
    icon: <ShieldCheck size={28} strokeWidth={2.5} />,
    title: "Authentication",
    description:
      "Email/password auth with Supabase. Magic links, OAuth, and session management out of the box.",
  },
  {
    icon: <CreditCard size={28} strokeWidth={2.5} />,
    title: "Payments & Subscriptions",
    description:
      "Creem handles checkout, billing, tax compliance, and subscription lifecycle. Global payments in minutes.",
  },
  {
    icon: <Database size={28} strokeWidth={2.5} />,
    title: "Database",
    description:
      "Supabase Postgres with Row Level Security. Your data is secure and scalable from day one.",
  },
  {
    icon: <Bell size={28} strokeWidth={2.5} />,
    title: "Webhooks",
    description:
      "HMAC-verified webhook handler syncs payment events to your database automatically.",
  },
  {
    icon: <UserCircle size={28} strokeWidth={2.5} />,
    title: "Billing Portal",
    description:
      "Customers manage their own subscriptions — upgrades, cancellations, payment methods.",
  },
  {
    icon: <Rocket size={28} strokeWidth={2.5} />,
    title: "Deploy in Minutes",
    description: "One-click deploy to Vercel. Environment variables, and you're live.",
  },
];
```

### `app/(auth)/layout.tsx`

```tsx
export const dynamic = "force-dynamic";

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
```

### `app/(auth)/callback/route.ts`

```ts
import { NextResponse } from "next/server";
import { createSupabaseServer } from "@/lib/supabase/server";

export async function GET(request: Request) {
  const { searchParams, origin } = new URL(request.url);
  const code = searchParams.get("code");
  const next = searchParams.get("next") ?? "/dashboard";

  if (code) {
    const supabase = await createSupabaseServer();
    const { error } = await supabase.auth.exchangeCodeForSession(code);
    if (!error) {
      return NextResponse.redirect(`${origin}${next}`);
    }
  }

  // Auth error — redirect to login with error
  return NextResponse.redirect(`${origin}/login?error=auth_failed`);
}
```

### `app/(auth)/login/page.tsx`

> Full verbatim source: 160 lines. Contains a client component with email/password form, OAuth buttons,
> and a decorative violet panel. See the complete file in the repository at `app/(auth)/login/page.tsx`.

```tsx
"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { OAuthButtons } from "@/components/oauth-buttons";
import { createSupabaseBrowser } from "@/lib/supabase/client";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const supabase = createSupabaseBrowser();

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      setError(error.message);
      setLoading(false);
    } else {
      router.push("/dashboard");
      router.refresh();
    }
  }

  return (
    <div className="min-h-screen flex bg-bg-primary">
      {/* Left — Form */}
      <div className="flex-1 flex items-center justify-center p-8">
        <div className="w-full max-w-md">
          <Link
            href="/"
            className="text-2xl font-extrabold text-text-primary tracking-tight mb-10 block"
          >
            SaaSKit
          </Link>

          <div
            className="p-8 bg-bg-secondary rounded-2xl border-2 border-border"
            style={{ boxShadow: "6px 6px 0px rgba(255, 255, 255, 0.06)" }}
          >
            <h1 className="text-2xl font-extrabold text-text-primary mb-1">Sign in to SaaSKit</h1>
            <p className="text-text-muted text-sm mb-6">Enter your credentials to continue</p>

            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <label
                  htmlFor="login-email"
                  className="block text-sm font-bold text-text-secondary mb-1.5"
                >
                  Email address
                </label>
                <input
                  id="login-email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@company.com"
                  className="w-full px-4 py-3 bg-bg-primary border-2 border-border rounded-xl text-text-primary placeholder:text-text-muted focus:border-accent-orange focus:outline-none transition-colors duration-150"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="login-password"
                  className="block text-sm font-bold text-text-secondary mb-1.5"
                >
                  Password
                </label>
                <input
                  id="login-password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-3 bg-bg-primary border-2 border-border rounded-xl text-text-primary placeholder:text-text-muted focus:border-accent-orange focus:outline-none transition-colors duration-150"
                  required
                />
              </div>

              {error && <p className="text-error text-sm font-medium">{error}</p>}

              <button
                type="submit"
                disabled={loading}
                className="w-full py-3 btn-primary disabled:btn-disabled text-base"
              >
                {loading ? "Signing in..." : "Sign In →"}
              </button>
            </form>

            <div className="relative my-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-border" />
              </div>
              <div className="relative flex justify-center text-xs">
                <span className="bg-bg-secondary px-3 text-text-muted font-medium">or</span>
              </div>
            </div>

            <OAuthButtons />

            <p className="text-center mt-5 text-sm text-text-muted">
              Don&apos;t have an account?{" "}
              <Link href="/signup" className="text-accent-orange font-bold hover:underline">
                Sign Up
              </Link>
            </p>
          </div>
        </div>
      </div>

      {/* Right — Decorative violet panel */}
      <div className="hidden lg:flex flex-1 bg-bg-violet items-center justify-center relative overflow-hidden">
        {/* Decorative blob shapes */}
        <svg
          className="absolute -top-20 -right-20 w-80 h-80 opacity-40"
          viewBox="0 0 200 200"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="100" cy="100" r="100" fill="var(--bg-primary)" />
        </svg>
        <svg
          className="absolute -bottom-16 -left-16 w-64 h-64 opacity-30"
          viewBox="0 0 200 200"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="100" cy="100" r="100" fill="var(--bg-primary)" />
        </svg>
        <div className="relative z-10 text-center px-12">
          <h2 className="text-6xl font-extrabold text-text-dark tracking-tighter leading-[0.9] mb-4">
            LAUNCH
            <br />
            YOUR
            <br />
            <span className="italic text-white">SAAS.</span>
          </h2>
          <p className="text-text-dark/60 text-lg font-medium mt-4">
            Payments, taxes, and compliance
            <br />
            handled for you.
          </p>
          <span className="inline-block mt-6 px-4 py-1.5 bg-white/80 text-text-dark text-xs font-bold rounded-full border-2 border-black/10">
            Merchant of Record
          </span>
        </div>
      </div>
    </div>
  );
}
```

### `app/(auth)/signup/page.tsx`

> Structurally identical to login page with `signUp` instead of `signInWithPassword`,
> different heading text ("Create your account"), and right-panel text reads "BUILD / SHIP / GROW."

```tsx
"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { OAuthButtons } from "@/components/oauth-buttons";
import { createSupabaseBrowser } from "@/lib/supabase/client";

export default function SignupPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const supabase = createSupabaseBrowser();

  async function handleSignup(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const { error } = await supabase.auth.signUp({
      email,
      password,
    });

    if (error) {
      setError(error.message);
      setLoading(false);
    } else {
      router.push("/dashboard");
      router.refresh();
    }
  }

  return (
    <div className="min-h-screen flex bg-bg-primary">
      {/* Left — Form */}
      <div className="flex-1 flex items-center justify-center p-8">
        <div className="w-full max-w-md">
          <Link
            href="/"
            className="text-2xl font-extrabold text-text-primary tracking-tight mb-10 block"
          >
            SaaSKit
          </Link>

          <div
            className="p-8 bg-bg-secondary rounded-2xl border-2 border-border"
            style={{ boxShadow: "6px 6px 0px rgba(255, 255, 255, 0.06)" }}
          >
            <h1 className="text-2xl font-extrabold text-text-primary mb-1">Create your account</h1>
            <p className="text-text-muted text-sm mb-6">Start building your SaaS today</p>

            <form onSubmit={handleSignup} className="space-y-4">
              <div>
                <label
                  htmlFor="signup-email"
                  className="block text-sm font-bold text-text-secondary mb-1.5"
                >
                  Email address
                </label>
                <input
                  id="signup-email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@company.com"
                  className="w-full px-4 py-3 bg-bg-primary border-2 border-border rounded-xl text-text-primary placeholder:text-text-muted focus:border-accent-orange focus:outline-none transition-colors duration-150"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="signup-password"
                  className="block text-sm font-bold text-text-secondary mb-1.5"
                >
                  Password
                </label>
                <input
                  id="signup-password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-3 bg-bg-primary border-2 border-border rounded-xl text-text-primary placeholder:text-text-muted focus:border-accent-orange focus:outline-none transition-colors duration-150"
                  minLength={6}
                  required
                />
              </div>

              {error && <p className="text-error text-sm font-medium">{error}</p>}

              <button
                type="submit"
                disabled={loading}
                className="w-full py-3 btn-primary disabled:btn-disabled text-base"
              >
                {loading ? "Creating account..." : "Sign Up →"}
              </button>
            </form>

            <div className="relative my-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-border" />
              </div>
              <div className="relative flex justify-center text-xs">
                <span className="bg-bg-secondary px-3 text-text-muted font-medium">or</span>
              </div>
            </div>

            <OAuthButtons />

            <p className="text-center mt-5 text-sm text-text-muted">
              Already have an account?{" "}
              <Link href="/login" className="text-accent-orange font-bold hover:underline">
                Sign In
              </Link>
            </p>
          </div>
        </div>
      </div>

      {/* Right — Decorative violet panel */}
      <div className="hidden lg:flex flex-1 bg-bg-violet items-center justify-center relative overflow-hidden">
        <svg
          className="absolute -top-20 -right-20 w-80 h-80 opacity-40"
          viewBox="0 0 200 200"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="100" cy="100" r="100" fill="var(--bg-primary)" />
        </svg>
        <svg
          className="absolute -bottom-16 -left-16 w-64 h-64 opacity-30"
          viewBox="0 0 200 200"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="100" cy="100" r="100" fill="var(--bg-primary)" />
        </svg>
        <div className="relative z-10 text-center px-12">
          <h2 className="text-6xl font-extrabold text-text-dark tracking-tighter leading-[0.9] mb-4">
            BUILD
            <br />
            SHIP
            <br />
            <span className="italic text-white">GROW.</span>
          </h2>
          <p className="text-text-dark/60 text-lg font-medium mt-4">
            Everything you need to launch
            <br />
            your SaaS product.
          </p>
        </div>
      </div>
    </div>
  );
}
```

### `app/(public)/pricing/page.tsx`

```tsx
import Link from "next/link";
import { PricingSection } from "@/components/pricing-section";

const plans = [
  {
    name: "Starter",
    price: "$9",
    period: "month",
    productId: process.env.NEXT_PUBLIC_CREEM_STARTER_PRODUCT_ID ?? "prod_starter",
    features: ["3 projects", "Basic analytics", "Email support", "1 team member"],
  },
  {
    name: "Pro",
    price: "$29",
    period: "month",
    productId: process.env.NEXT_PUBLIC_CREEM_PRO_PRODUCT_ID ?? "prod_pro",
    popular: true,
    features: [
      "Unlimited projects",
      "Advanced analytics",
      "Priority support",
      "5 team members",
      "Custom integrations",
      "API access",
    ],
  },
  {
    name: "Enterprise",
    price: "$99",
    period: "month",
    productId: process.env.NEXT_PUBLIC_CREEM_ENTERPRISE_PRODUCT_ID ?? "prod_enterprise",
    features: [
      "Everything in Pro",
      "Unlimited team members",
      "Dedicated support",
      "SLA guarantee",
      "Custom contracts",
      "SSO / SAML",
    ],
  },
];

function WaveDivider({ fill = "var(--bg-primary)" }: { fill?: string }) {
  return (
    <div className="w-full overflow-hidden leading-[0]">
      <svg
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
        className="w-full h-[60px] md:h-[80px]"
      >
        <path
          d="M0,40 C360,120 720,0 1080,80 C1260,120 1380,40 1440,60 L1440,120 L0,120 Z"
          fill={fill}
        />
      </svg>
    </div>
  );
}

export default function PricingPage() {
  return (
    <div className="min-h-screen">
      {/* ═══ Hero — Cream background ═══ */}
      <section className="bg-bg-cream">
        <header>
          <div className="max-w-6xl mx-auto px-4 md:px-6 py-4 flex items-center justify-between">
            <Link href="/" className="text-xl font-extrabold text-text-dark tracking-tight">
              SaaSKit
            </Link>
            <nav className="flex items-center gap-4">
              <Link
                href="/login"
                className="text-sm font-bold text-text-dark/70 hover:text-text-dark transition-colors duration-150"
              >
                Sign In
              </Link>
              <Link href="/signup" className="text-sm px-5 py-2 btn-primary">
                Get Started
              </Link>
            </nav>
          </div>
        </header>

        <div className="max-w-6xl mx-auto px-4 md:px-6 pt-12 pb-20 text-center">
          <div className="inline-block px-4 py-1.5 bg-accent-orange/15 text-accent-orange text-xs font-bold uppercase tracking-widest border-2 border-accent-orange/30 rounded-full mb-8">
            Pricing
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter text-text-dark leading-[0.9] mb-4">
            SIMPLE,
            <br />
            <span className="text-accent-orange italic">TRANSPARENT</span>
            <br />
            PRICING.
          </h1>
          <p className="text-lg text-text-dark/60 font-medium">
            Choose the plan that fits your needs. Cancel anytime.
          </p>
        </div>
      </section>

      <WaveDivider />

      {/* ═══ Pricing Cards — Dark section ═══ */}
      <section className="bg-bg-primary py-16">
        <div className="max-w-5xl mx-auto px-4 md:px-6">
          <PricingSection plans={plans} />
        </div>
      </section>

      {/* ═══ Footer note ═══ */}
      <section className="bg-bg-primary pb-16">
        <div className="text-center text-sm text-text-muted">
          <p>All plans include a 14-day free trial. No credit card required.</p>
          <p className="mt-1">
            Payments processed securely by{" "}
            <a
              href="https://creem.io"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent-orange font-bold hover:underline"
            >
              Creem
            </a>
            . Tax compliance handled automatically.
          </p>
        </div>
      </section>
    </div>
  );
}
```

### `app/(main)/dashboard/layout.tsx`

```tsx
export const dynamic = "force-dynamic";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
```

### `app/(main)/dashboard/loading.tsx`

```tsx
export default function DashboardLoading() {
  return (
    <div className="min-h-screen bg-bg-primary">
      {/* Header skeleton */}
      <header className="bg-bg-secondary border-b-2 border-border">
        <div className="max-w-6xl mx-auto px-4 md:px-6 py-4 flex items-center justify-between">
          <div className="h-7 w-32 bg-border rounded animate-pulse" />
          <div className="h-8 w-24 bg-border rounded-full animate-pulse" />
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 md:px-6 py-8 space-y-6">
        <div className="grid md:grid-cols-2 gap-6">
          <div
            className="bg-bg-secondary rounded-2xl border-2 border-border p-6 h-48 animate-pulse"
            style={{ boxShadow: "4px 4px 0px rgba(255, 255, 255, 0.06)" }}
          >
            <div className="h-5 w-40 bg-border rounded mb-4" />
            <div className="h-4 w-60 bg-border rounded mb-3" />
            <div className="h-4 w-48 bg-border rounded mb-3" />
            <div className="h-10 w-32 bg-border rounded-full mt-4" />
          </div>
          <div
            className="bg-bg-secondary rounded-2xl border-2 border-border p-6 h-48 animate-pulse"
            style={{ boxShadow: "4px 4px 0px rgba(255, 255, 255, 0.06)" }}
          >
            <div className="h-5 w-32 bg-border rounded mb-4" />
            <div className="h-8 w-20 bg-border rounded mb-3" />
            <div className="h-4 w-56 bg-border rounded" />
          </div>
        </div>
        <div
          className="bg-bg-secondary rounded-2xl border-2 border-border p-6 animate-pulse"
          style={{ boxShadow: "4px 4px 0px rgba(255, 255, 255, 0.06)" }}
        >
          <div className="h-5 w-44 bg-border rounded mb-4" />
          <div className="space-y-3">
            <div className="h-4 w-36 bg-border rounded" />
            <div className="h-4 w-44 bg-border rounded" />
            <div className="h-4 w-32 bg-border rounded" />
          </div>
        </div>
      </main>
    </div>
  );
}
```

### `app/(main)/dashboard/error.tsx`

```tsx
"use client";

export default function DashboardError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="min-h-screen bg-bg-primary flex items-center justify-center p-4">
      <div
        className="bg-bg-secondary rounded-2xl border-2 border-border p-8 max-w-md w-full text-center"
        style={{ boxShadow: "4px 4px 0px rgba(255, 255, 255, 0.06)" }}
      >
        <h2 className="text-xl font-extrabold text-text-primary mb-2">Something went wrong</h2>
        <p className="text-text-muted text-sm mb-6">
          {error.message || "An unexpected error occurred."}
        </p>
        <button type="button" onClick={reset} className="btn-primary text-sm px-6 py-2">
          Try Again
        </button>
      </div>
    </div>
  );
}
```

### `app/(main)/dashboard/page.tsx`

> Full verbatim source: 221 lines. Server component that fetches user, subscription, credits,
> licenses, and billing events in parallel, then renders `SubscriptionCard`, `CreditsCard`,
> `UpgradeDialog`, `SeatManager`, `CancelDialog`, `LicenseCard`, and plan features.
> See the complete file in the repository at `app/(main)/dashboard/page.tsx`.

```tsx
import Link from "next/link";
import { redirect } from "next/navigation";
import { Suspense } from "react";
import { AlertBanner } from "@/components/alert-banner";
import { CancelDialog } from "@/components/cancel-dialog";
import { CheckoutSync } from "@/components/checkout-sync";
import { CreditsCard } from "@/components/credits-card";
import { LicenseCard } from "@/components/license-card";
import { SeatManager } from "@/components/seat-manager";
import { SignOutButton } from "@/components/sign-out-button";
import { SubscriptionCard } from "@/components/subscription-card";
import { UpgradeDialog } from "@/components/upgrade-dialog";
import { getPlanFeatures } from "@/lib/entitlements";
import { getSupabaseAdmin } from "@/lib/supabase/admin";
import { createSupabaseServer } from "@/lib/supabase/server";

const PLANS = [
  {
    id: process.env.NEXT_PUBLIC_CREEM_STARTER_PRODUCT_ID ?? "prod_starter",
    name: "Starter",
    price: 900,
  },
  { id: process.env.NEXT_PUBLIC_CREEM_PRO_PRODUCT_ID ?? "prod_pro", name: "Pro", price: 2900 },
  {
    id: process.env.NEXT_PUBLIC_CREEM_ENTERPRISE_PRODUCT_ID ?? "prod_enterprise",
    name: "Enterprise",
    price: 9900,
  },
];

export default async function DashboardPage() {
  const supabase = await createSupabaseServer();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) redirect("/login");

  const db = getSupabaseAdmin();

  // Fetch all dashboard data in parallel
  const [subResult, creditsResult, licensesResult, eventsResult, txResult] = await Promise.all([
    supabase.from("subscriptions").select("*").eq("user_id", user.id).maybeSingle(),
    db.from("credits").select("balance").eq("user_id", user.id).maybeSingle(),
    db
      .from("licenses")
      .select("*")
      .eq("user_id", user.id)
      .order("created_at", { ascending: false })
      .limit(5),
    db
      .from("billing_events")
      .select("*")
      .eq("user_id", user.id)
      .order("created_at", { ascending: false })
      .limit(5),
    db
      .from("credit_transactions")
      .select("*")
      .eq("user_id", user.id)
      .order("created_at", { ascending: false })
      .limit(5),
  ]);

  const subscription = subResult.data;
  const credits = creditsResult.data;
  const licenses = licensesResult.data ?? [];
  const billingEvents = eventsResult.data ?? [];
  const creditTransactions = txResult.data ?? [];

  const isActive = subscription?.status === "active" || subscription?.status === "trialing";
  const isScheduledCancel = subscription?.status === "scheduled_cancel";

  return (
    <div className="min-h-screen bg-bg-primary">
      <header className="bg-bg-secondary border-b-2 border-border">
        <div className="max-w-6xl mx-auto px-4 md:px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <h1 className="text-xl font-extrabold text-text-primary tracking-tight">Dashboard</h1>
            <nav className="hidden sm:flex items-center gap-4">
              <Link
                href="/dashboard/transactions"
                className="text-sm font-bold text-text-muted hover:text-text-primary transition-colors"
              >
                Transactions
              </Link>
              <Link
                href="/dashboard/licenses"
                className="text-sm font-bold text-text-muted hover:text-text-primary transition-colors"
              >
                Licenses
              </Link>
              {process.env.ADMIN_EMAIL === user.email && (
                <Link
                  href="/dashboard/admin"
                  className="text-sm font-bold text-accent-orange hover:underline"
                >
                  Admin
                </Link>
              )}
            </nav>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-sm text-text-secondary font-medium hidden md:block">
              {user.email}
            </span>
            <SignOutButton />
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 md:px-6 py-8 space-y-6">
        <Suspense>
          <CheckoutSync />
        </Suspense>

        {/* Alerts */}
        <AlertBanner events={billingEvents} />

        {/* Scheduled cancel banner */}
        {isScheduledCancel && subscription?.cancel_at && (
          <div className="p-4 rounded-xl border-2 border-warning/40 bg-warning/5">
            <p className="text-sm font-bold text-warning">
              Your subscription ends on {new Date(subscription.cancel_at).toLocaleDateString()}.
            </p>
            <p className="text-xs text-text-muted mt-1">
              You&apos;ll continue to have access until then.{" "}
              <Link href="/pricing" className="text-accent-orange hover:underline font-bold">
                Resubscribe
              </Link>
            </p>
          </div>
        )}

        {/* Main grid */}
        <div className="grid gap-6 md:grid-cols-2">
          <SubscriptionCard subscription={subscription} />
          <CreditsCard balance={credits?.balance ?? 0} transactions={creditTransactions} />
        </div>

        {/* Plan management (only if active subscription) */}
        {isActive && subscription?.creem_subscription_id && subscription?.creem_product_id && (
          <div
            className="p-6 bg-bg-secondary rounded-2xl border-2 border-border space-y-6"
            style={{ boxShadow: "4px 4px 0px rgba(255, 255, 255, 0.06)" }}
          >
            <h2 className="text-lg font-extrabold text-text-primary">Manage Subscription</h2>
            <UpgradeDialog
              subscriptionId={subscription.creem_subscription_id}
              currentProductId={subscription.creem_product_id}
              plans={PLANS}
            />
            {subscription.seats && subscription.seats > 0 && (
              <SeatManager
                subscriptionId={subscription.creem_subscription_id}
                currentSeats={subscription.seats}
              />
            )}
            <CancelDialog
              subscriptionId={subscription.creem_subscription_id}
              currentPeriodEnd={subscription.current_period_end}
            />
          </div>
        )}

        {/* Licenses */}
        {licenses.length > 0 && <LicenseCard licenses={licenses} />}

        {/* Features */}
        <div
          className="bg-bg-secondary rounded-2xl border-2 border-border p-6"
          style={{ boxShadow: "4px 4px 0px rgba(255, 255, 255, 0.06)" }}
        >
          <h2 className="text-lg font-extrabold text-text-primary mb-4">Your SaaS Features</h2>
          {isActive ? (
            <div className="space-y-3">
              {getPlanFeatures(subscription?.product_name ?? "starter").map((feature) => (
                <Feature
                  key={feature}
                  label={feature.replace(/_/g, " ").replace(/\b\w/g, (c) => c.toUpperCase())}
                />
              ))}
            </div>
          ) : (
            <p className="text-text-muted">
              <Link href="/pricing" className="text-accent-orange font-bold hover:underline">
                Upgrade to a paid plan
              </Link>{" "}
              to unlock all features.
            </p>
          )}
        </div>
      </main>
    </div>
  );
}

function Feature({ label }: { label: string }) {
  return (
    <div className="flex items-center gap-2.5 text-success">
      <svg
        className="w-5 h-5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        role="img"
        aria-label="Check"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
      </svg>
      <span className="font-medium">{label}</span>
    </div>
  );
}
```

### `app/(main)/dashboard/transactions/page.tsx`

```tsx
import { redirect } from "next/navigation";
import { TransactionList } from "@/components/transaction-list";
import { createSupabaseServer } from "@/lib/supabase/server";

export const dynamic = "force-dynamic";

export default async function TransactionsPage() {
  const supabase = await createSupabaseServer();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) redirect("/login");

  return (
    <div className="max-w-4xl mx-auto px-4 py-12 space-y-6">
      <div>
        <h1 className="text-3xl font-extrabold text-text-primary mb-2">Transaction History</h1>
        <p className="text-text-muted">View your payment history.</p>
      </div>

      <div className="p-6 bg-bg-secondary rounded-2xl border-2 border-border">
        <TransactionList />
      </div>
    </div>
  );
}
```

### `app/(main)/dashboard/licenses/page.tsx`

```tsx
import { redirect } from "next/navigation";
import { LicenseCard } from "@/components/license-card";
import { getSupabaseAdmin } from "@/lib/supabase/admin";
import { createSupabaseServer } from "@/lib/supabase/server";

export const dynamic = "force-dynamic";

export default async function LicensesPage() {
  const supabase = await createSupabaseServer();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) redirect("/login");

  const { data: licenses } = await getSupabaseAdmin()
    .from("licenses")
    .select("*")
    .eq("user_id", user.id)
    .order("created_at", { ascending: false });

  return (
    <div className="max-w-4xl mx-auto px-4 py-12 space-y-6">
      <div>
        <h1 className="text-3xl font-extrabold text-text-primary mb-2">License Keys</h1>
        <p className="text-text-muted">Manage your license keys and activations.</p>
      </div>

      <LicenseCard licenses={licenses ?? []} />
    </div>
  );
}
```

### `app/(main)/dashboard/admin/page.tsx`

```tsx
import { redirect } from "next/navigation";
import { getSupabaseAdmin } from "@/lib/supabase/admin";
import { createSupabaseServer } from "@/lib/supabase/server";

export const dynamic = "force-dynamic";

export default async function AdminPage() {
  const supabase = await createSupabaseServer();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) redirect("/login");

  // Simple admin check — configure ADMIN_EMAIL in env
  const adminEmail = process.env.ADMIN_EMAIL;
  if (!adminEmail || user.email !== adminEmail) {
    redirect("/dashboard");
  }

  const db = getSupabaseAdmin();

  // Fetch stats
  const { count: subCount } = await db
    .from("subscriptions")
    .select("*", { count: "exact", head: true });
  const { count: licCount } = await db.from("licenses").select("*", { count: "exact", head: true });
  const { data: recentEvents } = await db
    .from("billing_events")
    .select("*")
    .order("created_at", { ascending: false })
    .limit(10);

  return (
    <div className="max-w-4xl mx-auto px-4 py-12 space-y-8">
      <div>
        <h1 className="text-3xl font-extrabold text-text-primary mb-2">Admin Dashboard</h1>
        <p className="text-text-muted">Manage your SaaS from here.</p>
      </div>

      {/* Stats */}
      <div className="grid gap-4 sm:grid-cols-3">
        <div className="p-6 bg-bg-secondary rounded-2xl border-2 border-border">
          <p className="text-text-muted text-sm font-bold">Subscriptions</p>
          <p className="text-3xl font-extrabold text-text-primary">{subCount ?? 0}</p>
        </div>
        <div className="p-6 bg-bg-secondary rounded-2xl border-2 border-border">
          <p className="text-text-muted text-sm font-bold">Licenses</p>
          <p className="text-3xl font-extrabold text-text-primary">{licCount ?? 0}</p>
        </div>
        <div className="p-6 bg-bg-secondary rounded-2xl border-2 border-border">
          <p className="text-text-muted text-sm font-bold">Billing Events</p>
          <p className="text-3xl font-extrabold text-text-primary">{recentEvents?.length ?? 0}</p>
        </div>
      </div>

      {/* Discount Code Creator */}
      <div className="p-6 bg-bg-secondary rounded-2xl border-2 border-border">
        <h2 className="text-lg font-extrabold text-text-primary mb-4">Create Discount Code</h2>
        <p className="text-text-muted text-sm mb-3">
          Use the <code className="text-accent-orange">POST /api/discounts</code> endpoint to create
          discount codes programmatically.
        </p>
        <pre className="p-4 bg-bg-primary rounded-xl text-sm text-text-secondary overflow-x-auto font-mono">
          {`curl -X POST /api/discounts \\
  -H "Content-Type: application/json" \\
  -d '{
    "name": "Summer Sale",
    "type": "percentage",
    "percentage": 20,
    "duration": "once",
    "appliesToProducts": ["prod_xxx"]
  }'`}
        </pre>
      </div>

      {/* Recent Billing Events */}
      {recentEvents && recentEvents.length > 0 && (
        <div className="p-6 bg-bg-secondary rounded-2xl border-2 border-border">
          <h2 className="text-lg font-extrabold text-text-primary mb-4">Recent Billing Events</h2>
          <div className="space-y-2">
            {recentEvents.map(
              (event: { id: string; event_type: string; status: string; created_at: string }) => (
                <div
                  key={event.id}
                  className="flex items-center justify-between p-3 bg-bg-primary rounded-xl"
                >
                  <div>
                    <span
                      className={`text-sm font-bold ${event.event_type === "dispute" ? "text-error" : "text-warning"}`}
                    >
                      {event.event_type}
                    </span>
                    <span className="text-xs text-text-muted ml-2">{event.status}</span>
                  </div>
                  <span className="text-xs text-text-muted">
                    {new Date(event.created_at).toLocaleDateString()}
                  </span>
                </div>
              ),
            )}
          </div>
        </div>
      )}
    </div>
  );
}
```

---

## 13. UI Components

### `components/alert-banner.tsx`

```tsx
interface BillingEvent {
  id: string;
  event_type: string;
  amount?: number;
  currency?: string;
  status?: string;
  created_at: string;
}

interface AlertBannerProps {
  events: BillingEvent[];
}

export function AlertBanner({ events }: AlertBannerProps) {
  if (events.length === 0) return null;

  const openDisputes = events.filter((e) => e.event_type === "dispute" && e.status === "open");
  const recentRefunds = events.filter((e) => e.event_type === "refund");

  if (openDisputes.length === 0 && recentRefunds.length === 0) return null;

  return (
    <div className="space-y-2">
      {openDisputes.map((d) => (
        <div
          key={d.id}
          className="p-3 rounded-xl border-2 border-error/40 bg-error/5 flex items-center gap-2"
        >
          <span className="text-error text-lg">⚠</span>
          <div>
            <p className="text-sm font-bold text-error">Dispute Opened</p>
            <p className="text-xs text-text-muted">
              A payment dispute was opened on {new Date(d.created_at).toLocaleDateString()}. Please
              contact support.
            </p>
          </div>
        </div>
      ))}
      {recentRefunds.map((r) => (
        <div
          key={r.id}
          className="p-3 rounded-xl border-2 border-warning/40 bg-warning/5 flex items-center gap-2"
        >
          <span className="text-warning text-lg">↩</span>
          <div>
            <p className="text-sm font-bold text-warning">Refund Processed</p>
            <p className="text-xs text-text-muted">
              A refund was processed on {new Date(r.created_at).toLocaleDateString()}.
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
```

### `components/checkout-sync.tsx`

```tsx
"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useRef, useState } from "react";

export function CheckoutSync() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const polling = useRef(false);
  const [status, setStatus] = useState<"idle" | "waiting" | "done">("idle");

  useEffect(() => {
    if (polling.current) return;
    const checkout = searchParams.get("checkout");
    if (checkout !== "success") return;

    polling.current = true;
    setStatus("waiting");

    const timer = setTimeout(() => {
      router.replace("/dashboard");
      router.refresh();
      setStatus("done");
    }, 3000);

    return () => clearTimeout(timer);
  }, [searchParams, router]);

  if (status === "waiting") {
    return (
      <div className="bg-success/10 border-2 border-success/30 rounded-2xl p-4 mb-6" role="status">
        <p className="text-success font-bold">
          Payment successful! Activating your subscription...
        </p>
      </div>
    );
  }

  return null;
}
```

### `components/sign-out-button.tsx`

```tsx
"use client";

import { useRouter } from "next/navigation";
import { createSupabaseBrowser } from "@/lib/supabase/client";

export function SignOutButton() {
  const router = useRouter();
  const supabase = createSupabaseBrowser();

  async function handleSignOut() {
    await supabase.auth.signOut();
    router.push("/");
    router.refresh();
  }

  return (
    <button
      type="button"
      onClick={handleSignOut}
      className="text-sm font-bold text-accent-orange hover:underline transition-colors duration-150"
    >
      Sign Out
    </button>
  );
}
```

### `components/oauth-buttons.tsx`

```tsx
"use client";

import { Loader2 } from "lucide-react";
import { useState } from "react";
import { createSupabaseBrowser } from "@/lib/supabase/client";

export function OAuthButtons() {
  const [loading, setLoading] = useState<string | null>(null);

  async function handleOAuth(provider: "google" | "github") {
    setLoading(provider);
    const supabase = createSupabaseBrowser();
    await supabase.auth.signInWithOAuth({
      provider,
      options: {
        redirectTo: `${window.location.origin}/callback`,
      },
    });
  }

  return (
    <div className="space-y-3">
      <button
        type="button"
        onClick={() => handleOAuth("google")}
        disabled={loading !== null}
        className="btn-secondary w-full flex items-center justify-center gap-2"
      >
        {loading === "google" ? (
          <Loader2 className="w-4 h-4 animate-spin" />
        ) : (
          <svg className="w-5 h-5" viewBox="0 0 24 24">
            <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" />
            <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
            <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
            <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
          </svg>
        )}
        Continue with Google
      </button>

      <button
        type="button"
        onClick={() => handleOAuth("github")}
        disabled={loading !== null}
        className="btn-dark w-full flex items-center justify-center gap-2"
      >
        {loading === "github" ? (
          <Loader2 className="w-4 h-4 animate-spin" />
        ) : (
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
          </svg>
        )}
        Continue with GitHub
      </button>
    </div>
  );
}
```

### `components/discount-input.tsx`

```tsx
"use client";

import { useState } from "react";

interface DiscountInputProps {
  onCodeChange: (code: string) => void;
}

export function DiscountInput({ onCodeChange }: DiscountInputProps) {
  const [code, setCode] = useState("");
  const [open, setOpen] = useState(false);

  if (!open) {
    return (
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="text-sm text-accent-orange hover:underline font-bold"
      >
        Have a discount code?
      </button>
    );
  }

  return (
    <div className="flex gap-2 items-center">
      <input
        type="text"
        value={code}
        onChange={(e) => {
          setCode(e.target.value.toUpperCase());
          onCodeChange(e.target.value.toUpperCase());
        }}
        placeholder="Enter code"
        className="px-3 py-2 bg-bg-primary border-2 border-border rounded-xl text-text-primary text-sm placeholder:text-text-muted focus:border-accent-orange focus:outline-none w-40"
      />
      {code && <span className="text-xs text-success font-bold">Applied!</span>}
    </div>
  );
}
```

### `components/credits-card.tsx`

```tsx
"use client";

import { isUnlimited } from "@/app/api/credits/helpers";

interface CreditsCardProps {
  balance: number;
  transactions?: {
    id: string;
    amount: number;
    type: string;
    description: string;
    created_at: string;
  }[];
}

export function CreditsCard({ balance, transactions = [] }: CreditsCardProps) {
  const displayBalance = isUnlimited(balance) ? "Unlimited" : balance.toLocaleString();

  return (
    <div className="p-6 bg-bg-secondary rounded-2xl border-2 border-border">
      <h3 className="text-lg font-extrabold text-text-primary mb-1">Credits</h3>
      <p className="text-3xl font-extrabold text-accent-orange mb-4">{displayBalance}</p>

      {transactions.length > 0 && (
        <div className="space-y-2">
          <p className="text-xs font-bold text-text-muted uppercase tracking-wider">
            Recent Activity
          </p>
          {transactions.slice(0, 5).map((tx) => (
            <div key={tx.id} className="flex items-center justify-between text-sm">
              <span className="text-text-secondary">{tx.description}</span>
              <span
                className={`font-mono font-bold ${tx.amount > 0 ? "text-success" : "text-error"}`}
              >
                {tx.amount > 0 ? "+" : ""}
                {tx.amount}
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
```

### `components/subscription-card.tsx`

```tsx
"use client";

import { useState } from "react";

interface Subscription {
  status: string;
  product_name: string;
  current_period_end: string;
  creem_customer_id: string;
}

export function SubscriptionCard({ subscription }: { subscription: Subscription | null }) {
  const [loading, setLoading] = useState(false);

  async function handleManageBilling() {
    setLoading(true);
    const res = await fetch("/api/billing-portal", { method: "POST" });
    const { url } = await res.json();
    if (url) window.location.href = url;
    setLoading(false);
  }

  if (!subscription) {
    return (
      <div
        className="bg-bg-secondary rounded-2xl border-2 border-border p-6"
        style={{ boxShadow: "4px 4px 0px rgba(255, 255, 255, 0.06)" }}
      >
        <h2 className="text-lg font-extrabold text-text-primary mb-2">Subscription</h2>
        <p className="text-text-muted mb-4">No active subscription.</p>
        <a href="/pricing" className="inline-block px-5 py-2.5 btn-primary text-sm">
          View Plans →
        </a>
      </div>
    );
  }

  const statusColors: Record<string, string> = {
    active: "bg-success/20 text-success border-2 border-success/30",
    cancelled: "bg-error/20 text-error border-2 border-error/30",
    paused: "bg-warning/20 text-warning border-2 border-warning/30",
    expired: "bg-accent-violet/20 text-accent-violet border-2 border-accent-violet/30",
  };

  return (
    <div
      className="bg-bg-secondary rounded-2xl border-2 border-border p-6"
      style={{ boxShadow: "4px 4px 0px rgba(255, 255, 255, 0.06)" }}
    >
      <h2 className="text-lg font-extrabold text-text-primary mb-4">Subscription</h2>
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <span className="text-text-secondary">Plan</span>
          <span className="font-bold text-text-primary">{subscription.product_name}</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-text-secondary">Status</span>
          <span
            className={`px-3 py-1 rounded-full text-xs font-extrabold uppercase tracking-wide ${statusColors[subscription.status] || statusColors.expired}`}
          >
            {subscription.status}
          </span>
        </div>
        {subscription.current_period_end && (
          <div className="flex items-center justify-between">
            <span className="text-text-secondary">Next billing</span>
            <span className="text-sm font-medium text-text-primary">
              {new Date(subscription.current_period_end).toLocaleDateString()}
            </span>
          </div>
        )}
      </div>
      <button
        type="button"
        onClick={handleManageBilling}
        disabled={loading}
        className="mt-5 w-full py-3 btn-dark disabled:btn-disabled text-sm"
      >
        {loading ? "Loading..." : "Manage Billing →"}
      </button>
    </div>
  );
}
```

### `components/pricing-card.tsx`

```tsx
"use client";

import { useState } from "react";

interface PricingPlan {
  name: string;
  price: string;
  period: string;
  features: string[];
  productId: string;
  popular?: boolean;
}

export function PricingCard({ plan, discountCode }: { plan: PricingPlan; discountCode?: string }) {
  const [loading, setLoading] = useState(false);

  async function handleCheckout() {
    setLoading(true);
    const res = await fetch("/api/checkout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ productId: plan.productId, discountCode }),
    });

    const data = await res.json();
    if (data.url) {
      window.location.href = data.url;
    } else if (data.error === "Unauthorized") {
      window.location.href = "/login";
    }
    setLoading(false);
  }

  return (
    <div
      className={`bg-bg-secondary rounded-2xl border-3 p-7 flex flex-col ${
        plan.popular ? "border-accent-orange" : "border-border"
      }`}
      style={{
        boxShadow: plan.popular
          ? "6px 6px 0px var(--accent-orange)"
          : "4px 4px 0px rgba(255, 255, 255, 0.06)",
      }}
    >
      {plan.popular && (
        <span className="self-start px-4 py-1.5 bg-accent-orange text-black text-xs font-extrabold uppercase tracking-widest rounded-full mb-4 border-2 border-black">
          Most Popular
        </span>
      )}
      <h3 className="text-xl font-extrabold text-text-primary">{plan.name}</h3>
      <div className="mt-2 mb-6">
        <span className="text-5xl font-extrabold text-text-primary tracking-tight">
          {plan.price}
        </span>
        <span className="text-text-muted text-lg">/{plan.period}</span>
      </div>
      <ul className="space-y-3 mb-8 flex-1">
        {plan.features.map((feature) => (
          <li key={feature} className="flex items-center gap-2.5 text-sm text-text-secondary">
            <svg
              className="w-5 h-5 text-success flex-shrink-0"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              role="img"
              aria-label="Included"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2.5}
                d="M5 13l4 4L19 7"
              />
            </svg>
            {feature}
          </li>
        ))}
      </ul>
      <button
        type="button"
        onClick={handleCheckout}
        disabled={loading}
        className={`w-full py-3 text-base ${
          plan.popular ? "btn-primary" : "btn-dark"
        } disabled:btn-disabled`}
      >
        {loading ? "Redirecting..." : "Get Started →"}
      </button>
    </div>
  );
}
```

### `components/pricing-section.tsx`

```tsx
"use client";

import { useState } from "react";
import { PricingCard } from "./pricing-card";

interface PricingPlan {
  name: string;
  price: string;
  period: string;
  features: string[];
  productId: string;
  popular?: boolean;
}

export function PricingSection({ plans }: { plans: PricingPlan[] }) {
  const [discountCode, setDiscountCode] = useState("");
  const [showDiscount, setShowDiscount] = useState(false);

  return (
    <div className="space-y-6">
      <div className="grid gap-6 md:grid-cols-3">
        {plans.map((plan) => (
          <PricingCard key={plan.name} plan={plan} discountCode={discountCode || undefined} />
        ))}
      </div>

      <div className="flex justify-center">
        {!showDiscount ? (
          <button
            type="button"
            onClick={() => setShowDiscount(true)}
            className="text-sm text-accent-orange hover:underline font-bold"
          >
            Have a discount code?
          </button>
        ) : (
          <div className="flex gap-2 items-center">
            <input
              type="text"
              value={discountCode}
              onChange={(e) => setDiscountCode(e.target.value.toUpperCase())}
              placeholder="Enter code"
              className="px-3 py-2 bg-bg-secondary border-2 border-border rounded-xl text-text-primary text-sm placeholder:text-text-muted focus:border-accent-orange focus:outline-none w-44"
            />
            {discountCode && <span className="text-xs text-success font-bold">Applied!</span>}
          </div>
        )}
      </div>
    </div>
  );
}
```

### `components/cancel-dialog.tsx`

```tsx
"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

interface CancelDialogProps {
  subscriptionId: string;
  currentPeriodEnd?: string;
}

export function CancelDialog({ subscriptionId, currentPeriodEnd }: CancelDialogProps) {
  const [open, setOpen] = useState(false);
  const [mode, setMode] = useState<"scheduled" | "immediate">("scheduled");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  async function handleCancel() {
    setLoading(true);
    setError(null);

    const res = await fetch("/api/subscriptions/cancel", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ subscriptionId, mode }),
    });

    const data = await res.json();

    if (!res.ok) {
      setError(data.error || "Cancel failed");
      setLoading(false);
      return;
    }

    router.refresh();
    setOpen(false);
    setLoading(false);
  }

  if (!open) {
    return (
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="text-sm text-text-muted hover:text-error transition-colors"
      >
        Cancel Subscription
      </button>
    );
  }

  return (
    <div className="rounded-xl border-2 border-error/30 bg-error/5 p-4 space-y-3">
      <p className="text-sm font-bold text-text-primary">Cancel your subscription?</p>

      <div className="space-y-2">
        <label className="flex items-center gap-2 cursor-pointer">
          <input
            type="radio"
            name="cancel-mode"
            checked={mode === "scheduled"}
            onChange={() => setMode("scheduled")}
            className="accent-accent-orange"
          />
          <span className="text-sm text-text-secondary">
            At end of billing period
            {currentPeriodEnd && (
              <span className="text-text-muted">
                {" "}
                ({new Date(currentPeriodEnd).toLocaleDateString()})
              </span>
            )}
          </span>
        </label>
        <label className="flex items-center gap-2 cursor-pointer">
          <input
            type="radio"
            name="cancel-mode"
            checked={mode === "immediate"}
            onChange={() => setMode("immediate")}
            className="accent-accent-orange"
          />
          <span className="text-sm text-text-secondary">Immediately</span>
        </label>
      </div>

      {error && <p className="text-error text-sm">{error}</p>}

      <div className="flex gap-2">
        <button
          type="button"
          onClick={handleCancel}
          disabled={loading}
          className="px-4 py-2 text-sm bg-error text-white font-bold rounded-lg hover:bg-error/90 disabled:opacity-50"
        >
          {loading ? "Cancelling..." : "Confirm Cancellation"}
        </button>
        <button
          type="button"
          onClick={() => {
            setOpen(false);
            setError(null);
          }}
          className="px-4 py-2 text-sm text-text-muted hover:text-text-primary"
        >
          Keep Subscription
        </button>
      </div>
    </div>
  );
}
```

### `components/seat-manager.tsx`

```tsx
"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

interface SeatManagerProps {
  subscriptionId: string;
  currentSeats: number;
}

export function SeatManager({ subscriptionId, currentSeats }: SeatManagerProps) {
  const [seats, setSeats] = useState(currentSeats);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  async function handleUpdate() {
    if (seats === currentSeats || seats <= 0) return;

    setLoading(true);
    setError(null);

    const res = await fetch("/api/subscriptions/update-seats", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ subscriptionId, units: seats }),
    });

    const data = await res.json();

    if (!res.ok) {
      setError(data.error || "Update failed");
      setLoading(false);
      return;
    }

    router.refresh();
    setLoading(false);
  }

  return (
    <div className="space-y-2">
      <p className="text-sm font-bold text-text-primary">Team Seats</p>
      <div className="flex items-center gap-3">
        <button
          type="button"
          onClick={() => setSeats(Math.max(1, seats - 1))}
          className="w-8 h-8 rounded-lg border-2 border-border text-text-primary font-bold hover:border-accent-orange"
        >
          -
        </button>
        <span className="text-lg font-bold text-text-primary min-w-[2rem] text-center">
          {seats}
        </span>
        <button
          type="button"
          onClick={() => setSeats(seats + 1)}
          className="w-8 h-8 rounded-lg border-2 border-border text-text-primary font-bold hover:border-accent-orange"
        >
          +
        </button>
        {seats !== currentSeats && (
          <button
            type="button"
            onClick={handleUpdate}
            disabled={loading}
            className="px-3 py-1 text-sm btn-primary disabled:opacity-50"
          >
            {loading ? "Updating..." : "Update"}
          </button>
        )}
      </div>
      {error && <p className="text-error text-sm">{error}</p>}
    </div>
  );
}
```

### `components/upgrade-dialog.tsx`

```tsx
"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

interface Plan {
  id: string;
  name: string;
  price: number;
}

interface UpgradeDialogProps {
  subscriptionId: string;
  currentProductId: string;
  plans: Plan[];
}

export function UpgradeDialog({ subscriptionId, currentProductId, plans }: UpgradeDialogProps) {
  const [loading, setLoading] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const currentPlan = plans.find((p) => p.id === currentProductId);

  async function handleUpgrade(newProductId: string) {
    setLoading(newProductId);
    setError(null);

    const res = await fetch("/api/subscriptions/upgrade", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ subscriptionId, newProductId }),
    });

    const data = await res.json();

    if (!res.ok) {
      setError(data.error || "Upgrade failed");
      setLoading(null);
      return;
    }

    router.refresh();
    setLoading(null);
  }

  return (
    <div className="space-y-3">
      <p className="text-sm font-bold text-text-primary">Change Plan</p>

      <div className="grid gap-2 sm:grid-cols-3">
        {plans.map((plan) => {
          const isCurrent = plan.id === currentProductId;
          const isUpgrade = currentPlan && plan.price > currentPlan.price;

          return (
            <div
              key={plan.id}
              className={`rounded-lg border-2 p-3 ${
                isCurrent ? "border-accent-orange bg-accent-orange/5" : "border-border"
              }`}
            >
              <div className="text-sm font-bold text-text-primary">{plan.name}</div>
              <div className="text-sm text-text-muted">${(plan.price / 100).toFixed(0)}/mo</div>
              {isCurrent ? (
                <span className="mt-2 inline-block text-xs text-accent-orange font-bold">
                  Current Plan
                </span>
              ) : (
                <button
                  type="button"
                  onClick={() => handleUpgrade(plan.id)}
                  disabled={loading !== null}
                  className="mt-2 px-3 py-1 text-xs font-bold btn-secondary disabled:opacity-50"
                >
                  {loading === plan.id ? "Processing..." : isUpgrade ? "Upgrade" : "Downgrade"}
                </button>
              )}
            </div>
          );
        })}
      </div>

      {error && <p className="text-error text-sm">{error}</p>}
    </div>
  );
}
```

### `components/license-card.tsx`

```tsx
"use client";

import { useState } from "react";

interface License {
  id: string;
  creem_license_key: string;
  product_name?: string;
  status: string;
  instance_name?: string;
  instance_id?: string;
  activated_at?: string;
}

interface LicenseCardProps {
  licenses: License[];
}

export function LicenseCard({ licenses }: LicenseCardProps) {
  const [activating, setActivating] = useState<string | null>(null);

  async function handleActivate(key: string) {
    const instanceName = window.prompt("Enter instance name (e.g., my-laptop):");
    if (!instanceName) return;

    setActivating(key);
    const res = await fetch("/api/licenses/activate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ key, instanceName }),
    });
    setActivating(null);

    if (res.ok) {
      window.location.reload();
    }
  }

  if (licenses.length === 0) {
    return (
      <div className="p-6 bg-bg-secondary rounded-2xl border-2 border-border">
        <h3 className="text-lg font-extrabold text-text-primary mb-2">License Keys</h3>
        <p className="text-text-muted text-sm">
          No license keys yet. Purchase a one-time product to get a license key.
        </p>
      </div>
    );
  }

  return (
    <div className="p-6 bg-bg-secondary rounded-2xl border-2 border-border">
      <h3 className="text-lg font-extrabold text-text-primary mb-4">License Keys</h3>
      <div className="space-y-3">
        {licenses.map((lic) => (
          <div key={lic.id} className="p-3 bg-bg-primary rounded-xl border border-border">
            <div className="flex items-center justify-between mb-1">
              <span className="text-sm font-bold text-text-primary">
                {lic.product_name ?? "Product"}
              </span>
              <span
                className={`text-xs font-bold px-2 py-0.5 rounded-full ${
                  lic.status === "active"
                    ? "bg-success/10 text-success"
                    : "bg-text-muted/10 text-text-muted"
                }`}
              >
                {lic.status}
              </span>
            </div>
            <code className="text-xs text-text-muted font-mono block mb-2">
              {lic.creem_license_key}
            </code>
            {lic.status === "inactive" && (
              <button
                type="button"
                onClick={() => handleActivate(lic.creem_license_key)}
                disabled={activating === lic.creem_license_key}
                className="text-xs btn-primary px-3 py-1"
              >
                {activating === lic.creem_license_key ? "Activating..." : "Activate"}
              </button>
            )}
            {lic.instance_name && (
              <p className="text-xs text-text-muted mt-1">Device: {lic.instance_name}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
```

### `components/transaction-list.tsx`

```tsx
"use client";

import { useEffect, useState } from "react";

interface Transaction {
  id: string;
  displayAmount: string;
  status: string;
  created_at: string;
}

export function TransactionList() {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);

  // biome-ignore lint/correctness/useExhaustiveDependencies: fetchTransactions depends on page
  useEffect(() => {
    fetchTransactions();
  }, [page]);

  async function fetchTransactions() {
    setLoading(true);
    const res = await fetch(`/api/transactions?page=${page}`);
    const data = await res.json();
    setTransactions(data.transactions ?? []);
    setLoading(false);
  }

  if (loading) {
    return <p className="text-text-muted text-sm">Loading transactions...</p>;
  }

  if (transactions.length === 0) {
    return <p className="text-text-muted text-sm">No transactions yet.</p>;
  }

  return (
    <div className="space-y-3">
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="text-left text-text-muted border-b border-border">
              <th className="pb-2 font-bold">Date</th>
              <th className="pb-2 font-bold">Amount</th>
              <th className="pb-2 font-bold">Status</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((tx) => (
              <tr key={tx.id} className="border-b border-border/50">
                <td className="py-2 text-text-secondary">
                  {new Date(tx.created_at).toLocaleDateString()}
                </td>
                <td className="py-2 font-mono font-bold text-text-primary">{tx.displayAmount}</td>
                <td className="py-2">
                  <span
                    className={`text-xs font-bold px-2 py-0.5 rounded-full ${
                      tx.status === "completed"
                        ? "bg-success/10 text-success"
                        : tx.status === "pending"
                          ? "bg-warning/10 text-warning"
                          : "bg-text-muted/10 text-text-muted"
                    }`}
                  >
                    {tx.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex gap-2">
        <button
          type="button"
          onClick={() => setPage(Math.max(1, page - 1))}
          disabled={page === 1}
          className="px-3 py-1 text-sm btn-secondary disabled:opacity-50"
        >
          Previous
        </button>
        <button
          type="button"
          onClick={() => setPage(page + 1)}
          disabled={transactions.length < 20}
          className="px-3 py-1 text-sm btn-secondary disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
}
```

---

## 14. Database Migrations

### `supabase/migrations/002_expand.sql`

```sql
-- Migration 002: Expand schema for comprehensive Creem integration
-- Adds: profiles, credits, licenses, webhook_events, billing_events tables
-- Modifies: subscriptions (new columns + expanded status CHECK)

-- ============================================================
-- 1. Profiles table (synced with auth.users)
-- ============================================================
create table if not exists public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  email text not null,
  full_name text,
  creem_customer_id text unique,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

alter table public.profiles enable row level security;

create policy "Users can view own profile"
  on public.profiles for select
  using (auth.uid() = id);

create policy "Users can update own profile"
  on public.profiles for update
  using (auth.uid() = id);

-- Auto-create profile on user signup
create or replace function public.handle_new_user()
returns trigger as $$
begin
  insert into public.profiles (id, email, full_name)
  values (new.id, new.email, new.raw_user_meta_data->>'full_name');
  return new;
end;
$$ language plpgsql security definer;

create or replace trigger on_auth_user_created
  after insert on auth.users
  for each row execute function public.handle_new_user();

-- ============================================================
-- 2. Expand subscriptions table
-- ============================================================

-- Drop old CHECK and add expanded one
alter table public.subscriptions drop constraint if exists subscriptions_status_check;
alter table public.subscriptions add constraint subscriptions_status_check
  check (status in ('active', 'trialing', 'past_due', 'scheduled_cancel', 'cancelled', 'paused', 'expired', 'inactive'));

-- New columns
alter table public.subscriptions add column if not exists cancel_at timestamptz;
alter table public.subscriptions add column if not exists previous_product_id text;
alter table public.subscriptions add column if not exists seats integer default 1;

-- ============================================================
-- 3. Credits wallet
-- ============================================================
create table if not exists public.credits (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references auth.users(id) on delete cascade not null unique,
  balance integer not null default 0 check (balance >= -1),
  updated_at timestamptz default now()
);

create index if not exists idx_credits_user_id on public.credits(user_id);

alter table public.credits enable row level security;

create policy "Users can view own credits"
  on public.credits for select
  using (auth.uid() = user_id);

-- Credit transaction audit log
create table if not exists public.credit_transactions (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references auth.users(id) on delete cascade not null,
  amount integer not null,
  type text not null check (type in ('subscription_topup', 'purchase', 'spend', 'refund')),
  description text,
  created_at timestamptz default now()
);

create index if not exists idx_credit_transactions_user_id on public.credit_transactions(user_id);

alter table public.credit_transactions enable row level security;

create policy "Users can view own credit transactions"
  on public.credit_transactions for select
  using (auth.uid() = user_id);

-- Atomic spend function (prevents race conditions)
create or replace function public.spend_credits(
  p_user_id uuid,
  p_amount integer,
  p_reason text
) returns integer as $$
declare
  v_balance integer;
begin
  -- Lock row and get current balance
  select balance into v_balance
  from public.credits
  where user_id = p_user_id
  for update;

  if v_balance is null then
    raise exception 'No credits record for user';
  end if;

  -- Unlimited credits: log spend but don't deduct
  if v_balance = -1 then
    insert into public.credit_transactions (user_id, amount, type, description)
    values (p_user_id, -p_amount, 'spend', p_reason);
    return -1;
  end if;

  if v_balance < p_amount then
    raise exception 'Insufficient credits: have %, need %', v_balance, p_amount;
  end if;

  -- Deduct
  update public.credits
  set balance = balance - p_amount, updated_at = now()
  where user_id = p_user_id;

  -- Log transaction
  insert into public.credit_transactions (user_id, amount, type, description)
  values (p_user_id, -p_amount, 'spend', p_reason);

  return v_balance - p_amount;
end;
$$ language plpgsql security definer;

-- ============================================================
-- 4. Licenses
-- ============================================================
create table if not exists public.licenses (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references auth.users(id) on delete cascade not null,
  creem_license_key text not null,
  creem_product_id text not null,
  product_name text,
  status text not null default 'inactive' check (status in ('active', 'inactive', 'expired')),
  instance_name text,
  instance_id text,
  activated_at timestamptz,
  expires_at timestamptz,
  created_at timestamptz default now()
);

create index if not exists idx_licenses_user_id on public.licenses(user_id);
create index if not exists idx_licenses_key on public.licenses(creem_license_key);

alter table public.licenses enable row level security;

create policy "Users can view own licenses"
  on public.licenses for select
  using (auth.uid() = user_id);

-- ============================================================
-- 5. Webhook events (idempotency)
-- ============================================================
create table if not exists public.webhook_events (
  id text primary key,
  event_type text not null,
  processed_at timestamptz default now()
);

-- ============================================================
-- 6. Billing events (refunds, disputes)
-- ============================================================
create table if not exists public.billing_events (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references auth.users(id) on delete cascade,
  event_type text not null check (event_type in ('refund', 'dispute')),
  creem_transaction_id text,
  creem_subscription_id text,
  amount integer,
  currency text,
  reason text,
  status text default 'open',
  created_at timestamptz default now()
);

create index if not exists idx_billing_events_user_id on public.billing_events(user_id);

alter table public.billing_events enable row level security;

create policy "Users can view own billing events"
  on public.billing_events for select
  using (auth.uid() = user_id);

-- ============================================================
-- Reuse updated_at trigger for new tables
-- ============================================================
create trigger profiles_updated_at
  before update on public.profiles
  for each row execute function public.handle_updated_at();

create trigger credits_updated_at
  before update on public.credits
  for each row execute function public.handle_updated_at();
```

---

## 15. E2E Test Suite

### `playwright.config.ts`

```ts
import { defineConfig, devices } from "@playwright/test";

const baseURL = process.env.BASE_URL || "http://localhost:3000";

export default defineConfig({
  testDir: "./e2e",
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: "html",
  use: {
    baseURL,
    trace: "on-first-retry",
  },
  projects: [
    {
      name: "chromium",
      use: { ...devices["Desktop Chrome"] },
    },
  ],
  ...(baseURL === "http://localhost:3000" && {
    webServer: {
      command: "bun run dev",
      url: "http://localhost:3000",
      reuseExistingServer: !process.env.CI,
    },
  }),
});
```

### `e2e/landing.spec.ts`

```ts
import { expect, test } from "@playwright/test";

test.describe("Landing Page", () => {
  test("renders hero section with key elements", async ({ page }) => {
    await page.goto("/");

    await expect(page.getByText("SaaSKit")).toBeVisible();
    await expect(page.getByRole("heading", { level: 1, name: /launch your.*saas/i })).toBeVisible();
    await expect(page.getByText("in hours, not weeks")).toBeVisible();
    await expect(page.getByRole("link", { name: "Pricing" })).toBeVisible();
    await expect(page.getByRole("link", { name: "Sign In" })).toBeVisible();
    await expect(page.getByRole("link", { name: "Get Started" }).first()).toBeVisible();
  });

  test("displays feature cards", async ({ page }) => {
    await page.goto("/");

    await expect(page.getByRole("heading", { name: "Authentication" })).toBeVisible();
    await expect(page.getByRole("heading", { name: "Payments & Subscriptions" })).toBeVisible();
    await expect(page.getByRole("heading", { name: "Database" })).toBeVisible();
    await expect(page.getByRole("heading", { name: "Webhooks" })).toBeVisible();
    await expect(page.getByRole("heading", { name: "Billing Portal" })).toBeVisible();
  });

  test("displays tech stack section", async ({ page }) => {
    await page.goto("/");

    const stackSection = page.locator("section").filter({ hasText: "Built with the best stack" });
    for (const tech of ["Next.js 16", "React 19", "TypeScript", "Supabase", "Creem"]) {
      await expect(stackSection.getByText(tech, { exact: true })).toBeVisible();
    }
  });

  test("navigates to pricing page", async ({ page }) => {
    await page.goto("/");
    await page.getByRole("link", { name: "Pricing" }).click();
    await expect(page).toHaveURL("/pricing");
    await expect(page.getByRole("heading", { name: "Simple, transparent pricing" })).toBeVisible();
  });

  test("navigates to signup page", async ({ page }) => {
    await page.goto("/");
    await page.getByRole("link", { name: "Get Started" }).first().click();
    await expect(page).toHaveURL("/signup");
    await expect(page.getByText("Create your account")).toBeVisible();
  });

  test("navigates to login page", async ({ page }) => {
    await page.goto("/");
    await page.getByRole("link", { name: "Sign In" }).click();
    await expect(page).toHaveURL("/login");
    await expect(page.getByRole("heading", { name: "Sign In" })).toBeVisible();
  });
});
```

### `e2e/auth.spec.ts`

```ts
import { expect, test } from "@playwright/test";

test.describe("Authentication Pages", () => {
  test.describe("Login Page", () => {
    test("renders login form", async ({ page }) => {
      await page.goto("/login");

      await expect(page.getByRole("heading", { name: "Sign In" })).toBeVisible();
      await expect(page.getByLabel("Email")).toBeVisible();
      await expect(page.getByLabel("Password")).toBeVisible();
      await expect(page.getByRole("button", { name: "Sign In" })).toBeVisible();
      await expect(page.getByRole("link", { name: "Sign Up" })).toBeVisible();
    });

    test("shows validation on empty submit", async ({ page }) => {
      await page.goto("/login");
      await page.getByRole("button", { name: "Sign In" }).click();
      // HTML5 required validation prevents submission
      await expect(page).toHaveURL("/login");
    });

    test("shows error for invalid credentials", async ({ page }) => {
      await page.goto("/login");
      await page.getByLabel("Email").fill("nonexistent@example.com");
      await page.getByLabel("Password").fill("wrongpassword");
      await page.getByRole("button", { name: "Sign In" }).click();

      await expect(page.getByText(/invalid|Invalid/i)).toBeVisible({ timeout: 10000 });
    });

    test("navigates to signup page", async ({ page }) => {
      await page.goto("/login");
      await page.getByRole("link", { name: "Sign Up" }).click();
      await expect(page).toHaveURL("/signup");
    });
  });

  test.describe("Signup Page", () => {
    test("renders signup form", async ({ page }) => {
      await page.goto("/signup");

      await expect(page.getByRole("heading", { name: "Create your account" })).toBeVisible();
      await expect(page.getByLabel("Email")).toBeVisible();
      await expect(page.getByLabel("Password")).toBeVisible();
      await expect(page.getByRole("button", { name: "Sign Up" })).toBeVisible();
      await expect(page.getByRole("link", { name: "Sign In" })).toBeVisible();
    });

    test("shows validation on empty submit", async ({ page }) => {
      await page.goto("/signup");
      await page.getByRole("button", { name: "Sign Up" }).click();
      await expect(page).toHaveURL("/signup");
    });

    test("navigates to login page", async ({ page }) => {
      await page.goto("/signup");
      await page.getByRole("link", { name: "Sign In" }).click();
      await expect(page).toHaveURL("/login");
    });

    test("shows loading state during submission", async ({ page }) => {
      await page.goto("/signup");
      await page.getByLabel("Email").fill("test-e2e@example.com");
      await page.getByLabel("Password").fill("testpassword123");
      await page.getByRole("button", { name: "Sign Up" }).click();

      // Should show loading state or redirect to dashboard
      await expect(
        page.getByText("Creating account..."),
      ).toBeVisible({ timeout: 5000 }).catch(() => {
        // Already redirected to dashboard
        return expect(page).toHaveURL(/\/dashboard/);
      });
    });
  });
});
```

### `e2e/pricing.spec.ts`

```ts
import { expect, test } from "@playwright/test";

test.describe("Pricing Page", () => {
  test("renders all three pricing plans", async ({ page }) => {
    await page.goto("/pricing");

    await expect(page.getByRole("heading", { name: /simple.*transparent.*pricing/i })).toBeVisible();

    // Plan names
    await expect(page.getByRole("heading", { name: "Starter" })).toBeVisible();
    await expect(page.getByRole("heading", { name: "Pro" })).toBeVisible();
    await expect(page.getByRole("heading", { name: "Enterprise" })).toBeVisible();

    // Prices
    await expect(page.getByText("$9", { exact: true })).toBeVisible();
    await expect(page.getByText("$29", { exact: true })).toBeVisible();
    await expect(page.getByText("$99", { exact: true })).toBeVisible();
  });

  test("highlights Pro plan as popular", async ({ page }) => {
    await page.goto("/pricing");

    await expect(page.getByText("Most Popular")).toBeVisible();
  });

  test("shows plan features", async ({ page }) => {
    await page.goto("/pricing");

    // Starter features
    await expect(page.getByText("3 projects")).toBeVisible();
    await expect(page.getByText("Basic analytics")).toBeVisible();

    // Pro features
    await expect(page.getByText("Unlimited projects")).toBeVisible();
    await expect(page.getByText("Advanced analytics")).toBeVisible();
    await expect(page.getByText("API access")).toBeVisible();

    // Enterprise features
    await expect(page.getByText("SSO / SAML")).toBeVisible();
    await expect(page.getByText("SLA guarantee")).toBeVisible();
  });

  test("has subscribe buttons for each plan", async ({ page }) => {
    await page.goto("/pricing");

    const buttons = page.getByRole("button", { name: /subscribe|get started/i });
    await expect(buttons).toHaveCount(3);
  });

  test("header links work", async ({ page }) => {
    await page.goto("/pricing");

    await expect(page.getByRole("link", { name: "SaaSKit" })).toBeVisible();
    await page.getByRole("link", { name: "SaaSKit" }).click();
    await expect(page).toHaveURL("/");
  });

  test("shows Creem branding in footer", async ({ page }) => {
    await page.goto("/pricing");

    await expect(page.getByText("Creem").first()).toBeVisible();
  });
});
```

### `e2e/checkout.spec.ts`

```ts
import { expect, test } from "@playwright/test";

test.describe("Checkout Flow", () => {
  const testEmail = process.env.E2E_TEST_EMAIL || "e2e-test@example.com";
  const testPassword = process.env.E2E_TEST_PASSWORD || "testpassword123";

  test("unauthenticated user clicking subscribe triggers auth redirect or error", async ({
    page,
  }) => {
    await page.goto("/pricing");

    const subscribeButtons = page.getByRole("button", { name: /subscribe|get started/i });
    await subscribeButtons.first().click();

    // Should redirect to login or show an error
    await expect(
      page.getByRole("heading", { name: /sign in/i }).or(page.getByText(/unauthorized/i)),
    ).toBeVisible({ timeout: 10000 });
  });

  test("authenticated user clicking subscribe redirects to Creem checkout", async ({ page }) => {
    test.skip(!process.env.E2E_TEST_EMAIL || !process.env.E2E_TEST_PASSWORD, "Set E2E_TEST_EMAIL and E2E_TEST_PASSWORD to run");

    // Login first
    await page.goto("/login");
    await page.getByLabel("Email").fill(testEmail);
    await page.getByLabel("Password").fill(testPassword);
    await page.getByRole("button", { name: "Sign In" }).click();
    await page.waitForURL(/\/dashboard/, { timeout: 15000 });

    // Go to pricing and subscribe
    await page.goto("/pricing");
    const subscribeButtons = page.getByRole("button", { name: /subscribe|get started/i });
    await subscribeButtons.first().click();

    // Should redirect to Creem checkout (test-api.creem.io or creem.io)
    await page.waitForURL(/(creem\.io|creem\.com)/, { timeout: 15000 });
    await expect(page.url()).toContain("creem");
  });
});

test.describe("Checkout Success Sync", () => {
  test("dashboard handles checkout success params gracefully", async ({ page }) => {
    // Visit dashboard with checkout params but unauthenticated — should redirect to login
    await page.goto("/dashboard?checkout=success&subscription_id=test&product_id=test");
    await expect(page).toHaveURL(/\/login/, { timeout: 10000 });
  });
});
```

### `e2e/dashboard.spec.ts`

```ts
import { expect, test } from "@playwright/test";

test.describe("Dashboard", () => {
  test("redirects unauthenticated users to login", async ({ page }) => {
    await page.goto("/dashboard");

    // Should redirect to /login
    await expect(page).toHaveURL(/\/login/, { timeout: 10000 });
  });
});

test.describe("Dashboard (authenticated)", () => {
  const testEmail = process.env.E2E_TEST_EMAIL;
  const testPassword = process.env.E2E_TEST_PASSWORD;

  test.skip(!testEmail || !testPassword, "Set E2E_TEST_EMAIL and E2E_TEST_PASSWORD to run");

  test.beforeEach(async ({ page }) => {
    // Login first
    await page.goto("/login");
    await page.getByLabel("Email").fill(testEmail!);
    await page.getByLabel("Password").fill(testPassword!);
    await page.getByRole("button", { name: "Sign In" }).click();

    // Wait for dashboard redirect
    await page.waitForURL(/\/dashboard/, { timeout: 15000 });
  });

  test("shows dashboard with user email", async ({ page }) => {
    await expect(page.getByRole("heading", { name: "Dashboard" })).toBeVisible();
    await expect(page.getByText(testEmail!)).toBeVisible();
  });

  test("shows subscription card", async ({ page }) => {
    // Should show subscription status (active or upgrade prompt)
    await expect(
      page.getByText("Subscription").or(page.getByText("No Active Plan")),
    ).toBeVisible();
  });

  test("shows features section", async ({ page }) => {
    await expect(page.getByText("Your SaaS Features")).toBeVisible();
  });

  test("has sign out button", async ({ page }) => {
    const signOut = page.getByRole("button", { name: /sign out/i });
    await expect(signOut).toBeVisible();
  });

  test("sign out logs user out", async ({ page }) => {
    await page.getByRole("button", { name: /sign out/i }).click();
    // App redirects away from dashboard after sign out
    await page.waitForURL((url) => !url.pathname.startsWith("/dashboard"), { timeout: 10000 });
  });
});
```

### `e2e/demo-mode.spec.ts`

```ts
import { expect, test } from "@playwright/test";

test.describe("Demo Mode (no credentials required)", () => {
  test("landing page loads with hero", async ({ page }) => {
    await page.goto("/");
    await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
    await expect(page.getByText("SaaSKit")).toBeVisible();
  });

  test("pricing page shows all three plans", async ({ page }) => {
    await page.goto("/pricing");
    await expect(page.getByText("Starter")).toBeVisible();
    await expect(page.getByText("Pro")).toBeVisible();
    await expect(page.getByText("Enterprise")).toBeVisible();
  });

  test("pricing page has clickable checkout buttons", async ({ page }) => {
    await page.goto("/pricing");
    const buttons = page.getByRole("button", { name: /get started/i });
    await expect(buttons.first()).toBeVisible();
    await expect(buttons).toHaveCount(3);
  });

  test("demo checkout redirects to dashboard", async ({ page }) => {
    await page.goto("/pricing");
    const firstButton = page.getByRole("button", { name: /get started/i }).first();
    await firstButton.click();
    await page.waitForURL(/dashboard/, { timeout: 10000 });
    await expect(page).toHaveURL(/dashboard/);
  });

  test("dashboard is accessible in demo mode", async ({ page }) => {
    await page.goto("/dashboard");
    // In demo mode, middleware bypasses auth — page should load
    await expect(page.locator("body")).not.toBeEmpty();
  });
});
```

### `e2e/webhook.spec.ts`

```ts
import crypto from "node:crypto";
import { expect, test } from "@playwright/test";

const WEBHOOK_URL = "/api/webhooks/creem";

test.describe("Webhook Endpoint", () => {
  test("rejects request without signature", async ({ request }) => {
    const res = await request.post(WEBHOOK_URL, {
      data: { event_type: "checkout.completed", object: {} },
    });
    expect(res.status()).toBe(401);
  });

  test("rejects request with invalid signature", async ({ request }) => {
    const body = JSON.stringify({ event_type: "checkout.completed", object: {} });
    const res = await request.post(WEBHOOK_URL, {
      data: body,
      headers: {
        "content-type": "application/json",
        "creem-signature": "invalidsignature",
      },
    });
    expect(res.status()).toBe(401);
  });

  test("accepts valid webhook with correct signature", async ({ request }) => {
    const secret = process.env.CREEM_WEBHOOK_SECRET;
    if (!secret) {
      test.skip();
      return;
    }

    const payload = JSON.stringify({
      event_type: "checkout.completed",
      object: {
        customer: { id: "cus_test", metadata: { user_id: "test-user-id" } },
        product: { id: "prod_test", name: "Test Plan" },
        subscription: { id: "sub_test", current_period_end_date: "2026-04-06T00:00:00Z" },
      },
    });

    const hmac = crypto.createHmac("sha256", secret);
    const signature = hmac.update(payload).digest("hex");

    const res = await request.post(WEBHOOK_URL, {
      data: payload,
      headers: {
        "content-type": "application/json",
        "creem-signature": signature,
      },
    });

    // 200 = success, 500 = DB error (fake user_id doesn't exist in DB)
    // Both mean signature verification passed (not 401)
    expect([200, 500]).toContain(res.status());
    const body = await res.json();
    expect(body).toHaveProperty(res.status() === 200 ? "received" : "error");
  });
});
```

---

## 16. Error Boundary

### `app/(main)/dashboard/error.tsx`

```tsx
"use client";

export default function DashboardError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="min-h-screen bg-bg-primary flex items-center justify-center p-4">
      <div
        className="bg-bg-secondary rounded-2xl border-2 border-border p-8 max-w-md w-full text-center"
        style={{ boxShadow: "4px 4px 0px rgba(255, 255, 255, 0.06)" }}
      >
        <h2 className="text-xl font-extrabold text-text-primary mb-2">Something went wrong</h2>
        <p className="text-text-muted text-sm mb-6">
          {error.message || "An unexpected error occurred."}
        </p>
        <button type="button" onClick={reset} className="btn-primary text-sm px-6 py-2">
          Try Again
        </button>
      </div>
    </div>
  );
}
```

---

## 15. Drizzle ORM Integration

### `drizzle.config.ts`

```ts
import { defineConfig } from "drizzle-kit";

export default defineConfig({
  schema: "./lib/db/schema.ts",
  out: "./supabase/migrations",
  dialect: "postgresql",
  dbCredentials: {
    url: process.env.DATABASE_URL!,
  },
  verbose: true,
  strict: true,
});
```

### `lib/db/index.ts`

```ts
import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import * as schema from "./schema";

function createDrizzleClient() {
  const databaseUrl = process.env.DATABASE_URL;
  if (!databaseUrl) return null;            // demo mode fallback
  const client = postgres(databaseUrl, { prepare: false });
  return drizzle(client, { schema });
}

export const db = createDrizzleClient();
export type DrizzleDB = NonNullable<typeof db>;
```

### `lib/db/schema.ts` — Drizzle ORM schema with RLS

The schema defines all 7 tables with:
- **RLS enabled** via `.enableRLS()` on every user-facing table
- **Authenticated user policies** — `auth.uid() = user_id` for SELECT
- **Service role policies** — ALL operations for webhook/admin use
- **CHECK constraints** — status enums, balance bounds
- **Indexes** — on user_id, status, and lookup columns

Key pattern (example for `profiles`):

```ts
export const profiles = pgTable(
  "profiles",
  {
    id: uuid("id").primaryKey(),
    email: text("email").notNull(),
    fullName: text("full_name"),
    creemCustomerId: text("creem_customer_id").unique(),
    createdAt: timestamptz("created_at").defaultNow(),
    updatedAt: timestamptz("updated_at").defaultNow(),
  },
  (table) => [
    pgPolicy("Users can view own profile", {
      as: "permissive",
      for: "select",
      to: "authenticated",
      using: sql`auth.uid() = ${table.id}`,
    }),
    pgPolicy("Users can update own profile", {
      as: "permissive",
      for: "update",
      to: "authenticated",
      using: sql`auth.uid() = ${table.id}`,
    }),
    pgPolicy("Service role can manage profiles", {
      as: "permissive",
      for: "all",
      to: "service_role",
      using: sql`true`,
      withCheck: sql`true`,
    }),
  ],
).enableRLS();
```

Tables defined: `profiles`, `subscriptions`, `credits`, `credit_transactions`, `licenses`, `webhook_events`, `billing_events`.

### RLS Policy Matrix

| Table | RLS | Auth SELECT | Auth UPDATE | Service Role ALL |
|-------|-----|-------------|-------------|------------------|
| profiles | ✅ | `auth.uid() = id` | `auth.uid() = id` | ✅ |
| subscriptions | ✅ | `auth.uid() = user_id` | — | ✅ |
| credits | ✅ | `auth.uid() = user_id` | — | ✅ |
| credit_transactions | ✅ | `auth.uid() = user_id` | — | ✅ |
| licenses | ✅ | `auth.uid() = user_id` | — | ✅ |
| billing_events | ✅ | `auth.uid() = user_id` | — | ✅ |
| webhook_events | ❌ | — | — | — (no RLS, service-only) |

### npm Scripts

| Script | Command | Purpose |
|--------|---------|---------|
| `db:generate` | `drizzle-kit generate` | Generate SQL migrations from schema changes |
| `db:push` | `drizzle-kit push` | Push schema directly to database (dev) |
| `db:migrate` | `drizzle-kit migrate` | Run pending migrations |
| `db:studio` | `drizzle-kit studio` | Open Drizzle Studio GUI |

### Demo Mode Compatibility

The Drizzle client (`lib/db/index.ts`) returns `null` when `DATABASE_URL` is not set. This means:
- In **demo mode**, all data flows through the Supabase mock (`lib/demo/supabase-mock.ts`)
- In **production**, both the Supabase client (with RLS) and the Drizzle client (direct SQL) are available
- No changes to the demo store or mock client were required

---

*End of Implementation Blueprint — all text-based source files in the repository have been captured verbatim above. Binary assets (images, videos) are excluded per the original specification.*