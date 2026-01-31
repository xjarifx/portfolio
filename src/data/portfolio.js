export const portfolio = {
  // ============================================================
  // METADATA: Personal information and navigation config
  // ============================================================
  metadata: {
    name: "Junaidul Islam Jarif",
    title: "Backend Developer",
    tagline: "I build scalable, robust backend systems and APIs for the web.",
    email: "xjarifx@gmail.com",

    // Social links - displayed in sidebar footer
    social: {
      github: "https://github.com/xjarifx",
      linkedin: "https://www.linkedin.com/in/xjarifx",
    },
  },

  // ============================================================
  // THEME: Design tokens for styling
  // ============================================================
  // These are Tailwind class references - update here to change global look
  // All components use these tokens, so one change updates everywhere
  theme: {
    colors: {
      background: "bg-slate-900",
      text: "text-slate-400",
      textPrimary: "text-slate-200",
      textMuted: "text-slate-500",
      accent: "text-teal-300",
      accentBg: "bg-teal-400/10",
      line: "bg-slate-600",
      lineActive: "bg-slate-200",
      hoverOverlay: "lg:group-hover:bg-slate-800/50",
    },
    spacing: {
      sectionGap: "lg:mb-36 md:mb-24 mb-16",
      itemGap: "mb-12",
      contentGap: "mt-2",
    },
    typography: {
      heading: "text-4xl font-bold tracking-tight sm:text-5xl",
      subheading: "text-lg font-medium tracking-tight sm:text-xl",
      label: "text-xs font-bold uppercase tracking-widest",
    },
  },

  // ============================================================
  // SECTIONS: Dynamically rendered content sections
  // ============================================================
  // Each section describes its type, title, and content
  // Frontend loops through this and renders accordingly
  // ORDER HERE = ORDER ON PAGE
  sections: [
    // ========== ABOUT SECTION ==========
    // Type: 'text' - Simple paragraphs
    // Best for: Bio, introduction, main narrative
    {
      id: "about",
      type: "text",
      title: "About",
      content: [
        "I'm a backend developer focused on building clean, reliable APIs and data-driven systems. I enjoy turning requirements into well-structured services that are easy to maintain and scale.",
        "Right now, I'm learning deeply through personal projects with Node.js, Express, and PostgreSQL while exploring system design fundamentals and backend best practices.",
        "I care about clarity, performance, and developer experience, and I like documenting what I build so others can understand and extend it easily.",
      ],
    },

    // ========== PROJECTS SECTION ==========
    // Type: 'project' - Portfolio projects with highlights
    // Structure: List of projects with title, description, highlights, tech stack, links, images
    // Frontend renders as: Project card with image + tech badges + highlights bullets
    {
      id: "projects",
      type: "project",
      title: "Projects",
      items: [
        {
          title: "Your Project Title",
          description:
            "Short description of your project. Explain what it does and why it matters.",
          highlights: [
            "Key feature or achievement #1",
            "Key feature or achievement #2",
            "Key feature or achievement #3",
          ],
          techStack: ["Node.js", "Express", "PostgreSQL"],
          githubUrl: "https://github.com/yourusername/your-project",
          image: "/projects/demo.svg",
        },
      ],
    },

    // ========== ARTICLES SECTION ==========
    // Type: 'article' - Blog posts or publications
    // Structure: List of articles with title, summary, date, url, and tags
    {
      id: "articles",
      type: "article",
      title: "Articles",
      items: [
        {
          title: "Your Article Title",
          summary: "Brief summary of the article and what readers will learn.",
          date: "2026-02-01",
          url: "https://your-article-link.com",
          tags: ["Backend", "APIs"],
          image: "/articles/demo.svg",
        },
      ],
    },

    // ========== ADD NEW SECTIONS HERE ==========
    // Template for adding more section types:
    /*
    {
      id: "skills",              // Unique identifier (used in navigation)
      type: "skill",             // Section type (determines how frontend renders)
      title: "Skills",           // Display title in nav
      items: [                   // Content array
        { category: "Languages", skills: ["JavaScript", "TypeScript"] }
      ]
    },
    */
  ],

  // ============================================================
  // GLOBAL CONFIG: Frontend behavior and display rules
  // ============================================================
  config: {
    // Spotlight effect (mouse tracking background gradient)
    spotlight: {
      enabled: true,
      color: "rgba(29, 78, 216, 0.15)",
      size: "600px",
    },

    // Smooth scroll behavior
    smoothScroll: {
      enabled: true,
      behavior: "smooth",
      block: "start",
    },

    // Intersection Observer for active section highlighting
    observer: {
      enabled: true,
      thresholds: [0, 0.25, 0.5, 0.75, 1],
      rootMargin: "-10% 0px -50% 0px",
    },

    // Layout configuration
    layout: {
      maxWidth: "max-w-screen-xl",
    },

    // Show/hide elements
    display: {
      showSocialLinks: true,
      showSectionHeaders: true,
    },
  },
};
