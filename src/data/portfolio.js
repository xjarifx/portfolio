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
          title: "Social Media (Full-Stack)",
          description:
            "A complete social network with authentication, posts, comments, likes, follows, notifications, and user blocking functionality.",
          highlights: [
            "Built social network with auth, posts, comments, likes, follows, notifications, and user blocking",
            "Integrated Stripe payments for PRO subscriptions and Redis caching for optimized performance",
            "Developed RESTful API with Prisma ORM and responsive UI using TailwindCSS and Radix UI",
          ],
          techStack: ["React", "TypeScript", "Node.js", "Express", "PostgreSQL", "Redis"],
          links: [
            {
              label: "GitHub",
              url: "https://github.com/xjarifx/social-network",
            },
            {
              label: "Live Preview",
              url: "https://social-network-ten-ruby.vercel.app/",
            },
          ],
        },
        {
          title: "Slack (Frontend)",
          description:
            "A modern, modular Next.js landing page inspired by Slack, built with TypeScript, Tailwind CSS, and reusable components.",
          highlights: [
            "Architected component-driven design system with reusable UI components",
            "Achieved 100% TypeScript coverage with strict type safety and interface-driven development",
            "Optimized build performance and maintained 90+ Lighthouse scores across all metrics",
          ],
          techStack: ["Next.js", "TypeScript", "Tailwind CSS"],
          links: [
            {
              label: "GitHub",
              url: "https://github.com/xjarifx/slack-landing-page",
            },
            {
              label: "Live Preview",
              url: "https://slack-landing-page-two.vercel.app/",
            },
          ],
        },
        {
          title: "Dashboard (Frontend)",
          description:
            "A responsive analytics dashboard with data visualization, real-time metrics, and interactive charts for monitoring application performance and user engagement.",
          highlights: [
            "Built responsive dashboard with interactive charts and real-time data visualization",
            "Implemented modular component architecture with TypeScript for type safety and maintainability",
            "Deployed to production with optimized performance and responsive design across all devices",
          ],
          techStack: ["React", "TypeScript", "Tailwind CSS"],
          links: [
            {
              label: "GitHub",
              url: "https://github.com/xjarifx/Dashboard-Frontend",
            },
            {
              label: "Live Preview",
              url: "https://dashboard-frontend-sigma-inky.vercel.app/dashboard",
            },
          ],
        },
        {
          title: "Flower Shop (Frontend)",
          description:
            "A modern, responsive flower shop frontend with product showcases, category filtering, cart preview, and smooth mobile-first UI.",
          highlights: [
            "Developed responsive multi-page application with gallery and service showcase",
            "Optimized performance using WebP conversion and image prefetching strategies",
            "Implemented type-safe components with React 19 and modern CSS styling",
          ],
          techStack: ["React", "TypeScript", "Tailwind CSS"],
          links: [
            {
              label: "GitHub",
              url: "https://github.com/xjarifx/flower-shop",
            },
            {
              label: "Live Preview",
              url: "https://flower-shop-mauve-tau.vercel.app/",
            },
          ],
        },
        {
          title: "Game Shop (Frontend)",
          description:
            "A parallax website inspired by the Firewatch game landing page, focused on layered scrolling visuals and immersive storytelling.",
          highlights: [
            "Built 7-layer parallax scene with custom mouse-tracking hook and cinematic animations",
            "Developed reusable TypeScript components with responsive design and embedded media",
            "Implemented accessibility features including motion-reduction and semantic HTML",
          ],
          techStack: ["React", "TypeScript", "Tailwind CSS"],
          links: [
            {
              label: "GitHub",
              url: "https://github.com/xjarifx/parallax",
            },
            {
              label: "Live Preview",
              url: "https://parallax-nine-gilt.vercel.app/",
            },
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
          tags: [
            "AI",
            "Hardware",
            "Memory",
            "Infrastructure",
          ],
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
          period: "2023–2027",
          gpa: "3.1/4.0 CGPA",
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
