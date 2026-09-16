/** Renders public/og.png (1200x630) from an inline SVG via rsvg-convert. */
import { join } from "node:path";

const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630">
  <rect width="1200" height="630" fill="#ffffff"/>
  <rect x="0" y="0" width="1200" height="10" fill="#1d4ed8"/>
  <g transform="translate(96 230)">
    <rect width="72" height="72" rx="14" fill="#1d4ed8"/>
    <path d="M15 52 L36 16 L57 52 H47 L36 33 L25 52 Z" fill="#fff"/>
    <text x="100" y="56" font-family="Inter, Helvetica, Arial, sans-serif" font-size="64" font-weight="700" fill="#14181f">Alastack</text>
  </g>
  <text x="96" y="390" font-family="Inter, Helvetica, Arial, sans-serif" font-size="36" fill="#4b5563">Business software, built and operated.</text>
  <text x="96" y="445" font-family="Inter, Helvetica, Arial, sans-serif" font-size="22" fill="#7b8494">Financial systems · ERP · Service management · Custom software</text>
  <text x="96" y="560" font-family="Inter, Helvetica, Arial, sans-serif" font-size="22" font-weight="600" fill="#1d4ed8">alastack.com</text>
</svg>`;

const out = join(import.meta.dir, "..", "public", "og.png");
const proc = Bun.spawn(["rsvg-convert", "-w", "1200", "-h", "630", "-o", out], { stdin: new Blob([svg]) });
if ((await proc.exited) !== 0) throw new Error("rsvg-convert failed; is librsvg installed?");
console.log(`Wrote ${out}`);
