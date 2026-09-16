import type { Area } from "../types";

export const siteMeta = {
  name: "Alastack",
  legalName: "Alastack LLC",
  domain: "alastack.com",
  tagline: "Business systems, built and run.",
  intro:
    "Alastack develops and operates business software: financial systems, ERP, service management platforms, applications, and custom tooling.",
  email: "hello@alastack.com",
};

/** The kinds of software the company builds. Categories, not a product catalog. */
export const areas: Area[] = [
  {
    title: "Financial systems",
    body: "Accounting, billing, budgeting, and reporting for organizations whose finances follow projects rather than products.",
  },
  {
    title: "ERP",
    body: "Project management, time and expense, approvals, and invoicing in one system with one workflow.",
  },
  {
    title: "Service management",
    body: "Ticketing and ITSM platforms with queues, relationships, and interfaces other tools can read.",
  },
  {
    title: "Applications",
    body: "Mobile and web applications, from consumer apps to internal tools.",
  },
  {
    title: "Custom tooling",
    body: "Developer tooling, automation, and the integrations that move data between systems.",
  },
];

