import { createClient } from "@supabase/supabase-js";
import { isDemoMode } from "@/lib/demo/mode";
import { createDemoClient } from "@/lib/demo/supabase-mock";

/**
 * Returns a Supabase admin client using the service-role key.
 *
 * ⚠️  This client bypasses Row Level Security — use it ONLY in trusted
 * server-side code (webhooks, admin scripts, cron jobs).
 *
 * In Demo Mode, returns the in-memory mock client instead.
 */
export function getSupabaseAdmin() {
  if (isDemoMode()) {
    return createDemoClient();
  }
  return createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!,
  );
}
