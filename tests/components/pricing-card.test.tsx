/**
 * @vitest-environment jsdom
 */
import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { PricingCard } from "@/components/pricing-card";

// Mock fetch globally
const mockFetch = vi.fn();
global.fetch = mockFetch;

// Mock window.location
const mockLocation = { href: "" };
Object.defineProperty(window, "location", {
  value: mockLocation,
  writable: true,
});

describe("PricingCard", () => {
  const plan = {
    name: "Pro",
    price: "$29",
    period: "month",
    features: ["Unlimited projects", "API access", "Priority support"],
    productId: "prod_pro",
    popular: true,
  };

  beforeEach(() => {
    vi.clearAllMocks();
    mockLocation.href = "";
  });

  it("renders plan name and price", () => {
    render(<PricingCard plan={plan} />);
    expect(screen.getByText("Pro")).toBeDefined();
    expect(screen.getByText("$29")).toBeDefined();
    expect(screen.getByText("/month")).toBeDefined();
  });

  it("renders all features", () => {
    render(<PricingCard plan={plan} />);
    for (const feature of plan.features) {
      expect(screen.getByText(feature)).toBeDefined();
    }
  });

  it("renders Most Popular badge when popular", () => {
    render(<PricingCard plan={plan} />);
    expect(screen.getByText(/Most Popular/)).toBeDefined();
  });

  it("does not render Most Popular badge when not popular", () => {
    const basicPlan = { ...plan, popular: false };
    render(<PricingCard plan={basicPlan} />);
    expect(screen.queryByText(/Most Popular/)).toBeNull();
  });

  it("renders Get Started button", () => {
    render(<PricingCard plan={plan} />);
    expect(screen.getByRole("button", { name: /Get Started/ })).toBeDefined();
  });

  it("POSTs to /api/checkout on button click", async () => {
    mockFetch.mockResolvedValueOnce({
      json: () => Promise.resolve({ url: "https://checkout.creem.io/test" }),
    });

    render(<PricingCard plan={plan} />);
    fireEvent.click(screen.getByRole("button", { name: /Get Started/ }));

    await waitFor(() => {
      expect(mockFetch).toHaveBeenCalledWith("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ productId: "prod_pro", discountCode: undefined }),
      });
    });
  });

  it("shows loading state while processing", async () => {
    mockFetch.mockImplementation(
      () => new Promise((resolve) => setTimeout(() => resolve({
        json: () => Promise.resolve({ url: "https://checkout.creem.io/test" }),
      }), 100)),
    );

    render(<PricingCard plan={plan} />);
    fireEvent.click(screen.getByRole("button", { name: /Get Started/ }));

    expect(screen.getByRole("button", { name: /Redirecting/ })).toBeDefined();
  });

  it("redirects to /login on Unauthorized", async () => {
    mockFetch.mockResolvedValueOnce({
      json: () => Promise.resolve({ error: "Unauthorized" }),
    });

    render(<PricingCard plan={plan} />);
    fireEvent.click(screen.getByRole("button", { name: /Get Started/ }));

    await waitFor(() => {
      expect(mockLocation.href).toBe("/login");
    });
  });
});
