import { portfolio } from "../data/portfolio";
import { useState, useEffect, useCallback, useRef } from "react";

function Home() {
  const [activeSection, setActiveSection] = useState(
    portfolio.sections[0]?.id || "about",
  );
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [emailCopied, setEmailCopied] = useState(false);
  const copyTimeoutRef = useRef(null);

  const { metadata, theme, sections, config } = portfolio;

  // Mouse tracking for spotlight effect
  useEffect(() => {
    if (!config.spotlight.enabled) return;

    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [config.spotlight.enabled]);

  // Intersection Observer for active section detection
  useEffect(() => {
    if (!config.observer.enabled) return;

    const sectionElements = document.querySelectorAll("section[id]");

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries.reduce(
          (max, entry) =>
            entry.intersectionRatio > (max?.intersectionRatio || 0)
              ? entry
              : max,
          null,
        );

        if (visibleEntry && visibleEntry.isIntersecting) {
          setActiveSection(visibleEntry.target.id);
        }
      },
      {
        threshold: config.observer.thresholds,
        rootMargin: config.observer.rootMargin,
      },
    );

    sectionElements.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, [config.observer]);

  // Smooth scroll handler
  const handleNavClick = useCallback(
    (e, targetId) => {
      e.preventDefault();
      const element = document.getElementById(targetId);
      if (element && config.smoothScroll.enabled) {
        element.scrollIntoView({
          behavior: config.smoothScroll.behavior,
          block: config.smoothScroll.block,
        });
      }
    },
    [config.smoothScroll],
  );

  const handleCopyEmail = useCallback(async () => {
    if (!metadata.email) return;

    const showCopiedState = () => {
      setEmailCopied(true);
      if (copyTimeoutRef.current) {
        clearTimeout(copyTimeoutRef.current);
      }
      copyTimeoutRef.current = setTimeout(() => {
        setEmailCopied(false);
      }, 2000);
    };

    try {
      await navigator.clipboard.writeText(metadata.email);
      showCopiedState();
    } catch {
      const textarea = document.createElement("textarea");
      textarea.value = metadata.email;
      textarea.setAttribute("readonly", "");
      textarea.style.position = "absolute";
      textarea.style.left = "-9999px";
      document.body.appendChild(textarea);
      textarea.select();

      try {
        document.execCommand("copy");
        showCopiedState();
      } finally {
        document.body.removeChild(textarea);
      }
    }
  }, [metadata.email]);

  useEffect(() => {
    return () => {
      if (copyTimeoutRef.current) {
        clearTimeout(copyTimeoutRef.current);
      }
    };
  }, []);

  return (
    <div
      className={`min-h-screen ${theme.colors.background} ${theme.colors.text}`}
    >
      {/* Spotlight effect - dynamically controlled */}
      {config.spotlight.enabled && (
        <div
          className="pointer-events-none fixed inset-0 z-30 transition duration-300 lg:absolute"
          style={{
            background: `radial-gradient(${config.spotlight.size} at ${mousePosition.x}px ${mousePosition.y}px, ${config.spotlight.color}, transparent 80%)`,
          }}
        ></div>
      )}

      <div
        className={`mx-auto min-h-screen ${config.layout.maxWidth} px-6 py-12 md:px-12 md:py-20 lg:px-24 lg:py-0`}
      >
        <div className="lg:flex lg:justify-between lg:gap-4">
          {/* Left Sidebar */}
          <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
            <div>
              <h1
                className={`${theme.typography.heading} ${theme.colors.textPrimary}`}
              >
                {metadata.name}
              </h1>
              <h2
                className={`mt-3 ${theme.typography.subheading} ${theme.colors.textPrimary}`}
              >
                {metadata.title}
              </h2>
              <p className="mt-4 max-w-xs leading-normal">{metadata.tagline}</p>
              {metadata.email && (
                <div className="mt-4 flex flex-wrap items-center gap-3">
                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    className={`inline-flex items-center gap-2 rounded border border-slate-600/60 px-3 py-1.5 text-sm font-medium ${theme.colors.textPrimary} hover:border-slate-400/80 hover:${theme.colors.accent} focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-300/70 transition-colors cursor-pointer`}
                    aria-label={`Copy email ${metadata.email}`}
                    title="Click to copy"
                  >
                    <span className="text-xs uppercase tracking-wide">
                      Email
                    </span>
                    <span className="font-semibold">{metadata.email}</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="h-4 w-4"
                      aria-hidden="true"
                    >
                      <path d="M7.5 4.5a3 3 0 013-3h4a3 3 0 013 3v6a3 3 0 01-3 3h-4a3 3 0 01-3-3v-6z" />
                      <path d="M3 8a3 3 0 013-3h1.5v1.5H6a1.5 1.5 0 00-1.5 1.5v6A1.5 1.5 0 006 15.5h4A1.5 1.5 0 0011.5 14v-1.5H13V14a3 3 0 01-3 3H6a3 3 0 01-3-3V8z" />
                    </svg>
                  </button>
                  {emailCopied && (
                    <span
                      className={`text-xs ${theme.colors.accent}`}
                      aria-live="polite"
                    >
                      Copied!
                    </span>
                  )}
                </div>
              )}

              {/* Dynamic Navigation - generated from sections array */}
              <nav
                className="nav hidden lg:block mt-16"
                aria-label="In-page jump links"
              >
                <ul className="mt-16 w-max">
                  {sections.map((section) => (
                    <li key={section.id}>
                      <a
                        className="group flex items-center py-3"
                        href={`#${section.id}`}
                        onClick={(e) => handleNavClick(e, section.id)}
                      >
                        <span
                          className={`nav-indicator mr-4 h-px transition-all duration-300 ${
                            activeSection === section.id
                              ? `w-16 ${theme.colors.lineActive}`
                              : `w-8 ${theme.colors.line} group-hover:w-16 group-hover:${theme.colors.lineActive}`
                          }`}
                        ></span>
                        <span
                          className={`nav-text ${theme.typography.label} transition-colors duration-300 ${
                            activeSection === section.id
                              ? theme.colors.textPrimary
                              : `${theme.colors.textMuted} group-hover:${theme.colors.textPrimary}`
                          }`}
                        >
                          {section.title}
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>

            {/* Social Links - dynamically shown */}
            {config.display.showSocialLinks &&
              Object.keys(metadata.social).length > 0 && (
                <ul
                  className="ml-1 mt-8 flex items-center"
                  aria-label="Social media"
                >
                  {metadata.social.github && (
                    <li className="mr-5 text-xs shrink-0">
                      <a
                        className={`block ${theme.colors.text} hover:${theme.colors.accent} transition-colors`}
                        href={metadata.social.github}
                        target="_blank"
                        rel="noreferrer noopener"
                        aria-label="GitHub (opens in a new tab)"
                      >
                        <span className="sr-only">GitHub</span>
                        <svg
                          className="h-6 w-6"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                        >
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                        </svg>
                      </a>
                    </li>
                  )}
                  {metadata.social.linkedin && (
                    <li className="mr-5 text-xs shrink-0">
                      <a
                        className={`block ${theme.colors.text} hover:${theme.colors.accent} transition-colors`}
                        href={metadata.social.linkedin}
                        target="_blank"
                        rel="noreferrer noopener"
                        aria-label="LinkedIn (opens in a new tab)"
                      >
                        <span className="sr-only">LinkedIn</span>
                        <svg
                          className="h-6 w-6"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                        >
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                        </svg>
                      </a>
                    </li>
                  )}
                </ul>
              )}
          </header>

          {/* Right Content - Dynamic Sections */}
          <main className="pt-24 lg:w-1/2 lg:py-24">
            {sections.map((section) => (
              <section
                key={section.id}
                id={section.id}
                className={`${theme.spacing.sectionGap} scroll-mt-16 lg:scroll-mt-24`}
              >
                {/* Section Header - always visible */}
                {config.display.showSectionHeaders && (
                  <div className="sticky top-0 z-20 -mx-6 mb-8 w-[calc(100%+3rem)] bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:w-[calc(100%+6rem)] md:px-12 lg:mx-auto lg:w-full lg:px-0 lg:py-5 lg:mb-10">
                    <h2
                      className={`${theme.typography.label} ${theme.colors.textPrimary}`}
                    >
                      {section.title}
                    </h2>
                  </div>
                )}

                {/* Render section based on type */}
                {section.type === "text" && (
                  <div>
                    {section.content.map((paragraph, index) => (
                      <p key={index} className="mb-4">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                )}

                {section.type === "experience" && (
                  <div>
                    <ol className="group/list">
                      {section.items.map((job, index) => (
                        <li
                          key={`experience-${index}`}
                          className={theme.spacing.itemGap}
                        >
                          <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                            <div
                              className={`absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block ${theme.colors.hoverOverlay} lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg`}
                            ></div>
                            <header
                              className={`z-10 mb-2 mt-1 ${theme.typography.label} ${theme.colors.textMuted} sm:col-span-2`}
                              aria-label={`${job.period}`}
                            >
                              {job.period}
                            </header>
                            <div className="z-10 sm:col-span-6">
                              <h3
                                className={`font-medium leading-snug ${theme.colors.textPrimary}`}
                              >
                                <div>
                                  <a
                                    className={`inline-flex items-baseline font-medium leading-tight ${theme.colors.textPrimary} hover:${theme.colors.accent} focus-visible:${theme.colors.accent} group/link text-base`}
                                    href={job.companyUrl}
                                    target="_blank"
                                    rel="noreferrer noopener"
                                    aria-label={`${job.title} at ${job.company} (opens in a new tab)`}
                                  >
                                    <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                                    <span>
                                      {job.title} ·{" "}
                                      <span className="inline-block">
                                        {job.company}
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          viewBox="0 0 20 20"
                                          fill="currentColor"
                                          className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px"
                                          aria-hidden="true"
                                        >
                                          <path
                                            fillRule="evenodd"
                                            d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                                            clipRule="evenodd"
                                          />
                                        </svg>
                                      </span>
                                    </span>
                                  </a>
                                </div>
                              </h3>
                              <p
                                className={`${theme.spacing.contentGap} text-sm leading-normal`}
                              >
                                {job.description}
                              </p>
                              {job.achievements &&
                                job.achievements.length > 0 && (
                                  <ul
                                    className={`${theme.spacing.contentGap} text-xs ${theme.colors.text}`}
                                  >
                                    {job.achievements.map(
                                      (achievement, achIndex) => (
                                        <li key={achIndex} className="mb-1">
                                          • {achievement}
                                        </li>
                                      ),
                                    )}
                                  </ul>
                                )}
                              <ul
                                className={`${theme.spacing.contentGap} flex flex-wrap`}
                                aria-label="Technologies used"
                              >
                                {job.technologies.map((tech, techIndex) => (
                                  <li
                                    key={`${job.title}-tech-${techIndex}`}
                                    className="mr-1.5 mt-2"
                                  >
                                    <div
                                      className={`flex items-center rounded-full ${theme.colors.accentBg} px-3 py-1 text-xs font-medium leading-5 ${theme.colors.accent}`}
                                    >
                                      {tech}
                                    </div>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        </li>
                      ))}
                    </ol>
                  </div>
                )}

                {section.type === "project" && (
                  <div>
                    <ul className="group/list">
                      {section.items.map((project, index) => (
                        <li
                          key={`project-${index}`}
                          className={theme.spacing.itemGap}
                        >
                          <div className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                            <div
                              className={`absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block ${theme.colors.hoverOverlay} lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg`}
                            ></div>
                            {project.image && (
                              <div className="z-10 sm:order-1 sm:col-span-2">
                                <img
                                  alt={`${project.title} screenshot`}
                                  loading="lazy"
                                  width="200"
                                  height="48"
                                  decoding="async"
                                  className="rounded border-2 border-slate-200/10 transition group-hover:border-slate-200/30 sm:order-1 sm:col-span-2 sm:translate-y-1"
                                  src={project.image}
                                  onError={(e) => {
                                    e.target.style.display = "none";
                                  }}
                                />
                              </div>
                            )}
                            <div
                              className={`z-10 sm:order-2 ${project.image ? "sm:col-span-6" : "sm:col-span-8"}`}
                            >
                              <h3>
                                <a
                                  className={`inline-flex items-baseline font-medium leading-tight ${theme.colors.textPrimary} hover:${theme.colors.accent} focus-visible:${theme.colors.accent} group/link text-base`}
                                  href={project.githubUrl}
                                  target="_blank"
                                  rel="noreferrer noopener"
                                  aria-label={`${project.title} (opens in a new tab)`}
                                >
                                  <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                                  <span>
                                    {project.title}
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 20 20"
                                      fill="currentColor"
                                      className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px"
                                      aria-hidden="true"
                                    >
                                      <path
                                        fillRule="evenodd"
                                        d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                                        clipRule="evenodd"
                                      />
                                    </svg>
                                  </span>
                                </a>
                              </h3>
                              <p
                                className={`${theme.spacing.contentGap} text-sm leading-normal`}
                              >
                                {project.description}
                              </p>
                              {project.highlights &&
                                project.highlights.length > 0 && (
                                  <ul
                                    className={`${theme.spacing.contentGap} text-xs ${theme.colors.text}`}
                                  >
                                    {project.highlights.map(
                                      (highlight, hlIndex) => (
                                        <li key={hlIndex} className="mb-1">
                                          • {highlight}
                                        </li>
                                      ),
                                    )}
                                  </ul>
                                )}
                              <ul
                                className={`${theme.spacing.contentGap} flex flex-wrap`}
                                aria-label="Technologies used"
                              >
                                {project.techStack.map((tech, techIndex) => (
                                  <li
                                    key={`${project.title}-tech-${techIndex}`}
                                    className="mr-1.5 mt-2"
                                  >
                                    <div
                                      className={`flex items-center rounded-full ${theme.colors.accentBg} px-3 py-1 text-xs font-medium leading-5 ${theme.colors.accent}`}
                                    >
                                      {tech}
                                    </div>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {section.type === "article" && (
                  <div>
                    <ul className="group/list">
                      {section.items.map((article, index) => (
                        <li
                          key={`article-${index}`}
                          className={theme.spacing.itemGap}
                        >
                          <div className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                            <div
                              className={`absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block ${theme.colors.hoverOverlay} lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg`}
                            ></div>
                            {article.image && (
                              <div className="z-10 sm:order-1 sm:col-span-2">
                                <img
                                  alt={`${article.title} thumbnail`}
                                  loading="lazy"
                                  width="200"
                                  height="120"
                                  decoding="async"
                                  className="rounded border-2 border-slate-200/10 transition group-hover:border-slate-200/30 sm:order-1 sm:col-span-2 sm:translate-y-1"
                                  src={article.image}
                                  onError={(e) => {
                                    e.target.style.display = "none";
                                  }}
                                />
                              </div>
                            )}
                            <div
                              className={`z-10 sm:order-2 ${article.image ? "sm:col-span-6" : "sm:col-span-8"}`}
                            >
                              <h3
                                className={`font-medium leading-snug ${theme.colors.textPrimary}`}
                              >
                                {article.url ? (
                                  <a
                                    className={`inline-flex items-baseline font-medium leading-tight ${theme.colors.textPrimary} hover:${theme.colors.accent} focus-visible:${theme.colors.accent} group/link text-base`}
                                    href={article.url}
                                    target="_blank"
                                    rel="noreferrer noopener"
                                    aria-label={`${article.title} (opens in a new tab)`}
                                  >
                                    <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                                    <span>
                                      {article.title}
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                        className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px"
                                        aria-hidden="true"
                                      >
                                        <path
                                          fillRule="evenodd"
                                          d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                                          clipRule="evenodd"
                                        />
                                      </svg>
                                    </span>
                                  </a>
                                ) : (
                                  <span className="text-base">
                                    {article.title}
                                  </span>
                                )}
                              </h3>
                              {article.date && (
                                <p
                                  className={`mt-1 text-xs ${theme.colors.textMuted}`}
                                >
                                  {article.date}
                                </p>
                              )}
                              {article.summary && (
                                <p
                                  className={`${theme.spacing.contentGap} text-sm leading-normal`}
                                >
                                  {article.summary}
                                </p>
                              )}
                              {article.tags && article.tags.length > 0 && (
                                <ul
                                  className={`${theme.spacing.contentGap} flex flex-wrap`}
                                  aria-label="Article tags"
                                >
                                  {article.tags.map((tag, tagIndex) => (
                                    <li
                                      key={`${article.title}-tag-${tagIndex}`}
                                      className="mr-1.5 mt-2"
                                    >
                                      <div
                                        className={`flex items-center rounded-full ${theme.colors.accentBg} px-3 py-1 text-xs font-medium leading-5 ${theme.colors.accent}`}
                                      >
                                        {tag}
                                      </div>
                                    </li>
                                  ))}
                                </ul>
                              )}
                            </div>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </section>
            ))}
          </main>
        </div>
      </div>
    </div>
  );
}

export default Home;
