import type { ReactNode } from "react";
import { Link } from "react-router";
import { siteMeta } from "../data/siteContent";
import styles from "../styles/Site.module.css";
import { SkipLink } from "./SkipLink";

/** Shared header, footer, and page shell for every route. */
export function Layout({ children }: { children: ReactNode }) {
  return (
    <div className={styles.pageShell}>
      <SkipLink />
      <header className={styles.header}>
        <Link to="/" className={styles.wordmark}>
          <span className={styles.mark} aria-hidden="true" />
          {siteMeta.name}
        </Link>
        <nav className={styles.nav}>
          <Link to="/products">Products</Link>
          <a href={`mailto:${siteMeta.email}`}>Contact</a>
        </nav>
      </header>
      <main id="main" className={styles.main}>
        {children}
      </main>
      <footer className={styles.footer}>
        <p>© {new Date().getFullYear()} {siteMeta.name}</p>
        <p className={styles.footerNote}>
          {siteMeta.location} · <a href={`mailto:${siteMeta.email}`}>{siteMeta.email}</a>
        </p>
      </footer>
    </div>
  );
}
