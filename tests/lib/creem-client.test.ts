import { describe, it, expect } from "vitest";
import { getServerIdx } from "@/lib/creem";

describe("getServerIdx", () => {
  it("returns 1 (sandbox) for test API keys", () => {
    expect(getServerIdx("creem_test_abc123")).toBe(1);
    expect(getServerIdx("creem_test_")).toBe(1);
  });

  it("returns 0 (production) for live API keys", () => {
    expect(getServerIdx("creem_live_abc123")).toBe(0);
    expect(getServerIdx("sk_live_abc123")).toBe(0);
  });

  it("returns 0 for empty strings", () => {
    expect(getServerIdx("")).toBe(0);
  });

  it("returns 0 for placeholder key", () => {
    expect(getServerIdx("placeholder")).toBe(0);
  });
});
