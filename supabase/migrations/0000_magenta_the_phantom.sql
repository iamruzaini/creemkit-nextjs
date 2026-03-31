CREATE TABLE "billing_events" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"user_id" uuid,
	"event_type" text NOT NULL,
	"creem_transaction_id" text,
	"creem_subscription_id" text,
	"amount" integer,
	"currency" text,
	"reason" text,
	"status" text DEFAULT 'open',
	"created_at" timestamp with time zone DEFAULT now(),
	CONSTRAINT "billing_events_type_check" CHECK ("billing_events"."event_type" IN ('refund', 'dispute'))
);
--> statement-breakpoint
ALTER TABLE "billing_events" ENABLE ROW LEVEL SECURITY;--> statement-breakpoint
CREATE TABLE "credit_transactions" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"user_id" uuid NOT NULL,
	"amount" integer NOT NULL,
	"type" text NOT NULL,
	"description" text,
	"created_at" timestamp with time zone DEFAULT now(),
	CONSTRAINT "credit_transactions_type_check" CHECK ("credit_transactions"."type" IN ('subscription_topup', 'purchase', 'spend', 'refund'))
);
--> statement-breakpoint
ALTER TABLE "credit_transactions" ENABLE ROW LEVEL SECURITY;--> statement-breakpoint
CREATE TABLE "credits" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"user_id" uuid NOT NULL,
	"balance" integer DEFAULT 0 NOT NULL,
	"updated_at" timestamp with time zone DEFAULT now(),
	CONSTRAINT "credits_user_id_unique" UNIQUE("user_id"),
	CONSTRAINT "credits_balance_check" CHECK ("credits"."balance" >= -1)
);
--> statement-breakpoint
ALTER TABLE "credits" ENABLE ROW LEVEL SECURITY;--> statement-breakpoint
CREATE TABLE "licenses" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"user_id" uuid NOT NULL,
	"creem_license_key" text NOT NULL,
	"creem_product_id" text NOT NULL,
	"product_name" text,
	"status" text DEFAULT 'inactive' NOT NULL,
	"instance_name" text,
	"instance_id" text,
	"activated_at" timestamp with time zone,
	"expires_at" timestamp with time zone,
	"created_at" timestamp with time zone DEFAULT now(),
	CONSTRAINT "licenses_status_check" CHECK ("licenses"."status" IN ('active', 'inactive', 'expired'))
);
--> statement-breakpoint
ALTER TABLE "licenses" ENABLE ROW LEVEL SECURITY;--> statement-breakpoint
CREATE TABLE "profiles" (
	"id" uuid PRIMARY KEY NOT NULL,
	"email" text NOT NULL,
	"full_name" text,
	"creem_customer_id" text,
	"created_at" timestamp with time zone DEFAULT now(),
	"updated_at" timestamp with time zone DEFAULT now(),
	CONSTRAINT "profiles_creem_customer_id_unique" UNIQUE("creem_customer_id")
);
--> statement-breakpoint
ALTER TABLE "profiles" ENABLE ROW LEVEL SECURITY;--> statement-breakpoint
CREATE TABLE "subscriptions" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"user_id" uuid NOT NULL,
	"creem_customer_id" text,
	"creem_subscription_id" text,
	"creem_product_id" text,
	"product_name" text,
	"status" text DEFAULT 'inactive' NOT NULL,
	"current_period_end" timestamp with time zone,
	"cancel_at" timestamp with time zone,
	"previous_product_id" text,
	"seats" integer DEFAULT 1,
	"created_at" timestamp with time zone DEFAULT now(),
	"updated_at" timestamp with time zone DEFAULT now(),
	CONSTRAINT "subscriptions_user_id_unique" UNIQUE("user_id"),
	CONSTRAINT "subscriptions_creem_subscription_id_unique" UNIQUE("creem_subscription_id"),
	CONSTRAINT "subscriptions_status_check" CHECK ("subscriptions"."status" IN ('active', 'trialing', 'past_due', 'scheduled_cancel', 'cancelled', 'paused', 'expired', 'inactive'))
);
--> statement-breakpoint
ALTER TABLE "subscriptions" ENABLE ROW LEVEL SECURITY;--> statement-breakpoint
CREATE TABLE "webhook_events" (
	"id" text PRIMARY KEY NOT NULL,
	"event_type" text NOT NULL,
	"processed_at" timestamp with time zone DEFAULT now()
);
--> statement-breakpoint
CREATE INDEX "idx_billing_events_user_id" ON "billing_events" USING btree ("user_id");--> statement-breakpoint
CREATE INDEX "idx_credit_transactions_user_id" ON "credit_transactions" USING btree ("user_id");--> statement-breakpoint
CREATE INDEX "idx_credits_user_id" ON "credits" USING btree ("user_id");--> statement-breakpoint
CREATE INDEX "idx_licenses_user_id" ON "licenses" USING btree ("user_id");--> statement-breakpoint
CREATE INDEX "idx_licenses_key" ON "licenses" USING btree ("creem_license_key");--> statement-breakpoint
CREATE INDEX "idx_subscriptions_user_id" ON "subscriptions" USING btree ("user_id");--> statement-breakpoint
CREATE INDEX "idx_subscriptions_creem_subscription_id" ON "subscriptions" USING btree ("creem_subscription_id");--> statement-breakpoint
CREATE INDEX "idx_subscriptions_status" ON "subscriptions" USING btree ("status");--> statement-breakpoint
CREATE INDEX "idx_webhook_events_type" ON "webhook_events" USING btree ("event_type");--> statement-breakpoint
CREATE POLICY "Users can view own billing events" ON "billing_events" AS PERMISSIVE FOR SELECT TO "authenticated" USING (auth.uid() = "billing_events"."user_id");--> statement-breakpoint
CREATE POLICY "Service role can manage billing events" ON "billing_events" AS PERMISSIVE FOR ALL TO "service_role" USING (true) WITH CHECK (true);--> statement-breakpoint
CREATE POLICY "Users can view own credit transactions" ON "credit_transactions" AS PERMISSIVE FOR SELECT TO "authenticated" USING (auth.uid() = "credit_transactions"."user_id");--> statement-breakpoint
CREATE POLICY "Service role can manage credit transactions" ON "credit_transactions" AS PERMISSIVE FOR ALL TO "service_role" USING (true) WITH CHECK (true);--> statement-breakpoint
CREATE POLICY "Users can view own credits" ON "credits" AS PERMISSIVE FOR SELECT TO "authenticated" USING (auth.uid() = "credits"."user_id");--> statement-breakpoint
CREATE POLICY "Service role can manage credits" ON "credits" AS PERMISSIVE FOR ALL TO "service_role" USING (true) WITH CHECK (true);--> statement-breakpoint
CREATE POLICY "Users can view own licenses" ON "licenses" AS PERMISSIVE FOR SELECT TO "authenticated" USING (auth.uid() = "licenses"."user_id");--> statement-breakpoint
CREATE POLICY "Service role can manage licenses" ON "licenses" AS PERMISSIVE FOR ALL TO "service_role" USING (true) WITH CHECK (true);--> statement-breakpoint
CREATE POLICY "Users can view own profile" ON "profiles" AS PERMISSIVE FOR SELECT TO "authenticated" USING (auth.uid() = "profiles"."id");--> statement-breakpoint
CREATE POLICY "Users can update own profile" ON "profiles" AS PERMISSIVE FOR UPDATE TO "authenticated" USING (auth.uid() = "profiles"."id");--> statement-breakpoint
CREATE POLICY "Service role can manage profiles" ON "profiles" AS PERMISSIVE FOR ALL TO "service_role" USING (true) WITH CHECK (true);--> statement-breakpoint
CREATE POLICY "Users can view own subscription" ON "subscriptions" AS PERMISSIVE FOR SELECT TO "authenticated" USING (auth.uid() = "subscriptions"."user_id");--> statement-breakpoint
CREATE POLICY "Service role can manage subscriptions" ON "subscriptions" AS PERMISSIVE FOR ALL TO "service_role" USING (true) WITH CHECK (true);