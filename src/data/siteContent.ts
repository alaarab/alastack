import type { Area, Fact } from "../types";

export const siteMeta = {
  name: "Alastack",
  legalName: "Alastack LLC",
  domain: "alastack.com",
  tagline: "A software company.",
  intro:
    "Alastack develops and operates business software: financial systems, ERP, service management platforms, applications, and custom tooling. Based in Los Angeles.",
  location: "Los Angeles, California",
  email: "hello@alastack.com",
  founded: "2026",
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

export const facts: Fact[] = [
  { label: "Founded", value: siteMeta.founded },
  { label: "Headquarters", value: siteMeta.location },
  { label: "Business", value: "Software development and operation" },
  { label: "Email", value: siteMeta.email },
];
