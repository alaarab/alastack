import { Layout } from "../components/Layout";
import { ProductCatalog } from "../components/ProductCatalog";
import { siteMeta } from "../data/siteContent";
import { useDocumentTitle } from "../lib/useDocumentTitle";
import styles from "../styles/Site.module.css";

export function Products() {
  useDocumentTitle(`Products | ${siteMeta.name}`);

  return (
    <Layout>
      <section className={styles.pageHead}>
        <p className={styles.eyebrow}>Products</p>
        <h1>Everything we ship</h1>
        <p className={styles.lede}>
          Business systems, developer tooling, and apps. Each one links to its docs, source, or a way to get in touch.
        </p>
      </section>
      <section className={styles.section}>
        <ProductCatalog />
      </section>
    </Layout>
  );
}
