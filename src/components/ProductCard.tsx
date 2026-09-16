import { Link } from "react-router";
import { accentStyle } from "../lib/accentStyle";
import styles from "../styles/Site.module.css";
import type { Product } from "../types";

export function ProductCard({ product }: { product: Product }) {
  return (
    <Link
      to={`/products/${product.slug}`}
      className={styles.card}
      style={accentStyle(product.accent)}
    >
      <div className={styles.cardMeta}>
        <span className={styles.pill}>{product.category}</span>
        <span className={styles.pillMuted}>{product.status}</span>
      </div>
      <h3>{product.name}</h3>
      <p>{product.summary}</p>
      <span className={styles.cardMore}>Details →</span>
    </Link>
  );
}
