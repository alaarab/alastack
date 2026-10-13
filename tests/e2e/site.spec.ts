import { expect, test } from "@playwright/test";

test("home states the company and what it builds", async ({ page }) => {
  await page.goto("/");
  await expect(page.getByRole("heading", { level: 1 })).toHaveText("Business systems, built and run.");
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

test("the 404 page is not indexable", async ({ page }) => {
  await page.goto("/does-not-exist");
  await expect(page.locator('meta[name="robots"]')).toHaveAttribute("content", "noindex");
});

test("trailing-slash paths redirect to the canonical path", async ({ request }) => {
  const response = await request.get("/privacy/?ref=x", { maxRedirects: 0 });
  expect(response.status()).toBe(301);
  const location = new URL(response.headers()["location"], response.url());
  expect(location.pathname + location.search).toBe("/privacy?ref=x");
});

test("favicon and manifest icons resolve", async ({ request }) => {
  expect((await request.get("/favicon.svg")).status()).toBe(200);

  const home = await (await request.get("/")).text();
  const manifestHref = home.match(/<link rel="manifest" href="([^"]+)"/)?.[1];
  expect(manifestHref).toBeTruthy();
  const manifest = await (await request.get(manifestHref!)).json();
  for (const icon of manifest.icons as { src: string }[]) {
    expect((await request.get(icon.src)).status(), icon.src).toBe(200);
  }
});

test("HTML is never cached as immutable", async ({ request }) => {
  for (const path of ["/", "/index.html", "/privacy/index.html"]) {
    const response = await request.get(path);
    expect(response.status(), path).toBe(200);
    expect(response.headers()["cache-control"] ?? "", path).not.toContain("immutable");
  }
});

test("pages hydrate without console errors", async ({ page }) => {
  const errors: string[] = [];
  page.on("console", (message) => {
    if (message.type() === "error") errors.push(message.text());
  });
  page.on("pageerror", (error) => errors.push(error.message));
  for (const path of ["/", "/privacy"]) {
    await page.goto(path, { waitUntil: "networkidle" });
  }
  expect(errors).toEqual([]);
});
