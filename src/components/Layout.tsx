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
        <div className={styles.headerInner}>
          <Link to="/" className={styles.wordmark}>
            {siteMeta.name}
          </Link>
          <nav className={styles.nav} aria-label="Primary">
            <a href={`mailto:${siteMeta.email}`}>Contact</a>
          </nav>
        </div>
      </header>
      <main id="main" className={styles.main}>
        {children}
      </main>
      <footer className={styles.footer}>
        <div className={styles.footerInner}>
          <p>
            © {new Date().getFullYear()} {siteMeta.legalName}. All rights reserved.
          </p>
          <nav className={styles.footerNav} aria-label="Legal">
            <Link to="/privacy">Privacy</Link>
            <Link to="/terms">Terms</Link>
            <a href={`mailto:${siteMeta.email}`}>{siteMeta.email}</a>
          </nav>
        </div>
      </footer>
    </div>
  );
}
