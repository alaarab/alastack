import { Link } from "react-router";
import { Layout } from "../components/Layout";
import { PageHead } from "../components/PageHead";
import { siteMeta } from "../data/siteContent";
import { useDocumentTitle } from "../lib/useDocumentTitle";
import styles from "../styles/Site.module.css";

export function NotFound() {
  useDocumentTitle(`Not found | ${siteMeta.name}`);

  return (
    <Layout>
      <PageHead eyebrow="404" title="Page not found" lede="That page does not exist, or it moved." />
      <div className={styles.ctaRow}>
        <Link className={styles.secondaryCta} to="/">Home</Link>
      </div>
    </Layout>
  );
}
