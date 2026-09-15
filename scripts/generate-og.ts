/** Renders public/og.png (1200x630) from an inline SVG via rsvg-convert. */
import { join } from "node:path";

const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630">
  <rect width="1200" height="630" fill="#0a0c10"/>
  <circle cx="150" cy="40" r="520" fill="#5eead4" opacity="0.10"/>
  <g transform="translate(96 250)">
    <path d="M0 64 L36 0 L72 64 H54 L36 30 L18 64 Z" fill="#5eead4"/>
    <text x="100" y="58" font-family="Georgia, serif" font-size="72" font-weight="600" fill="#eaf0f4">Alastack</text>
  </g>
  <text x="96" y="400" font-family="Georgia, serif" font-size="40" fill="#a6b3bf">Software for running a business.</text>
  <text x="96" y="460" font-family="monospace" font-size="22" fill="#66737f" letter-spacing="2">FINANCIAL SYSTEMS · ERP · ITSM · APPS</text>
  <text x="96" y="570" font-family="monospace" font-size="22" fill="#5eead4">alastack.com</text>
</svg>`;

const out = join(import.meta.dir, "..", "public", "og.png");
const proc = Bun.spawn(["rsvg-convert", "-w", "1200", "-h", "630", "-o", out], { stdin: new Blob([svg]) });
if ((await proc.exited) !== 0) throw new Error("rsvg-convert failed; is librsvg installed?");
console.log(`Wrote ${out}`);
