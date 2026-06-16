import Link from "next/link";
import { Footer } from "./components/footer";
import { ProfileCard } from "./components/profile-card";
import { ProjectsList } from "./components/projects-list";
import { SectionHeading } from "./components/section-heading";
import { TerminalStatus } from "./components/terminal-status";
import { getPortfolio } from "../lib/getPortfolio";

export default async function Home() {
  const data = await getPortfolio();

  return (
    <main className="page">
      <header className="hero" id="top">
        <div className="hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">Portfolio / Network Engineering</p>
            <h1 className="hero-name">{data.name}</h1>
            <p className="hero-role">
              {data.role}
              <span className="cursor" aria-hidden="true" />
            </p>
            <p className="tagline">{data.tagline}</p>
            <TerminalStatus />
            <div className="hero-actions" aria-label="Portfolio navigation links">
              <Link className="button-link primary" href="/projects">View Projects</Link>
              <Link className="button-link" href="/credentials">Credentials</Link>
              <Link className="button-link" href="/contact">Contact</Link>
            </div>
            <p className="contact-list" aria-label="Contact information">
              <span>
                Email: <a href={`mailto:${data.contact.email}`}>{data.contact.email}</a>
              </span>
              <span>
                Phone: <a href={`tel:${data.contact.phoneHref}`}>{data.contact.phone}</a>
              </span>
              <span>
                LinkedIn: <a href={data.contact.linkedinUrl}>{data.contact.linkedin}</a>
              </span>
            </p>
          </div>
          <ProfileCard data={data} />
        </div>
      </header>

      <section id="profile" aria-labelledby="profile-heading">
        <div className="split-section">
          <SectionHeading id="profile-heading">Profile</SectionHeading>
          <div>
            <p className="profile-text large-text">{data.profile}</p>
            <div className="metrics-row" aria-label="Professional summary metrics">
              <div>
                <strong>5</strong>
                <span>Security zones designed</span>
              </div>
              <div>
                <strong>HA</strong>
                <span>Firewall redundancy</span>
              </div>
              <div>
                <strong>VPN</strong>
                <span>Dual tunnel architecture</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="technical-skills" aria-labelledby="skills-heading">
        <SectionHeading id="skills-heading">Technical Skills</SectionHeading>
        <div className="skills-grid">
          {data.skills.map((skill) => (
            <div className="skill-group" key={skill.category}>
              <h3>{skill.category}</h3>
              <p>{skill.items}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="projects-experience" aria-labelledby="projects-heading">
        <div className="section-topline">
          <SectionHeading id="projects-heading">Selected Projects</SectionHeading>
          <Link className="text-link" href="/projects">All projects</Link>
        </div>
        <ProjectsList data={data} limit={3} />
      </section>

      <section id="quick-routes" aria-labelledby="routes-heading">
        <SectionHeading id="routes-heading">Explore</SectionHeading>
        <div className="route-grid">
          <Link className="route-card" href="/projects">
            <span>Projects</span>
            <strong>Network architecture, VPN, HA, SIEM, IDS</strong>
          </Link>
          <Link className="route-card" href="/credentials">
            <span>Credentials</span>
            <strong>Education, certifications, scholarship training</strong>
          </Link>
          <Link className="route-card" href="/contact">
            <span>Contact</span>
            <strong>Email, phone, LinkedIn, location</strong>
          </Link>
        </div>
      </section>

      <Footer data={data} />
    </main>
  );
}
