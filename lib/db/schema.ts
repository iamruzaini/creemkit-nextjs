import {
  pgTable,
  pgPolicy,
  uuid,
  text,
  integer,
  timestamp,
  check,
  index,
} from "drizzle-orm/pg-core";
import { sql } from "drizzle-orm";

/** Shorthand for `timestamp with time zone` columns */
const timestamptz = (name: string) =>
  timestamp(name, { withTimezone: true, mode: "string" });

// ============================================================
// 1. Profiles table (synced with auth.users)
// ============================================================
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

// ============================================================
// 2. Subscriptions table
// ============================================================
export const subscriptions = pgTable(
  "subscriptions",
  {
    id: uuid("id").primaryKey().defaultRandom(),
    userId: uuid("user_id").notNull().unique(),
    creemCustomerId: text("creem_customer_id"),
    creemSubscriptionId: text("creem_subscription_id").unique(),
    creemProductId: text("creem_product_id"),
    productName: text("product_name"),
    status: text("status").notNull().default("inactive"),
    currentPeriodEnd: timestamptz("current_period_end"),
    cancelAt: timestamptz("cancel_at"),
    previousProductId: text("previous_product_id"),
    seats: integer("seats").default(1),
    createdAt: timestamptz("created_at").defaultNow(),
    updatedAt: timestamptz("updated_at").defaultNow(),
  },
  (table) => [
    check(
      "subscriptions_status_check",
      sql`${table.status} IN ('active', 'trialing', 'past_due', 'scheduled_cancel', 'cancelled', 'paused', 'expired', 'inactive')`,
    ),
    index("idx_subscriptions_user_id").on(table.userId),
    index("idx_subscriptions_creem_subscription_id").on(table.creemSubscriptionId),
    index("idx_subscriptions_status").on(table.status),
    pgPolicy("Users can view own subscription", {
      as: "permissive",
      for: "select",
      to: "authenticated",
      using: sql`auth.uid() = ${table.userId}`,
    }),
    pgPolicy("Service role can manage subscriptions", {
      as: "permissive",
      for: "all",
      to: "service_role",
      using: sql`true`,
      withCheck: sql`true`,
    }),
  ],
).enableRLS();

// ============================================================
// 3. Credits wallet
// ============================================================
export const credits = pgTable(
  "credits",
  {
    id: uuid("id").primaryKey().defaultRandom(),
    userId: uuid("user_id").notNull().unique(),
    balance: integer("balance").notNull().default(0),
    updatedAt: timestamptz("updated_at").defaultNow(),
  },
  (table) => [
    check("credits_balance_check", sql`${table.balance} >= -1`),
    index("idx_credits_user_id").on(table.userId),
    pgPolicy("Users can view own credits", {
      as: "permissive",
      for: "select",
      to: "authenticated",
      using: sql`auth.uid() = ${table.userId}`,
    }),
    pgPolicy("Service role can manage credits", {
      as: "permissive",
      for: "all",
      to: "service_role",
      using: sql`true`,
      withCheck: sql`true`,
    }),
  ],
).enableRLS();

// ============================================================
// 4. Credit transactions (audit log)
// ============================================================
export const creditTransactions = pgTable(
  "credit_transactions",
  {
    id: uuid("id").primaryKey().defaultRandom(),
    userId: uuid("user_id").notNull(),
    amount: integer("amount").notNull(),
    type: text("type").notNull(),
    description: text("description"),
    createdAt: timestamptz("created_at").defaultNow(),
  },
  (table) => [
    check(
      "credit_transactions_type_check",
      sql`${table.type} IN ('subscription_topup', 'purchase', 'spend', 'refund')`,
    ),
    index("idx_credit_transactions_user_id").on(table.userId),
    pgPolicy("Users can view own credit transactions", {
      as: "permissive",
      for: "select",
      to: "authenticated",
      using: sql`auth.uid() = ${table.userId}`,
    }),
    pgPolicy("Service role can manage credit transactions", {
      as: "permissive",
      for: "all",
      to: "service_role",
      using: sql`true`,
      withCheck: sql`true`,
    }),
  ],
).enableRLS();

// ============================================================
// 5. Licenses
// ============================================================
export const licenses = pgTable(
  "licenses",
  {
    id: uuid("id").primaryKey().defaultRandom(),
    userId: uuid("user_id").notNull(),
    creemLicenseKey: text("creem_license_key").notNull(),
    creemProductId: text("creem_product_id").notNull(),
    productName: text("product_name"),
    status: text("status").notNull().default("inactive"),
    instanceName: text("instance_name"),
    instanceId: text("instance_id"),
    activatedAt: timestamptz("activated_at"),
    expiresAt: timestamptz("expires_at"),
    createdAt: timestamptz("created_at").defaultNow(),
  },
  (table) => [
    check(
      "licenses_status_check",
      sql`${table.status} IN ('active', 'inactive', 'expired')`,
    ),
    index("idx_licenses_user_id").on(table.userId),
    index("idx_licenses_key").on(table.creemLicenseKey),
    pgPolicy("Users can view own licenses", {
      as: "permissive",
      for: "select",
      to: "authenticated",
      using: sql`auth.uid() = ${table.userId}`,
    }),
    pgPolicy("Service role can manage licenses", {
      as: "permissive",
      for: "all",
      to: "service_role",
      using: sql`true`,
      withCheck: sql`true`,
    }),
  ],
).enableRLS();

// ============================================================
// 6. Webhook events (idempotency)
// ============================================================
export const webhookEvents = pgTable(
  "webhook_events",
  {
    id: text("id").primaryKey(),
    eventType: text("event_type").notNull(),
    processedAt: timestamptz("processed_at").defaultNow(),
  },
  (table) => [
    index("idx_webhook_events_type").on(table.eventType),
  ],
);

// ============================================================
// 7. Billing events (refunds, disputes)
// ============================================================
export const billingEvents = pgTable(
  "billing_events",
  {
    id: uuid("id").primaryKey().defaultRandom(),
    userId: uuid("user_id"),
    eventType: text("event_type").notNull(),
    creemTransactionId: text("creem_transaction_id"),
    creemSubscriptionId: text("creem_subscription_id"),
    amount: integer("amount"),
    currency: text("currency"),
    reason: text("reason"),
    status: text("status").default("open"),
    createdAt: timestamptz("created_at").defaultNow(),
  },
  (table) => [
    check(
      "billing_events_type_check",
      sql`${table.eventType} IN ('refund', 'dispute')`,
    ),
    index("idx_billing_events_user_id").on(table.userId),
    pgPolicy("Users can view own billing events", {
      as: "permissive",
      for: "select",
      to: "authenticated",
      using: sql`auth.uid() = ${table.userId}`,
    }),
    pgPolicy("Service role can manage billing events", {
      as: "permissive",
      for: "all",
      to: "service_role",
      using: sql`true`,
      withCheck: sql`true`,
    }),
  ],
).enableRLS();
