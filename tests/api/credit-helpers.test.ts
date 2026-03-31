import { describe, it, expect } from "vitest";
import { getCreditAllocation, isUnlimited, CREDIT_UNLIMITED } from "@/app/api/credits/helpers";

describe("getCreditAllocation", () => {
  it("returns 100 for starter plan", () => {
    expect(getCreditAllocation("starter")).toBe(100);
  });

  it("returns 500 for pro plan", () => {
    expect(getCreditAllocation("pro")).toBe(500);
  });

  it("returns CREDIT_UNLIMITED (-1) for enterprise plan", () => {
    expect(getCreditAllocation("enterprise")).toBe(CREDIT_UNLIMITED);
  });

  it("is case-insensitive", () => {
    expect(getCreditAllocation("Starter")).toBe(100);
    expect(getCreditAllocation("PRO")).toBe(500);
    expect(getCreditAllocation("Enterprise")).toBe(CREDIT_UNLIMITED);
  });

  it("returns 100 as default for unknown plan", () => {
    expect(getCreditAllocation("unknown")).toBe(100);
  });
});

describe("isUnlimited", () => {
  it("returns true when balance is CREDIT_UNLIMITED (-1)", () => {
    expect(isUnlimited(CREDIT_UNLIMITED)).toBe(true);
    expect(isUnlimited(-1)).toBe(true);
  });

  it("returns false for positive balance", () => {
    expect(isUnlimited(100)).toBe(false);
  });

  it("returns false for zero balance", () => {
    expect(isUnlimited(0)).toBe(false);
  });

  it("returns false for other negative values", () => {
    expect(isUnlimited(-2)).toBe(false);
  });
});
