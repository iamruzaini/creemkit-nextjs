import { describe, it, expect } from "vitest";
import { config } from "@/middleware";

describe("middleware config", () => {
  it("has matcher entries", () => {
    expect(config.matcher).toBeDefined();
    expect(Array.isArray(config.matcher)).toBe(true);
    expect(config.matcher.length).toBeGreaterThan(0);
  });

  it("includes /dashboard/:path*", () => {
    expect(config.matcher).toContain("/dashboard/:path*");
  });

  it("includes /login", () => {
    expect(config.matcher).toContain("/login");
  });

  it("includes /signup", () => {
    expect(config.matcher).toContain("/signup");
  });
});
