// Design K — Clean split layout · JetBrains Mono · minimal with refined animations
import { useState, useRef, useCallback, useEffect } from "react";
import { portfolio } from "../data/portfolio";

const { metadata, sections } = portfolio;

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
      ([e]) => { if (e.isIntersecting) { el.classList.add("k-visible"); obs.disconnect(); } },
      { threshold: 0.1 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return ref;
}

function Fade({ children, delay = 0 }) {
  const ref = useReveal();
  return (
    <div ref={ref} className="k-fade" style={{ "--d": `${delay}ms` }}>
      {children}
    </div>
  );
}

const techstack   = sections.find(s => s.type === "techstack");
const projects    = sections.find(s => s.type === "project");
const cert        = sections.find(s => s.type === "certification");
const edu         = sections.find(s => s.type === "education");
const allProjects = projects?.items || [];

export default function DesignK() {
  const [emailCopied, copyEmail] = useCopy(metadata.email);
  const [phoneCopied, copyPhone] = useCopy(metadata.phone);
  const [activeTab, setActiveTab] = useState("projects");
  const [tabTransition, setTabTransition] = useState(false);

  const tabs = [
    { id: "projects",       label: "Projects" },
    { id: "stack",          label: "Stack" },
    { id: "certifications", label: "Certs" },
    { id: "education",      label: "Education" },
  ];

  function switchTab(id) {
    if (id === activeTab) return;
    setTabTransition(true);
    setTimeout(() => {
      setActiveTab(id);
      setTabTransition(false);
    }, 150);
  }

  return (
    <div style={{ minHeight: "100vh", background: "#000", color: "#fff", fontFamily: "'JetBrains Mono', monospace" }}>
      <style>{`
        /* Fade-in on scroll */
        .k-fade {
          opacity: 0;
          transform: translateY(20px);
          transition: opacity .5s cubic-bezier(.16,1,.3,1), transform .5s cubic-bezier(.16,1,.3,1);
          transition-delay: var(--d, 0ms);
        }
        .k-visible { opacity: 1; transform: none; }

        /* Sidebar stagger entrance */
        .k-sidebar-item {
          opacity: 0;
          transform: translateX(-12px);
          animation: k-slideIn .5s cubic-bezier(.16,1,.3,1) forwards;
        }
        @keyframes k-slideIn {
          to { opacity: 1; transform: none; }
        }

        /* Tab bar */
        .k-tab {
          position: relative;
          padding: 8px 0;
          font-size: 15px;
          font-weight: 500;
          color: #666;
          cursor: pointer;
          background: none;
          border: none;
          font-family: 'JetBrains Mono', monospace;
          transition: color .25s ease;
        }
        .k-tab.active { color: #fff; }
        .k-tab::after {
          content: "";
          position: absolute;
          bottom: -1px;
          left: 0;
          right: 0;
          height: 1px;
          background: #fff;
          transform: scaleX(0);
          transform-origin: left;
          transition: transform .3s cubic-bezier(.16,1,.3,1);
        }
        .k-tab.active::after { transform: scaleX(1); }
        .k-tab:hover { color: #ccc; }
        .k-tab.active:hover { color: #fff; }

        /* Links */
        .k-link {
          color: #fff;
          text-decoration: none;
          border-bottom: 1px solid transparent;
          transition: border-color .3s ease, color .3s ease;
        }
        .k-link:hover {
          border-color: #4285F4;
          color: #a8c7fa;
        }

        /* Project link with arrow */
        .k-proj-link {
          color: #888;
          text-decoration: none;
          font-size: 13px;
          display: inline-flex;
          align-items: center;
          gap: 4px;
          transition: color .25s ease;
        }
        .k-proj-link::after {
          content: "→";
          display: inline-block;
          transition: transform .25s cubic-bezier(.16,1,.3,1);
        }
        .k-proj-link:hover {
          color: #fff;
        }
        .k-proj-link:hover::after {
          transform: translateX(3px);
        }

        /* Separator between project links */
        .k-link-sep {
          color: #333;
          font-size: 13px;
          user-select: none;
        }

        /* Row with hover glow */
        .k-row {
          border-bottom: 1px solid #181818;
          padding: 24px 0;
          transition: background .3s ease;
          border-radius: 2px;
        }
        .k-row:last-child { border-bottom: none; }
        .k-row:hover {
          background: rgba(255,255,255,0.015);
        }

        /* Copy button */
        .k-copy {
          font-size: 13px;
          color: #444;
          cursor: pointer;
          background: none;
          border: none;
          padding: 2px 6px;
          font-family: 'JetBrains Mono', monospace;
          border-radius: 3px;
          transition: color .2s, background .2s;
        }
        .k-copy:hover {
          color: #fff;
          background: rgba(255,255,255,0.06);
        }

        /* Tab content transition */
        .k-content {
          transition: opacity .15s ease, transform .15s ease;
        }
        .k-content.fading {
          opacity: 0;
          transform: translateY(6px);
        }

        /* Pulse for "copied" state */
        @keyframes k-pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
        .k-copied {
          animation: k-pulse .4s ease;
          color: #4285F4 !important;
        }

        /* Sidebar link hover slide */
        .k-sidebar-link {
          color: #fff;
          text-decoration: none;
          border-bottom: 1px solid transparent;
          display: inline-block;
          transition: border-color .25s ease, transform .25s cubic-bezier(.16,1,.3,1);
        }
        .k-sidebar-link:hover {
          border-color: #4285F4;
          transform: translateX(3px);
        }
      `}</style>

      <div style={{ maxWidth: "960px", margin: "0 auto", padding: "0 24px" }}
        className="min-h-screen lg:grid lg:grid-cols-[280px_1fr] lg:gap-16">

        {/* Sidebar */}
        <aside className="py-16 lg:py-24 lg:sticky lg:top-0 lg:h-screen lg:flex lg:flex-col lg:justify-between">
          <div>
            <div style={{ marginBottom: "2.5rem" }} className="k-sidebar-item" >
              <h1 style={{ fontSize: "20px", fontWeight: 600, color: "#fff", whiteSpace: "nowrap", marginBottom: "6px", letterSpacing: "-0.01em" }}>
                Md. Junaidul Islam Jarif
              </h1>
              <p style={{ fontSize: "15px", color: "#666" }}>{metadata.title}</p>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              {Object.entries(metadata.social).filter(([, v]) => v).map(([k, v], i) => (
                <a key={k} href={v} target="_blank" rel="noreferrer noopener"
                  className="k-sidebar-link k-sidebar-item"
                  style={{ fontSize: "15px", textTransform: "capitalize", width: "fit-content", animationDelay: `${(i + 1) * 80}ms` }}>
                  {k}
                </a>
              ))}
              <a href="https://docs.google.com/document/d/1Is5jUhyEGggU1dsqlMcQj3Q3tldcAdldZ-xW4WpTKDk/edit?usp=sharing"
                target="_blank" rel="noreferrer noopener"
                className="k-sidebar-link k-sidebar-item"
                style={{ fontSize: "15px", width: "fit-content", animationDelay: `${(Object.keys(metadata.social).length + 1) * 80}ms` }}>
                Resume
              </a>
            </div>
          </div>

          <div style={{ marginTop: "2.5rem" }} className="k-sidebar-item" style2="animationDelay: 600ms">
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "8px" }}>
              <a href={`mailto:${metadata.email}`} className="k-link" style={{ fontSize: "14px" }}>{metadata.email}</a>
              <button onClick={copyEmail} className={`k-copy ${emailCopied ? "k-copied" : ""}`} aria-label="Copy email">{emailCopied ? "copied" : "copy"}</button>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
              <a href={`tel:${metadata.phone.replace(/\s+/g, "")}`} className="k-link" style={{ fontSize: "14px" }}>{metadata.phone}</a>
              <button onClick={copyPhone} className={`k-copy ${phoneCopied ? "k-copied" : ""}`} aria-label="Copy phone">{phoneCopied ? "copied" : "copy"}</button>
            </div>
          </div>
        </aside>

        {/* Main */}
        <main className="py-16 lg:py-24">
          <Fade>
            <div style={{ display: "flex", gap: "28px", borderBottom: "1px solid #181818", marginBottom: "2.5rem" }}>
              {tabs.map(tab => (
                <button key={tab.id} onClick={() => switchTab(tab.id)}
                  className={`k-tab ${activeTab === tab.id ? "active" : ""}`}>
                  {tab.label}
                </button>
              ))}
            </div>
          </Fade>

          <div className={`k-content ${tabTransition ? "fading" : ""}`}>
            {/* Projects */}
            {activeTab === "projects" && allProjects.map((p, i) => (
              <Fade key={i} delay={i * 60}>
                <div className="k-row">
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "16px", marginBottom: "8px" }}>
                    <h3 style={{ fontSize: "16px", fontWeight: 600, color: "#fff" }}>{p.title}</h3>
                    <div style={{ display: "flex", alignItems: "center", gap: "6px", flexShrink: 0 }}>
                      {p.links?.map((l, j) => (
                        <span key={j} style={{ display: "inline-flex", alignItems: "center", gap: "6px" }}>
                          {j > 0 && <span className="k-link-sep">|</span>}
                          <a href={l.url} target="_blank" rel="noreferrer noopener" className="k-proj-link">
                            {l.label}
                          </a>
                        </span>
                      ))}
                    </div>
                  </div>
                  <p style={{ fontSize: "14px", color: "#666", lineHeight: 1.7 }}>{p.description}</p>
                </div>
              </Fade>
            ))}

            {/* Stack */}
            {activeTab === "stack" && (
              <div style={{ display: "flex", flexDirection: "column", gap: "28px" }}>
                {techstack?.categories.map((cat, i) => (
                  <Fade key={i} delay={i * 50}>
                    <div>
                      <p style={{ fontSize: "13px", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.12em", color: "#444", marginBottom: "10px" }}>
                        {cat.label}
                      </p>
                      <p style={{ fontSize: "15px", color: "#ccc", lineHeight: 1.7 }}>
                        {cat.skills.join("  ·  ")}
                      </p>
                    </div>
                  </Fade>
                ))}
              </div>
            )}

            {/* Certs */}
            {activeTab === "certifications" && cert?.items.map((c, i) => (
              <Fade key={i} delay={i * 60}>
                <div className="k-row">
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "16px", marginBottom: "4px" }}>
                    <h3 style={{ fontSize: "16px", fontWeight: 600, color: "#fff" }}>{c.name}</h3>
                    <a href={c.credentialUrl} target="_blank" rel="noreferrer noopener"
                      className="k-proj-link" style={{ flexShrink: 0 }}>View</a>
                  </div>
                  <p style={{ fontSize: "14px", color: "#666" }}>{c.issuer}</p>
                </div>
              </Fade>
            ))}

            {/* Education */}
            {activeTab === "education" && edu?.items.map((e, i) => (
              <Fade key={i} delay={i * 60}>
                <div className="k-row">
                  <h3 style={{ fontSize: "16px", fontWeight: 600, color: "#fff", marginBottom: "6px" }}>{e.degree}</h3>
                  <p style={{ fontSize: "14px", color: "#666" }}>{e.institution}</p>
                </div>
              </Fade>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}
