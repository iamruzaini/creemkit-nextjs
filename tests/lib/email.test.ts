import { describe, it, expect, vi } from "vitest";

// Mock the resend module to avoid actual API calls
vi.mock("resend", () => ({
  Resend: vi.fn().mockImplementation(() => ({
    emails: {
      send: vi.fn().mockResolvedValue({ data: { id: "test_id" } }),
    },
  })),
}));

describe("email service (no API key)", () => {
  it("sendWelcomeEmail returns skipped: true without API key", async () => {
    // Clear any existing API key
    const originalKey = process.env.RESEND_API_KEY;
    delete process.env.RESEND_API_KEY;

    // Re-import with clean env to get the no-op behavior
    const { sendWelcomeEmail } = await import("@/lib/email");
    const result = await sendWelcomeEmail("test@example.com", "Test");
    expect(result.success).toBe(true);
    expect(result.skipped).toBe(true);

    if (originalKey !== undefined) process.env.RESEND_API_KEY = originalKey;
  });

  it("sendPaymentConfirmation returns skipped: true without API key", async () => {
    const originalKey = process.env.RESEND_API_KEY;
    delete process.env.RESEND_API_KEY;

    const { sendPaymentConfirmation } = await import("@/lib/email");
    const result = await sendPaymentConfirmation("test@example.com", "Pro Plan", 2900);
    expect(result.success).toBe(true);
    expect(result.skipped).toBe(true);

    if (originalKey !== undefined) process.env.RESEND_API_KEY = originalKey;
  });
});
