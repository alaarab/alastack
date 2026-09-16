import { Link, useParams } from "react-router";
import { ActionLinks } from "../components/ActionLinks";
import { Layout } from "../components/Layout";
import { ProductCard } from "../components/ProductCard";
import { products, siteMeta } from "../data/siteContent";
import { accentStyle } from "../lib/accentStyle";
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
      <article style={accentStyle(product.accent)}>
        <section className={styles.pageHead}>
          <Link to="/products" className={styles.backLink}>← All products</Link>
          <p className={styles.eyebrow}>{product.group} · {product.category}</p>
          <h1>{product.name}</h1>
          <p className={styles.lede}>{product.summary}</p>
        </section>
        <div className={styles.twoCol}>
          <div className={styles.prose}>
            <p>{product.description}</p>
            <ul className={styles.checkList}>
              {product.highlights.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <aside aria-label={`${product.name} at a glance`}>
            <dl className={styles.facts}>
            <div>
              <dt>Status</dt>
              <dd>{product.status}</dd>
            </div>
            <div>
              <dt>Built with</dt>
              <dd>{product.stack.join(", ")}</dd>
            </div>
            <div>
              <dt>Links</dt>
              <dd>
                <ActionLinks links={product.links} className={styles.factLinks} />
              </dd>
            </div>
            </dl>
          </aside>
        </div>
      </article>

      <section className={styles.section}>
        <div className={styles.sectionHead}>
          <h2>More products</h2>
        </div>
        <div className={styles.productList}>
          {related.map((item) => (
            <ProductCard key={item.slug} product={item} />
          ))}
        </div>
      </section>
    </Layout>
  );
}
