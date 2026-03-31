import { describe, it, expect } from "vitest";
import { validateDiscountCreate } from "@/app/api/discounts/helpers";

describe("validateDiscountCreate", () => {
  const validPercentage = {
    name: "Summer Sale",
    type: "percentage",
    percentage: 20,
    duration: "once",
    appliesToProducts: ["prod_123"],
  };

  const validFixed = {
    name: "Flat Off",
    type: "fixed",
    amount: 500,
    duration: "forever",
    appliesToProducts: ["prod_456"],
  };

  it("validates a valid percentage discount", () => {
    const result = validateDiscountCreate(validPercentage);
    expect(result.valid).toBe(true);
    if (result.valid) {
      expect(result.data.type).toBe("percentage");
      expect(result.data.percentage).toBe(20);
    }
  });

  it("validates a valid fixed discount", () => {
    const result = validateDiscountCreate(validFixed);
    expect(result.valid).toBe(true);
    if (result.valid) {
      expect(result.data.type).toBe("fixed");
      expect(result.data.amount).toBe(500);
    }
  });

  it("rejects missing name", () => {
    const result = validateDiscountCreate({ ...validPercentage, name: "" });
    expect(result.valid).toBe(false);
    if (!result.valid) expect(result.error).toBe("name is required");
  });

  it("rejects invalid type", () => {
    const result = validateDiscountCreate({ ...validPercentage, type: "bogus" });
    expect(result.valid).toBe(false);
    if (!result.valid) expect(result.error).toBe("type must be 'percentage' or 'fixed'");
  });

  it("rejects percentage > 100", () => {
    const result = validateDiscountCreate({ ...validPercentage, percentage: 150 });
    expect(result.valid).toBe(false);
    if (!result.valid) expect(result.error).toBe("percentage must be between 1 and 100");
  });

  it("rejects percentage of 0", () => {
    const result = validateDiscountCreate({ ...validPercentage, percentage: 0 });
    expect(result.valid).toBe(false);
    if (!result.valid) expect(result.error).toBe("percentage must be between 1 and 100");
  });

  it("rejects fixed amount of 0", () => {
    const result = validateDiscountCreate({ ...validFixed, amount: 0 });
    expect(result.valid).toBe(false);
    if (!result.valid) expect(result.error).toBe("amount must be a positive number");
  });

  it("rejects negative fixed amount", () => {
    const result = validateDiscountCreate({ ...validFixed, amount: -10 });
    expect(result.valid).toBe(false);
    if (!result.valid) expect(result.error).toBe("amount must be a positive number");
  });

  it("rejects empty appliesToProducts", () => {
    const result = validateDiscountCreate({ ...validPercentage, appliesToProducts: [] });
    expect(result.valid).toBe(false);
    if (!result.valid) expect(result.error).toBe("appliesToProducts must be a non-empty array");
  });

  it("rejects invalid duration", () => {
    const result = validateDiscountCreate({ ...validPercentage, duration: "weekly" });
    expect(result.valid).toBe(false);
    if (!result.valid)
      expect(result.error).toBe("duration must be 'forever', 'once', or 'repeating'");
  });
});
