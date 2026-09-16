import type { ReactNode } from "react";
import styles from "../styles/Site.module.css";

interface PageHeadProps {
  eyebrow?: string;
  title: string;
  lede?: ReactNode;
}

/** Standard page opener: small label, heading, optional lede. */
export function PageHead({ eyebrow, title, lede }: PageHeadProps) {
  return (
    <section className={styles.pageHead}>
      {eyebrow ? <p className={styles.eyebrow}>{eyebrow}</p> : null}
      <h1>{title}</h1>
      {lede ? <p className={styles.lede}>{lede}</p> : null}
    </section>
  );
}
