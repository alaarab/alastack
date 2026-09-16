import { Link } from "react-router";
import { Layout } from "../components/Layout";
import { PageHead } from "../components/PageHead";
import { process, services, siteMeta } from "../data/siteContent";
import { useDocumentTitle } from "../lib/useDocumentTitle";
import styles from "../styles/Site.module.css";

export function Services() {
  useDocumentTitle(`Services | ${siteMeta.name}`);

  return (
    <Layout>
      <PageHead
        eyebrow="Services"
        title="What we build"
        lede="Business systems for organizations whose work does not fit off-the-shelf software. We design the data model, build the system, and run it."
      />

      <div className={styles.serviceList}>
        {services.map((service) => (
          <section key={service.slug} id={service.slug} className={styles.serviceDetail}>
            <div>
              <h2>{service.title}</h2>
              <p className={styles.serviceSummary}>{service.summary}</p>
            </div>
            <div>
              <p>{service.body}</p>
              <ul className={styles.checkList}>
                {service.deliverables.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </section>
        ))}
      </div>

      <section className={styles.section}>
        <div className={styles.sectionHead}>
          <h2>How an engagement runs</h2>
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
        <div className={styles.ctaRow}>
          <Link className={styles.primaryCta} to="/contact">Talk to us about a project</Link>
        </div>
      </section>
    </Layout>
  );
}
