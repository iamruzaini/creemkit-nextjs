import { describe, it, expect } from "vitest";
import {
  mapSubscriptionStatus,
  buildSubscriptionUpsert,
  buildSubscriptionUpdate,
} from "@/app/api/webhooks/creem/handlers";

describe("mapSubscriptionStatus", () => {
  it("maps subscription.canceled to cancelled", () => {
    expect(mapSubscriptionStatus("subscription.canceled")).toBe("cancelled");
  });

  it("maps subscription.active to active", () => {
    expect(mapSubscriptionStatus("subscription.active")).toBe("active");
  });

  it("maps subscription.past_due to past_due", () => {
    expect(mapSubscriptionStatus("subscription.past_due")).toBe("past_due");
  });

  it("maps subscription.trialing to trialing", () => {
    expect(mapSubscriptionStatus("subscription.trialing")).toBe("trialing");
  });

  it("maps subscription.paused to paused", () => {
    expect(mapSubscriptionStatus("subscription.paused")).toBe("paused");
  });

  it("maps subscription.expired to expired", () => {
    expect(mapSubscriptionStatus("subscription.expired")).toBe("expired");
  });

  it("maps subscription.unpaid to past_due", () => {
    expect(mapSubscriptionStatus("subscription.unpaid")).toBe("past_due");
  });

  it("maps subscription.paid to active", () => {
    expect(mapSubscriptionStatus("subscription.paid")).toBe("active");
  });

  it("maps subscription.update to active", () => {
    expect(mapSubscriptionStatus("subscription.update")).toBe("active");
  });

  it("returns null for unknown event type", () => {
    expect(mapSubscriptionStatus("unknown.event")).toBeNull();
  });
});

describe("buildSubscriptionUpsert", () => {
  it("builds correct upsert row from checkout event", () => {
    const event = {
      metadata: { user_id: "usr_123" },
      customer: { id: "cus_abc" },
      product: { id: "prod_pro", name: "Pro Plan" },
      subscription: {
        id: "sub_xyz",
        current_period_end_date: new Date("2025-06-01T00:00:00Z"),
      },
    };

    const row = buildSubscriptionUpsert(event);
    expect(row.user_id).toBe("usr_123");
    expect(row.creem_customer_id).toBe("cus_abc");
    expect(row.creem_subscription_id).toBe("sub_xyz");
    expect(row.creem_product_id).toBe("prod_pro");
    expect(row.product_name).toBe("Pro Plan");
    expect(row.status).toBe("active");
    expect(row.current_period_end).toBe("2025-06-01T00:00:00.000Z");
  });

  it("handles missing subscription", () => {
    const event = {
      metadata: { user_id: "usr_123" },
      customer: { id: "cus_abc" },
      product: { id: "prod_pro", name: "Pro" },
    };

    const row = buildSubscriptionUpsert(event);
    expect(row.creem_subscription_id).toBeUndefined();
    expect(row.current_period_end).toBeUndefined();
  });

  it("handles missing metadata", () => {
    const event = {
      customer: { id: "cus_abc" },
      product: { id: "prod_pro" },
    };

    const row = buildSubscriptionUpsert(event);
    expect(row.user_id).toBeUndefined();
  });
});

describe("buildSubscriptionUpdate", () => {
  it("builds update with status only", () => {
    const row = buildSubscriptionUpdate("active", {});
    expect(row.status).toBe("active");
    expect(row.current_period_end).toBeUndefined();
    expect(row.cancel_at).toBeUndefined();
  });

  it("includes current_period_end when provided", () => {
    const row = buildSubscriptionUpdate("active", {
      current_period_end_date: new Date("2025-12-31T23:59:59Z"),
    });
    expect(row.current_period_end).toBe("2025-12-31T23:59:59.000Z");
  });

  it("includes cancel_at for scheduled_cancel status", () => {
    const row = buildSubscriptionUpdate("scheduled_cancel", {
      canceled_at: new Date("2025-06-15T00:00:00Z"),
    });
    expect(row.status).toBe("scheduled_cancel");
    expect(row.cancel_at).toBe("2025-06-15T00:00:00.000Z");
  });

  it("does not set cancel_at for non-scheduled_cancel status", () => {
    const row = buildSubscriptionUpdate("cancelled", {
      canceled_at: new Date("2025-06-15T00:00:00Z"),
    });
    expect(row.cancel_at).toBeUndefined();
  });
});
