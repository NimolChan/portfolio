import Link from "next/link";
import { notFound } from "next/navigation";
import { Footer } from "../../components/footer";
import { SectionHeading } from "../../components/section-heading";
import { getPortfolio } from "../../../lib/getPortfolio";
import { portfolioData } from "../../../lib/portfolio";

export async function generateStaticParams() {
  return portfolioData.projects.map((project) => ({ slug: project.slug }));
}

type ProjectDetailPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function ProjectDetailPage({ params }: ProjectDetailPageProps) {
  const [{ slug }, data] = await Promise.all([params, getPortfolio()]);
  const project = data.projects.find((item) => item.slug === slug);

  if (!project) {
    notFound();
  }

  const currentIndex = data.projects.findIndex((item) => item.slug === slug);
  const previousProject = data.projects[currentIndex - 1];
  const nextProject = data.projects[currentIndex + 1];

  return (
    <main className="page page-narrow">
      <section className="case-hero" aria-labelledby="case-title">
        <Link className="text-link" href="/projects">Back to projects</Link>
        <div className="case-kicker">
          <span>Case Study</span>
          <span>{project.year}</span>
        </div>
        <h1 id="case-title">{project.title}</h1>
        <p>{project.summary}</p>
      </section>

      <section aria-labelledby="overview-heading">
        <div className="case-grid">
          <SectionHeading id="overview-heading">Overview</SectionHeading>
          <p className="large-text">{project.description}</p>
        </div>
      </section>

      <section aria-labelledby="scope-heading">
        <div className="case-grid">
          <SectionHeading id="scope-heading">Technical Scope</SectionHeading>
          <ol className="case-list">
            {project.scope.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ol>
        </div>
      </section>

      <section aria-labelledby="tools-heading">
        <div className="case-grid">
          <SectionHeading id="tools-heading">Tools &amp; Technologies</SectionHeading>
          <ul className="tool-list">
            {project.tools.map((tool) => (
              <li key={tool}>{tool}</li>
            ))}
          </ul>
        </div>
      </section>

      <section aria-labelledby="outcomes-heading">
        <div className="case-grid">
          <SectionHeading id="outcomes-heading">Validation</SectionHeading>
          <ul className="case-list unordered">
            {project.outcomes.map((outcome) => (
              <li key={outcome}>{outcome}</li>
            ))}
          </ul>
        </div>
      </section>

      <section aria-labelledby="more-heading">
        <SectionHeading id="more-heading">More Projects</SectionHeading>
        <div className="route-grid two-column">
          {previousProject ? (
            <Link className="route-card" href={`/projects/${previousProject.slug}`}>
              <span>Previous</span>
              <strong>{previousProject.title}</strong>
            </Link>
          ) : null}
          {nextProject ? (
            <Link className="route-card" href={`/projects/${nextProject.slug}`}>
              <span>Next</span>
              <strong>{nextProject.title}</strong>
            </Link>
          ) : null}
          <Link className="route-card" href="/contact">
            <span>Contact</span>
            <strong>Discuss network infrastructure opportunities</strong>
          </Link>
        </div>
      </section>

      <Footer data={data} />
    </main>
  );
}
