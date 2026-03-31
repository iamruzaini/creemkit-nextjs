import { type NextRequest, NextResponse } from "next/server";
import { isDemoMode } from "@/lib/demo/mode";
import { updateSession } from "@/lib/supabase/middleware";

/**
 * Root middleware — runs on every request matching `config.matcher`.
 *
 * When Demo Mode is active (no real Supabase credentials) the middleware
 * skips Supabase session management entirely and lets the request through.
 *
 * When running with real credentials the middleware delegates to
 * `updateSession()` which:
 *   - Refreshes the Supabase auth session cookie
 *   - Redirects unauthenticated users on /dashboard/** to /login
 *   - Redirects authenticated users on /login & /signup to /dashboard
 *
 * **CRITICAL:** Dashboard & protected pages (including subscription pages)
 * — middleware redirects unauthenticated users to `/login`.
 */
export async function middleware(request: NextRequest) {
	// In demo mode, bypass all Supabase auth handling
	if (isDemoMode()) {
		return NextResponse.next();
	}

	return updateSession(request);
}

export const config = {
	matcher: ["/dashboard/:path*", "/login", "/signup"],
};
