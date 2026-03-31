import { createServerClient } from "@supabase/ssr";
import { cookies } from "next/headers";
import { isDemoMode } from "@/lib/demo/mode";
import { createDemoClient } from "@/lib/demo/supabase-mock";

/**
 * Creates a Supabase client for use in Server Components, Server Actions,
 * and Route Handlers. Reads / writes cookies via the Next.js `cookies()` API.
 *
 * In Demo Mode, returns the in-memory mock client instead.
 */
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
