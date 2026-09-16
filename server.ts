import { existsSync } from "node:fs";
import { join } from "node:path";
import index from "./index.html";
import { SITE_ORIGIN, buildRobots, buildSitemap } from "./src/lib/routeMeta";

const isProd = process.env.NODE_ENV === "production";
const port = Number(process.env.PORT ?? 3000);
const DIST = join(import.meta.dir, "dist");

const sitemap = () =>
  new Response(buildSitemap(SITE_ORIGIN), { headers: { "content-type": "application/xml; charset=utf-8" } });
const robots = () =>
  new Response(buildRobots(SITE_ORIGIN), { headers: { "content-type": "text/plain; charset=utf-8" } });

if (isProd) {
  // Production serves the prerendered static build: one HTML file per route,
  // hashed assets cached forever, real 404s.
  if (!existsSync(join(DIST, "index.html"))) {
    console.error("dist/ is missing. Run `bun run build` before `bun server.ts` in production.");
    process.exit(1);
  }

  const html = (file: string, status = 200) =>
    new Response(Bun.file(file), {
      status,
      headers: { "content-type": "text/html; charset=utf-8", "cache-control": "no-cache" },
    });
  const notFound = () => html(join(DIST, "404.html"), 404);

  const server = Bun.serve({
    port,
    development: false,
    routes: {
      "/sitemap.xml": sitemap,
      "/robots.txt": robots,
      "/": () => html(join(DIST, "index.html")),
      "/privacy": () => html(join(DIST, "privacy", "index.html")),
      "/terms": () => html(join(DIST, "terms", "index.html")),
      "/*": async (req) => {
        const pathname = new URL(req.url).pathname;
        const resolved = join(DIST, pathname);
        if (pathname === "/" || !resolved.startsWith(DIST)) return notFound();
        const file = Bun.file(resolved);
        if (!(await file.exists())) return notFound();
        // og.png keeps a stable name; hashed bundles are immutable.
        const cacheControl = pathname === "/og.png" ? "public, max-age=86400" : "public, max-age=31536000, immutable";
        return new Response(file, { headers: { "cache-control": cacheControl } });
      },
    },
  });
  console.log(`alastack (prod) serving dist/ at ${server.url}`);
} else {
  const server = Bun.serve({
    port,
    development: { hmr: true, console: true },
    routes: {
      "/sitemap.xml": sitemap,
      "/robots.txt": robots,
      "/*": index,
    },
  });
  console.log(`alastack (dev) running at ${server.url}`);
}
