import { describe, it, expect, vi } from "vitest";

// Mock getSupabaseAdmin to avoid real DB calls
vi.mock("@/lib/supabase/admin", () => ({
  getSupabaseAdmin: vi.fn().mockReturnValue({
    from: vi.fn().mockReturnValue({
      select: vi.fn().mockReturnValue({
        eq: vi.fn().mockReturnValue({
          eq: vi.fn().mockReturnValue({
            maybeSingle: vi.fn().mockResolvedValue({
              data: { product_name: "Pro Plan", status: "active" },
            }),
          }),
        }),
      }),
    }),
  }),
}));

import {
  PLAN_FEATURES,
  getPlanFeatures,
  planHasFeature,
  hasAccess,
} from "@/lib/entitlements";

describe("PLAN_FEATURES", () => {
  it("has starter, pro, and enterprise plans", () => {
    expect(PLAN_FEATURES).toHaveProperty("starter");
    expect(PLAN_FEATURES).toHaveProperty("pro");
    expect(PLAN_FEATURES).toHaveProperty("enterprise");
  });

  it("starter has analytics and support", () => {
    expect(PLAN_FEATURES.starter).toContain("analytics");
    expect(PLAN_FEATURES.starter).toContain("support");
  });

  it("enterprise has all features including sso", () => {
    expect(PLAN_FEATURES.enterprise).toContain("sso");
    expect(PLAN_FEATURES.enterprise).toContain("unlimited_team");
  });
});

describe("getPlanFeatures", () => {
  it("returns starter features for 'Starter'", () => {
    expect(getPlanFeatures("Starter")).toEqual(PLAN_FEATURES.starter);
  });

  it("returns pro features for 'Pro Plan'", () => {
    expect(getPlanFeatures("Pro Plan")).toEqual(PLAN_FEATURES.pro);
  });

  it("returns enterprise features for 'Enterprise'", () => {
    expect(getPlanFeatures("Enterprise")).toEqual(PLAN_FEATURES.enterprise);
  });

  it("returns empty array for unknown plan", () => {
    expect(getPlanFeatures("Unknown")).toEqual([]);
  });
});

describe("planHasFeature", () => {
  it("returns true when feature exists in plan", () => {
    expect(planHasFeature("Pro", "api")).toBe(true);
    expect(planHasFeature("Enterprise", "sso")).toBe(true);
  });

  it("returns false when feature is not in plan", () => {
    expect(planHasFeature("Starter", "sso")).toBe(false);
    expect(planHasFeature("Starter", "api")).toBe(false);
  });
});

describe("hasAccess", () => {
  it("returns true when user has active subscription with feature (mocked)", async () => {
    const result = await hasAccess("user_123", "api");
    expect(result).toBe(true);
  });
});
