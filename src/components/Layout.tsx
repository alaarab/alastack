import type { ReactNode } from "react";
import { Link, NavLink } from "react-router";
import { siteMeta } from "../data/siteContent";
import styles from "../styles/Site.module.css";
import { SkipLink } from "./SkipLink";

const NAV = [
  { to: "/services", label: "Services" },
  { to: "/products", label: "Products" },
  { to: "/company", label: "Company" },
  { to: "/contact", label: "Contact" },
];

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
            {NAV.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) => (isActive ? styles.navActive : undefined)}
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
        </div>
      </header>
      <main id="main" className={styles.main}>
        {children}
      </main>
      <footer className={styles.footer}>
        <div className={styles.footerInner}>
          <div className={styles.footerBrand}>
            <p className={styles.wordmark}>{siteMeta.name}</p>
            <p className={styles.footerMuted}>{siteMeta.tagline}</p>
            <p className={styles.footerMuted}>{siteMeta.location}</p>
          </div>
          <div className={styles.footerCol}>
            <p className={styles.footerHead}>Company</p>
            <Link to="/services">Services</Link>
            <Link to="/products">Products</Link>
            <Link to="/company">Company</Link>
            <Link to="/contact">Contact</Link>
          </div>
          <div className={styles.footerCol}>
            <p className={styles.footerHead}>Legal</p>
            <Link to="/privacy">Privacy policy</Link>
            <Link to="/terms">Terms of use</Link>
          </div>
          <div className={styles.footerCol}>
            <p className={styles.footerHead}>Contact</p>
            <a href={`mailto:${siteMeta.email}`}>{siteMeta.email}</a>
          </div>
        </div>
        <p className={styles.footerLegal}>
          © {new Date().getFullYear()} {siteMeta.legalName}. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
