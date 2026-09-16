import { Link } from "react-router";
import { Layout } from "../components/Layout";
import { ProductCard } from "../components/ProductCard";
import { process, products, services, siteMeta } from "../data/siteContent";
import { useDocumentTitle } from "../lib/useDocumentTitle";
import styles from "../styles/Site.module.css";

const FEATURED = ["intrapath", "atlas", "phren"];

export function Home() {
  useDocumentTitle(`${siteMeta.name} | ${siteMeta.tagline}`);
  const featured = products.filter((product) => FEATURED.includes(product.slug));

  return (
    <Layout>
      <section className={styles.hero}>
        <h1>{siteMeta.tagline}</h1>
        <p className={styles.lede}>{siteMeta.intro}</p>
        <div className={styles.ctaRow}>
          <Link className={styles.primaryCta} to="/contact">
            Start a conversation
          </Link>
          <Link className={styles.secondaryCta} to="/services">
            What we do
          </Link>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.sectionHead}>
          <h2>Services</h2>
          <Link to="/services" className={styles.sectionLink}>All services →</Link>
        </div>
        <div className={styles.serviceGrid}>
          {services.map((service) => (
            <Link key={service.slug} to={`/services#${service.slug}`} className={styles.serviceCard}>
              <h3>{service.title}</h3>
              <p>{service.summary}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.sectionHead}>
          <h2>How we work</h2>
        </div>
        <ol className={styles.steps}>
          {process.map((step, index) => (
            <li key={step.title}>
              <span className={styles.stepIndex}>{String(index + 1).padStart(2, "0")}</span>
              <div>
                <h3>{step.title}</h3>
                <p>{step.body}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className={styles.section}>
        <div className={styles.sectionHead}>
          <h2>Products</h2>
          <Link to="/products" className={styles.sectionLink}>All products →</Link>
        </div>
        <p className={styles.sectionNote}>
          Alongside client work, we build and sell our own software. Three of the products:
        </p>
        <div className={styles.productList}>
          {featured.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.contactBand}>
          <div>
            <h2>Have a system that needs building?</h2>
            <p>Tell us what you are running today and what is not working. We reply within two business days.</p>
          </div>
          <Link className={styles.primaryCta} to="/contact">Contact us</Link>
        </div>
      </section>
    </Layout>
  );
}
