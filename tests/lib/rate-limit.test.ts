import { describe, it, expect } from "vitest";
import { checkRateLimit } from "@/lib/rate-limit";

describe("checkRateLimit (no Redis configured)", () => {
  it("returns success: true when Redis is not configured (graceful no-op)", async () => {
    const result = await checkRateLimit("test-identifier");
    expect(result).toEqual({ success: true });
  });

  it("always returns success regardless of identifier", async () => {
    const result1 = await checkRateLimit("user_1");
    const result2 = await checkRateLimit("user_2");
    expect(result1.success).toBe(true);
    expect(result2.success).toBe(true);
  });
});
