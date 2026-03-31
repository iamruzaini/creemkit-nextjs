/**
 * @vitest-environment jsdom
 */
import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, screen } from "@testing-library/react";
import { SubscriptionCard } from "@/components/subscription-card";

// Mock fetch for billing portal
const mockFetch = vi.fn();
global.fetch = mockFetch;

describe("SubscriptionCard", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("shows 'No active subscription' when subscription is null", () => {
    render(<SubscriptionCard subscription={null} />);
    expect(screen.getByText("No active subscription.")).toBeDefined();
    expect(screen.getByText(/View Plans/)).toBeDefined();
  });

  it("shows plan name and active status", () => {
    const sub = {
      status: "active",
      product_name: "Pro Plan",
      current_period_end: "2025-06-01T00:00:00Z",
      creem_customer_id: "cus_123",
    };
    render(<SubscriptionCard subscription={sub} />);
    expect(screen.getByText("Pro Plan")).toBeDefined();
    expect(screen.getByText("active")).toBeDefined();
  });

  it("shows cancelled status", () => {
    const sub = {
      status: "cancelled",
      product_name: "Starter",
      current_period_end: "2025-06-01T00:00:00Z",
      creem_customer_id: "cus_123",
    };
    render(<SubscriptionCard subscription={sub} />);
    expect(screen.getByText("cancelled")).toBeDefined();
  });

  it("shows billing date", () => {
    const sub = {
      status: "active",
      product_name: "Pro Plan",
      current_period_end: "2025-06-01T00:00:00Z",
      creem_customer_id: "cus_123",
    };
    render(<SubscriptionCard subscription={sub} />);
    expect(screen.getByText("Next billing")).toBeDefined();
    // Date formatting may vary by locale so just check it's rendered
    expect(screen.getByText(new Date("2025-06-01T00:00:00Z").toLocaleDateString())).toBeDefined();
  });

  it("shows Manage Billing button", () => {
    const sub = {
      status: "active",
      product_name: "Pro Plan",
      current_period_end: "2025-06-01T00:00:00Z",
      creem_customer_id: "cus_123",
    };
    render(<SubscriptionCard subscription={sub} />);
    expect(screen.getByRole("button", { name: /Manage Billing/ })).toBeDefined();
  });
});
