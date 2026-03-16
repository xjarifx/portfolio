export const portfolio = {
  // ============================================================
  // METADATA: Personal information and navigation config
  // ============================================================
  metadata: {
    name: "Md. Junaidul Islam Jarif",
    title: "Full-Stack Engineer",
    tagline:
      "I build responsive web experiences and scalable backend systems end-to-end.",
    email: "xjarifx@gmail.com",
    phone: "+880 1540165110",

    // Social links - displayed in sidebar footer
    social: {
      github: "https://github.com/xjarifx",
      linkedin: "https://www.linkedin.com/in/xjarifx",
      leetcode: "https://leetcode.com/xjarifx",
      medium: "https://medium.com/@xjarifx",
      fiverr: "https://www.fiverr.com/jarif__",
      x: "https://x.com/J4R1F",
      instagram: "https://www.instagram.com/md_junaidul_islam_jarif",
    },
  },

  // ============================================================
  // SECTIONS: Dynamically rendered content sections
  // ============================================================
  // Each section describes its type, title, and content
  // Frontend loops through this and renders accordingly
  // ORDER HERE = ORDER ON PAGE
  sections: [
    // ========== SUMMARY SECTION ==========
    // Type: 'text' - Simple paragraphs
    // Best for: Bio, introduction, main narrative
    {
      id: "summary",
      type: "text",
      title: "Summary",
      content: [
        "Full-stack engineer building web applications with React, Node.js, and TypeScript, experienced in scalable frontend interfaces, backend APIs, and cloud deployment.",
      ],
    },

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
        { label: "Languages", skills: ["TypeScript", "JavaScript (ES6+)", "SQL"] },
      ],
    },

    // ========== PROJECTS SECTION ==========
    {
      id: "projects",
      type: "project",
      title: "Projects",
      items: [
        {
          title: "Social Media (Full-Stack)",
          description:
            "A complete social network with authentication, posts, comments, likes, follows, notifications, and user blocking functionality.",
          links: [
            { label: "GitHub", url: "https://github.com/xjarifx/social-network" },
            { label: "Live Preview", url: "https://social-network-ten-ruby.vercel.app/" },
          ],
        },
        {
          title: "Ecommerce (Frontend)",
          description:
            "A fully-featured Amazon-like ecommerce platform frontend with product browsing, filtering, search, cart management, and secure checkout experience.",
          links: [
            { label: "GitHub", url: "https://github.com/xjarifx/Ecommerce-Frontend" },
            { label: "Live Preview", url: "https://ecommerce-frontend-seven-snowy.vercel.app/" },
          ],
        },
      ],
      moreItems: [
        {
          title: "Slack (Frontend)",
          description:
            "A modern, modular Next.js landing page inspired by Slack, built with TypeScript, Tailwind CSS, and reusable components.",
          links: [
            { label: "GitHub", url: "https://github.com/xjarifx/slack-landing-page" },
            { label: "Live Preview", url: "https://slack-landing-page-two.vercel.app/" },
          ],
        },
        {
          title: "Dashboard (Frontend)",
          description:
            "A responsive analytics dashboard with data visualization, real-time metrics, and interactive charts.",
          links: [
            { label: "GitHub", url: "https://github.com/xjarifx/Dashboard-Frontend" },
            { label: "Live Preview", url: "https://dashboard-frontend-sigma-inky.vercel.app/dashboard" },
          ],
        },
        {
          title: "Flower Shop (Frontend)",
          description:
            "A modern, responsive flower shop frontend with product showcases, category filtering, cart preview, and smooth mobile-first UI.",
          links: [
            { label: "GitHub", url: "https://github.com/xjarifx/flower-shop" },
            { label: "Live Preview", url: "https://flower-shop-mauve-tau.vercel.app/" },
          ],
        },
        {
          title: "Game Shop (Frontend)",
          description:
            "A parallax website inspired by the Firewatch game landing page, focused on layered scrolling visuals and immersive storytelling.",
          links: [
            { label: "GitHub", url: "https://github.com/xjarifx/parallax" },
            { label: "Live Preview", url: "https://parallax-nine-gilt.vercel.app/" },
          ],
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
          title:
            "AI and the Great RAM Crunch: Why Memory Is the New Bottleneck",
          summary:
            "An exploration of the 2026 memory chip crisis affecting AI infrastructure, examining why AI workloads are memory-intensive and the paths toward solving the RAM shortage.",
          date: "2026-03-08",
          url: "https://medium.com/@xjarifx/ai-and-the-great-ram-crunch-why-memory-is-the-new-bottleneck-ec8347263e98",
          tags: ["AI", "Hardware", "Memory", "Infrastructure"],
        },
        {
          title:
            "System Design Is Not About Systems, It's About Thinking in Constraints",
          summary:
            "A reframe of system design as a mindset: working within constraints, making trade-offs, and reasoning about scale, reliability, and clarity—not just drawing boxes.",
          date: "2026-03-05",
          url: "https://medium.com/@xjarifx/system-design-is-not-about-systems-its-about-thinking-in-constraints-67d495af61d1",
          tags: [
            "System Design",
            "Software Architecture",
            "Constraints",
            "Engineering",
          ],
        },
        {
          title:
            "Attention Is All You Need: How Transformers Rewired AI — And What Comes Next",
          summary:
            "An accessible breakdown of why Transformers replaced RNNs, how self-attention enabled modern LLMs, and which limits and next-step architectures are shaping AI’s future.",
          date: "2026-03-03",
          url: "https://medium.com/@xjarifx/attention-is-all-you-need-how-transformers-rewired-ai-and-what-comes-next-6927b2c4e0a7",
          tags: [
            "AI",
            "Transformer Architecture",
            "Large Language Models",
            "Machine Learning",
          ],
        },
        {
          title: "Why the Internet’s Security Actually Depends on a 1970s Toy",
          summary:
            "A practical story about why modern encryption still depends on real-world randomness, from Cloudflare’s lava lamps to chaos-based entropy sources.",
          date: "2026-03-01",
          url: "https://medium.com/@xjarifx/why-the-internets-security-actually-depends-on-a-1970s-toy-7d73b2618e79",
          tags: [
            "Software Development",
            "Cloudflare",
            "Cybersecurity",
            "Lava Lamp",
          ],
        },
      ],
    },

    // ========== CERTIFICATIONS SECTION ==========
    // Type: 'certification' - Professional certifications and courses
    {
      id: "certifications",
      type: "certification",
      title: "Certifications",
      items: [
        {
          name: "AWS Academy Cloud Foundations",
          issuer: "Amazon Web Services Academy",
          date: "2026",
          description:
            "Completed foundational cloud training covering AWS core services, cloud concepts, security, architecture, and pricing.",
          credentialUrl: "/certificates/aws.pdf",
          skills: [
            "AWS",
            "Cloud Computing",
            "Cloud Security",
            "Core AWS Services",
          ],
        },
      ],
    },

    // ========== EDUCATION SECTION ==========
    // Type: 'education' - Academic background with structured items
    {
      id: "education",
      type: "education",
      title: "Education",
      items: [
        {
          degree: "B.Sc. in Computer Science and Engineering (CSE)",
          institution: "Daffodil International University",
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
};
