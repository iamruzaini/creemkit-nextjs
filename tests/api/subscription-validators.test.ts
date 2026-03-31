import { describe, it, expect } from "vitest";
import {
  validateCancelRequest,
  validateUpgradeRequest,
  validateSeatUpdate,
} from "@/app/api/subscriptions/validators";

describe("validateCancelRequest", () => {
  it("returns valid with subscriptionId, defaults mode to scheduled", () => {
    const result = validateCancelRequest({ subscriptionId: "sub_123" });
    expect(result.valid).toBe(true);
    if (result.valid) {
      expect(result.data.subscriptionId).toBe("sub_123");
      expect(result.data.mode).toBe("scheduled");
    }
  });

  it("accepts explicit mode immediate", () => {
    const result = validateCancelRequest({ subscriptionId: "sub_123", mode: "immediate" });
    expect(result.valid).toBe(true);
    if (result.valid) expect(result.data.mode).toBe("immediate");
  });

  it("rejects invalid mode", () => {
    const result = validateCancelRequest({ subscriptionId: "sub_123", mode: "now" });
    expect(result.valid).toBe(false);
    if (!result.valid) expect(result.error).toBe("mode must be 'immediate' or 'scheduled'");
  });

  it("rejects missing subscriptionId", () => {
    const result = validateCancelRequest({});
    expect(result.valid).toBe(false);
    if (!result.valid) expect(result.error).toBe("subscriptionId is required");
  });
});

describe("validateUpgradeRequest", () => {
  it("returns valid with subscriptionId and newProductId", () => {
    const result = validateUpgradeRequest({
      subscriptionId: "sub_123",
      newProductId: "prod_new",
    });
    expect(result.valid).toBe(true);
    if (result.valid) {
      expect(result.data.subscriptionId).toBe("sub_123");
      expect(result.data.newProductId).toBe("prod_new");
    }
  });

  it("rejects missing subscriptionId", () => {
    const result = validateUpgradeRequest({ newProductId: "prod_new" });
    expect(result.valid).toBe(false);
    if (!result.valid) expect(result.error).toBe("subscriptionId is required");
  });

  it("rejects missing newProductId", () => {
    const result = validateUpgradeRequest({ subscriptionId: "sub_123" });
    expect(result.valid).toBe(false);
    if (!result.valid) expect(result.error).toBe("newProductId is required");
  });
});

describe("validateSeatUpdate", () => {
  it("returns valid with subscriptionId and positive units", () => {
    const result = validateSeatUpdate({ subscriptionId: "sub_123", units: 5 });
    expect(result.valid).toBe(true);
    if (result.valid) {
      expect(result.data.subscriptionId).toBe("sub_123");
      expect(result.data.units).toBe(5);
    }
  });

  it("rejects zero units", () => {
    const result = validateSeatUpdate({ subscriptionId: "sub_123", units: 0 });
    expect(result.valid).toBe(false);
    if (!result.valid) expect(result.error).toBe("units must be a positive number");
  });

  it("rejects negative units", () => {
    const result = validateSeatUpdate({ subscriptionId: "sub_123", units: -2 });
    expect(result.valid).toBe(false);
    if (!result.valid) expect(result.error).toBe("units must be a positive number");
  });

  it("rejects non-number units", () => {
    const result = validateSeatUpdate({ subscriptionId: "sub_123", units: "five" });
    expect(result.valid).toBe(false);
    if (!result.valid) expect(result.error).toBe("units must be a positive number");
  });

  it("rejects missing subscriptionId", () => {
    const result = validateSeatUpdate({ units: 5 });
    expect(result.valid).toBe(false);
    if (!result.valid) expect(result.error).toBe("subscriptionId is required");
  });
});
