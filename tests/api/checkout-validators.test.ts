import { describe, it, expect } from "vitest";
import { validateCheckoutRequest } from "@/app/api/checkout/validators";

describe("validateCheckoutRequest", () => {
  it("returns valid with a proper productId", () => {
    const result = validateCheckoutRequest({ productId: "prod_123" });
    expect(result.valid).toBe(true);
    if (result.valid) {
      expect(result.data.productId).toBe("prod_123");
    }
  });

  it("returns valid with productId and discountCode", () => {
    const result = validateCheckoutRequest({ productId: "prod_123", discountCode: "SAVE10" });
    expect(result.valid).toBe(true);
    if (result.valid) {
      expect(result.data.productId).toBe("prod_123");
      expect(result.data.discountCode).toBe("SAVE10");
    }
  });

  it("returns invalid when productId is missing", () => {
    const result = validateCheckoutRequest({});
    expect(result.valid).toBe(false);
    if (!result.valid) {
      expect(result.error).toBe("productId is required");
    }
  });

  it("returns invalid when productId is not a string", () => {
    const result = validateCheckoutRequest({ productId: 123 });
    expect(result.valid).toBe(false);
    if (!result.valid) {
      expect(result.error).toBe("productId is required");
    }
  });

  it("returns invalid when productId is empty string", () => {
    const result = validateCheckoutRequest({ productId: "" });
    expect(result.valid).toBe(false);
    if (!result.valid) {
      expect(result.error).toBe("productId is required");
    }
  });

  it("ignores non-string discountCode", () => {
    const result = validateCheckoutRequest({ productId: "prod_123", discountCode: 42 });
    expect(result.valid).toBe(true);
    if (result.valid) {
      expect(result.data.discountCode).toBeUndefined();
    }
  });

  it("returns valid when productId is null (treated as falsy)", () => {
    const result = validateCheckoutRequest({ productId: null });
    expect(result.valid).toBe(false);
  });
});
