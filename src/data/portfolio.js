export const portfolio = {
  // ============================================================
  // METADATA: Personal information and navigation config
  // ============================================================
  metadata: {
    name: "Md. Junaidul Islam Jarif",
    title: "Software Engineer",
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
        {
          label: "Languages",
          skills: ["JavaScript (ES6+)", "TypeScript"],
        },
        {
          label: "Frontend",
          skills: ["Next.js", "React", "Shadcn/ui", "Tailwind CSS"],
        },
        {
          label: "Backend",
          skills: [
            "Express.js",
            "Node.js",
            "REST APIs",
            "Socket.io",
            "WebSockets",
          ],
        },
        {
          label: "Database",
          skills: ["MongoDB", "Mongoose", "PostgreSQL", "Prisma ORM", "Redis"],
        },
        {
          label: "DevOps & Tools",
          skills: [
            "AWS",
            "Docker",
            "Git",
            "GitHub Actions",
            "Render",
            "Vercel",
          ],
        },
      ],
    },

    // ========== PROJECTS SECTION ==========
    {
      id: "projects",
      type: "project",
      title: "Projects",
      items: [
        {
          title: "Better Calendar",
          description: [
            "AI-powered event extraction from natural language using OpenRouter",
            "Dual-mode authentication (JWT Bearer tokens + HTTP-only cookies)",
            "All-day, timed, and multi-day event support",
            "Calendar views with drag-and-drop via dnd-kit",
            "Personal OpenRouter API key configuration in settings",
            "Responsive design with Tailwind CSS and shadcn/ui",
          ],
          links: [
            {
              label: "Live Demo",
              url: "https://better-calender-jarif.vercel.app",
            },
            {
              label: "Source Code",
              url: "https://github.com/xjarifx/better-calender",
            },
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
