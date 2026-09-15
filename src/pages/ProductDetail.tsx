import { Link, useParams } from "react-router";
import { ActionLinks } from "../components/ActionLinks";
import { Layout } from "../components/Layout";
import { accentStyle } from "../components/ProductCard";
import { products, siteMeta } from "../data/siteContent";
import { useDocumentTitle } from "../lib/useDocumentTitle";
import styles from "../styles/Site.module.css";
import { NotFound } from "./NotFound";

export function ProductDetail() {
  const { slug } = useParams();
  const product = products.find((item) => item.slug === slug);
  useDocumentTitle(product ? `${product.name} | ${siteMeta.name}` : `Not found | ${siteMeta.name}`);
  if (!product) return <NotFound />;

  return (
    <Layout>
      <article className={styles.detail} style={accentStyle(product.accent)}>
        <Link to="/products" className={styles.backLink}>← All products</Link>
        <div className={styles.cardMeta}>
          <span className={styles.pill}>{product.category}</span>
          <span className={styles.pillMuted}>{product.status}</span>
        </div>
        <h1>{product.name}</h1>
        <p className={styles.lede}>{product.summary}</p>
        <p className={styles.detailBody}>{product.description}</p>
        <ul className={styles.highlights}>
          {product.highlights.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <ul className={styles.tagList}>
          {product.stack.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <ActionLinks links={product.links} className={styles.detailLinks} />
      </article>
    </Layout>
  );
}
