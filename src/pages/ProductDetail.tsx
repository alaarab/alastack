import { Link, useParams } from "react-router";
import { ActionLinks } from "../components/ActionLinks";
import { Layout } from "../components/Layout";
import { ProductCard } from "../components/ProductCard";
import { accentStyle } from "../lib/accentStyle";
import { products, siteMeta } from "../data/siteContent";
import { useDocumentTitle } from "../lib/useDocumentTitle";
import styles from "../styles/Site.module.css";
import { NotFound } from "./NotFound";

export function ProductDetail() {
  const { slug } = useParams();
  const product = products.find((item) => item.slug === slug);
  useDocumentTitle(product ? `${product.name} | ${siteMeta.name}` : `Not found | ${siteMeta.name}`);
  if (!product) return <NotFound />;

  // Same line of business first, then the rest, capped at three.
  const related = [
    ...products.filter((item) => item.slug !== product.slug && item.group === product.group),
    ...products.filter((item) => item.slug !== product.slug && item.group !== product.group),
  ].slice(0, 3);

  return (
    <Layout>
      <article className={styles.detail} style={accentStyle(product.accent)}>
        <Link to="/products" className={styles.backLink}>← All products</Link>
        <div className={styles.detailGrid}>
          <div className={styles.detailMain}>
            <p className={styles.eyebrow}>{product.group}</p>
            <h1>{product.name}</h1>
            <p className={styles.lede}>{product.summary}</p>
            <p className={styles.detailBody}>{product.description}</p>
            <ul className={styles.highlights}>
              {product.highlights.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <aside className={styles.spec} aria-label={`${product.name} at a glance`}>
            <dl>
              <dt>Category</dt>
              <dd>{product.category}</dd>
              <dt>Status</dt>
              <dd>{product.status}</dd>
              <dt>Built with</dt>
              <dd>
                <ul className={styles.tagList}>
                  {product.stack.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </dd>
            </dl>
            <ActionLinks links={product.links} className={styles.detailLinks} />
          </aside>
        </div>
      </article>

      <section className={styles.section}>
        <h2 className={`${styles.catalogLabel} ${styles.relatedLabel}`}>More from Alastack</h2>
        <div className={styles.cardGrid}>
          {related.map((item) => (
            <ProductCard key={item.slug} product={item} />
          ))}
        </div>
      </section>
    </Layout>
  );
}
