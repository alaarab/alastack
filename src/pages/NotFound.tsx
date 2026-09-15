import { Link } from "react-router";
import { Layout } from "../components/Layout";
import { siteMeta } from "../data/siteContent";
import { useDocumentTitle } from "../lib/useDocumentTitle";
import styles from "../styles/Site.module.css";

export function NotFound() {
  useDocumentTitle(`Not found | ${siteMeta.name}`);

  return (
    <Layout>
      <section className={styles.pageHead}>
        <p className={styles.eyebrow}>404</p>
        <h1>Nothing here.</h1>
        <p className={styles.lede}>That page does not exist, or it moved.</p>
        <div className={styles.ctaRow}>
          <Link className={styles.secondaryCta} to="/">Home</Link>
          <Link className={styles.secondaryCta} to="/products">Products</Link>
        </div>
      </section>
    </Layout>
  );
}
