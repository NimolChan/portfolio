import { Footer } from "../components/footer";
import { SectionHeading } from "../components/section-heading";
import { getPortfolio } from "../../lib/getPortfolio";

export default async function CredentialsPage() {
  const data = await getPortfolio();

  return (
    <main className="page page-narrow">
      <section className="page-intro" aria-labelledby="credentials-title">
        <SectionHeading id="credentials-title">Credentials</SectionHeading>
        <h1>Academic foundation and cybersecurity training.</h1>
        <p>
          Formal education, current scholarship training, professional certifications, and language capability.
        </p>
      </section>

      <section aria-labelledby="education-heading">
        <SectionHeading id="education-heading">Education</SectionHeading>
        <div className="entries compact-entries">
          {data.education.map((education) => (
            <article className="entry" key={`${education.title}-${education.year}`}>
              <div className="entry-main">
                <div className="entry-head">
                  <h3>{education.title}</h3>
                  <p className="entry-year">{education.year}</p>
                </div>
                <div className="education-details">
                  {education.details.map((detail) => (
                    <p key={detail}>{detail}</p>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section aria-labelledby="certifications-heading">
        <SectionHeading id="certifications-heading">Certifications</SectionHeading>
        <ul className="plain-list ruled-list">
          {data.certifications.map((certification) => (
            <li key={certification}>{certification}</li>
          ))}
        </ul>
      </section>

      <section aria-labelledby="languages-heading">
        <SectionHeading id="languages-heading">Languages</SectionHeading>
        <p className="profile-text">{data.languages}</p>
      </section>

      <Footer data={data} />
    </main>
  );
}
