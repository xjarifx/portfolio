export const portfolio = {
  // ============================================================
  // METADATA: Personal information and navigation config
  // ============================================================
  metadata: {
    name: "Md. Junaidul Islam Jarif",
    title: "Backend Developer",
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
          title: "Social Media (Full-Stack)",
          description:
            "A complete social network with authentication, posts, comments, likes, follows, notifications, and user blocking functionality.",
          links: [
            {
              label: "Live Demo",
              url: "https://social-network-ten-ruby.vercel.app/",
            },
            {
              label: "Source Code",
              url: "https://github.com/xjarifx/social-network",
            },
          ],
        },
        {
          title: "Guess The Output (Frontend)",
          description:
            "An interactive quiz testing knowledge of JavaScript quirks and weird output, featuring a mobile-responsive neo-brutalist design.",
          links: [
            {
              label: "Live Demo",
              url: "https://guess-the-output-lilac.vercel.app",
            },
            {
              label: "Source Code",
              url: "https://github.com/xjarifx/Guess-The-Output",
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
