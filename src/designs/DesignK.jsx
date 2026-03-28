// Design K — Accessible, pixel-perfect minimal portfolio · JetBrains Mono
import { useState, useRef, useCallback, useEffect } from "react";
import { portfolio } from "../data/portfolio";

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

const socialLabels = { github: "GitHub", linkedin: "LinkedIn", x: "X", leetcode: "LeetCode" };

/* ── Component ─────────────────────────────────────────── */

export default function DesignK() {
  const [emailCopied, copyEmail] = useCopy(metadata.email);
  const [phoneCopied, copyPhone] = useCopy(metadata.phone);
  const [activeTab, setActiveTab] = useState("projects");
  const [fading, setFading] = useState(false);

  const tabs = [
    { id: "projects",       label: "Projects" },
    { id: "stack",          label: "Stack" },
    { id: "certifications", label: "Certs" },
    { id: "education",      label: "Education" },
  ];

  function switchTab(id) {
    if (id === activeTab) return;
    setFading(true);
    setTimeout(() => { setActiveTab(id); setFading(false); }, 130);
  }

  return (
    <div className="k-root">
      <style>{`
        /*
          STRICT PALETTE
          ──────────────
          bg:      #000
          text:    #fff
          gray:    #999
          accent:  #2563eb  (blue underlines on links)
          font:    'JetBrains Mono', monospace
        */

        * { margin: 0; padding: 0; box-sizing: border-box; }

        .k-root {
          min-height: 100vh;
          background: #000;
          color: #fff;
          font-family: 'JetBrains Mono', monospace;
          font-size: 14px;
          line-height: 1.6;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }

        /* ── Layout ────────────────────────── */
        .k-wrap {
          max-width: 920px;
          margin: 0 auto;
          padding: 56px 24px 80px;
        }
        @media (min-width: 768px) {
          .k-wrap {
            display: grid;
            grid-template-columns: 240px 1fr;
            gap: 56px;
            padding: 72px 40px 80px;
            align-items: start;
          }
        }

        /* ── Reveal ────────────────────────── */
        .k-reveal {
          opacity: 0;
          transform: translateY(10px);
          transition: opacity .4s cubic-bezier(.25,.46,.45,.94),
                      transform .4s cubic-bezier(.25,.46,.45,.94);
          transition-delay: var(--d, 0ms);
        }
        .k-in { opacity: 1; transform: none; }

        .k-slide {
          opacity: 0;
          transform: translateX(-6px);
          animation: slideIn .35s cubic-bezier(.25,.46,.45,.94) forwards;
          animation-delay: var(--d, 0ms);
        }
        @keyframes slideIn { to { opacity: 1; transform: none; } }

        /* ── Sidebar ───────────────────────── */
        .k-sidebar {
          display: flex;
          flex-direction: column;
          gap: 24px;
          padding-bottom: 32px;
          border-bottom: 1px solid #222;
        }
        @media (min-width: 768px) {
          .k-sidebar {
            position: sticky;
            top: 72px;
            border-bottom: none;
            padding-bottom: 0;
          }
        }

        /* Name — aligns with tab baseline via matching line-height */
        .k-name {
          font-size: 16px;
          font-weight: 600;
          color: #fff;
          letter-spacing: -0.02em;
          line-height: 1.6;
          white-space: nowrap;
        }
        .k-role {
          font-size: 14px;
          color: #999;
          line-height: 1.6;
        }

        /* Nav */
        .k-nav { display: flex; flex-direction: column; gap: 2px; }
        .k-nav a {
          font-size: 14px;
          color: #fff;
          text-decoration: none;
          padding: 6px 0;
          display: block;
          width: 100%;
          border-bottom: 1px solid transparent;
          transition: border-color .2s, transform .2s;
        }
        .k-nav a:hover {
          border-color: #fff;
          transform: translateX(2px);
        }
        .k-nav a:focus-visible {
          outline: 2px solid #2563eb;
          outline-offset: 2px;
          border-radius: 2px;
        }

        /* Contact */
        .k-contact { display: flex; flex-direction: column; gap: 4px; }
        .k-contact-item {
          display: flex;
          align-items: center;
          gap: 8px;
          width: 100%;
          padding: 6px 0;
        }
        .k-contact-item a {
          font-size: 14px;
          color: #999;
          text-decoration: none;
          border-bottom: 1px solid transparent;
          transition: color .2s, border-color .2s;
          flex: 1;
        }
        .k-contact-item a:hover { color: #fff; border-color: #fff; }
        .k-contact-item a:focus-visible {
          outline: 2px solid #2563eb;
          outline-offset: 2px;
          border-radius: 2px;
        }

        .k-copy-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          color: #555;
          background: none;
          border: none;
          padding: 4px;
          border-radius: 4px;
          cursor: pointer;
          flex-shrink: 0;
          transition: color .15s;
        }
        .k-copy-btn:hover {
          color: #fff;
        }
        .k-copy-btn:focus-visible {
          outline: 2px solid #2563eb;
          outline-offset: 2px;
        }
        .k-copy-btn.copied { color: #2563eb; }
        .k-copy-btn svg {
          width: 14px;
          height: 14px;
        }

        /* ── Main ──────────────────────────── */
        .k-main { min-width: 0; }

        /* Tabs */
        .k-tabs {
          display: flex;
          gap: 24px;
          border-bottom: 1px solid #222;
          margin-bottom: 32px;
          overflow-x: auto;
          -webkit-overflow-scrolling: touch;
          scrollbar-width: none;
        }
        .k-tabs::-webkit-scrollbar { display: none; }

        .k-tab-btn {
          font-size: 14px;
          font-weight: 500;
          color: #999;
          background: none;
          border: none;
          padding: 0 0 10px;
          cursor: pointer;
          font-family: 'JetBrains Mono', monospace;
          position: relative;
          transition: color .15s;
          white-space: nowrap;
          min-height: 36px;
        }
        .k-tab-btn:hover { color: #fff; }
        .k-tab-btn.active { color: #fff; }
        .k-tab-btn::after {
          content: "";
          position: absolute;
          left: 0; right: 0; bottom: -1px;
          height: 1px;
          background: #fff;
          transform: scaleX(0);
          transform-origin: left;
          transition: transform .2s ease;
        }
        .k-tab-btn.active::after { transform: scaleX(1); }
        .k-tab-btn:focus-visible {
          outline: 2px solid #2563eb;
          outline-offset: 2px;
          border-radius: 2px;
        }
        @media (max-width: 767px) {
          .k-tab-btn {
            padding: 10px 0;
          }
        }

        /* Panel crossfade */
        .k-panel { transition: opacity .13s ease; }
        .k-panel.hide { opacity: 0; }

        /* ── Content rows ──────────────────── */
        .k-row {
          padding: 20px 0;
          border-bottom: 1px solid #222;
        }
        .k-row:first-child { padding-top: 0; }
        .k-row:last-child { border-bottom: none; }

        .k-row-header {
          display: flex;
          flex-direction: column;
          gap: 4px;
          margin-bottom: 8px;
        }
        @media (min-width: 640px) {
          .k-row-header {
            flex-direction: row;
            justify-content: space-between;
            align-items: baseline;
            gap: 16px;
          }
        }

        .k-row-title {
          font-size: 14px;
          font-weight: 600;
          color: #fff;
        }
        .k-row-desc {
          font-size: 14px;
          color: #999;
          line-height: 1.65;
        }
        .k-row-sub {
          font-size: 14px;
          color: #999;
        }

        /* Project links */
        .k-links {
          display: flex;
          align-items: center;
          flex-shrink: 0;
          white-space: nowrap;
          gap: 0;
          font-size: 14px;
        }
        .k-links a {
          color: #999;
          text-decoration: none;
          padding: 2px 0;
          border-bottom: 1px solid #2563eb;
          transition: color .15s, border-color .15s;
        }
        .k-links a:hover { color: #fff; border-color: #fff; }
        .k-links a:focus-visible {
          outline: 2px solid #2563eb;
          outline-offset: 2px;
          border-radius: 2px;
        }
        .k-links-sep {
          color: #999;
          margin: 0 8px;
          user-select: none;
        }

        /* Stack */
        .k-cat-label {
          font-size: 12px;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: #999;
          margin-bottom: 6px;
        }
        .k-cat-skills {
          font-size: 14px;
          color: #fff;
          line-height: 1.8;
        }

        /* ── Focus skip ────────────────────── */
        .k-skip {
          position: absolute;
          top: -100px;
          left: 16px;
          background: #2563eb;
          color: #fff;
          padding: 8px 16px;
          border-radius: 4px;
          font-family: 'JetBrains Mono', monospace;
          font-size: 14px;
          font-weight: 600;
          text-decoration: none;
          z-index: 100;
          transition: top .2s;
        }
        .k-skip:focus { top: 16px; }
      `}</style>

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
          {/* Tabs */}
          <Fade>
            <div className="k-tabs" role="tablist" aria-label="Content sections">
              {tabs.map(tab => (
                <button key={tab.id} onClick={() => switchTab(tab.id)}
                  className={`k-tab-btn ${activeTab === tab.id ? "active" : ""}`}
                  role="tab"
                  aria-selected={activeTab === tab.id}
                  aria-controls={`panel-${tab.id}`}
                  id={`tab-${tab.id}`}>
                  {tab.label}
                </button>
              ))}
            </div>
          </Fade>

          {/* Content */}
          <div className={`k-panel ${fading ? "hide" : ""}`}
            role="tabpanel"
            aria-labelledby={`tab-${activeTab}`}
            id={`panel-${activeTab}`}>

            {/* Projects */}
            {activeTab === "projects" && (
              <section aria-label="Projects">
                {allProjects.map((p, i) => (
                  <Fade key={`p-${i}`} delay={i * 70}>
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
            )}

            {/* Stack */}
            {activeTab === "stack" && (
              <section aria-label="Tech stack" style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
                {techstack?.categories.map((cat, i) => (
                  <Fade key={`s-${i}`} delay={i * 50}>
                    <div>
                      <h2 className="k-cat-label">{cat.label}</h2>
                      <p className="k-cat-skills">{cat.skills.join("  ·  ")}</p>
                    </div>
                  </Fade>
                ))}
              </section>
            )}

            {/* Certs */}
            {activeTab === "certifications" && (
              <section aria-label="Certifications">
                {cert?.items.map((c, i) => (
                  <Fade key={`c-${i}`} delay={i * 70}>
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
            )}

            {/* Education */}
            {activeTab === "education" && (
              <section aria-label="Education">
                {edu?.items.map((e, i) => (
                  <Fade key={`e-${i}`} delay={i * 70}>
                    <article className="k-row">
                      <h2 className="k-row-title">{e.degree}</h2>
                      <p className="k-row-sub" style={{ marginTop: "4px" }}>{e.institution}</p>
                    </article>
                  </Fade>
                ))}
              </section>
            )}
          </div>
        </main>
      </div>
    </div>
  );
}
