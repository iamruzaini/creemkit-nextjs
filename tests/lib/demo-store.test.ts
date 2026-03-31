import { describe, it, expect, beforeEach } from "vitest";
import { getDemoStore, resetDemoStore } from "@/lib/demo/store";
import { isDemoMode } from "@/lib/demo/mode";

describe("isDemoMode", () => {
  it("returns true when NEXT_PUBLIC_SUPABASE_URL is not set", () => {
    const original = process.env.NEXT_PUBLIC_SUPABASE_URL;
    delete process.env.NEXT_PUBLIC_SUPABASE_URL;
    expect(isDemoMode()).toBe(true);
    if (original !== undefined) process.env.NEXT_PUBLIC_SUPABASE_URL = original;
  });

  it("returns true when NEXT_PUBLIC_SUPABASE_URL is placeholder", () => {
    const original = process.env.NEXT_PUBLIC_SUPABASE_URL;
    process.env.NEXT_PUBLIC_SUPABASE_URL = "https://your-project.supabase.co";
    expect(isDemoMode()).toBe(true);
    if (original !== undefined) process.env.NEXT_PUBLIC_SUPABASE_URL = original;
    else delete process.env.NEXT_PUBLIC_SUPABASE_URL;
  });
});

describe("getDemoStore", () => {
  beforeEach(() => {
    resetDemoStore();
  });

  it("returns a store with seeded demo user", () => {
    const store = getDemoStore();
    expect(store.users.has("demo-user")).toBe(true);
    const user = store.users.get("demo-user");
    expect(user?.email).toBe("demo@saaskit.dev");
  });

  it("returns same instance on multiple calls", () => {
    const store1 = getDemoStore();
    const store2 = getDemoStore();
    expect(store1).toBe(store2);
  });
});

describe("resetDemoStore", () => {
  it("creates a fresh store", () => {
    const store1 = getDemoStore();
    store1.users.delete("demo-user");
    expect(store1.users.has("demo-user")).toBe(false);

    resetDemoStore();
    const store2 = getDemoStore();
    expect(store2.users.has("demo-user")).toBe(true);
  });
});

describe("credit spend via demo store", () => {
  beforeEach(() => {
    resetDemoStore();
  });

  it("demo store has initial credit balance of 50", () => {
    const store = getDemoStore();
    const wallet = store.creditWallets.get("demo-user");
    expect(wallet?.balance).toBe(50);
  });

  it("can modify credit balance", () => {
    const store = getDemoStore();
    const wallet = store.creditWallets.get("demo-user");
    if (wallet) {
      wallet.balance -= 10;
      expect(wallet.balance).toBe(40);
    }
  });
});
