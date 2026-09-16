import { Layout } from "../components/Layout";
import { PageHead } from "../components/PageHead";
import { ProductCatalog } from "../components/ProductCatalog";
import { siteMeta } from "../data/siteContent";
import { useDocumentTitle } from "../lib/useDocumentTitle";

export function Products() {
  useDocumentTitle(`Products | ${siteMeta.name}`);

  return (
    <Layout>
      <PageHead
        eyebrow="Products"
        title="Software we build and sell"
        lede="Business systems available to license, plus open-source tooling and applications we maintain. Each product links to its documentation, source, or a way to get in touch."
      />
      <ProductCatalog />
    </Layout>
  );
}
