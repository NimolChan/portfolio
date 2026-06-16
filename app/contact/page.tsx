import Link from "next/link";
import { Footer } from "../components/footer";
import { SectionHeading } from "../components/section-heading";
import { getPortfolio } from "../../lib/getPortfolio";

export default async function ContactPage() {
  const data = await getPortfolio();

  return (
    <main className="page page-narrow">
      <section className="page-intro" aria-labelledby="contact-title">
        <SectionHeading id="contact-title">Contact</SectionHeading>
        <h1>Available for network infrastructure and cybersecurity roles.</h1>
        <p>
          For opportunities related to secure network design, firewall administration, VPN deployment,
          infrastructure monitoring, or cybersecurity operations, contact Chan Nimol directly.
        </p>
      </section>

      <section aria-label="Contact options">
        <div className="contact-panel">
          <a className="contact-row" href={`mailto:${data.contact.email}`}>
            <span>Email</span>
            <strong>{data.contact.email}</strong>
          </a>
          <a className="contact-row" href={`tel:${data.contact.phoneHref}`}>
            <span>Phone</span>
            <strong>{data.contact.phone}</strong>
          </a>
          <a className="contact-row" href={data.contact.linkedinUrl}>
            <span>LinkedIn</span>
            <strong>{data.contact.linkedin}</strong>
          </a>
          <div className="contact-row">
            <span>Location</span>
            <strong>{data.location}</strong>
          </div>
        </div>
      </section>

      <section aria-labelledby="next-heading">
        <SectionHeading id="next-heading">Next</SectionHeading>
        <div className="route-grid">
          <Link className="route-card" href="/projects">
            <span>Review Projects</span>
            <strong>Enterprise network design and defense work</strong>
          </Link>
          <Link className="route-card" href="/credentials">
            <span>View Credentials</span>
            <strong>Education, certifications, and languages</strong>
          </Link>
        </div>
      </section>

      <Footer data={data} />
    </main>
  );
}
