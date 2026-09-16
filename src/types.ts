export interface ActionLink {
  label: string;
  href: string;
}

export const PRODUCT_GROUPS = ["Business systems", "Developer tooling", "Apps", "Audio tooling"] as const;
export type ProductGroup = (typeof PRODUCT_GROUPS)[number];

export interface Product {
  slug: string;
  /** Line of business the product is listed under on the catalog. */
  group: ProductGroup;
  name: string;
  /** Short category shown on the card, e.g. "ITSM" or "ERP". */
  category: string;
  /** Lifecycle label, e.g. "Available", "In development". */
  status: string;
  summary: string;
  /** Longer copy for the product page. */
  description: string;
  /** Three or four short facts. */
  highlights: string[];
  stack: string[];
  /** Brand color for the product's accent. Falls back to the site accent. */
  accent?: string;
  links: ActionLink[];
}

export interface Service {
  slug: string;
  title: string;
  summary: string;
  body: string;
  deliverables: string[];
}

export interface Step {
  title: string;
  body: string;
}
