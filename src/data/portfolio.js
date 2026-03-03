export const portfolio = {
  // ============================================================
  // METADATA: Personal information and navigation config
  // ============================================================
  metadata: {
    name: "Junaidul Islam Jarif",
    title: "Full-Stack Developer",
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
        "I'm a full stack developer focused on building clean, responsive interfaces and reliable APIs. I enjoy turning ideas into complete products that are easy to use, maintain, and scale.",
        "I build projects with React on the frontend and Node.js, Express, and PostgreSQL on the backend, while continuously improving my system design and architecture skills.",
        "I care about clarity, performance, and developer experience across the full stack, and I document what I build so teams can extend it confidently.",
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
          title: "Fire Watch",
          description:
            "A simple parallax website inspired by the Firewatch game landing page, focused on layered scrolling visuals and immersive storytelling.",
          highlights: [
            "Built a smooth multi-layer parallax scrolling effect for a cinematic landing experience",
            "Replicated Firewatch-inspired visual composition while keeping the interface lightweight",
            "Deployed with fast static hosting for easy sharing and live preview",
          ],
          techStack: ["React", "Tailwind CSS", "TypeScript", "Vercel"],
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
        {
          title: "Social Network",
          description:
            "A complete social media web application where users can create posts, follow profiles, react, comment, and chat in real time.",
          highlights: [
            "Built secure authentication with JWT, protected routes, and role-based permissions",
            "Implemented real-time messaging and notifications using Socket.io",
            "Designed scalable REST APIs with optimized queries and pagination",
          ],
          techStack: ["React", "Node.js", "Express", "PostgreSQL", "Socket.io"],
          links: [
            {
              label: "GitHub",
              url: "https://github.com/xjarifx/social-network",
            },
          ],
        },
        {
          title: "Our Bloom",
          description:
            "A modern, responsive flower shop frontend with product showcases, category filtering, cart preview, and smooth mobile-first UI.",
          highlights: [
            "Created reusable UI components and clean page composition",
            "Implemented responsive layouts and accessible interactions",
            "Optimized loading performance and visual consistency across devices",
          ],
          techStack: ["React", "JavaScript", "Tailwind CSS", "Vite"],
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
    // Type: 'text' - Academic background
    {
      id: "education",
      type: "text",
      title: "Education",
      content: [
        "B.Sc. in Computer Science and Engineering (CSE)",
        "Daffodil International University",
        "3.1/4.0 CGPA (2023-2027)",
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
