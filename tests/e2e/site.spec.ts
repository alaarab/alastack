import { expect, test } from "@playwright/test";
import { products } from "../../src/data/siteContent";

test("home renders the company pitch and every product", async ({ page }) => {
  await page.goto("/");
  await expect(page.getByRole("heading", { level: 1 })).toHaveText("Software for running a business.");
  for (const product of products) {
    await expect(page.getByRole("heading", { level: 3, name: product.name })).toBeVisible();
  }
});

test("product pages are prerendered with their own metadata", async ({ page }) => {
  const product = products[0];
  const response = await page.goto(`/products/${product.slug}`);
  expect(response?.status()).toBe(200);
  await expect(page).toHaveTitle(`${product.name} | Alastack`);
  await expect(page.getByRole("heading", { level: 1 })).toHaveText(product.name);
});

test("unknown routes return a real 404", async ({ page }) => {
  const response = await page.goto("/does-not-exist");
  expect(response?.status()).toBe(404);
  await expect(page.getByRole("heading", { level: 1 })).toHaveText("Nothing here.");
});
