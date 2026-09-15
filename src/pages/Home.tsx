import { Link } from "react-router";
import { Layout } from "../components/Layout";
import { ProductCard } from "../components/ProductCard";
import { capabilities, products, siteMeta } from "../data/siteContent";
import { useDocumentTitle } from "../lib/useDocumentTitle";
import styles from "../styles/Site.module.css";

export function Home() {
  useDocumentTitle(`${siteMeta.name} | ${siteMeta.tagline}`);

  return (
    <Layout>
      <section className={styles.hero}>
        <p className={styles.eyebrow}>Software company · {siteMeta.location}</p>
        <h1>{siteMeta.tagline}</h1>
        <p className={styles.lede}>{siteMeta.intro}</p>
        <div className={styles.ctaRow}>
          <Link className={styles.primaryCta} to="/products">
            See the products
          </Link>
          <a className={styles.secondaryCta} href={`mailto:${siteMeta.email}`}>
            Get in touch
          </a>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.sectionIntro}>
          <p className={styles.eyebrow}>What we build</p>
          <h2>Systems that run the business</h2>
        </div>
        <div className={styles.capabilityGrid}>
          {capabilities.map((item) => (
            <article key={item.title} className={styles.capability}>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.sectionIntro}>
          <p className={styles.eyebrow}>Products</p>
          <h2>What we ship</h2>
        </div>
        <div className={styles.cardGrid}>
          {products.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.contactPanel}>
          <div>
            <p className={styles.eyebrow}>Contact</p>
            <h2>Talk to us</h2>
            <p className={styles.contactText}>
              Licensing, demos, or a system you need built. Email is the fastest way to reach us.
            </p>
          </div>
          <a className={styles.primaryCta} href={`mailto:${siteMeta.email}`}>
            {siteMeta.email}
          </a>
        </div>
      </section>
    </Layout>
  );
}
