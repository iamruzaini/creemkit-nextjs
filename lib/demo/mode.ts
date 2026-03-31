/**
 * Returns `true` when the app is running without real Supabase credentials,
 * enabling the in-memory Demo Mode fallback.
 *
 * Detection: the env vars still hold their `.env.example` placeholder values
 * (or are completely absent).
 */
export function isDemoMode(): boolean {
	const url = process.env.NEXT_PUBLIC_SUPABASE_URL ?? "";
	const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ?? "";

	return (
		!url ||
		!key ||
		url === "https://your-project.supabase.co" ||
		key === "your-anon-key"
	);
}
