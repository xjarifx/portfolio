"use client";

import { useState, useCallback } from "react";
import { portfolio } from "@/src/data/portfolio";

const { metadata, sections } = portfolio;
const techstack = sections.find(s => s.type === "techstack");
const projects = sections.find(s => s.type === "project");
const cert = sections.find(s => s.type === "certification");
const edu = sections.find(s => s.type === "education");
const allProjects = projects?.items || [];

const socialLabels = { github: "GitHub", linkedin: "LinkedIn", x: "X / Twitter", leetcode: "LeetCode" };

export default function Home() {
  const [toast, setToast] = useState(null);

  const copy = useCallback((text, label) => {
    navigator.clipboard.writeText(text);
    setToast(`${label} copied`);
    setTimeout(() => setToast(null), 2000);
  }, []);

  return (
    <div className="min-h-screen bg-[#fafafa] font-['Inter',system-ui,sans-serif] flex flex-col">
      {toast && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[9999] bg-green-600 text-white px-6 py-2.5 rounded-lg text-sm font-semibold font-['Inter',system-ui,sans-serif] shadow-[0_2px_8px_rgba(0,0,0,0.12)] animate-[g-toast-in_0.3s_ease]">
          {toast}
        </div>
      )}
      <main className="flex-1 max-w-[1100px] mx-auto px-6 py-10 pb-20 w-full flex flex-col gap-16">
        <section>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tighter text-black leading-none mb-1">
            {metadata.name}
          </h1>
          <p className="text-xl font-bold text-pink-500 uppercase mb-3">
            {metadata.title}
          </p>
          <p className="text-[15px] text-[#525252] max-w-[500px] leading-relaxed mb-5">
            {metadata.tagline}
          </p>
          <div className="flex gap-2 flex-wrap mb-6">
            {Object.entries(metadata.social).filter(([, v]) => v).map(([k, v]) => (
              <a key={k} href={v} target="_blank" rel="noreferrer noopener"
                aria-label={`${socialLabels[k] || k} profile`}
                className="px-3.5 py-1.5 border-2 border-black text-[13px] font-semibold no-underline text-black bg-white shadow-[2px_2px_0_#000]">
                {socialLabels[k] || k}
              </a>
            ))}
          </div>
          <div className="flex gap-4 flex-wrap">
            <div className="border-[3px] border-black bg-blue-500 shadow-[2px_2px_0_#000] px-5 py-3.5">
              <button onClick={() => copy(metadata.email, "Email")}
                className="text-sm font-semibold text-white no-underline border-b-2 border-white/30 bg-transparent border-t-0 border-l-0 border-r-0 cursor-pointer font-['Inter',system-ui,sans-serif] p-0">
                ✉ {metadata.email}
              </button>
            </div>
            <div className="border-[3px] border-black bg-blue-500 shadow-[2px_2px_0_#000] px-5 py-3.5">
              <button onClick={() => copy(metadata.phone, "Phone")}
                className="text-sm font-semibold text-white no-underline border-b-2 border-white/30 bg-transparent border-t-0 border-l-0 border-r-0 cursor-pointer font-['Inter',system-ui,sans-serif] p-0">
                ✆ {metadata.phone}
              </button>
            </div>
          </div>
        </section>

        <section id="g-projects">
          <h2 className="text-3xl font-extrabold uppercase tracking-tighter text-black mb-8 border-b-4 border-black pb-3">
            Projects
          </h2>
          <div className="grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-5 max-sm:grid-cols-1">
            {allProjects.map((p, i) => (
              <article key={i} className="border-[3px] border-black bg-white shadow-[3px_3px_0_#000]">
                <div className="p-6">
                  <h3 className="text-base font-bold text-black mb-2">{p.title}</h3>
                  <p className="text-sm text-[#525252] leading-relaxed mb-4">{p.description}</p>
                  <div className="flex gap-2">
                    {p.links?.map((l, j) => (
                      <a key={j} href={l.url} target="_blank" rel="noreferrer noopener"
                        className="px-3 py-1 border-2 border-black text-xs font-semibold no-underline text-black bg-[#fef08a] shadow-[1px_1px_0_#000]">
                        {l.label} ↗
                      </a>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="g-stack">
          <h2 className="text-3xl font-extrabold uppercase tracking-tighter text-black mb-8 border-b-4 border-black pb-3">
            Stack
          </h2>
          <div className="grid grid-cols-[repeat(auto-fill,minmax(240px,1fr))] gap-4">
            {techstack?.categories.map((cat, i) => (
              <div key={i} className="border-[3px] border-black p-5 bg-white shadow-[2px_2px_0_#000]">
                <h3 className="text-xs font-bold uppercase tracking-wide text-black mb-3">{cat.label}</h3>
                <div className="flex flex-wrap gap-1.5">
                  {cat.skills.map((s, j) => (
                    <span key={j} className="px-2.5 py-0.5 border-2 border-black text-xs font-semibold bg-[#fef08a]">{s}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="g-certs">
          <h2 className="text-3xl font-extrabold uppercase tracking-tighter text-black mb-8 border-b-4 border-black pb-3">
            Certifications
          </h2>
          {cert?.items.map((c, i) => (
            <div key={i} className="border-[3px] border-black px-6 py-5 bg-white shadow-[2px_2px_0_#000] mb-4">
              <div className="flex justify-between items-baseline gap-3">
                <h3 className="text-base font-bold text-black mb-2">{c.name}</h3>
                <a href={c.credentialUrl} target="_blank" rel="noreferrer noopener"
                  className="px-3.5 py-1.5 border-2 border-black text-[13px] font-semibold no-underline text-black bg-white shadow-[2px_2px_0_#000]">
                  Verify →
                </a>
              </div>
              <p className="text-sm text-[#525252] mt-1">{c.issuer}</p>
            </div>
          ))}
        </section>

        <section id="g-edu">
          <h2 className="text-3xl font-extrabold uppercase tracking-tighter text-black mb-8 border-b-4 border-black pb-3">
            Education
          </h2>
          {edu?.items.map((e, i) => (
            <div key={i} className="border-[3px] border-black px-6 py-5 bg-white shadow-[2px_2px_0_#000] mb-4">
              <h3 className="text-base font-bold text-black mb-2">{e.degree}</h3>
              <p className="text-sm text-[#525252] mt-1">{e.institution}</p>
            </div>
          ))}
        </section>
      </main>

      <footer className="border-t-[3px] border-black px-6 py-4 flex justify-center gap-6 text-xs font-semibold text-[#525252] bg-[#fef08a]">
        <span>{metadata.email}</span>
        <span>{metadata.phone}</span>
      </footer>
    </div>
  );
}
