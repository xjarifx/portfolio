// Design K — Accessible, pixel-perfect minimal portfolio · JetBrains Mono
import { useState, useRef, useCallback, useEffect } from "react";
import { portfolio } from "../data/portfolio";
import "./DesignK.css";

const { metadata, sections } = portfolio;

/* ── Hooks ─────────────────────────────────────────────── */

function useCopy(text) {
  const [copied, setCopied] = useState(false);
  const t = useRef(null);
  const copy = useCallback(async () => {
    try { await navigator.clipboard.writeText(text); } catch {}
    setCopied(true);
    clearTimeout(t.current);
    t.current = setTimeout(() => setCopied(false), 2000);
  }, [text]);
  useEffect(() => () => clearTimeout(t.current), []);
  return [copied, copy];
}

function useReveal() {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { el.classList.add("k-in"); obs.disconnect(); } },
      { threshold: 0.08 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return ref;
}

function Fade({ children, delay = 0 }) {
  const ref = useReveal();
  return (
    <div ref={ref} className="k-reveal" style={{ "--d": `${delay}ms` }}>
      {children}
    </div>
  );
}

/* ── Data ──────────────────────────────────────────────── */

const techstack   = sections.find(s => s.type === "techstack");
const projects    = sections.find(s => s.type === "project");
const cert        = sections.find(s => s.type === "certification");
const edu         = sections.find(s => s.type === "education");
const allProjects = projects?.items || [];

const socialLabels = { github: "GitHub", linkedin: "LinkedIn", x: "X / Twitter", leetcode: "LeetCode" };

/* ── Component ─────────────────────────────────────────── */

export default function DesignK() {
  const [emailCopied, copyEmail] = useCopy(metadata.email);
  const [phoneCopied, copyPhone] = useCopy(metadata.phone);

  return (
    <div className="k-root" suppressHydrationWarning>
      {/* Skip to content link — accessibility */}
      <a href="#main-content" className="k-skip">Skip to content</a>

      <div className="k-wrap">

        {/* ═══ SIDEBAR ═══ */}
        <aside className="k-sidebar" role="complementary" aria-label="Personal information">
          {/* Identity */}
          <header className="k-slide" style={{ "--d": "0ms" }}>
            <h1 className="k-name">Md. Junaidul Islam Jarif</h1>
            <p className="k-role">{metadata.title}</p>
          </header>

          {/* Nav */}
          <nav className="k-nav" aria-label="Social links">
            {Object.entries(metadata.social).filter(([, v]) => v).map(([k, v], i) => (
              <div key={k} className="k-slide" style={{ "--d": `${(i + 1) * 50}ms` }}>
                <a href={v} target="_blank" rel="noreferrer noopener"
                  aria-label={`${socialLabels[k] || k} profile`}>
                  {socialLabels[k] || k}
                </a>
              </div>
            ))}
            <div className="k-slide" style={{ "--d": `${(Object.keys(metadata.social).length + 1) * 50}ms` }}>
              <a href="https://docs.google.com/document/d/1Is5jUhyEGggU1dsqlMcQj3Q3tldcAdldZ-xW4WpTKDk/edit?usp=sharing"
                target="_blank" rel="noreferrer noopener" aria-label="View resume">
                Resume
              </a>
            </div>
          </nav>

          {/* Contact */}
          <div className="k-contact k-slide" style={{ "--d": "350ms" }} aria-label="Contact information">
            <div className="k-contact-item">
              <button onClick={copyEmail} className={`k-copy-btn ${emailCopied ? "copied" : ""}`}
                aria-label="Copy email address" type="button">
                {emailCopied
                  ? <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                  : <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>
                }
              </button>
              <a href={`mailto:${metadata.email}`} aria-label={`Email ${metadata.email}`}>{metadata.email}</a>
            </div>
            <div className="k-contact-item">
              <button onClick={copyPhone} className={`k-copy-btn ${phoneCopied ? "copied" : ""}`}
                aria-label="Copy phone number" type="button">
                {phoneCopied
                  ? <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                  : <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>
                }
              </button>
              <a href={`tel:${metadata.phone.replace(/\s+/g, "")}`} aria-label={`Phone ${metadata.phone}`}>{metadata.phone}</a>
            </div>
          </div>
        </aside>

        {/* ═══ MAIN ═══ */}
        <main className="k-main" id="main-content" role="main">
          <div className="k-content-sections">
            {/* Projects */}
            <section aria-label="Projects" id="projects">
              <Fade delay={0}>
                <h2 className="k-section-heading">Projects</h2>
              </Fade>
              {allProjects.map((p, i) => (
                <Fade key={`p-${i}`} delay={(i + 1) * 70}>
                  <article className="k-row">
                    <div className="k-row-header">
                      <h2 className="k-row-title">{p.title}</h2>
                      <div className="k-links">
                        {p.links?.map((l, j) => (
                          <span key={j}>
                            {j > 0 && <span className="k-links-sep" aria-hidden="true">|</span>}
                            <a href={l.url} target="_blank" rel="noreferrer noopener">{l.label}</a>
                          </span>
                        ))}
                      </div>
                    </div>
                    <p className="k-row-desc">{p.description}</p>
                  </article>
                </Fade>
              ))}
            </section>

            {/* Stack */}
            <section aria-label="Tech stack" id="stack" style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
              <Fade delay={0}>
                <h2 className="k-section-heading" style={{ marginBottom: "8px" }}>Stack</h2>
              </Fade>
              {techstack?.categories.map((cat, i) => (
                <Fade key={`s-${i}`} delay={(i + 1) * 50}>
                  <div>
                    <h2 className="k-cat-label">{cat.label}</h2>
                    <p className="k-cat-skills">{cat.skills.join("  ·  ")}</p>
                  </div>
                </Fade>
              ))}
            </section>

            {/* Certs */}
            <section aria-label="Certifications" id="certifications">
              <Fade delay={0}>
                <h2 className="k-section-heading">Certifications</h2>
              </Fade>
              {cert?.items.map((c, i) => (
                <Fade key={`c-${i}`} delay={(i + 1) * 70}>
                  <article className="k-row">
                    <div className="k-row-header">
                      <h2 className="k-row-title">{c.name}</h2>
                      <div className="k-links">
                        <a href={c.credentialUrl} target="_blank" rel="noreferrer noopener">View</a>
                      </div>
                    </div>
                    <p className="k-row-sub">{c.issuer}</p>
                  </article>
                </Fade>
              ))}
            </section>

            {/* Education */}
            <section aria-label="Education" id="education">
              <Fade delay={0}>
                <h2 className="k-section-heading">Education</h2>
              </Fade>
              {edu?.items.map((e, i) => (
                <Fade key={`e-${i}`} delay={(i + 1) * 70}>
                  <article className="k-row">
                    <h2 className="k-row-title">{e.degree}</h2>
                    <p className="k-row-sub" style={{ marginTop: "4px" }}>{e.institution}</p>
                  </article>
                </Fade>
              ))}
            </section>
          </div>
        </main>
      </div>
    </div>
  );
}
