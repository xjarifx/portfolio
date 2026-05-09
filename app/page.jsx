"use client";

import { portfolio } from "@/src/data/portfolio";

const { metadata, sections } = portfolio;
const techstack = sections.find(s => s.type === "techstack");
const projects = sections.find(s => s.type === "project");
const cert = sections.find(s => s.type === "certification");
const edu = sections.find(s => s.type === "education");
const allProjects = projects?.items || [];

const socialLabels = { github: "GitHub", linkedin: "LinkedIn", x: "X / Twitter", leetcode: "LeetCode" };

const navLinks = [
  { id: "g-projects", label: "Projects" },
  { id: "g-stack", label: "Stack" },
  { id: "g-certs", label: "Certs" },
  { id: "g-edu", label: "Education" },
];

export default function Home() {
  return (
    <div className="g-root">
      <header className="g-header">
        <div className="g-header-inner">
          <div className="g-brand">
            <span className="g-brand-icon">⊞</span>
            <span className="g-brand-name">{metadata.name}</span>
          </div>
          <nav className="g-nav" aria-label="Sections">
            {navLinks.map((l) => (
              <a key={l.id} href={`#${l.id}`} className="g-nav-link">{l.label}</a>
            ))}
          </nav>
        </div>
      </header>

      <main className="g-main">
        <section className="g-hero">
          <h1 className="g-hero-title">{metadata.name}</h1>
          <p className="g-hero-role">{metadata.title}</p>
          <p className="g-hero-desc">{metadata.tagline}</p>
          <div className="g-hero-links">
            {Object.entries(metadata.social).filter(([, v]) => v).map(([k, v]) => (
              <a key={k} href={v} target="_blank" rel="noreferrer noopener"
                aria-label={`${socialLabels[k] || k} profile`} className="g-hero-link">
                {socialLabels[k] || k}
              </a>
            ))}
          </div>
          <div className="g-contact-bar">
            <a href={`mailto:${metadata.email}`} className="g-contact-link">✉ {metadata.email}</a>
            <a href={`tel:${metadata.phone.replace(/\s+/g, "")}`} className="g-contact-link">✆ {metadata.phone}</a>
          </div>
        </section>

        <section id="g-projects" className="g-section">
          <h2 className="g-section-title">Projects</h2>
          <div className="g-grid">
            {allProjects.map((p, i) => (
              <article key={i} className="g-card">
                <div className="g-card-content">
                  <h3 className="g-card-title">{p.title}</h3>
                  <p className="g-card-desc">{p.description}</p>
                  <div className="g-card-links">
                    {p.links?.map((l, j) => (
                      <a key={j} href={l.url} target="_blank" rel="noreferrer noopener" className="g-card-link">{l.label} ↗</a>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="g-stack" className="g-section">
          <h2 className="g-section-title">Stack</h2>
          <div className="g-stack-grid">
            {techstack?.categories.map((cat, i) => (
              <div key={i} className="g-stack-card">
                <h3 className="g-stack-label">{cat.label}</h3>
                <div className="g-stack-tags">
                  {cat.skills.map((s, j) => (
                    <span key={j} className="g-tag">{s}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="g-certs" className="g-section">
          <h2 className="g-section-title">Certifications</h2>
          {cert?.items.map((c, i) => (
            <div key={i} className="g-about-card">
              <div className="g-card-header">
                <h3 className="g-card-title">{c.name}</h3>
                <a href={c.credentialUrl} target="_blank" rel="noreferrer noopener" className="g-hero-link">Verify →</a>
              </div>
              <p className="g-card-sub">{c.issuer}</p>
            </div>
          ))}
        </section>

        <section id="g-edu" className="g-section">
          <h2 className="g-section-title">Education</h2>
          {edu?.items.map((e, i) => (
            <div key={i} className="g-about-card">
              <h3 className="g-card-title">{e.degree}</h3>
              <p className="g-card-sub">{e.institution}</p>
            </div>
          ))}
        </section>
      </main>

      <footer className="g-footer">
        <span>{metadata.email}</span>
        <span>{metadata.phone}</span>
      </footer>
    </div>
  );
}
