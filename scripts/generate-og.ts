/** Renders public/og.png (1200x630) from an inline SVG via rsvg-convert. */
import { join } from "node:path";

const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630">
  <rect width="1200" height="630" fill="#ffffff"/>
  <rect x="0" y="0" width="1200" height="10" fill="#1d4ed8"/>
  <g transform="translate(96 230)">
    <g fill="#1d4ed8" transform="translate(0 -4) scale(0.75)"><path d="M8 84 L48 12 L88 84 H70 L48 44 L26 84 Z"/><rect x="8" y="94" width="80" height="8" rx="2" opacity="0.35"/></g>
    <text x="100" y="56" font-family="Inter, Helvetica, Arial, sans-serif" font-size="64" font-weight="700" fill="#14181f">Alastack</text>
  </g>
  <text x="96" y="390" font-family="Inter, Helvetica, Arial, sans-serif" font-size="36" fill="#4b5563">Business systems, built and run.</text>
  <text x="96" y="445" font-family="Inter, Helvetica, Arial, sans-serif" font-size="22" fill="#7b8494">Financial systems · ERP · Service management · Applications · Custom tooling</text>
  <text x="96" y="560" font-family="Inter, Helvetica, Arial, sans-serif" font-size="22" font-weight="600" fill="#1d4ed8">alastack.com</text>
</svg>`;

const out = join(import.meta.dir, "..", "public", "og.png");
const proc = Bun.spawn(["rsvg-convert", "-w", "1200", "-h", "630", "-o", out], { stdin: new Blob([svg]) });
if ((await proc.exited) !== 0) throw new Error("rsvg-convert failed; is librsvg installed?");
console.log(`Wrote ${out}`);
