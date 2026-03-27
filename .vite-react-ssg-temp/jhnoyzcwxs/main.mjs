import { ViteReactSSG } from "vite-react-ssg";
import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import { useCallback, useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin, faXTwitter } from "@fortawesome/free-brands-svg-icons";
const portfolio = {
  // ============================================================
  // METADATA: Personal information and navigation config
  // ============================================================
  metadata: {
    name: "Md. Junaidul Islam Jarif",
    title: "Full-Stack Engineer",
    tagline: "I build responsive web experiences and scalable backend systems end-to-end.",
    email: "xjarifx@gmail.com",
    phone: "+880 1540165110",
    // Social links - displayed in sidebar footer
    social: {
      github: "https://github.com/xjarifx",
      linkedin: "https://www.linkedin.com/in/xjarifx",
      x: "https://x.com/J4R1F",
      leetcode: "https://leetcode.com/xjarifx"
    }
  },
  // ============================================================
  // SECTIONS: Dynamically rendered content sections
  // ============================================================
  sections: [
    // ========== TECH STACK SECTION ==========
    {
      id: "techstack",
      type: "techstack",
      title: "Tech Stack",
      categories: [
        { label: "Frontend", skills: ["React", "Next.js", "Tailwind CSS", "Radix UI", "Vite"] },
        { label: "Backend", skills: ["Node.js", "Express", "REST APIs", "JWT", "Zod"] },
        { label: "Database", skills: ["PostgreSQL", "MongoDB", "Prisma", "Redis"] },
        { label: "Tools / Cloud", skills: ["AWS", "Docker", "Git", "Vercel", "Render", "Postman"] },
        { label: "Languages", skills: ["TypeScript", "JavaScript (ES6+)", "SQL"] }
      ]
    },
    // ========== PROJECTS SECTION ==========
    {
      id: "projects",
      type: "project",
      title: "Projects",
      items: [
        {
          title: "Social Media (Full-Stack)",
          description: "A complete social network with authentication, posts, comments, likes, follows, notifications, and user blocking functionality.",
          links: [
            { label: "GitHub", url: "https://github.com/xjarifx/social-network" },
            { label: "Live Preview", url: "https://social-network-ten-ruby.vercel.app/" }
          ]
        }
      ],
      moreItems: [
        {
          title: "Ecommerce (Frontend)",
          description: "A fully-featured Amazon-like ecommerce platform frontend with product browsing, filtering, search, cart management, and secure checkout experience.",
          links: [
            { label: "GitHub", url: "https://github.com/xjarifx/Ecommerce-Frontend" },
            { label: "Live Preview", url: "https://ecommerce-frontend-seven-snowy.vercel.app/" }
          ]
        },
        {
          title: "Slack (Frontend)",
          description: "A modern, modular Next.js landing page inspired by Slack, built with TypeScript, Tailwind CSS, and reusable components.",
          links: [
            { label: "GitHub", url: "https://github.com/xjarifx/slack-landing-page" },
            { label: "Live Preview", url: "https://slack-landing-page-two.vercel.app/" }
          ]
        },
        {
          title: "Dashboard (Frontend)",
          description: "A responsive analytics dashboard with data visualization, real-time metrics, and interactive charts.",
          links: [
            { label: "GitHub", url: "https://github.com/xjarifx/Dashboard-Frontend" },
            { label: "Live Preview", url: "https://dashboard-frontend-sigma-inky.vercel.app/dashboard" }
          ]
        },
        {
          title: "Flower Shop (Frontend)",
          description: "A modern, responsive flower shop frontend with product showcases, category filtering, cart preview, and smooth mobile-first UI.",
          links: [
            { label: "GitHub", url: "https://github.com/xjarifx/flower-shop" },
            { label: "Live Preview", url: "https://flower-shop-mauve-tau.vercel.app/" }
          ]
        },
        {
          title: "Game Shop (Frontend)",
          description: "A parallax website inspired by the Firewatch game landing page, focused on layered scrolling visuals and immersive storytelling.",
          links: [
            { label: "GitHub", url: "https://github.com/xjarifx/parallax" },
            { label: "Live Preview", url: "https://parallax-nine-gilt.vercel.app/" }
          ]
        }
      ]
    },
    // ========== CERTIFICATIONS SECTION ==========
    {
      id: "certifications",
      type: "certification",
      title: "Certifications",
      items: [
        {
          name: "AWS Academy Cloud Foundations",
          issuer: "Amazon Web Services Academy",
          date: "2026",
          description: "Completed foundational cloud training covering AWS core services, cloud concepts, security, architecture, and pricing.",
          credentialUrl: "/certificates/aws.pdf",
          skills: [
            "AWS",
            "Cloud Computing",
            "Cloud Security",
            "Core AWS Services"
          ]
        }
      ]
    },
    // ========== EDUCATION SECTION ==========
    {
      id: "education",
      type: "education",
      title: "Education",
      items: [
        {
          degree: "B.Sc. in Computer Science and Engineering (CSE)",
          institution: "Daffodil International University"
        }
      ]
    }
  ]
};
function useCopy(text) {
  const [copied, setCopied] = useState(false);
  const timer = useRef(null);
  const copy = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(text);
    } catch {
    }
    setCopied(true);
    clearTimeout(timer.current);
    timer.current = setTimeout(() => setCopied(false), 2e3);
  }, [text]);
  useEffect(() => () => clearTimeout(timer.current), []);
  return [copied, copy];
}
function useActiveSection(ids) {
  const [active, setActive] = useState("");
  useEffect(() => {
    const els = ids.map((id) => document.getElementById(id)).filter(Boolean);
    const visible = /* @__PURE__ */ new Map();
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(
          (e) => e.isIntersecting ? visible.set(e.target.id, e.boundingClientRect.top) : visible.delete(e.target.id)
        );
        if (!visible.size) return;
        const top = [...visible.entries()].reduce(
          (a, b) => Math.abs(b[1]) < Math.abs(a[1]) ? b : a
        );
        setActive((prev) => prev !== top[0] ? top[0] : prev);
      },
      { threshold: [0, 0.25, 0.5], rootMargin: "-10% 0px -35% 0px" }
    );
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [ids]);
  return active;
}
const LeetcodeIcon = () => /* @__PURE__ */ jsx("svg", { className: "h-5 w-5", fill: "currentColor", viewBox: "0 0 24 24", "aria-hidden": "true", children: /* @__PURE__ */ jsx("path", { d: "M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z" }) });
const ResumeIcon = () => /* @__PURE__ */ jsx("svg", { className: "h-5 w-5", fill: "currentColor", viewBox: "0 0 24 24", "aria-hidden": "true", children: /* @__PURE__ */ jsx("path", { d: "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6zm-1 1.5L18.5 9H13V3.5zM6 20V4h5v7h7v9H6zm2-5h8v1.5H8V15zm0-3h8v1.5H8V12zm0-3h4v1.5H8V9z" }) });
const SOCIAL = [
  { key: "github", label: "GitHub", icon: /* @__PURE__ */ jsx(FontAwesomeIcon, { icon: faGithub, className: "h-5 w-5" }) },
  { key: "linkedin", label: "LinkedIn", icon: /* @__PURE__ */ jsx(FontAwesomeIcon, { icon: faLinkedin, className: "h-5 w-5" }) },
  { key: "x", label: "X", icon: /* @__PURE__ */ jsx(FontAwesomeIcon, { icon: faXTwitter, className: "h-5 w-5" }) },
  { key: "leetcode", label: "LeetCode", icon: /* @__PURE__ */ jsx(LeetcodeIcon, {}) }
];
const Tag = ({ children }) => /* @__PURE__ */ jsx("span", { className: "inline-flex items-center rounded-full bg-violet-50 border border-violet-200 px-2.5 py-0.5 text-xs font-medium text-violet-700", children });
const ArrowIcon = () => /* @__PURE__ */ jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    className: "inline-block h-3.5 w-3.5 shrink-0 ml-0.5",
    "aria-hidden": "true",
    children: /* @__PURE__ */ jsx("path", { fillRule: "evenodd", d: "M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z", clipRule: "evenodd" })
  }
);
const SectionHeading = ({ children }) => /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 mb-8", children: [
  /* @__PURE__ */ jsx("span", { className: "h-px flex-1 bg-gradient-to-r from-violet-200 to-transparent" }),
  /* @__PURE__ */ jsx("h2", { className: "text-xs font-bold uppercase tracking-[0.2em] text-violet-500", children }),
  /* @__PURE__ */ jsx("span", { className: "h-px flex-1 bg-gradient-to-l from-violet-200 to-transparent" })
] });
const TextSection = ({ content }) => /* @__PURE__ */ jsx("div", { className: "space-y-4", children: content.map((p, i) => /* @__PURE__ */ jsx("p", { className: "text-slate-600 leading-relaxed text-base", children: p }, i)) });
const TechStackSection = ({ categories }) => /* @__PURE__ */ jsx("div", { className: "grid gap-3", children: categories.map((cat, i) => /* @__PURE__ */ jsxs("div", { className: "rounded-xl bg-white border border-slate-100 shadow-sm px-4 py-3 flex flex-wrap gap-x-3 gap-y-1 items-baseline", children: [
  /* @__PURE__ */ jsx("span", { className: "text-xs font-bold uppercase tracking-wider text-violet-500 shrink-0 w-32", children: cat.label }),
  /* @__PURE__ */ jsx("span", { className: "text-sm text-slate-600", children: cat.skills.join(" · ") })
] }, i)) });
const ProjectItem = ({ project }) => /* @__PURE__ */ jsxs("div", { className: "group rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-md hover:border-violet-200 transition-all duration-200 p-5", children: [
  /* @__PURE__ */ jsxs("div", { className: "flex items-start justify-between gap-3 flex-wrap", children: [
    /* @__PURE__ */ jsx("h3", { className: "font-semibold text-slate-800 text-base leading-tight", children: project.title }),
    project.links?.length > 0 && /* @__PURE__ */ jsx("div", { className: "flex gap-2 flex-wrap", children: project.links.map((link, i) => /* @__PURE__ */ jsxs(
      "a",
      {
        href: link.url,
        target: "_blank",
        rel: "noreferrer noopener",
        "aria-label": `${link.label} for ${project.title}`,
        className: "inline-flex items-center gap-1 text-xs font-medium text-violet-600 bg-violet-50 border border-violet-200 rounded-full px-3 py-1 hover:bg-violet-100 transition-colors",
        children: [
          link.label,
          /* @__PURE__ */ jsx(ArrowIcon, {})
        ]
      },
      i
    )) })
  ] }),
  project.description && /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm text-slate-500 leading-relaxed", children: project.description })
] });
const ProjectSection = ({ items, moreItems }) => {
  const [open, setOpen] = useState(false);
  return /* @__PURE__ */ jsxs("div", { className: "space-y-3", children: [
    items.map((p, i) => /* @__PURE__ */ jsx(ProjectItem, { project: p }, i)),
    moreItems?.length > 0 && /* @__PURE__ */ jsxs(Fragment, { children: [
      /* @__PURE__ */ jsxs(
        "button",
        {
          onClick: () => setOpen((v) => !v),
          className: "flex items-center gap-2 text-sm font-medium text-violet-600 hover:text-violet-800 transition-colors",
          "aria-expanded": open,
          children: [
            /* @__PURE__ */ jsx("span", { className: `inline-block transition-transform duration-200 ${open ? "rotate-90" : ""}`, children: "›" }),
            open ? "Show less" : `${moreItems.length} more projects`
          ]
        }
      ),
      open && /* @__PURE__ */ jsx("div", { className: "space-y-3", children: moreItems.map((p, i) => /* @__PURE__ */ jsx(ProjectItem, { project: p }, i)) })
    ] })
  ] });
};
const ArticleSection = ({ items }) => /* @__PURE__ */ jsx("div", { className: "space-y-3", children: items.map((article, i) => /* @__PURE__ */ jsxs(
  "a",
  {
    href: article.url,
    target: "_blank",
    rel: "noreferrer noopener",
    className: "group block rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-md hover:border-violet-200 transition-all duration-200 p-5",
    children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-start justify-between gap-2", children: [
        /* @__PURE__ */ jsx("h3", { className: "font-semibold text-slate-800 text-sm leading-snug group-hover:text-violet-700 transition-colors", children: article.title }),
        /* @__PURE__ */ jsx(ArrowIcon, {})
      ] }),
      article.summary && /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm text-slate-500 leading-relaxed", children: article.summary }),
      article.tags?.length > 0 && /* @__PURE__ */ jsx("div", { className: "mt-3 flex flex-wrap gap-1.5", children: article.tags.map((tag, j) => /* @__PURE__ */ jsx(Tag, { children: tag }, j)) })
    ]
  },
  i
)) });
const CertificationSection = ({ items }) => /* @__PURE__ */ jsx("div", { className: "space-y-3", children: items.map((cert, i) => /* @__PURE__ */ jsxs(
  "a",
  {
    href: cert.credentialUrl,
    target: "_blank",
    rel: "noreferrer noopener",
    className: "group block rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-md hover:border-violet-200 transition-all duration-200 p-5",
    children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-start justify-between gap-2", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("h3", { className: "font-semibold text-slate-800 text-sm leading-snug group-hover:text-violet-700 transition-colors", children: cert.name }),
          cert.issuer && /* @__PURE__ */ jsx("p", { className: "mt-0.5 text-xs text-slate-400", children: cert.issuer })
        ] }),
        /* @__PURE__ */ jsx(ArrowIcon, {})
      ] }),
      cert.skills?.length > 0 && /* @__PURE__ */ jsx("div", { className: "mt-3 flex flex-wrap gap-1.5", children: cert.skills.map((skill, j) => /* @__PURE__ */ jsx(Tag, { children: skill }, j)) })
    ]
  },
  i
)) });
const EducationSection = ({ items }) => /* @__PURE__ */ jsx("div", { className: "space-y-3", children: items.map((entry, i) => /* @__PURE__ */ jsxs("div", { className: "rounded-2xl bg-white border border-slate-100 shadow-sm p-5", children: [
  /* @__PURE__ */ jsx("h3", { className: "font-semibold text-slate-800 text-sm leading-tight", children: entry.degree }),
  /* @__PURE__ */ jsx("p", { className: "mt-1 text-sm text-slate-500", children: entry.institution }),
  /* @__PURE__ */ jsxs("div", { className: "mt-2 flex flex-wrap gap-3 text-xs text-slate-400", children: [
    entry.period && /* @__PURE__ */ jsx("span", { children: entry.period }),
    entry.gpa && /* @__PURE__ */ jsx("span", { className: "text-violet-500 font-medium", children: entry.gpa })
  ] })
] }, i)) });
function renderSection(section) {
  switch (section.type) {
    case "text":
      return /* @__PURE__ */ jsx(TextSection, { content: section.content });
    case "techstack":
      return /* @__PURE__ */ jsx(TechStackSection, { categories: section.categories });
    case "project":
      return /* @__PURE__ */ jsx(ProjectSection, { items: section.items, moreItems: section.moreItems });
    case "article":
      return /* @__PURE__ */ jsx(ArticleSection, { items: section.items });
    case "certification":
      return /* @__PURE__ */ jsx(CertificationSection, { items: section.items });
    case "education":
      return /* @__PURE__ */ jsx(EducationSection, { items: section.items });
    default:
      return null;
  }
}
function App() {
  const { metadata, sections } = portfolio;
  const sectionIds = sections.map((s) => s.id);
  const active = useActiveSection(sectionIds);
  const [emailCopied, copyEmail] = useCopy(metadata.email);
  const [phoneCopied, copyPhone] = useCopy(metadata.phone);
  const scrollTo = useCallback((e, id) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-slate-50 text-slate-600", children: [
    /* @__PURE__ */ jsx("div", { className: "fixed inset-0 -z-10 bg-[linear-gradient(to_right,#e2e8f020_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f020_1px,transparent_1px)] bg-[size:40px_40px]" }),
    /* @__PURE__ */ jsx("div", { className: "mx-auto max-w-screen-xl px-4 sm:px-6 md:px-12 lg:px-24", children: /* @__PURE__ */ jsxs("div", { className: "lg:flex lg:gap-16", children: [
      /* @__PURE__ */ jsxs("header", { className: "pt-10 lg:sticky lg:top-0 lg:flex lg:h-screen lg:w-[380px] lg:shrink-0 lg:flex-col lg:justify-between lg:pt-20 lg:pb-20", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4 mb-6", children: [
            /* @__PURE__ */ jsx("div", { className: "h-14 w-14 rounded-2xl overflow-hidden shadow-lg shadow-violet-200 shrink-0 border border-slate-200", children: /* @__PURE__ */ jsx("img", { src: "/me/ME.JPG", alt: metadata.name, className: "h-full w-full object-cover" }) }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("h1", { className: "text-xl font-bold text-slate-900 leading-tight", children: metadata.name }),
              /* @__PURE__ */ jsx("p", { className: "text-sm text-violet-600 font-medium mt-0.5", children: metadata.title })
            ] })
          ] }),
          /* @__PURE__ */ jsx("p", { className: "text-sm text-slate-500 leading-relaxed mb-8 max-w-xs", children: metadata.tagline }),
          /* @__PURE__ */ jsxs("div", { className: "space-y-2 mb-10", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsx(
                "a",
                {
                  href: `mailto:${metadata.email}`,
                  className: "flex-1 min-w-0 text-sm text-slate-700 bg-white border border-slate-200 rounded-xl px-3 py-2 truncate hover:border-violet-300 hover:text-violet-700 transition-colors shadow-sm",
                  children: metadata.email
                }
              ),
              /* @__PURE__ */ jsx(
                "button",
                {
                  onClick: copyEmail,
                  className: "shrink-0 text-xs font-medium px-3 py-2 rounded-xl bg-white border border-slate-200 text-slate-500 hover:border-violet-300 hover:text-violet-600 transition-colors shadow-sm",
                  "aria-label": `Copy email`,
                  children: emailCopied ? "✓" : "Copy"
                }
              )
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsx(
                "a",
                {
                  href: `tel:${metadata.phone.replace(/\s+/g, "")}`,
                  className: "flex-1 min-w-0 text-sm text-slate-700 bg-white border border-slate-200 rounded-xl px-3 py-2 truncate hover:border-violet-300 hover:text-violet-700 transition-colors shadow-sm",
                  children: metadata.phone
                }
              ),
              /* @__PURE__ */ jsx(
                "button",
                {
                  onClick: copyPhone,
                  className: "shrink-0 text-xs font-medium px-3 py-2 rounded-xl bg-white border border-slate-200 text-slate-500 hover:border-violet-300 hover:text-violet-600 transition-colors shadow-sm",
                  "aria-label": `Copy phone`,
                  children: phoneCopied ? "✓" : "Copy"
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ jsx("nav", { className: "hidden lg:block", "aria-label": "In-page jump links", children: /* @__PURE__ */ jsx("ul", { className: "space-y-1", children: sections.map((s) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsxs(
            "a",
            {
              href: `#${s.id}`,
              onClick: (e) => scrollTo(e, s.id),
              className: `flex items-center gap-3 px-3 py-2 rounded-xl text-sm font-medium transition-all duration-200 border ${active === s.id ? "bg-violet-50 text-violet-700 border-violet-200" : "border-slate-200 text-slate-400 hover:text-slate-700 hover:bg-white"}`,
              children: [
                /* @__PURE__ */ jsx("span", { className: `h-1.5 w-1.5 rounded-full shrink-0 transition-colors ${active === s.id ? "bg-violet-500" : "bg-slate-300"}` }),
                s.title
              ]
            }
          ) }, s.id)) }) })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "mt-8", children: /* @__PURE__ */ jsxs("ul", { className: "flex flex-wrap gap-2", "aria-label": "Social media", children: [
          SOCIAL.map(
            ({ key, label, icon }) => metadata.social[key] ? /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsxs(
              "a",
              {
                href: metadata.social[key],
                target: "_blank",
                rel: "noreferrer noopener",
                className: "flex items-center justify-center w-9 h-9 rounded-xl bg-violet-600 text-white transition-opacity hover:opacity-80 shadow-sm",
                "aria-label": `${label} (opens in a new tab)`,
                title: label,
                children: [
                  /* @__PURE__ */ jsx("span", { className: "sr-only", children: label }),
                  icon
                ]
              }
            ) }, key) : null
          ),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsxs(
            "a",
            {
              href: "https://docs.google.com/document/d/1Is5jUhyEGggU1dsqlMcQj3Q3tldcAdldZ-xW4WpTKDk/edit?usp=sharing",
              target: "_blank",
              rel: "noreferrer noopener",
              className: "flex items-center justify-center w-9 h-9 rounded-xl bg-violet-600 text-white transition-opacity hover:opacity-80 shadow-sm",
              "aria-label": "Resume (opens in a new tab)",
              title: "Resume",
              children: [
                /* @__PURE__ */ jsx("span", { className: "sr-only", children: "Resume" }),
                /* @__PURE__ */ jsx(ResumeIcon, {})
              ]
            }
          ) })
        ] }) })
      ] }),
      /* @__PURE__ */ jsxs("main", { className: "flex-1 py-16 lg:py-20 space-y-20", children: [
        sections.map((section) => /* @__PURE__ */ jsxs("section", { id: section.id, className: "scroll-mt-8", children: [
          /* @__PURE__ */ jsx(SectionHeading, { children: section.title }),
          renderSection(section)
        ] }, section.id)),
        /* @__PURE__ */ jsx("div", { className: "mt-[900px]" }),
        /* @__PURE__ */ jsx("footer", { className: "pt-8 border-t border-slate-100", children: /* @__PURE__ */ jsxs("p", { className: "text-xs text-slate-400", children: [
          "Design inspired by",
          " ",
          /* @__PURE__ */ jsx(
            "a",
            {
              href: "https://brittanychiang.com",
              target: "_blank",
              rel: "noreferrer noopener",
              className: "text-slate-500 hover:text-violet-600 transition-colors",
              children: "Brittany Chiang"
            }
          ),
          "."
        ] }) })
      ] })
    ] }) })
  ] });
}
const createApp = ViteReactSSG(App);
export {
  createApp
};
