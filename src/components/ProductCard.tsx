import { Link } from "react-router";
import { accentStyle } from "../lib/accentStyle";
import styles from "../styles/Site.module.css";
import type { Product } from "../types";

export function ProductCard({ product }: { product: Product }) {
  return (
    <Link to={`/products/${product.slug}`} className={styles.productRow} style={accentStyle(product.accent)}>
      <span className={styles.productDot} aria-hidden="true" />
      <span className={styles.productBody}>
        <span className={styles.productTitle}>
          <strong>{product.name}</strong>
          <span className={styles.productMeta}>
            {product.category} · {product.status}
          </span>
        </span>
        <span className={styles.productSummary}>{product.summary}</span>
      </span>
      <span className={styles.productArrow} aria-hidden="true">→</span>
    </Link>
  );
}
