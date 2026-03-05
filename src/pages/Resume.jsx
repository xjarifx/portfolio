import { Link } from "react-router-dom";
import { usePortfolioData } from "../hooks/usePortfolioData";

function Resume() {
  const { metadata, sections, theme } = usePortfolioData();

  const summarySection = sections.find((section) => section.id === "summary");
  const projectsSection = sections.find((section) => section.id === "projects");
  const certificationsSection = sections.find(
    (section) => section.id === "certifications",
  );
  const educationSection = sections.find(
    (section) => section.id === "education",
  );

  return (
    <main
      className={`resume-page min-h-screen ${theme.colors.background} ${theme.colors.text} px-4 py-8 md:px-8 md:py-12`}
    >
      <div className={`mx-auto w-full max-w-4xl rounded-lg border ${theme.colors.border} bg-white p-6 md:p-10 print:max-w-none print:rounded-none print:border-0 print:bg-transparent print:p-0 shadow-sm`}>
        <header className={`border-b ${theme.colors.border} pb-5`}>
          <h1 className={`text-3xl font-bold ${theme.colors.textPrimary}`}>
            {metadata.name}
          </h1>
          <p className={`mt-1 text-lg ${theme.colors.textPrimary}`}>
            {metadata.title}
          </p>
          <p className="mt-2 text-sm leading-relaxed">{metadata.tagline}</p>

          <div className="mt-4 flex flex-wrap gap-x-4 gap-y-1 text-sm">
            {metadata.email && (
              <a
                href={`mailto:${metadata.email}`}
                className={`${theme.colors.accentHover} transition-colors`}
              >
                {metadata.email}
              </a>
            )}
            {metadata.phone && <span>{metadata.phone}</span>}
            {metadata.social?.linkedin && (
              <a
                href={metadata.social.linkedin}
                target="_blank"
                rel="noreferrer noopener"
                className={`${theme.colors.accentHover} transition-colors`}
              >
                LinkedIn
              </a>
            )}
            {metadata.social?.github && (
              <a
                href={metadata.social.github}
                target="_blank"
                rel="noreferrer noopener"
                className={`${theme.colors.accentHover} transition-colors`}
              >
                GitHub
              </a>
            )}
          </div>

          <div className="no-print mt-5 flex flex-wrap gap-3">
            <button
              type="button"
              onClick={() => window.print()}
              className={`inline-flex cursor-pointer items-center rounded-md border ${theme.colors.border} bg-white px-3 py-1.5 text-sm font-medium ${theme.colors.textPrimary} hover:bg-gray-50 hover:border-gray-300 ${theme.colors.accentHover} transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-500`}
            >
              Download as PDF
            </button>
            <Link
              to="/"
              className={`inline-flex items-center rounded-md border ${theme.colors.border} bg-white px-3 py-1.5 text-sm font-medium ${theme.colors.textPrimary} hover:bg-gray-50 hover:border-gray-300 ${theme.colors.accentHover} transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-500`}
            >
              Back to Portfolio
            </Link>
          </div>
        </header>

        {summarySection?.content?.length > 0 && (
          <section className="mt-6">
            <h2 className={theme.typography.label}>
              Summary
            </h2>
            <div className="mt-2 space-y-2 text-sm leading-relaxed">
              {summarySection.content.map((paragraph, index) => (
                <p key={`summary-${index}`}>{paragraph}</p>
              ))}
            </div>
          </section>
        )}

        {projectsSection?.items?.length > 0 && (
          <section className="mt-7">
            <h2 className={theme.typography.label}>
              Projects
            </h2>
            <div className="mt-3 space-y-4">
              {projectsSection.items.map((project) => (
                <article
                  key={project.title}
                  className="break-inside-avoid-page"
                >
                  <div className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1">
                    <h3
                      className={`text-base font-semibold ${theme.colors.textPrimary}`}
                    >
                      {project.title}
                    </h3>
                    {project.techStack?.length > 0 && (
                      <p className="text-xs">{project.techStack.join(" · ")}</p>
                    )}
                  </div>

                  {project.description && (
                    <p className="mt-1 text-sm leading-relaxed">
                      {project.description}
                    </p>
                  )}

                  {project.highlights?.length > 0 && (
                    <ul className="mt-2 list-disc space-y-1 pl-5 text-sm">
                      {project.highlights.map((highlight, index) => (
                        <li key={`${project.title}-highlight-${index}`}>
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  )}

                  {project.links?.length > 0 && (
                    <p className="mt-2 flex flex-wrap items-center gap-x-1 text-xs">
                      {project.links.map((link, index) => (
                        <span key={`${project.title}-${link.label}`}>
                          <a
                            href={link.url}
                            target="_blank"
                            rel="noreferrer noopener"
                            className={`${theme.colors.accentHover} transition-colors`}
                          >
                            {link.label}
                          </a>
                          {index < project.links.length - 1 ? " · " : ""}
                        </span>
                      ))}
                    </p>
                  )}
                </article>
              ))}
            </div>
          </section>
        )}

        {certificationsSection?.items?.length > 0 && (
          <section className="mt-7">
            <h2 className={theme.typography.label}>
              Certifications
            </h2>
            <div className="mt-3 space-y-3">
              {certificationsSection.items.map((certification) => (
                <article
                  key={certification.name}
                  className="break-inside-avoid-page"
                >
                  <div className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1">
                    <h3
                      className={`text-base font-semibold ${theme.colors.textPrimary}`}
                    >
                      {certification.name}
                    </h3>
                    {certification.date && (
                      <span className="text-xs">{certification.date}</span>
                    )}
                  </div>
                  <p className="text-sm">{certification.issuer}</p>
                  {certification.description && (
                    <p className="mt-1 text-sm leading-relaxed">
                      {certification.description}
                    </p>
                  )}
                </article>
              ))}
            </div>
          </section>
        )}

        {educationSection?.items?.length > 0 && (
          <section className="mt-7">
            <h2 className={theme.typography.label}>
              Education
            </h2>
            <div className="mt-2 space-y-3 text-sm">
              {educationSection.items.map((entry, index) => (
                <div key={`education-${index}`}>
                  <p className={`font-medium ${theme.colors.textPrimary}`}>
                    {entry.degree}
                  </p>
                  <p className={theme.colors.text}>{entry.institution}</p>
                  <p className={theme.colors.textMuted}>
                    {entry.period}
                    {entry.gpa ? ` · ${entry.gpa}` : ""}
                  </p>
                </div>
              ))}
            </div>
          </section>
        )}
      </div>
    </main>
  );
}

export default Resume;
