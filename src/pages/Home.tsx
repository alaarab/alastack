import { Layout } from "../components/Layout";
import { areas, products, siteMeta } from "../data/siteContent";
import { useDocumentTitle } from "../lib/useDocumentTitle";
import styles from "../styles/Site.module.css";

export function Home() {
  useDocumentTitle(`${siteMeta.name} | ${siteMeta.tagline}`);

  return (
    <Layout>
      <section className={styles.heroBand}>
        <div className={styles.hero}>
          <p className={styles.eyebrow}>Alastack LLC</p>
          <h1>{siteMeta.tagline}</h1>
          <p className={styles.lede}>{siteMeta.intro}</p>
        </div>
      </section>

      <div className={styles.container}>
      <section className={styles.section}>
        <div className={`${styles.sectionHead} ${styles.sectionHeadPlain}`}>
          <h2>What we build</h2>
        </div>
        <div className={styles.areaGrid}>
          {areas.map((area, index) => (
            <article key={area.title} className={styles.area}>
              <span className={styles.areaIndex}>{String(index + 1).padStart(2, "0")}</span>
              <h3>{area.title}</h3>
              <p>{area.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.sectionHead}>
          <h2>Products</h2>
        </div>
        <ul className={styles.productList}>
          {products.map((product) => (
            <li key={product.name} className={styles.product}>
              <h3>{product.name}</h3>
              <p>{product.body}</p>
              <a href={product.href} className={styles.productLink}>
                {product.linkLabel} <span aria-hidden="true">↗</span>
              </a>
            </li>
          ))}
        </ul>
      </section>

      <section className={styles.section}>
        <div className={styles.sectionHead}>
          <h2>Company</h2>
        </div>
        <div className={styles.prose}>
            <p>
              Alastack builds software for organizations whose work does not fit off-the-shelf systems, and runs
              that software after it ships. The company owns and operates its products directly. It was founded by{" "}
              <a href={siteMeta.founder.href}>{siteMeta.founder.name}</a>.
            </p>
            <p>
              For licensing, partnership, or press, email{" "}
              <a href={`mailto:${siteMeta.email}`}>{siteMeta.email}</a>.
            </p>
        </div>
      </section>
      </div>
    </Layout>
  );
}
