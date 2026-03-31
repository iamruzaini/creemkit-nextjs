import { describe, it, expect } from "vitest";
import { formatTransaction } from "@/app/api/transactions/helpers";

describe("formatTransaction", () => {
  it("formats USD transaction correctly", () => {
    const result = formatTransaction({
      id: "tx_1",
      amount: 2900,
      currency: "usd",
      status: "completed",
      created_at: "2025-01-15T10:00:00Z",
    });
    expect(result.id).toBe("tx_1");
    expect(result.displayAmount).toBe("$29.00");
    expect(result.status).toBe("completed");
    expect(result.created_at).toBe("2025-01-15T10:00:00Z");
  });

  it("formats EUR transaction correctly", () => {
    const result = formatTransaction({
      id: "tx_2",
      amount: 999,
      currency: "eur",
      status: "pending",
      created_at: "2025-02-01T12:00:00Z",
    });
    expect(result.id).toBe("tx_2");
    expect(result.displayAmount).toContain("9.99");
    expect(result.status).toBe("pending");
  });

  it("formats GBP transaction correctly", () => {
    const result = formatTransaction({
      id: "tx_3",
      amount: 5000,
      currency: "gbp",
      status: "completed",
      created_at: "2025-03-01T08:00:00Z",
    });
    expect(result.id).toBe("tx_3");
    expect(result.displayAmount).toContain("50.00");
  });

  it("defaults to USD for unknown currency", () => {
    const result = formatTransaction({
      id: "tx_4",
      amount: 1000,
      currency: "jpy",
      status: "completed",
      created_at: "2025-03-01T08:00:00Z",
    });
    expect(result.displayAmount).toBe("$10.00");
  });

  it("handles numeric created_at timestamp", () => {
    const ts = new Date("2025-06-01T00:00:00Z").getTime();
    const result = formatTransaction({
      id: "tx_5",
      amount: 100,
      currency: "usd",
      status: "completed",
      created_at: ts,
    });
    expect(result.created_at).toBe(new Date(ts).toISOString());
  });

  it("handles string created_at as-is", () => {
    const result = formatTransaction({
      id: "tx_6",
      amount: 100,
      currency: "usd",
      status: "completed",
      created_at: "2025-01-01",
    });
    expect(result.created_at).toBe("2025-01-01");
  });
});
