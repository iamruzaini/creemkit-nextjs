import { NextResponse } from "next/server";
import { creem } from "@/lib/creem";
import { isDemoMode } from "@/lib/demo/mode";
import { checkRateLimit } from "@/lib/rate-limit";
import { createSupabaseServer } from "@/lib/supabase/server";

export async function POST() {
  if (isDemoMode()) {
    // In demo mode, return a mock billing portal URL pointing to the dashboard
    const appUrl = process.env.NEXT_PUBLIC_APP_URL ?? "";
    return NextResponse.json({ url: `${appUrl}/dashboard?billing=demo` });
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
