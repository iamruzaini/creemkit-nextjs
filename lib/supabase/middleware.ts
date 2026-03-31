import { createServerClient } from "@supabase/ssr";
import { type NextRequest, NextResponse } from "next/server";

/**
 * Refreshes the Supabase auth session on every matched request and
 * redirects unauthenticated users away from protected routes.
 *
 * Protected routes: `/dashboard` and any sub-paths.
 * Public auth routes (`/login`, `/signup`) redirect authenticated users
 * to `/dashboard` so they don't see the auth forms again.
 */
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
					// Forward cookies to the browser via the response.
					for (const { name, value, options } of cookiesToSet) {
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

	// IMPORTANT: Do NOT call any Supabase method between createServerClient
	// and supabase.auth.getUser(). A simple mistake here can be very hard to debug.
	const {
		data: { user },
	} = await supabase.auth.getUser();

	const { pathname } = request.nextUrl;

	// ── Protected routes: redirect unauthenticated → /login ──
	if (!user && pathname.startsWith("/dashboard")) {
		const loginUrl = request.nextUrl.clone();
		loginUrl.pathname = "/login";
		loginUrl.searchParams.set("redirectTo", pathname);
		return NextResponse.redirect(loginUrl);
	}

	// ── Auth routes: redirect authenticated → /dashboard ──
	if (user && (pathname === "/login" || pathname === "/signup")) {
		const dashboardUrl = request.nextUrl.clone();
		dashboardUrl.pathname = "/dashboard";
		return NextResponse.redirect(dashboardUrl);
	}

	return supabaseResponse;
}
