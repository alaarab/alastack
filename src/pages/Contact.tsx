import { Layout } from "../components/Layout";
import { PageHead } from "../components/PageHead";
import { siteMeta } from "../data/siteContent";
import { useDocumentTitle } from "../lib/useDocumentTitle";
import styles from "../styles/Site.module.css";

export function Contact() {
  useDocumentTitle(`Contact | ${siteMeta.name}`);

  return (
    <Layout>
      <PageHead
        eyebrow="Contact"
        title="Get in touch"
        lede="For new projects, product licensing, or support. We reply within two business days."
      />
      <div className={styles.twoCol}>
        <div className={styles.prose}>
          <h2>Email</h2>
          <p>
            <a className={styles.bigLink} href={`mailto:${siteMeta.email}`}>{siteMeta.email}</a>
          </p>
          <h2>What to include</h2>
          <ul className={styles.checkList}>
            <li>What your organization does and roughly how large it is</li>
            <li>The systems you run today and where they fall short</li>
            <li>Any timeline or budget you are working within</li>
          </ul>
          <h2>Existing customers</h2>
          <p>Support requests go to the same address. Include the product name in the subject line.</p>
        </div>
        <dl className={styles.facts}>
          <div>
            <dt>Location</dt>
            <dd>{siteMeta.location}</dd>
          </div>
          <div>
            <dt>Hours</dt>
            <dd>Monday to Friday, 9am to 5pm Pacific</dd>
          </div>
        </dl>
      </div>
    </Layout>
  );
}
