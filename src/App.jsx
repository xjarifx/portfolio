import { useState, useEffect, useCallback, useRef } from "react";
import { portfolio } from "./data/portfolio";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin, faXTwitter } from "@fortawesome/free-brands-svg-icons";

// ─── Hooks ───────────────────────────────────────────────────────────────────

function useCopy(text) {
  const [copied, setCopied] = useState(false);
  const timer = useRef(null);
  const copy = useCallback(async () => {
    try { await navigator.clipboard.writeText(text); } catch {}
    setCopied(true);
    clearTimeout(timer.current);
    timer.current = setTimeout(() => setCopied(false), 2000);
  }, [text]);
  useEffect(() => () => clearTimeout(timer.current), []);
  return [copied, copy];
}

function useActiveSection(ids) {
  const [active, setActive] = useState("");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    if (typeof IntersectionObserver === "undefined") return;
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
  return mounted ? active : "";
}

// ─── Icons ───────────────────────────────────────────────────────────────────

const LeetcodeIcon = () => (
  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z" />
  </svg>
);

const ResumeIcon = () => (
  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6zm-1 1.5L18.5 9H13V3.5zM6 20V4h5v7h7v9H6zm2-5h8v1.5H8V15zm0-3h8v1.5H8V12zm0-3h4v1.5H8V9z"/>
  </svg>
);

const SOCIAL = [
  { key: "github",   label: "GitHub",   icon: <FontAwesomeIcon icon={faGithub} className="h-5 w-5" /> },
  { key: "linkedin", label: "LinkedIn", icon: <FontAwesomeIcon icon={faLinkedin} className="h-5 w-5" /> },
  { key: "x",        label: "X",        icon: <FontAwesomeIcon icon={faXTwitter} className="h-5 w-5" /> },
  { key: "leetcode", label: "LeetCode", icon: <LeetcodeIcon /> },
];

// ─── UI pieces ────────────────────────────────────────────────────────────────

const Tag = ({ children }) => (
  <span className="inline-flex items-center rounded-full bg-violet-50 border border-violet-200 px-2.5 py-0.5 text-xs font-medium text-violet-700">
    {children}
  </span>
);

const ArrowIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
    className="inline-block h-3.5 w-3.5 shrink-0 ml-0.5" aria-hidden="true">
    <path fillRule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clipRule="evenodd" />
  </svg>
);

const SectionHeading = ({ children }) => (
  <div className="flex items-center gap-3 mb-8">
    <span className="h-px flex-1 bg-gradient-to-r from-violet-200 to-transparent" />
    <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-violet-500">{children}</h2>
    <span className="h-px flex-1 bg-gradient-to-l from-violet-200 to-transparent" />
  </div>
);

// ─── Section renderers ────────────────────────────────────────────────────────

const TechStackSection = ({ categories }) => (
  <div className="grid gap-3">
    {categories.map((cat, i) => (
      <div key={i} className="rounded-md bg-white border border-violet-200 px-4 py-3 flex flex-col gap-1">
        <span className="text-xs font-bold uppercase tracking-wider text-violet-500">{cat.label}</span>
        <span className="text-sm text-slate-600">{cat.skills.join(" · ")}</span>
      </div>
    ))}
  </div>
);

const ProjectItem = ({ project }) => (
  <div className="rounded-lg bg-white border border-violet-200 p-5">
    <div className="flex items-start justify-between gap-3 flex-wrap">
      <h3 className="font-semibold text-slate-800 text-base leading-tight">{project.title}</h3>
      {project.links?.length > 0 && (
        <div className="flex gap-2 flex-wrap">
          {project.links.map((link, i) => (
            <a key={i} href={link.url} target="_blank" rel="noreferrer noopener"
              aria-label={`${link.label} for ${project.title}`}
              className="inline-flex items-center gap-1 text-xs font-medium text-violet-600 bg-violet-50 border border-violet-200 rounded-full px-3 py-1">
              {link.label}<ArrowIcon />
            </a>
          ))}
        </div>
      )}
    </div>
    {project.description && (
      <p className="mt-2 text-sm text-slate-500 leading-relaxed">{project.description}</p>
    )}
  </div>
);

const ProjectSection = ({ items, moreItems }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="space-y-3">
      {items.map((p, i) => <ProjectItem key={i} project={p} />)}
      {moreItems?.length > 0 && (
        <>
          <button onClick={() => setOpen((v) => !v)}
            className="flex items-center gap-2 text-sm font-medium text-violet-600"
            aria-expanded={open}>
            <span className={`inline-block transition-transform duration-200 ${open ? "rotate-90" : ""}`}>›</span>
            {open ? "Show less" : `${moreItems.length} more projects`}
          </button>
          {open && (
            <div className="space-y-3">
              {moreItems.map((p, i) => <ProjectItem key={i} project={p} />)}
            </div>
          )}
        </>
      )}
    </div>
  );
};

const CertificationSection = ({ items }) => (
  <div className="space-y-3">
    {items.map((cert, i) => (
      <a key={i} href={cert.credentialUrl} target="_blank" rel="noreferrer noopener"
        className="block rounded-lg bg-white border border-violet-200 p-5">
        <div className="flex items-start justify-between gap-2">
          <div>
            <h3 className="font-semibold text-slate-800 text-sm leading-snug">{cert.name}</h3>
            {cert.issuer && <p className="mt-0.5 text-xs text-slate-400">{cert.issuer}</p>}
          </div>
          <ArrowIcon />
        </div>
        {cert.skills?.length > 0 && (
          <div className="mt-3 flex flex-wrap gap-1.5">
            {cert.skills.map((skill, j) => <Tag key={j}>{skill}</Tag>)}
          </div>
        )}
      </a>
    ))}
  </div>
);

const EducationSection = ({ items }) => (
  <div className="space-y-3">
    {items.map((entry, i) => (
      <div key={i} className="rounded-lg bg-white border border-violet-200 p-5">
        <h3 className="font-semibold text-slate-800 text-sm leading-tight">{entry.degree}</h3>
        <p className="mt-1 text-sm text-slate-500">{entry.institution}</p>
      </div>
    ))}
  </div>
);

function renderSection(section) {
  switch (section.type) {
    case "techstack":     return <TechStackSection categories={section.categories} />;
    case "project":       return <ProjectSection items={section.items} moreItems={section.moreItems} />;
    case "certification": return <CertificationSection items={section.items} />;
    case "education":     return <EducationSection items={section.items} />;
    default:              return null;
  }
}

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
    <div className="min-h-screen bg-slate-50 text-slate-600" suppressHydrationWarning>
      <div className="fixed inset-0 -z-10 bg-[linear-gradient(to_right,#e2e8f020_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f020_1px,transparent_1px)] bg-[size:40px_40px]" />

      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 md:px-12 lg:px-24">
        <div className="lg:flex lg:gap-16">

          {/* ── Sidebar ── */}
          <header className="pt-10 lg:sticky lg:top-0 lg:flex lg:h-screen lg:w-[380px] lg:shrink-0 lg:flex-col lg:justify-between lg:pt-20 lg:pb-20">
            <div>
              <div className="mb-6">
                <h1 className="text-xl font-bold text-slate-900 leading-tight">{metadata.name}</h1>
                <p className="text-sm text-violet-600 font-medium mt-0.5">{metadata.title}</p>
              </div>

              <p className="text-sm text-slate-500 leading-relaxed mb-8 max-w-xs">{metadata.tagline}</p>

              <div className="space-y-2 mb-10">
                {metadata.email && (
                  <div className="flex items-center gap-2">
                    <a href={`mailto:${metadata.email}`}
                      className="flex-1 min-w-0 text-sm text-slate-700 bg-white border border-violet-200 rounded-md px-3 py-2 truncate">
                      {metadata.email}
                    </a>
                    <button onClick={copyEmail}
                      className="shrink-0 text-xs font-medium px-3 py-2 rounded-md bg-white border border-violet-200 text-slate-500"
                      aria-label="Copy email">
                      {emailCopied ? "✓" : "Copy"}
                    </button>
                  </div>
                )}
                {metadata.phone && (
                  <div className="flex items-center gap-2">
                    <a href={`tel:${metadata.phone.replace(/\s+/g, "")}`}
                      className="flex-1 min-w-0 text-sm text-slate-700 bg-white border border-violet-200 rounded-md px-3 py-2 truncate">
                      {metadata.phone}
                    </a>
                    <button onClick={copyPhone}
                      className="shrink-0 text-xs font-medium px-3 py-2 rounded-md bg-white border border-violet-200 text-slate-500"
                      aria-label="Copy phone">
                      {phoneCopied ? "✓" : "Copy"}
                    </button>
                  </div>
                )}
              </div>

              <nav className="hidden lg:block" aria-label="In-page jump links">
                <ul className="space-y-1">
                  {sections.map((s) => (
                    <li key={s.id}>
                      <a href={`#${s.id}`} onClick={(e) => scrollTo(e, s.id)}
                        className={`flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium border ${
                          active === s.id
                            ? "bg-violet-50 text-violet-700 border-violet-200"
                            : "border-violet-200 text-slate-400"
                        }`}>
                        <span className={`h-1.5 w-1.5 rounded-full shrink-0 transition-colors ${active === s.id ? "bg-violet-500" : "bg-slate-300"}`} />
                        {s.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>

            <div className="mt-8">
              <ul className="flex flex-wrap gap-2" aria-label="Social media">
                {SOCIAL.map(({ key, label, icon }) =>
                  metadata.social[key] ? (
                    <li key={key}>
                      <a href={metadata.social[key]} target="_blank" rel="noreferrer noopener"
                        className="flex items-center justify-center w-9 h-9 rounded-md bg-violet-600 text-white"
                        aria-label={`${label} (opens in a new tab)`} title={label}>
                        <span className="sr-only">{label}</span>
                        {icon}
                      </a>
                    </li>
                  ) : null
                )}
                <li>
                  <a href="https://docs.google.com/document/d/1Is5jUhyEGggU1dsqlMcQj3Q3tldcAdldZ-xW4WpTKDk/edit?usp=sharing"
                    target="_blank" rel="noreferrer noopener"
                    className="flex items-center justify-center w-9 h-9 rounded-md bg-violet-600 text-white"
                    aria-label="Resume (opens in a new tab)" title="Resume">
                    <span className="sr-only">Resume</span>
                    <ResumeIcon />
                  </a>
                </li>
              </ul>
            </div>
          </header>

          {/* ── Main content ── */}
          <main className="flex-1 py-16 lg:py-20 space-y-20">
            {sections.map((section) => (
              <section key={section.id} id={section.id} className="scroll-mt-8">
                <SectionHeading>{section.title}</SectionHeading>
                {renderSection(section)}
              </section>
            ))}
            <div className="h-[1000px]" />
            <footer className="pt-8 border-t border-slate-100">
              <p className="text-xs text-slate-400">
                Design inspired by{" "}
                <a href="https://brittanychiang.com" target="_blank" rel="noreferrer noopener" className="text-slate-500">
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
