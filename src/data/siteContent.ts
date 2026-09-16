import { PRODUCT_GROUPS, type Product, type Service, type Step } from "../types";

export const siteMeta = {
  name: "Alastack",
  legalName: "Alastack",
  domain: "alastack.com",
  tagline: "Business software, built and operated.",
  intro:
    "Alastack is a software company in Los Angeles. We build and operate financial systems, ERPs, service management platforms, and applications for organizations that need software to fit the way they work.",
  location: "Los Angeles, California",
  email: "hello@alastack.com",
  founded: "2026",
};

export const services: Service[] = [
  {
    slug: "financial-systems",
    title: "Financial systems",
    summary: "Accounting, billing, budgeting, and reporting built around how your organization actually runs.",
    body: "General ledger, accounts payable and receivable, job costing, invoicing, and the reports that management reads every week. We build financial systems that match the business's real workflow, integrate with the payroll and banking systems already in place, and hold up to an audit.",
    deliverables: ["Billing and invoicing", "Budgeting and job costing", "Financial reporting", "Payroll and bank integration"],
  },
  {
    slug: "erp",
    title: "ERP for project-based businesses",
    summary: "Projects, timesheets, expenses, approvals, and billing in one system with one approval workflow.",
    body: "Consulting, engineering, and services firms run on projects. We build ERPs where the project is the center of the data model: time and expense flow into budgets, approvals follow a defined workflow, and billing comes straight from approved work. Intrapath is our product in this space; we also build and extend custom systems.",
    deliverables: ["Project and budget management", "Time and expense capture", "Approval workflows", "Multi-entity organizations"],
  },
  {
    slug: "service-management",
    title: "Service management",
    summary: "ITSM and ticketing platforms with queues, relationships, and an interface your other tools can read.",
    body: "Ticket intake, queues, SLAs, relationships between incidents and changes, and reporting for the people running the service desk. Atlas is our ITSM platform; it runs in the browser and mirrors every ticket to disk so your editor, scripts, and AI tools can work the same queue.",
    deliverables: ["Ticket intake and queues", "Relationship graphs", "Reporting and health", "Editor and agent access"],
  },
  {
    slug: "custom-software",
    title: "Custom software and integrations",
    summary: "Internal tools, data pipelines, and integrations that connect the systems you already have.",
    body: "Most organizations run on a handful of systems that do not talk to each other. We build the tooling in between: CRM to reporting, ERP to payroll, field data to the database. Web applications, mobile apps, and the automation that keeps data moving without someone exporting a spreadsheet.",
    deliverables: ["Web and mobile applications", "System integrations", "Data pipelines and reporting", "Ongoing operation and support"],
  },
];

export const process: Step[] = [
  {
    title: "Discovery",
    body: "We start with how the work actually happens today: the systems, the spreadsheets, the approvals, and the people. The output is a scope and a data model, not a slide deck.",
  },
  {
    title: "Build",
    body: "Short cycles with working software from the first weeks. You see real screens on real data and we adjust before anything calcifies.",
  },
  {
    title: "Operate",
    body: "We run what we build: hosting, monitoring, backups, security updates, and the changes a business needs after launch. Or we hand it to your team with the documentation to run it themselves.",
  },
];

export const companyFacts: { label: string; value: string }[] = [
  { label: "Founded", value: siteMeta.founded },
  { label: "Based in", value: siteMeta.location },
  { label: "Focus", value: "Business systems and applications" },
  { label: "Contact", value: siteMeta.email },
];

export const principles: { title: string; body: string }[] = [
  {
    title: "The workflow is the product",
    body: "A business system is only as good as its fit to the way people work. We model the workflow first and build the screens around it.",
  },
  {
    title: "Own your data",
    body: "Plain formats, open interfaces, and exports that work. Nothing we build should hold your data hostage.",
  },
  {
    title: "Software has to be run",
    body: "Launch is the middle of the project. We plan for operation, monitoring, and change from the start.",
  },
  {
    title: "Small and direct",
    body: "You work with the people building the system. No account layer between you and the engineering.",
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

/** Products grouped by line of business, in catalog order. Empty groups are dropped. */
export const productGroups = PRODUCT_GROUPS.map((group) => ({
  group,
  items: products.filter((product) => product.group === group),
})).filter((entry) => entry.items.length > 0);
