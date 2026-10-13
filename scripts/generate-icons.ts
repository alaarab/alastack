/**
 * Renders the raster icons from public/favicon.svg with Playwright's Chromium:
 *   favicon.ico (16, 32, 48; PNG-encoded entries), apple-touch-icon.png (180),
 *   icon-192.png, icon-512.png.
 * The PNG app icons are full-bleed (tile corners squared) since iOS and Android apply their own mask.
 */
import { join } from "node:path";
import { chromium } from "@playwright/test";

const pub = join(import.meta.dir, "..", "public");
const tile = await Bun.file(join(pub, "favicon.svg")).text();
const fullBleed = tile.replace(/(<rect width="56" height="56") rx="12"/, "$1");
if (fullBleed === tile) throw new Error('favicon.svg: expected a 56x56 tile rect with rx="12"');

const browser = await chromium.launch();
const page = await browser.newPage();

async function render(svg: string, size: number): Promise<Buffer> {
  await page.setViewportSize({ width: size, height: size });
  const sized = svg.replace("<svg ", `<svg width="${size}" height="${size}" `);
  await page.setContent(`<!doctype html><style>html,body{margin:0;background:transparent}svg{display:block}</style>${sized}`);
  return page.screenshot({ omitBackground: true, clip: { x: 0, y: 0, width: size, height: size } });
}

/** ICO container with PNG-compressed images (supported by every current browser and Windows Vista+). */
function ico(images: { size: number; png: Buffer }[]): Buffer {
  const header = Buffer.alloc(6 + 16 * images.length);
  header.writeUInt16LE(0, 0);
  header.writeUInt16LE(1, 2);
  header.writeUInt16LE(images.length, 4);
  let offset = header.length;
  images.forEach(({ size, png }, i) => {
    const e = 6 + 16 * i;
    header.writeUInt8(size >= 256 ? 0 : size, e);
    header.writeUInt8(size >= 256 ? 0 : size, e + 1);
    header.writeUInt8(0, e + 2); // palette colors
    header.writeUInt8(0, e + 3); // reserved
    header.writeUInt16LE(1, e + 4); // color planes
    header.writeUInt16LE(32, e + 6); // bits per pixel
    header.writeUInt32LE(png.length, e + 8);
    header.writeUInt32LE(offset, e + 12);
    offset += png.length;
  });
  return Buffer.concat([header, ...images.map((i) => i.png)]);
}

try {
  const icoImages = [];
  for (const size of [16, 32, 48]) icoImages.push({ size, png: await render(tile, size) });
  await Bun.write(join(pub, "favicon.ico"), ico(icoImages));
  await Bun.write(join(pub, "apple-touch-icon.png"), await render(fullBleed, 180));
  await Bun.write(join(pub, "icon-192.png"), await render(fullBleed, 192));
  await Bun.write(join(pub, "icon-512.png"), await render(fullBleed, 512));
  console.log("Wrote favicon.ico, apple-touch-icon.png, icon-192.png, icon-512.png");
} finally {
  await browser.close();
}
