import { PRODUCT_GROUPS, type ActionLink, type Capability, type Product } from "../types";

export const siteMeta = {
  name: "Alastack",
  domain: "alastack.com",
  tagline: "Software for running a business.",
  intro:
    "Alastack is a software company. We build financial systems, ERPs, service management platforms, developer tooling, and apps.",
  location: "Los Angeles, California",
  email: "hello@alastack.com",
};

export const capabilities: Capability[] = [
  {
    title: "Financial systems",
    body: "Accounting, billing, budgeting, and reporting built around how project-based businesses actually run.",
  },
  {
    title: "ERP",
    body: "Project management, timesheets, expenses, approvals, and the workflow that ties them together in one system.",
  },
  {
    title: "Service management",
    body: "ITSM platforms with ticket queues, relationships, and an interface your tools and agents can read.",
  },
  {
    title: "Apps and tooling",
    body: "Mobile apps, developer libraries, and integrations that connect systems and put data where it is needed.",
  },
];

export const products: Product[] = [
  {
    slug: "intrapath",
    group: "Business systems",
    name: "Intrapath",
    category: "ERP",
    status: "In development",
    accent: "#f43f5e",
    summary:
      "A project-based ERP with the workflow modeled into the data layer: projects, timesheets, expenses, approvals, and billing in one system.",
    description:
      "Intrapath is a project-based ERP built for consulting and services firms. Projects, budgets, timesheets, expense reports, HR requests, and invoicing share one data model and one approval workflow, so a submitted report moves through review, approval, and reimbursement without leaving the system. It runs as a modern web application on Bun with a React front end.",
    highlights: [
      "Workflow-first data model",
      "Timesheets, expenses, approvals, billing",
      "Multi-organization",
    ],
    stack: ["React", "Bun", "TypeScript", "PostgreSQL"],
    links: [{ label: "Request a demo", href: "mailto:hello@alastack.com?subject=Intrapath" }],
  },
  {
    slug: "atlas",
    group: "Business systems",
    name: "Atlas",
    category: "ITSM",
    status: "Stable",
    accent: "#2ab8a8",
    summary:
      "A service management platform that runs in the browser and mirrors every ticket to disk as markdown, readable by your editor and your AI tools.",
    description:
      "Atlas is a full ITSM platform. Ticket views, a relationship graph, and an operational health endpoint on the front; on the back, every ticket is mirrored to disk as markdown and exposed through MCP so the same queue lives in your editor and your agents. The mirror is loopback-only with a read-only allowlist. Releases are sigstore-signed and ship with an SBOM.",
    highlights: [
      "Ticket graph and queue views",
      "Markdown mirror + MCP access",
      "Signed releases with SBOM",
    ],
    stack: ["Bun", "Hono", "D3", "MCP"],
    links: [{ label: "Request access", href: "mailto:hello@alastack.com?subject=Atlas" }],
  },
  {
    slug: "phren",
    group: "Developer tooling",
    name: "Phren",
    category: "Agent memory",
    status: "Available",
    accent: "#7c3aed",
    summary:
      "Persistent memory for AI coding agents. Findings, tasks, and patterns stay as markdown in a git repo you own.",
    description:
      "Phren gives coding agents memory that survives the session. Findings, tasks, and project context are captured as plain markdown in a repository you control, indexed for search, and reloaded automatically. It works with Claude, Copilot, Cursor, and Codex, and moves to a new machine with one command.",
    highlights: ["MCP server + CLI", "Plain markdown, no database", "Claude / Copilot / Cursor / Codex"],
    stack: ["TypeScript", "MCP", "Node.js"],
    links: [
      { label: "Docs", href: "https://alaarab.github.io/phren/" },
      { label: "GitHub", href: "https://github.com/alaarab/phren" },
    ],
  },
  {
    slug: "ogrid",
    group: "Developer tooling",
    name: "OGrid",
    category: "React library",
    status: "Available",
    accent: "#217346",
    summary:
      "Spreadsheet behavior for any table. Headless React hooks for inline edit, range select, fill handle, and copy/paste.",
    description:
      "OGrid adds spreadsheet interactions to the table you already have. Headless hooks handle inline editing, range selection, the fill handle, and clipboard behavior, and drop onto shadcn, Material, Fluent, or a plain table element. MIT licensed, with an AG Grid migration guide.",
    highlights: ["Headless hooks", "Works with any table chrome", "MIT licensed"],
    stack: ["React", "TypeScript", "npm"],
    links: [
      { label: "Docs", href: "https://alaarab.github.io/ogrid/" },
      { label: "GitHub", href: "https://github.com/alaarab/ogrid" },
    ],
  },
  {
    slug: "mina",
    group: "Apps",
    name: "Mina",
    category: "iOS app",
    status: "Available",
    accent: "#ec4899",
    summary:
      "A newborn log for two phones. Feeds, diapers, and sleep by tap, widget, or Siri, shared through iCloud.",
    description:
      "Mina is a newborn log shared between caregivers. Log feeds, diapers, sleep, and more by tap, by widget, or by telling Siri. iCloud sharing keeps every phone on the same log, with a feed alarm, a night handoff, a calendar, searchable history, an age-based guide, and an on-device Ask that answers questions without anything leaving the phone. Free, no accounts, no servers.",
    highlights: ["Siri, widgets, iCloud sharing", "On-device Ask", "No accounts, no servers"],
    stack: ["Swift", "SwiftUI", "CloudKit"],
    links: [
      { label: "Website", href: "https://alaarab.github.io/mina/" },
      { label: "GitHub", href: "https://github.com/alaarab/mina" },
    ],
  },
  {
    slug: "alphalens",
    group: "Apps",
    name: "AlphaLens",
    category: "Discord bot",
    status: "Available",
    accent: "#f59e0b",
    summary:
      "Real-time crypto charts, contract lookups, and trending-token alerts inside Discord, across nine networks.",
    description:
      "AlphaLens brings chart and contract context into trading servers without leaving Discord. Slash commands, encrypted per-server settings, rotating upstream API keys, and a monitoring loop that posts trending-token alerts to a watched channel. Covers Solana, Ethereum, BSC, Avalanche, Fantom, Base, Berachain, Sui, and Monad.",
    highlights: ["9 networks", "Encrypted per-server settings", "Trending alerts"],
    stack: ["Node.js", "Discord.js"],
    links: [{ label: "GitHub", href: "https://github.com/alaarab/AlphaLens" }],
  },
  {
    slug: "m4l-builder",
    group: "Audio tooling",
    name: "m4l-builder",
    category: "Python library",
    status: "Available",
    accent: "#b45309",
    summary:
      "Max for Live devices written in Python. Pure standard library, ships to PyPI, tested against Ableton.",
    description:
      "m4l-builder turns Max for Live device building into code. A pure-stdlib Python library emits valid .amxd files from scripts: 90+ DSP blocks, a theme system, jsui visual engines, recipes for common combinations, and a reverse-engineering pipeline that reads existing devices back into Python. The test suite asserts the produced devices load in Ableton.",
    highlights: ["90+ DSP blocks", "Reverse-engineering pipeline", "On PyPI"],
    stack: ["Python", "Max for Live"],
    links: [
      { label: "PyPI", href: "https://pypi.org/project/m4l-builder/" },
      { label: "GitHub", href: "https://github.com/alaarab/m4l-builder" },
    ],
  },
  {
    slug: "livemcp",
    group: "Audio tooling",
    name: "LiveMCP",
    category: "MCP server",
    status: "Available",
    accent: "#0ea5e9",
    summary:
      "An MCP bridge for Ableton Live: transport, tracks, clips, devices, and the mixer, driven from any agent.",
    description:
      "LiveMCP exposes Ableton Live to MCP clients. A Python FastMCP server talks to a bundled MIDI Remote Script over a local bridge, with a second bridge into Max for Live patcher internals. Tools cover actions; resources cover inspection. Runs on macOS, Windows, and WSL.",
    highlights: ["220 tools", "live:// / max:// / docs:// resources", "macOS / Windows / WSL"],
    stack: ["Python", "MCP", "Ableton Live"],
    links: [{ label: "GitHub", href: "https://github.com/alaarab/livemcp" }],
  },
];

export const contactLinks: ActionLink[] = [
  { label: "Email", href: `mailto:${siteMeta.email}` },
];

/** Products grouped by line of business, in catalog order. Empty groups are dropped. */
export const productGroups = PRODUCT_GROUPS.map((group) => ({
  group,
  items: products.filter((product) => product.group === group),
})).filter((entry) => entry.items.length > 0);
