import { useState, useEffect, useCallback, useRef } from "react";
import { portfolio } from "./data/portfolio";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub, faLinkedin, faXTwitter, faInstagram, faMedium,
} from "@fortawesome/free-brands-svg-icons";

// ─── Hooks ───────────────────────────────────────────────────────────────────

function useCopy(text) {
  const [copied, setCopied] = useState(false);
  const timer = useRef(null);
  const copy = useCallback(async () => {
    try { await navigator.clipboard.writeText(text); }
    catch { /* fallback not needed for modern browsers */ }
    setCopied(true);
    clearTimeout(timer.current);
    timer.current = setTimeout(() => setCopied(false), 2000);
  }, [text]);
  useEffect(() => () => clearTimeout(timer.current), []);
  return [copied, copy];
}

function useActiveSection(ids) {
  const [active, setActive] = useState("");
  useEffect(() => {
    const els = ids.map((id) => document.getElementById(id)).filter(Boolean);
    const visible = new Map();
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) =>
          e.isIntersecting
            ? visible.set(e.target.id, e.boundingClientRect.top)
            : visible.delete(e.target.id)
        );
        if (!visible.size) return;
        const top = [...visible.entries()].reduce((a, b) =>
          Math.abs(b[1]) < Math.abs(a[1]) ? b : a
        );
        setActive((prev) => (prev !== top[0] ? top[0] : prev));
      },
      { threshold: [0, 0.25, 0.5], rootMargin: "-10% 0px -35% 0px" }
    );
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [ids]);
  return active;
}

// ─── Small UI pieces ─────────────────────────────────────────────────────────

const Badge = ({ children }) => (
  <span className="inline-flex items-center rounded-full bg-violet-100 border border-violet-200 px-3 py-1 text-sm font-medium text-violet-700 leading-5">
    {children}
  </span>
);

const ExtLink = ({ href, children, label, pill = false }) => (
  <a
    href={href} target="_blank" rel="noreferrer noopener"
    aria-label={label || `${children} (opens in a new tab)`}
    className={pill
      ? "inline-flex items-center gap-1 rounded-md border border-slate-300 bg-slate-100 px-2.5 py-1 text-sm font-medium text-slate-600 transition-colors hover:text-violet-700"
      : "inline-flex items-center gap-1 font-medium text-slate-800 transition-colors hover:text-violet-700 text-lg leading-tight"
    }
  >
    {children}
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
      className="ml-0.5 inline-block h-3.5 w-3.5 shrink-0" aria-hidden="true">
      <path fillRule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clipRule="evenodd" />
    </svg>
  </a>
);

const Card = ({ children }) => (
  <div className="group relative grid gap-4 rounded-lg p-4 transition-colors sm:p-5 lg:p-0 lg:group-hover/list:opacity-60 lg:hover:!opacity-100">
    {children}
  </div>
);

// ─── Section renderers ────────────────────────────────────────────────────────

const TextSection = ({ content }) => (
  <div>
    {content.map((p, i) => (
      <p key={i} className="mb-4 text-base leading-relaxed">{p}</p>
    ))}
  </div>
);

const TechStackSection = ({ categories }) => (
  <div className="space-y-2">
    {categories.map((cat, i) => (
      <div key={i} className="flex flex-wrap gap-x-2 text-sm">
        <span className="font-medium text-slate-800 shrink-0">{cat.label}:</span>
        <span className="text-slate-400">{cat.skills.join(", ")}</span>
      </div>
    ))}
  </div>
);

const ProjectItem = ({ project }) => (
  <li className="mb-8 sm:mb-10">
    <Card>
      <div className="z-10">
        <div className="flex items-center justify-between gap-3 flex-wrap">
          <h3 className="leading-tight font-medium text-slate-800 text-lg">{project.title}</h3>
          {project.links?.length > 0 && (
            <div className="flex gap-2">
              {project.links.map((link, i) => (
                <ExtLink key={i} href={link.url} label={`${link.label} for ${project.title}`} pill>
                  {link.label}
                </ExtLink>
              ))}
            </div>
          )}
        </div>
        {project.description && (
          <p className="mt-1 text-sm text-slate-500">{project.description}</p>
        )}
      </div>
    </Card>
  </li>
);

const ProjectSection = ({ items, moreItems }) => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <ul className="group/list">
        {items.map((p, i) => <ProjectItem key={i} project={p} />)}
      </ul>
      {moreItems?.length > 0 && (
        <div className="mt-4">
          <button
            onClick={() => setOpen((v) => !v)}
            className="text-sm font-medium text-violet-700 hover:underline flex items-center gap-1"
            aria-expanded={open}
          >
            {open ? "Hide" : "More Projects"}
            <span className={`transition-transform duration-200 ${open ? "rotate-180" : ""}`}>↓</span>
          </button>
          {open && (
            <ul className="group/list mt-2">
              {moreItems.map((p, i) => <ProjectItem key={i} project={p} />)}
            </ul>
          )}
        </div>
      )}
    </div>
  );
};

const ArticleSection = ({ items }) => (
  <ul className="group/list">
    {items.map((article, i) => (
      <li key={i} className="mb-8 sm:mb-10">
        <Card>
          <div className="z-10">
            <h3 className="leading-snug font-medium text-slate-800">
              <ExtLink href={article.url} label={`${article.title} (opens in a new tab)`}>
                {article.title}
              </ExtLink>
            </h3>
            {article.summary && (
              <p className="mt-2 text-base leading-normal">{article.summary}</p>
            )}
            {article.tags?.length > 0 && (
              <ul className="mt-2 flex flex-wrap" aria-label="Article tags">
                {article.tags.map((tag, j) => (
                  <li key={j} className="mt-2 mr-1.5"><Badge>{tag}</Badge></li>
                ))}
              </ul>
            )}
          </div>
        </Card>
      </li>
    ))}
  </ul>
);

const CertificationSection = ({ items }) => (
  <ol className="group/list">
    {items.map((cert, i) => (
      <li key={i} className="mb-8 sm:mb-10">
        <Card>
          <div className="z-10">
            <h3 className="leading-snug font-medium text-slate-800 text-lg">
              <ExtLink href={cert.credentialUrl} label={`${cert.name} from ${cert.issuer} (opens in a new tab)`}>
                {cert.name}{cert.issuer && <> · <span>{cert.issuer}</span></>}
              </ExtLink>
            </h3>
            {cert.skills?.length > 0 && (
              <ul className="mt-2 flex flex-wrap" aria-label="Skills validated">
                {cert.skills.map((skill, j) => (
                  <li key={j} className="mt-2 mr-1.5"><Badge>{skill}</Badge></li>
                ))}
              </ul>
            )}
          </div>
        </Card>
      </li>
    ))}
  </ol>
);

const EducationSection = ({ items }) => (
  <ul className="group/list">
    {items.map((entry, i) => (
      <li key={i} className="mb-8 sm:mb-10">
        <Card>
          <div className="relative z-10 space-y-1.5">
            <h3 className="font-medium text-slate-800 text-lg leading-tight">{entry.degree}</h3>
            <p className="text-base text-slate-500 leading-relaxed">{entry.institution}</p>
          </div>
        </Card>
      </li>
    ))}
  </ul>
);

function renderSection(section) {
  switch (section.type) {
    case "text":         return <TextSection content={section.content} />;
    case "techstack":    return <TechStackSection categories={section.categories} />;
    case "project":      return <ProjectSection items={section.items} moreItems={section.moreItems} />;
    case "article":      return <ArticleSection items={section.items} />;
    case "certification":return <CertificationSection items={section.items} />;
    case "education":    return <EducationSection items={section.items} />;
    default:             return null;
  }
}

// ─── Social icons ─────────────────────────────────────────────────────────────

const LeetcodeIcon = () => (
  <svg className="h-7 w-7" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z" />
  </svg>
);

const FiverrIcon = () => (
  <svg className="h-7 w-7" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true" role="img">
    <path d="M23.004 15.588a.995.995 0 1 0 .002-1.99.995.995 0 0 0-.002 1.99zm-.996-3.705h-.85c-.546 0-.84.41-.84 1.092v2.466h-1.61v-3.558h-.684c-.547 0-.84.41-.84 1.092v2.466h-1.61v-4.874h1.61v.74c.264-.574.626-.74 1.163-.74h1.972v.74c.264-.574.625-.74 1.162-.74h.527v1.316zm-6.786 1.501h-3.359c.088.546.43.858 1.006.858.43 0 .732-.175.83-.487l1.425.4c-.351.848-1.22 1.364-2.255 1.364-1.748 0-2.549-1.355-2.549-2.515 0-1.14.703-2.505 2.45-2.505 1.856 0 2.471 1.384 2.471 2.408 0 .224-.01.37-.02.477zm-1.562-.945c-.04-.42-.342-.81-.889-.81-.508 0-.81.225-.908.81h1.797zM7.508 15.44h1.416l1.767-4.874h-1.62l-.86 2.837-.878-2.837H5.72l1.787 4.874zm-6.6 0H2.51v-3.558h1.524v3.558h1.591v-4.874H2.51v-.302c0-.332.235-.536.606-.536h.918V8.412H2.85c-1.162 0-1.943.712-1.943 1.755v.4H0v1.316h.908v3.558z" />
  </svg>
);

const SOCIAL = [
  { key: "github",    label: "GitHub",    icon: <FontAwesomeIcon icon={faGithub} className="h-7 w-7" />,    bg: "bg-gray-900 text-white hover:bg-gray-700" },
  { key: "linkedin",  label: "LinkedIn",  icon: <FontAwesomeIcon icon={faLinkedin} className="h-7 w-7" />,  bg: "bg-[#0A66C2] text-white hover:bg-[#0958a8]" },
  { key: "leetcode",  label: "LeetCode",  icon: <LeetcodeIcon />,                                            bg: "bg-[#FFA116] text-white hover:bg-[#e89110]" },
  { key: "medium",    label: "Medium",    icon: <FontAwesomeIcon icon={faMedium} className="h-7 w-7" />,    bg: "bg-black text-white hover:bg-gray-800" },
  { key: "fiverr",    label: "Fiverr",    icon: <FiverrIcon />,                                              bg: "bg-[#1DBF73] text-white hover:bg-[#19a864]" },
  { key: "x",         label: "X",         icon: <FontAwesomeIcon icon={faXTwitter} className="h-7 w-7" />,  bg: "bg-black text-white hover:bg-gray-800" },
  { key: "instagram", label: "Instagram", icon: <FontAwesomeIcon icon={faInstagram} className="h-7 w-7" />, bg: "bg-gradient-to-br from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] text-white" },
];

// ─── App ──────────────────────────────────────────────────────────────────────

export default function App() {
  const { metadata, sections } = portfolio;
  const sectionIds = sections.map((s) => s.id);
  const active = useActiveSection(sectionIds);
  const [emailCopied, copyEmail] = useCopy(metadata.email);
  const [phoneCopied, copyPhone] = useCopy(metadata.phone);

  const scrollTo = useCallback((e, id) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-500">
      <div className="mx-auto min-h-screen max-w-screen-xl px-4 py-8 sm:px-6 sm:py-10 md:px-12 md:py-16 lg:px-24 lg:py-0">
        <div className="lg:flex lg:justify-between lg:gap-4">

          {/* ── Sidebar ── */}
          <header className="lg:sticky lg:top-0 lg:flex lg:h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-[5vh]">
            <div>
              <h1 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl md:text-4xl">
                <a href="#summary" onClick={(e) => scrollTo(e, "summary")}
                  className="cursor-pointer transition-colors hover:text-violet-700">
                  {metadata.name}
                </a>
              </h1>
              <h2 className="mt-3 text-lg font-medium tracking-tight text-slate-800 sm:text-xl">
                {metadata.title}
              </h2>
              <p className="mt-4 max-w-xs text-base leading-relaxed">{metadata.tagline}</p>

              {/* Contact */}
              <section className="mt-8 max-w-md">
                <div className="mt-3 space-y-4">
                  {metadata.email && (
                    <div>
                      <p className="text-sm text-slate-400">Email</p>
                      <div className="mt-1 grid grid-cols-[1fr_auto_auto] items-center gap-x-2">
                        <a href={`mailto:${metadata.email}`}
                          className="min-w-0 text-base font-medium text-slate-800 transition-colors hover:text-violet-700">
                          {metadata.email}
                        </a>
                        <button onClick={copyEmail}
                          className="shrink-0 rounded border border-slate-300 bg-slate-100 px-2 py-1 text-sm text-slate-600 hover:text-violet-700 transition-colors"
                          aria-label={`Copy email ${metadata.email}`}>
                          Copy
                        </button>
                        {emailCopied && <span className="text-sm text-violet-700" aria-live="polite">Copied!</span>}
                      </div>
                    </div>
                  )}
                  {metadata.phone && (
                    <div>
                      <p className="text-sm text-slate-400">Phone</p>
                      <div className="mt-1 grid grid-cols-[1fr_auto_auto] items-center gap-x-2">
                        <a href={`tel:${metadata.phone.replace(/\s+/g, "")}`}
                          className="min-w-0 text-base font-medium text-slate-800 transition-colors hover:text-violet-700">
                          {metadata.phone}
                        </a>
                        <button onClick={copyPhone}
                          className="shrink-0 rounded border border-slate-300 bg-slate-100 px-2 py-1 text-sm text-slate-600 hover:text-violet-700 transition-colors"
                          aria-label={`Copy phone ${metadata.phone}`}>
                          Copy
                        </button>
                        {phoneCopied && <span className="text-sm text-violet-700" aria-live="polite">Copied!</span>}
                      </div>
                    </div>
                  )}
                </div>
              </section>

              {/* Nav */}
              <nav className="mt-16 hidden lg:block" aria-label="In-page jump links">
                <ul className="mt-16 w-max">
                  {sections.map((s) => (
                    <li key={s.id}>
                      <a className="group flex items-center py-3" href={`#${s.id}`}
                        onClick={(e) => scrollTo(e, s.id)}>
                        <span className={`nav-indicator mr-4 h-px transition-all duration-300 ${
                          active === s.id
                            ? "w-12 sm:w-16 bg-violet-600"
                            : "w-6 sm:w-8 bg-slate-300 group-hover:w-12 group-hover:sm:w-16 group-hover:bg-violet-600"
                        }`} />
                        <span className={`text-sm font-semibold uppercase tracking-widest transition-colors duration-300 ${
                          active === s.id
                            ? "text-slate-900"
                            : "text-slate-400 group-hover:text-slate-900"
                        }`}>
                          {s.title}
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>

            {/* Social links */}
            <ul className="flex flex-wrap items-center gap-3 mt-8" aria-label="Social media">
              {SOCIAL.map(({ key, label, icon, bg }) =>
                metadata.social[key] ? (
                  <li key={key} className="shrink-0">
                    <a href={metadata.social[key]} target="_blank" rel="noreferrer noopener"
                      className={`flex items-center justify-center w-10 h-10 rounded-xl transition-opacity hover:opacity-85 ${bg}`}
                      aria-label={`${label} (opens in a new tab)`} title={label}>
                      <span className="sr-only">{label}</span>
                      {icon}
                    </a>
                  </li>
                ) : null
              )}
              <li className="shrink-0">
                <a href="https://docs.google.com/document/d/1Is5jUhyEGggU1dsqlMcQj3Q3tldcAdldZ-xW4WpTKDk/edit?usp=sharing"
                  target="_blank" rel="noreferrer noopener"
                  className="flex items-center justify-center w-10 h-10 rounded-xl bg-violet-600 text-white transition-opacity hover:opacity-85"
                  aria-label="Resume (opens in a new tab)" title="Resume">
                  <span className="sr-only">Resume</span>
                  <svg className="h-7 w-7" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6zm-1 1.5L18.5 9H13V3.5zM6 20V4h5v7h7v9H6zm2-5h8v1.5H8V15zm0-3h8v1.5H8V12zm0-3h4v1.5H8V9z"/>
                  </svg>
                </a>
              </li>
            </ul>
          </header>

          {/* ── Main content ── */}
          <main className="pt-8 sm:pt-12 md:pt-16 lg:pt-24 lg:w-1/2 lg:py-24">
            {sections.map((section) => (
              <section key={section.id} id={section.id}
                className="mb-12 sm:mb-16 md:mb-20 lg:mb-24 scroll-mt-16 lg:scroll-mt-24">
                <div className="sticky top-0 z-20 -mx-4 mb-6 w-[calc(100%+2rem)] bg-slate-50/95 px-4 py-4 sm:-mx-6 sm:w-[calc(100%+3rem)] sm:px-6 md:-mx-12 md:w-[calc(100%+6rem)] md:mb-8 md:px-12 lg:mx-auto lg:mb-10 lg:w-full lg:px-0 lg:py-5">
                  <h2 className="text-sm font-semibold uppercase tracking-widest text-slate-400">
                    {section.title}
                  </h2>
                </div>
                {renderSection(section)}
              </section>
            ))}

            <footer className="mt-16 sm:mt-24 pt-[1000px]">
              <p className="text-sm text-slate-400">
                Design inspired by{" "}
                <a href="https://brittanychiang.com" target="_blank" rel="noreferrer noopener"
                  className="font-medium text-slate-800 transition-colors hover:text-violet-700">
                  Brittany Chiang
                </a>.
              </p>
            </footer>
          </main>

        </div>
      </div>
    </div>
  );
}
