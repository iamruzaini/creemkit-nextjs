import { expect, test } from "@playwright/test";

test.describe("Landing Page", () => {
	test("renders hero section with key elements", async ({ page }) => {
		await page.goto("/");

		await expect(page.getByText("CreemKit").first()).toBeVisible();
		await expect(page.getByRole("heading", { level: 1, name: /launch your.*saas/i })).toBeVisible();
		await expect(page.getByText("in hours, not weeks")).toBeVisible();
		await expect(page.getByRole("link", { name: "Pricing" }).first()).toBeVisible();
		await expect(page.getByRole("link", { name: "Sign In" }).first()).toBeVisible();
		await expect(page.getByRole("link", { name: "Get Started" }).first()).toBeVisible();
	});

	test("displays feature cards", async ({ page }) => {
		await page.goto("/");

		await expect(page.getByRole("heading", { name: "Authentication" })).toBeVisible();
		await expect(page.getByRole("heading", { name: "Payments & Subscriptions" })).toBeVisible();
		await expect(page.getByRole("heading", { name: "Database" })).toBeVisible();
		await expect(page.getByRole("heading", { name: "Webhooks" })).toBeVisible();
		await expect(page.getByRole("heading", { name: "Billing Portal" })).toBeVisible();
	});

	test("displays tech stack section", async ({ page }) => {
		await page.goto("/");

		const stackSection = page.locator("section").filter({ hasText: "Built with the best stack" });
		for (const tech of ["Next.js 16", "React 19", "TypeScript", "Supabase", "Creem"]) {
			await expect(stackSection.getByText(tech)).toBeVisible();
		}
	});

	test("navigates to pricing page", async ({ page }) => {
		await page.goto("/");
		await page.getByRole("navigation").getByRole("link", { name: "Pricing" }).click();
		await expect(page).toHaveURL("/pricing");
		await expect(page.getByRole("heading", { name: "Simple, transparent pricing" })).toBeVisible();
	});

	test("navigates to signup page", async ({ page }) => {
		await page.goto("/");
		await page.getByRole("link", { name: "Get Started" }).first().click();
		await expect(page).toHaveURL("/signup");
		await expect(page.getByText("Create your account")).toBeVisible();
	});

	test("navigates to login page", async ({ page }) => {
		await page.goto("/");
		await page.getByRole("navigation").getByRole("link", { name: "Sign In" }).click();
		await expect(page).toHaveURL("/login");
		await expect(page.getByRole("heading", { name: /Sign in/i })).toBeVisible();
	});
});
