import { describe, it, expect } from "vitest";
import sitemap from "@/app/sitemap";
import robots from "@/app/robots";

describe("sitemap", () => {
  it("returns an array of entries", () => {
    const entries = sitemap();
    expect(Array.isArray(entries)).toBe(true);
    expect(entries.length).toBe(4);
  });

  it("has root URL entry with priority 1", () => {
    const entries = sitemap();
    const root = entries.find((e) => !e.url.includes("/pricing") && !e.url.includes("/login") && !e.url.includes("/signup"));
    expect(root).toBeDefined();
    expect(root?.priority).toBe(1);
  });

  it("has /pricing entry", () => {
    const entries = sitemap();
    const pricing = entries.find((e) => e.url.includes("/pricing"));
    expect(pricing).toBeDefined();
    expect(pricing?.priority).toBe(0.8);
  });

  it("has /login entry", () => {
    const entries = sitemap();
    const login = entries.find((e) => e.url.includes("/login"));
    expect(login).toBeDefined();
  });

  it("has /signup entry", () => {
    const entries = sitemap();
    const signup = entries.find((e) => e.url.includes("/signup"));
    expect(signup).toBeDefined();
  });
});

describe("robots", () => {
  it("returns rules with disallow for /api/ and /dashboard/", () => {
    const config = robots();
    expect(config.rules).toBeDefined();
    const rules = Array.isArray(config.rules) ? config.rules : [config.rules];
    const mainRule = rules[0];
    expect(mainRule.disallow).toContain("/api/");
    expect(mainRule.disallow).toContain("/dashboard/");
  });

  it("includes sitemap URL", () => {
    const config = robots();
    expect(config.sitemap).toBeDefined();
    expect(config.sitemap).toContain("sitemap.xml");
  });
});
