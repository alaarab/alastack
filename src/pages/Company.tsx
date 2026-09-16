import { Link } from "react-router";
import { Layout } from "../components/Layout";
import { PageHead } from "../components/PageHead";
import { companyFacts, principles, siteMeta } from "../data/siteContent";
import { useDocumentTitle } from "../lib/useDocumentTitle";
import styles from "../styles/Site.module.css";

export function Company() {
  useDocumentTitle(`Company | ${siteMeta.name}`);

  return (
    <Layout>
      <PageHead
        eyebrow="Company"
        title="About Alastack"
        lede={siteMeta.intro}
      />
      <div className={styles.twoCol}>
        <div className={styles.prose}>
          <p>
            Alastack exists because most organizations run on software that was built for someone else. The ERP fits a
            manufacturer, the ticketing tool fits a call center, and the finance system fits whoever bought it first.
            The gaps get filled with spreadsheets and people remembering things.
          </p>
          <p>
            We build the systems that fit. That means starting from the workflow, not the feature list; owning the
            data model; and staying on after launch to run the software and change it as the business changes. Where
            the same problem shows up across clients, we turn the answer into a product.
          </p>
          <p>
            Contact us at <a href={`mailto:${siteMeta.email}`}>{siteMeta.email}</a> or through the{" "}
            <Link to="/contact">contact page</Link>.
          </p>
        </div>
        <dl className={styles.facts}>
          {companyFacts.map((fact) => (
            <div key={fact.label}>
              <dt>{fact.label}</dt>
              <dd>{fact.value}</dd>
            </div>
          ))}
        </dl>
      </div>

      <section className={styles.section}>
        <div className={styles.sectionHead}>
          <h2>How we think about the work</h2>
        </div>
        <div className={styles.principleGrid}>
          {principles.map((item) => (
            <article key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </article>
          ))}
        </div>
      </section>
    </Layout>
  );
}
