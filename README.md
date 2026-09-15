# alastack.com

Company site for Alastack, a software company. Financial systems, ERPs, service management, developer tooling, and apps.

Bun-native app with React 19 and TypeScript, no meta-framework. Bun handles the dev server, bundling, and the production server. Content lives in `src/data/siteContent.ts`; styles in `src/styles`.

```bash
bun install
bun dev          # http://localhost:3000 with HMR
```

`bun run build` bundles the client, builds a server-render bundle, and prerenders one static HTML file per route (`scripts/prerender.ts`) with its own title, description, canonical URL, and Open Graph tags. `bun start` builds and serves `dist/`. `bun run og` regenerates `public/og.png` (needs `rsvg-convert`). Run `bun run typecheck`, `bun run build`, and `bun run test` before shipping.
