import { products, siteMeta } from "../data/siteContent";

/**
 * Per-route <head> metadata plus the sitemap/robots builders. Shared by the
 * prerender step (scripts/prerender.ts) and the production server (server.ts)
 * so a route's title, description, and canonical URL match however it's served.
 */

export const SITE_ORIGIN = process.env.SITE_ORIGIN ?? "https://alastack.com";
export const OG_IMAGE_PATH = "/og.png";

export interface RouteMeta {
  title: string;
  description: string;
  path: string;
  ogImage: string;
  ogImageAlt: string;
}

const SITE_OG_ALT = `${siteMeta.name}, ${siteMeta.tagline.toLowerCase()}`;

const STATIC_ROUTES: RouteMeta[] = [
  {
    path: "/",
    title: `${siteMeta.name} | ${siteMeta.tagline}`,
    description: siteMeta.intro,
    ogImage: OG_IMAGE_PATH,
    ogImageAlt: SITE_OG_ALT,
  },
  {
    path: "/services",
    title: `Services | ${siteMeta.name}`,
    description:
      "Financial systems, ERP for project-based businesses, service management, and custom software and integrations, built and operated by Alastack.",
    ogImage: OG_IMAGE_PATH,
    ogImageAlt: SITE_OG_ALT,
  },
  {
    path: "/products",
    title: `Products | ${siteMeta.name}`,
    description:
      "Software products from Alastack: ERP, ITSM, developer tooling, and applications.",
    ogImage: OG_IMAGE_PATH,
    ogImageAlt: SITE_OG_ALT,
  },
  {
    path: "/company",
    title: `Company | ${siteMeta.name}`,
    description: `About Alastack, a software company in ${siteMeta.location} building and operating business systems.`,
    ogImage: OG_IMAGE_PATH,
    ogImageAlt: SITE_OG_ALT,
  },
  {
    path: "/contact",
    title: `Contact | ${siteMeta.name}`,
    description: "Get in touch with Alastack about a system you need built, a product license, or support.",
    ogImage: OG_IMAGE_PATH,
    ogImageAlt: SITE_OG_ALT,
  },
  {
    path: "/privacy",
    title: `Privacy policy | ${siteMeta.name}`,
    description: "How Alastack handles information collected through this website and its products.",
    ogImage: OG_IMAGE_PATH,
    ogImageAlt: SITE_OG_ALT,
  },
  {
    path: "/terms",
    title: `Terms of use | ${siteMeta.name}`,
    description: "Terms governing use of the Alastack website.",
    ogImage: OG_IMAGE_PATH,
    ogImageAlt: SITE_OG_ALT,
  },
];

const NOT_FOUND_META: RouteMeta = {
  path: "/404",
  title: `Not found | ${siteMeta.name}`,
  description: "That page does not exist, or it moved.",
  ogImage: OG_IMAGE_PATH,
  ogImageAlt: SITE_OG_ALT,
};

function productMeta(slug: string): RouteMeta | null {
  const product = products.find((item) => item.slug === slug);
  if (!product) return null;
  return {
    path: `/products/${product.slug}`,
    title: `${product.name} | ${siteMeta.name}`,
    description: product.summary,
    ogImage: OG_IMAGE_PATH,
    ogImageAlt: `${product.name}, ${product.category}`,
  };
}

export function allRoutes(): RouteMeta[] {
  const productRoutes = products
    .map((product) => productMeta(product.slug))
    .filter((meta): meta is RouteMeta => meta !== null);
  return [...STATIC_ROUTES, ...productRoutes];
}

export function metaForPath(pathname: string): RouteMeta {
  const path = pathname !== "/" ? pathname.replace(/\/+$/, "") : "/";
  const productMatch = path.match(/^\/products\/([^/]+)$/);
  if (productMatch) return productMeta(productMatch[1]) ?? NOT_FOUND_META;
  return STATIC_ROUTES.find((route) => route.path === path) ?? NOT_FOUND_META;
}

export const notFoundMeta = NOT_FOUND_META;
export const knownProductSlugs = new Set(products.map((product) => product.slug));

function escapeText(value: string): string {
  return value.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

function escapeAttr(value: string): string {
  return escapeText(value).replace(/"/g, "&quot;");
}

/** Replace exactly one occurrence; throw if index.html's head changed shape. */
function replaceOrThrow(html: string, pattern: RegExp, replacement: string, label: string): string {
  if (!pattern.test(html)) {
    throw new Error(`applyRouteMeta: could not find ${label} to rewrite. Did index.html's <head> change shape?`);
  }
  return html.replace(pattern, replacement);
}

/** Rewrite title, description, canonical, and OG/Twitter tags for a route. */
export function applyRouteMeta(html: string, meta: RouteMeta, origin: string = SITE_ORIGIN): string {
  const canonical = meta.path === "/" ? `${origin}/` : `${origin}${meta.path}`;
  const ogImage = `${origin}${meta.ogImage}`;
  const title = escapeText(meta.title);
  const titleAttr = escapeAttr(meta.title);
  const descAttr = escapeAttr(meta.description);

  let out = html;
  out = replaceOrThrow(out, /<title>[^<]*<\/title>/, `<title>${title}</title>`, "<title>");
  out = replaceOrThrow(out, /<meta name="description" content="[^"]*" \/>/, `<meta name="description" content="${descAttr}" />`, "description");
  out = replaceOrThrow(out, /<link rel="canonical" href="[^"]*" \/>/, `<link rel="canonical" href="${escapeAttr(canonical)}" />`, "canonical");
  out = replaceOrThrow(out, /<meta property="og:url" content="[^"]*" \/>/, `<meta property="og:url" content="${escapeAttr(canonical)}" />`, "og:url");
  out = replaceOrThrow(out, /<meta property="og:title" content="[^"]*" \/>/, `<meta property="og:title" content="${titleAttr}" />`, "og:title");
  out = replaceOrThrow(out, /<meta property="og:description" content="[^"]*" \/>/, `<meta property="og:description" content="${descAttr}" />`, "og:description");
  out = replaceOrThrow(out, /<meta property="og:image" content="[^"]*" \/>/, `<meta property="og:image" content="${escapeAttr(ogImage)}" />`, "og:image");
  out = replaceOrThrow(out, /<meta property="og:image:alt" content="[^"]*" \/>/, `<meta property="og:image:alt" content="${escapeAttr(meta.ogImageAlt)}" />`, "og:image:alt");
  out = replaceOrThrow(out, /<meta name="twitter:title" content="[^"]*" \/>/, `<meta name="twitter:title" content="${titleAttr}" />`, "twitter:title");
  out = replaceOrThrow(out, /<meta name="twitter:description" content="[^"]*" \/>/, `<meta name="twitter:description" content="${descAttr}" />`, "twitter:description");
  out = replaceOrThrow(out, /<meta name="twitter:image" content="[^"]*" \/>/, `<meta name="twitter:image" content="${escapeAttr(ogImage)}" />`, "twitter:image");
  return out;
}

export function buildSitemap(origin: string = SITE_ORIGIN): string {
  const today = new Date().toISOString().slice(0, 10);
  const body = allRoutes()
    .map((route) => {
      const loc = route.path === "/" ? `${origin}/` : `${origin}${route.path}`;
      return `  <url><loc>${loc}</loc><lastmod>${today}</lastmod></url>`;
    })
    .join("\n");
  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${body}\n</urlset>\n`;
}

export function buildRobots(origin: string = SITE_ORIGIN): string {
  return `User-agent: *\nAllow: /\n\nSitemap: ${origin}/sitemap.xml\n`;
}
