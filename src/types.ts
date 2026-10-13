export interface Area {
  title: string;
  body: string;
}

export interface Product {
  name: string;
  body: string;
  href: string;
  /** Short display form of href. */
  linkLabel: string;
}
