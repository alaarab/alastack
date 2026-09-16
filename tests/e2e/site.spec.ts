import { expect, test } from "@playwright/test";

test("home states the company and what it builds", async ({ page }) => {
  await page.goto("/");
  await expect(page.getByRole("heading", { level: 1 })).toHaveText("Alastack is a software company.");
  await expect(page.getByRole("heading", { level: 2, name: "What we build" })).toBeVisible();
  await expect(page.getByRole("heading", { level: 2, name: "Company" })).toBeVisible();
  await expect(page.getByRole("link", { name: "hello@alastack.com" }).first()).toBeVisible();
});

test("legal pages are prerendered", async ({ page }) => {
  for (const [path, heading] of [
    ["/privacy", "Privacy policy"],
    ["/terms", "Terms of use"],
  ]) {
    const response = await page.goto(path);
    expect(response?.status()).toBe(200);
    await expect(page.getByRole("heading", { level: 1 })).toHaveText(heading);
  }
});

test("unknown routes return a real 404", async ({ page }) => {
  const response = await page.goto("/does-not-exist");
  expect(response?.status()).toBe(404);
  await expect(page.getByRole("heading", { level: 1 })).toHaveText("Page not found");
});
