import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faXTwitter,
  faInstagram,
  faMedium,
} from "@fortawesome/free-brands-svg-icons";
import { useEmailCopy } from "../../hooks/useEmailCopy";
import { Button } from "../ui/Button";
import { ResumeButton } from "../resume/ResumeButton";

/**
 * Header component
 * Left sidebar with metadata, social links, and resume button
 */
export const Header = ({
  metadata,
  theme,
  sections,
  activeSection,
  onNavClick,
}) => {
  const { emailCopied, handleCopyEmail } = useEmailCopy(metadata.email);
  const { emailCopied: phoneCopied, handleCopyEmail: handleCopyPhone } =
    useEmailCopy(metadata.phone);

  return (
    <header className="lg:sticky lg:top-0 lg:flex lg:h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-[5vh]">
      {/* Profile Section */}
      <div>
        <h1 className={theme.typography.heading}>
          <a
            href="#summary"
            onClick={(e) => onNavClick(e, "summary")}
            className={`cursor-pointer transition-colors ${theme.colors.accentHover}`}
          >
            {metadata.name}
          </a>
        </h1>
        <h2 className={`mt-3 ${theme.typography.subheading}`}>
          {metadata.title}
        </h2>
        <p
          className={`mt-4 max-w-xs text-base leading-relaxed ${theme.colors.text}`}
        >
          {metadata.tagline}
        </p>

        <ContactSection
          metadata={metadata}
          theme={theme}
          emailCopied={emailCopied}
          onCopyEmail={handleCopyEmail}
          phoneCopied={phoneCopied}
          onCopyPhone={handleCopyPhone}
        />

        <Navigation
          sections={sections}
          activeSection={activeSection}
          onNavClick={onNavClick}
          theme={theme}
        />
      </div>

      {/* Social Links and Resume */}
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
    <nav className="nav mt-16 hidden lg:block" aria-label="In-page jump links">
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
                    ? `w-12 sm:w-16 ${theme.colors.lineActive}`
                    : `w-6 sm:w-8 ${theme.colors.line} group-hover:w-12 group-hover:sm:w-16 group-hover:${theme.colors.lineActive}`
                }`}
              />
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
 * Contact section sub-component
 */
const ContactSection = ({
  metadata,
  theme,
  emailCopied,
  onCopyEmail,
  phoneCopied,
  onCopyPhone,
}) => {
  const hasContact = metadata.email || metadata.phone;

  if (!hasContact) return null;

  return (
    <section className="mt-8 max-w-md">
      <div className="mt-3 space-y-4">
        {metadata.email && (
          <div>
            <p className={`text-sm ${theme.colors.textMuted}`}>Email</p>
            <div className="mt-1 grid grid-cols-[1fr_auto_auto] items-center gap-x-2 gap-y-1">
              <a
                href={`mailto:${metadata.email}`}
                className={`min-w-0 text-base font-medium ${theme.colors.textPrimary} ${theme.colors.accentHover} transition-colors`}
              >
                {metadata.email}
              </a>
              <Button
                onClick={onCopyEmail}
                size="sm"
                className="shrink-0 px-2 py-1"
                aria-label={`Copy email ${metadata.email}`}
                title="Copy email"
              >
                Copy
              </Button>
              {emailCopied && (
                <span
                  className={`text-sm ${theme.colors.accent}`}
                  aria-live="polite"
                >
                  Copied!
                </span>
              )}
            </div>
          </div>
        )}

        {metadata.phone && (
          <div>
            <p className={`text-sm ${theme.colors.textMuted}`}>Phone</p>
            <div className="mt-1 grid grid-cols-[1fr_auto_auto] items-center gap-x-2 gap-y-1">
              <a
                href={`tel:${metadata.phone.replace(/\s+/g, "")}`}
                className={`min-w-0 text-base font-medium ${theme.colors.textPrimary} ${theme.colors.accentHover} transition-colors`}
                aria-label={`Call ${metadata.phone}`}
              >
                {metadata.phone}
              </a>
              <Button
                onClick={onCopyPhone}
                size="sm"
                className="shrink-0 px-2 py-1"
                aria-label={`Copy phone number ${metadata.phone}`}
                title="Copy phone"
              >
                Copy
              </Button>
              {phoneCopied && (
                <span
                  className={`text-sm ${theme.colors.accent}`}
                  aria-live="polite"
                >
                  Copied!
                </span>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

/**
 * SocialLinks sub-component
 */
const leetcodeIcon = (
  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z" />
  </svg>
);

const fiverrIcon = (
  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M23.004 15.588a.995.995 0 1 0 .002-1.99.995.995 0 0 0-.002 1.99zm-.996-3.705h-.85c-.546 0-.84.41-.84 1.092v2.466h-1.61v-3.558h-.684c-.547 0-.84.41-.84 1.092v2.466h-1.61v-4.874h1.61v.74c.264-.574.626-.74 1.163-.74h1.972v.74c.264-.574.625-.74 1.162-.74h.527v1.316zm-6.786 1.501h-3.359c.088.648.527.97 1.21.97.508 0 .86-.176 1.016-.536h1.985c-.362 1.278-1.484 2.043-3.03 2.043-1.876 0-3.067-1.18-3.067-2.994 0-1.795 1.21-2.994 3.067-2.994 1.915 0 3.086 1.219 3.086 2.994 0 .176-.02.351-.04.517h.132zm-3.339-.936h1.738c-.117-.595-.517-.907-1.084-.907-.606 0-1.006.322-1.094.907h.44zm-3.943 2.38h-1.822l-1.504-1.96v1.96H3.005V9.423h1.609v3.89l1.426-1.784h1.876l-1.826 2.193 1.855 2.606zM2.45 8.42a.936.936 0 0 1-.933.938.936.936 0 0 1-.937-.938.94.94 0 0 1 .937-.938.94.94 0 0 1 .933.938zM1.517 9.423H3.13v4.874H1.517V9.423zM24 4.5H0v15h24V4.5z" />
  </svg>
);

const socialLinks = [
  { key: "github",    label: "GitHub",    icon: faGithub,   custom: null        },
  { key: "linkedin",  label: "LinkedIn",  icon: faLinkedin, custom: null        },
  { key: "leetcode",  label: "LeetCode",  icon: null,       custom: leetcodeIcon },
  { key: "medium",    label: "Medium",    icon: faMedium,   custom: null        },
  { key: "fiverr",    label: "Fiverr",    icon: null,       custom: fiverrIcon  },
  { key: "x",         label: "X",         icon: faXTwitter, custom: null        },
  { key: "instagram", label: "Instagram", icon: faInstagram,custom: null        },
];

const SocialLinks = ({ metadata, theme }) => (
  <ul className="flex flex-wrap items-center gap-4 mt-8" aria-label="Social media">
    {socialLinks.map(({ key, label, icon, custom }) =>
      metadata.social[key] ? (
        <li key={key} className="shrink-0">
          <a
            className={`block ${theme.colors.text} ${theme.colors.accentHover} transition-colors`}
            href={metadata.social[key]}
            target="_blank"
            rel="noreferrer noopener"
            aria-label={`${label} (opens in a new tab)`}
            title={label}
          >
            <span className="sr-only">{label}</span>
            {icon ? <FontAwesomeIcon icon={icon} className="h-5 w-5" /> : custom}
          </a>
        </li>
      ) : null
    )}
    <li className="shrink-0">
      <a
        className="inline-block rounded-md border border-purple-400 px-2 py-1 text-purple-400 transition-colors hover:bg-purple-400 hover:text-white"
        href="https://docs.google.com/document/d/1Is5jUhyEGggU1dsqlMcQj3Q3tldcAdldZ-xW4WpTKDk/edit?usp=sharing"
        target="_blank"
        rel="noreferrer noopener"
        aria-label="Resume (opens PDF in new tab)"
        title="Resume"
      >
        Resume
      </a>
    </li>
  </ul>
);
