import { productGroups } from "../data/siteContent";
import styles from "../styles/Site.module.css";
import { ProductCard } from "./ProductCard";

/** The full catalog: one row per line of business, label on the left, cards on the right. */
export function ProductCatalog() {
  return (
    <div className={styles.catalog}>
      {productGroups.map(({ group, items }) => (
        <div key={group} className={styles.catalogGroup}>
          <h3 className={styles.catalogLabel}>{group}</h3>
          <div className={styles.catalogCards}>
            {items.map((product) => (
              <ProductCard key={product.slug} product={product} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
