# alastack.com

Company site for Alastack, a software company. Financial systems, ERPs, service management, developer tooling, and apps.

Bun-native app with React 19 and TypeScript, no meta-framework. Bun handles the dev server, bundling, and the production server. Content lives in `src/data/siteContent.ts`; styles in `src/styles`.

```bash
bun install
bun dev          # http://localhost:3000 with HMR
```

`bun run build` bundles the client, builds a server-render bundle, and prerenders one static HTML file per route (`scripts/prerender.ts`) with its own title, description, canonical URL, and Open Graph tags. `bun start` builds and serves `dist/`. `bun run og` regenerates `public/og.png` (needs `rsvg-convert`). Run `bun run typecheck`, `bun run build`, and `bun run test` before shipping.

## Deploy

Production runs on the Linode (`alaarab@66.175.220.188`) as pm2 process `alastack` on port 3010, behind nginx (`/etc/nginx/sites-enabled/alastack.com` proxies to `localhost:3010`, TLS by Certbot). The checkout is `/home/alaarab/alastack/repo`; `server.ts` serves the prebuilt `dist/` and `ssr-build/`.

The server's Bun is 1.3.14 (`~/.bun/bin`), older than the 1.4.x this repo builds with (CI pins 1.4.3), so build locally and ship the bundle:

1. Fresh clone of `main`, then `bun install --frozen-lockfile && bun run build` with Bun 1.4+.
2. On the server, back up first: `cp -a dist ssr-build ~/alastack/backup-before-<sha>-<date>/`.
3. `git pull --ff-only origin main` in the checkout (it needs the new `server.ts` and `public/`).
4. Replace `dist/` and `ssr-build/` with the built ones (`tar czf` locally, `scp`, extract in the checkout).
5. `pm2 restart alastack --update-env`. Restart only this process.
6. Verify: `/favicon.svg` 200, `/privacy/` redirects to `/privacy`, unknown URL 404, gzip on, no `fonts.googleapis` in the HTML.

`~/alastack/deploy.sh` does a server-side `reset --hard` and `bun run build` instead; use it only once the server Bun can build this repo. To roll back, copy the backup `dist/` and `ssr-build/` back and restart the process.
