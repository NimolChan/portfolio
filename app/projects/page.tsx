import { Footer } from "../components/footer";
import { ProjectsList } from "../components/projects-list";
import { SectionHeading } from "../components/section-heading";
import { getPortfolio } from "../../lib/getPortfolio";

export default async function ProjectsPage() {
  const data = await getPortfolio();

  return (
    <main className="page page-narrow">
      <section className="page-intro" aria-labelledby="projects-title">
        <SectionHeading id="projects-title">Projects &amp; Experience</SectionHeading>
        <h1>Infrastructure work with security-first implementation.</h1>
        <p>
          Selected projects focused on enterprise network architecture, firewall policy, VPN design,
          segmentation, monitoring, and defensive security validation.
        </p>
      </section>

      <section aria-label="Project list">
        <ProjectsList data={data} />
      </section>

      <Footer data={data} />
    </main>
  );
}
