/**
 * @vitest-environment jsdom
 */
import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";

// Mock next/navigation
vi.mock("next/navigation", () => ({
  useRouter: () => ({
    push: vi.fn(),
    refresh: vi.fn(),
  }),
}));

// Mock supabase browser client
vi.mock("@/lib/supabase/client", () => ({
  createSupabaseBrowser: () => ({
    auth: {
      signOut: vi.fn().mockResolvedValue({}),
    },
  }),
}));

import { SignOutButton } from "@/components/sign-out-button";

describe("SignOutButton", () => {
  it("renders a button with Sign Out text", () => {
    render(<SignOutButton />);
    const button = screen.getByRole("button", { name: /Sign Out/i });
    expect(button).toBeDefined();
  });
});
