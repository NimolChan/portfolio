import Link from "next/link";
import type { Portfolio } from "../../lib/types";

export function ProjectsList({ data, limit }: { data: Portfolio; limit?: number }) {
  const projects = typeof limit === "number" ? data.projects.slice(0, limit) : data.projects;

  return (
    <div className="entries">
      {projects.map((project, index) => (
        <article className="entry" key={project.title}>
          <div className="entry-index">{String(index + 1).padStart(2, "0")}</div>
          <div className="entry-main">
            <div className="entry-head">
              <h3>
                <Link href={`/projects/${project.slug}`}>{project.title}</Link>
              </h3>
              <p className="entry-year">{project.year}</p>
            </div>
            <p className="entry-description">{project.summary}</p>
            <Link className="case-link" href={`/projects/${project.slug}`}>View case study</Link>
          </div>
        </article>
      ))}
    </div>
  );
}
