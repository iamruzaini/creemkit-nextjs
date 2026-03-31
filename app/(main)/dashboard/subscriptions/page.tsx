import { AlertBanner } from "@/components/alert-banner";
import { CancelDialog } from "@/components/cancel-dialog";
import { CheckoutSync } from "@/components/checkout-sync";
import { CreditsCard } from "@/components/credits-card";
import { LicenseCard } from "@/components/license-card";
import { SeatManager } from "@/components/seat-manager";
import { SubscriptionCard } from "@/components/subscription-card";
import { UpgradeDialog } from "@/components/upgrade-dialog";
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

export default async function SubscriptionsPage() {
  const supabase = await createSupabaseServer();
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) return null;

  const { data: subscription } = await supabase
    .from("subscriptions")
    .select("*")
    .eq("user_id", user.id)
    .in("status", ["active", "trialing", "past_due", "scheduled_cancel"])
    .order("created_at", { ascending: false })
    .limit(1)
    .maybeSingle();

  const { data: credits } = await supabase
    .from("credits")
    .select("balance")
    .eq("user_id", user.id)
    .single();

  const { data: creditTxs } = await supabase
    .from("credit_transactions")
    .select("*")
    .eq("user_id", user.id)
    .order("created_at", { ascending: false })
    .limit(5);

  const { data: licenses } = await supabase
    .from("licenses")
    .select("*")
    .eq("user_id", user.id)
    .order("created_at", { ascending: false });

  return (
    <div className="flex-1 overflow-auto">
      <CheckoutSync />

      <main className="max-w-6xl mx-auto px-4 md:px-6 py-8 space-y-6">
        {subscription?.status === "scheduled_cancel" && (
          <AlertBanner
            type="warning"
            title="Subscription Cancelling"
            message={`Your subscription will end on ${new Date(subscription.cancel_at).toLocaleDateString()}.`}
          />
        )}

        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-6">
            <SubscriptionCard subscription={subscription} />

            {subscription && (
              <div
                className="bg-bg-secondary rounded-2xl border-2 border-border p-6"
                style={{ boxShadow: "4px 4px 0px rgba(255, 255, 255, 0.06)" }}
              >
                <div className="space-y-6">
                  <SeatManager
                    subscriptionId={subscription.creem_subscription_id}
                    currentSeats={subscription.seats}
                  />
                  <div className="h-px bg-border" />
                  <UpgradeDialog
                    subscriptionId={subscription.creem_subscription_id}
                    currentProductId={subscription.creem_product_id}
                    plans={PLANS}
                  />
                  <div className="h-px bg-border" />
                  <CancelDialog
                    subscriptionId={subscription.creem_subscription_id}
                    currentPeriodEnd={subscription.current_period_end}
                  />
                </div>
              </div>
            )}
          </div>

          <div className="space-y-6">
            <CreditsCard balance={credits?.balance || 0} transactions={creditTxs || []} />
          </div>
        </div>

        <LicenseCard licenses={licenses || []} />
      </main>
    </div>
  );
}
