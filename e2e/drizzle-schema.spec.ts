import { expect, test } from "@playwright/test";

/**
 * These tests verify that the Drizzle ORM schema integration does not
 * break the application in demo mode (where DATABASE_URL is absent and
 * the Drizzle client returns null). The key invariant is that all
 * user-facing pages continue to load correctly because they fall back
 * to the Supabase client / demo mock.
 */
test.describe("Drizzle ORM schema — demo mode compatibility", () => {
  test("landing page still loads after Drizzle integration", async ({
    page,
  }) => {
    await page.goto("/");
    await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
  });

  test("dashboard loads in demo mode (Drizzle client is null)", async ({
    page,
  }) => {
    await page.goto("/dashboard");
    // Demo mode middleware bypasses auth — page must render
    await expect(page.locator("body")).not.toBeEmpty();
  });

  test("pricing page functional after Drizzle integration", async ({
    page,
  }) => {
    await page.goto("/pricing");
    await expect(
      page.getByRole("heading", { name: "Starter" }),
    ).toBeVisible();
    await expect(page.getByRole("heading", { name: "Pro" })).toBeVisible();
    await expect(
      page.getByRole("heading", { name: "Enterprise" }),
    ).toBeVisible();
  });

  test("demo checkout still works after Drizzle integration", async ({
    page,
  }) => {
    await page.goto("/pricing");
    const firstButton = page
      .getByRole("button", { name: /get started/i })
      .first();
    await firstButton.click();
    await page.waitForURL(/dashboard/, { timeout: 10000 });
    await expect(page).toHaveURL(/dashboard/);
  });
});

