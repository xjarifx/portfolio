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
      x: "https://x.com/J4R1F",
      leetcode: "https://leetcode.com/xjarifx",
    },
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
      ],
      moreItems: [
        {
          title: "Ecommerce (Frontend)",
          description:
            "A fully-featured Amazon-like ecommerce platform frontend with product browsing, filtering, search, cart management, and secure checkout experience.",
          links: [
            { label: "GitHub", url: "https://github.com/xjarifx/Ecommerce-Frontend" },
            { label: "Live Preview", url: "https://ecommerce-frontend-seven-snowy.vercel.app/" },
          ],
        },
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
  ],
};
