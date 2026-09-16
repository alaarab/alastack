import { expect, test } from "@playwright/test";
import { products } from "../../src/data/siteContent";

test("home renders the company pitch, services, and a route to every section", async ({ page }) => {
  await page.goto("/");
  await expect(page.getByRole("heading", { level: 1 })).toHaveText("Business software, built and operated.");
  await expect(page.getByRole("heading", { level: 2, name: "Services" })).toBeVisible();
  for (const label of ["Services", "Products", "Company", "Contact"]) {
    await expect(page.getByRole("navigation", { name: "Primary" }).getByRole("link", { name: label })).toBeVisible();
  }
});

test("products page lists every product", async ({ page }) => {
  await page.goto("/products");
  for (const product of products) {
    await expect(page.getByRole("link", { name: new RegExp(`^${product.name}`) })).toBeVisible();
  }
});

test("company pages are prerendered", async ({ page }) => {
  for (const [path, heading] of [
    ["/services", "What we build"],
    ["/company", "About Alastack"],
    ["/contact", "Get in touch"],
    ["/privacy", "Privacy policy"],
    ["/terms", "Terms of use"],
  ]) {
    const response = await page.goto(path);
    expect(response?.status()).toBe(200);
    await expect(page.getByRole("heading", { level: 1 })).toHaveText(heading);
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
  await expect(page.getByRole("heading", { level: 1 })).toHaveText("Page not found");
});
