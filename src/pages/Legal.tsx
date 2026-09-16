import { Layout } from "../components/Layout";
import { PageHead } from "../components/PageHead";
import { siteMeta } from "../data/siteContent";
import { useDocumentTitle } from "../lib/useDocumentTitle";
import styles from "../styles/Site.module.css";

const UPDATED = "September 15, 2026";

function Privacy() {
  return (
    <>
      <h2>What we collect</h2>
      <p>
        This website does not use cookies, analytics, or tracking scripts. Our web server keeps standard access logs
        (IP address, requested page, browser type, timestamp) for security and operational purposes; these are
        retained for a limited period and not shared.
      </p>
      <h2>Email</h2>
      <p>
        If you email us, we keep the correspondence for as long as needed to respond and to maintain a record of the
        business relationship. We do not sell or share your contact details.
      </p>
      <h2>Software</h2>
      <p>
        Software we publish may have its own privacy practices, described in its documentation or listing. Much of it is
        designed to keep data on your own devices or infrastructure and send nothing to us.
      </p>
      <h2>Your rights</h2>
      <p>
        You can ask what information we hold about you, or ask us to delete it, by emailing{" "}
        <a href={`mailto:${siteMeta.email}`}>{siteMeta.email}</a>.
      </p>
      <h2>Changes</h2>
      <p>We will update this page if our practices change. The date above reflects the last revision.</p>
    </>
  );
}

function Terms() {
  return (
    <>
      <h2>Use of this site</h2>
      <p>
        The content on {siteMeta.domain} is provided for general information about {siteMeta.legalName} and its
        software. You may view and link to it. You may not reproduce it for commercial purposes without
        permission.
      </p>
      <h2>Agreements</h2>
      <p>
        Software licenses and any commercial arrangements are governed by their own agreements. Nothing on this site
        forms a binding offer; descriptions may change as the software develops.
      </p>
      <h2>Open-source software</h2>
      <p>
        Software we publish under open-source licenses is governed by the license in its repository, which controls
        over anything stated here.
      </p>
      <h2>Disclaimer</h2>
      <p>
        This site is provided as is. We make reasonable efforts to keep it accurate but do not warrant that it is free
        of errors. To the extent permitted by law, {siteMeta.legalName} is not liable for loss arising from use of this
        site.
      </p>
      <h2>Contact</h2>
      <p>
        Questions about these terms go to <a href={`mailto:${siteMeta.email}`}>{siteMeta.email}</a>.
      </p>
    </>
  );
}

export function Legal({ page }: { page: "privacy" | "terms" }) {
  const title = page === "privacy" ? "Privacy policy" : "Terms of use";
  useDocumentTitle(`${title} | ${siteMeta.name}`);

  return (
    <Layout>
      <div className={styles.container}>
        <PageHead eyebrow="Legal" title={title} lede={`Last updated ${UPDATED}.`} />
        <div className={`${styles.prose} ${styles.proseNarrow}`}>
          {page === "privacy" ? <Privacy /> : <Terms />}
        </div>
      </div>
    </Layout>
  );
}
