/**
 * Post-build step: turn the SPA shell in dist/ into one static HTML file per
 * route, each with its own head metadata and server-rendered body. Runs after
 * `bun build` (see package.json) or standalone via `bun run prerender`.
 */
import { join } from "node:path";
import { allRoutes, applyRouteMeta, buildRobots, buildSitemap, notFoundMeta, type RouteMeta } from "../src/lib/routeMeta";

const repoRoot = join(import.meta.dir, "..");
const distDir = join(repoRoot, "dist");

const templateFile = Bun.file(join(distDir, "index.html"));
if (!(await templateFile.exists())) {
  throw new Error("dist/index.html not found. Run `bun build ./index.html --outdir=dist` first.");
}
// The bundler would try to resolve a preload for the external /fonts/ path, so add it here.
const FONT_PRELOAD = '<link rel="preload" href="/fonts/inter-latin.woff2" as="font" type="font/woff2" crossorigin />';
const shell = await templateFile.text();
if (!shell.includes("</head>")) throw new Error("prerender: could not find </head> in dist/index.html.");
const template = shell.replace("</head>", `${FONT_PRELOAD}</head>`);

const serverEntry = join(repoRoot, "ssr-build", "entry-server.js");
if (!(await Bun.file(serverEntry).exists())) {
  throw new Error("ssr-build/entry-server.js not found. Build the server bundle before prerendering.");
}
const { render } = (await import(serverEntry)) as { render: (location: string) => string };

const ROOT_MARKER = '<div id="root"></div>';

function renderRoute(route: RouteMeta): string {
  const html = applyRouteMeta(template, route);
  if (!html.includes(ROOT_MARKER)) throw new Error("prerender: could not find the #root marker.");
  return html.replace(ROOT_MARKER, `<div id="root">${render(route.path)}</div>`);
}

let pages = 0;
for (const route of allRoutes()) {
  const outPath = route.path === "/" ? join(distDir, "index.html") : join(distDir, route.path, "index.html");
  await Bun.write(outPath, renderRoute(route));
  pages += 1;
}

// Keep the 404 page out of search indexes.
const notFoundHtml = renderRoute(notFoundMeta);
if (!notFoundHtml.includes("</head>")) throw new Error("prerender: could not find </head> in the 404 page.");
await Bun.write(join(distDir, "404.html"), notFoundHtml.replace("</head>", '  <meta name="robots" content="noindex" />\n  </head>'));
await Bun.write(join(distDir, "og.png"), Bun.file(join(repoRoot, "public", "og.png")));
// Icons, brand assets, and fonts are not bundled (fonts are external in the build), so copy them.
for (const file of ["favicon.ico", "favicon.svg", "apple-touch-icon.png", "icon-192.png", "icon-512.png"]) {
  await Bun.write(join(distDir, file), Bun.file(join(repoRoot, "public", file)));
}
for (const dir of ["brand", "fonts"]) {
  for (const file of await Array.fromAsync(new Bun.Glob("*").scan(join(repoRoot, "public", dir)))) {
    await Bun.write(join(distDir, dir, file), Bun.file(join(repoRoot, "public", dir, file)));
  }
}
await Bun.write(join(distDir, "sitemap.xml"), buildSitemap());
await Bun.write(join(distDir, "robots.txt"), buildRobots());

console.log(`Prerendered ${pages} routes + 404.html, og.png, sitemap.xml, robots.txt → dist/`);
