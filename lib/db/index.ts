import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import * as schema from "./schema";

/**
 * Drizzle ORM database client for direct PostgreSQL access.
 *
 * Uses the `DATABASE_URL` environment variable which should point to your
 * Supabase PostgreSQL connection string (found in Supabase Dashboard →
 * Settings → Database → Connection string → URI).
 *
 * This client is intended for server-side use only (API routes, server
 * components, webhooks). It complements — but does not replace — the
 * Supabase client helpers in `lib/supabase/` which provide auth-aware
 * queries with RLS enforcement via the anon/service-role keys.
 *
 * When `DATABASE_URL` is not set (e.g. demo mode), the module exports
 * `null` so callers can fall back to the Supabase client or demo mock.
 */

function createDrizzleClient() {
  const databaseUrl = process.env.DATABASE_URL;

  if (!databaseUrl) {
    return null;
  }

  const client = postgres(databaseUrl, { prepare: false });
  return drizzle(client, { schema });
}

/**
 * The Drizzle database instance. `null` when `DATABASE_URL` is not
 * configured (demo mode / missing env).
 */
export const db = createDrizzleClient();

export type DrizzleDB = NonNullable<typeof db>;

