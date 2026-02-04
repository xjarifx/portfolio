import { useEmailCopy } from "../../hooks/useEmailCopy";
import { Button } from "../ui/Button";

/**
 * Header component
 * Left sidebar with metadata, social links, and download button
 */
export const Header = ({
  metadata,
  theme,
  sections,
  activeSection,
  onNavClick,
}) => {
  const { emailCopied, handleCopyEmail } = useEmailCopy(metadata.email);

  return (
    <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
      {/* Profile Section */}
      <div>
        <h1
          className={`${theme.typography.heading} ${theme.colors.textPrimary}`}
        >
          <a
            href="#about"
            onClick={(e) => onNavClick(e, "about")}
            className={`hover:${theme.colors.accent} transition-colors cursor-pointer`}
          >
            {metadata.name}
          </a>
        </h1>
        <h2
          className={`mt-3 ${theme.typography.subheading} ${theme.colors.textPrimary}`}
        >
          {metadata.title}
        </h2>
        <p className="mt-4 max-w-xs leading-normal">{metadata.tagline}</p>

        {/* Action Buttons */}
        <div className="mt-4 flex flex-wrap items-center gap-3">
          {metadata.email && (
            <Button
              onClick={handleCopyEmail}
              size="md"
              className="py-1.5 px-3"
              aria-label={`Copy email ${metadata.email}`}
              title="Click to copy"
            >
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
            </Button>
          )}
          {emailCopied && (
            <span
              className={`text-xs ${theme.colors.accent}`}
              aria-live="polite"
            >
              Copied!
            </span>
          )}
        </div>

        {/* Resume Download Button */}
        <div className="mt-4">
          <a
            href="/pdf/resume.pdf"
            download
            className={`inline-flex items-center gap-2 rounded border border-slate-600/60 px-3 py-1.5 text-sm font-medium ${theme.colors.textPrimary} hover:border-slate-400/80 hover:${theme.colors.accent} focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-300/70 transition-colors cursor-pointer`}
            aria-label="Download resume PDF"
          >
            Download Resume
          </a>
        </div>

        {/* Navigation */}
        <Navigation
          sections={sections}
          activeSection={activeSection}
          onNavClick={onNavClick}
          theme={theme}
        />
      </div>

      {/* Social Links */}
      {metadata.social && Object.keys(metadata.social).length > 0 && (
        <SocialLinks metadata={metadata} theme={theme} />
      )}
    </header>
  );
};

/**
 * Navigation sub-component
 */
const Navigation = ({ sections, activeSection, onNavClick, theme }) => {
  return (
    <nav className="nav hidden lg:block mt-16" aria-label="In-page jump links">
      <ul className="mt-16 w-max">
        {sections.map((section) => (
          <li key={section.id}>
            <a
              className="group flex items-center py-3"
              href={`#${section.id}`}
              onClick={(e) => onNavClick(e, section.id)}
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
  );
};

/**
 * SocialLinks sub-component
 */
const SocialLinks = ({ metadata, theme }) => {
  const socialIcons = {
    github: (
      <svg
        className="h-6 w-6"
        fill="currentColor"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
      </svg>
    ),
    linkedin: (
      <svg
        className="h-6 w-6"
        fill="currentColor"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
    leetcode: (
      <svg
        className="h-6 w-6"
        fill="currentColor"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z" />
      </svg>
    ),
    medium: (
      <svg
        className="h-6 w-6"
        fill="currentColor"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path d="M4.21 0A4.201 4.201 0 0 0 0 4.21v15.58A4.201 4.201 0 0 0 4.21 24h15.58A4.201 4.201 0 0 0 24 19.79v-1.093c-.137.013-.278.02-.422.02-2.577 0-4.027-2.146-4.09-4.832a7.592 7.592 0 0 1 .022-.708c.093-1.186.475-2.241 1.105-3.022a3.885 3.885 0 0 1 1.395-1.1c.468-.237 1.127-.367 1.664-.367h.023c.101 0 .202.004.303.01V4.211A4.201 4.201 0 0 0 19.79 0Zm.198 5.583h4.165l3.588 8.435 3.59-8.435h3.864v.146l-.019.004c-.705.16-1.063.397-1.063 1.254h-.003l.003 10.274c.06.676.424.885 1.063 1.03l.02.004v.145h-4.923v-.145l.019-.005c.639-.144.994-.353 1.054-1.03V7.267l-4.745 11.15h-.261L6.15 7.569v9.445c0 .857.358 1.094 1.063 1.253l.02.004v.147H4.405v-.147l.019-.004c.705-.16 1.065-.397 1.065-1.253V6.987c0-.857-.358-1.094-1.064-1.254l-.018-.004zm19.25 3.668c-1.086.023-1.733 1.323-1.813 3.124H24V9.298a1.378 1.378 0 0 0-.342-.047z" />
      </svg>
    ),
  };

  return (
    <ul className="ml-1 mt-8 flex items-center" aria-label="Social media">
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
            {socialIcons.github}
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
            {socialIcons.linkedin}
          </a>
        </li>
      )}
      {metadata.social.leetcode && (
        <li className="mr-5 text-xs shrink-0">
          <a
            className={`block ${theme.colors.text} hover:${theme.colors.accent} transition-colors`}
            href={metadata.social.leetcode}
            target="_blank"
            rel="noreferrer noopener"
            aria-label="LeetCode (opens in a new tab)"
          >
            <span className="sr-only">LeetCode</span>
            {socialIcons.leetcode}
          </a>
        </li>
      )}
      {metadata.social.medium && (
        <li className="mr-5 text-xs shrink-0">
          <a
            className={`block ${theme.colors.text} hover:${theme.colors.accent} transition-colors`}
            href={metadata.social.medium}
            target="_blank"
            rel="noreferrer noopener"
            aria-label="Medium (opens in a new tab)"
          >
            <span className="sr-only">Medium</span>
            {socialIcons.medium}
          </a>
        </li>
      )}
    </ul>
  );
};
