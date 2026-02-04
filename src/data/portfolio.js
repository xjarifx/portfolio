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
          title: "E-Commerce REST API",
          description:
            "A robust RESTful API for an e-commerce platform with user authentication, product management, order processing, and payment integration.",
          highlights: [
            "Implemented JWT-based authentication with refresh token rotation",
            "Optimized database queries reducing response time by 60%",
            "Built comprehensive API documentation with Postman collections",
          ],
          techStack: ["Node.js", "Express", "PostgreSQL", "Redis", "Stripe"],
          links: [
            {
              label: "GitHub",
              url: "https://github.com/xjarifx/ecommerce-api",
            },
            {
              label: "Postman",
              url: "https://www.postman.com/collections/ecommerce-api",
            },
          ],
          image: "/projects/ecommerce.svg",
        },
        {
          title: "Task Management System",
          description:
            "A collaborative task management API with real-time updates, team workspaces, and advanced filtering capabilities.",
          highlights: [
            "Designed scalable database schema supporting multi-tenancy",
            "Integrated WebSocket for real-time notifications",
            "Implemented role-based access control (RBAC) system",
          ],
          techStack: ["Node.js", "Express", "MongoDB", "Socket.io", "Docker"],
          links: [
            {
              label: "GitHub",
              url: "https://github.com/xjarifx/task-manager-api",
            },
            {
              label: "Live Demo",
              url: "https://task-api-demo.herokuapp.com",
            },
          ],
          image: "/projects/taskmanager.svg",
        },
        {
          title: "Blog API with CMS",
          description:
            "A full-featured blogging platform API with content management, media handling, and SEO optimization features.",
          highlights: [
            "Built RESTful endpoints with pagination and filtering",
            "Implemented file upload system with image optimization",
            "Added full-text search using PostgreSQL",
          ],
          techStack: ["Node.js", "Express", "PostgreSQL", "AWS S3", "Jest"],
          links: [
            {
              label: "GitHub",
              url: "https://github.com/xjarifx/blog-api",
            },
            {
              label: "API Docs",
              url: "https://blog-api-docs.vercel.app",
            },
          ],
          image: "/projects/blog.svg",
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
          title: "Building Scalable REST APIs with Node.js and PostgreSQL",
          summary:
            "A comprehensive guide to designing and implementing production-ready REST APIs with proper error handling, validation, and database optimization techniques.",
          date: "2026-01-15",
          url: "https://dev.to/xjarifx/scalable-rest-apis",
          tags: ["Node.js", "PostgreSQL", "API Design", "Backend"],
          image: "/articles/rest-api.svg",
        },
        {
          title: "Understanding JWT Authentication: Best Practices",
          summary:
            "Deep dive into JWT-based authentication, covering token storage, refresh token rotation, and security considerations for modern web applications.",
          date: "2025-12-20",
          url: "https://medium.com/@xjarifx/jwt-authentication",
          tags: ["Security", "Authentication", "JWT", "Backend"],
          image: "/articles/jwt.svg",
        },
        {
          title: "Database Indexing Strategies for Better Performance",
          summary:
            "Learn how to optimize database queries using proper indexing strategies, with practical examples and performance benchmarks.",
          date: "2025-11-10",
          url: "https://hashnode.com/@xjarifx/database-indexing",
          tags: ["Database", "PostgreSQL", "Performance", "SQL"],
          image: "/articles/database.svg",
        },
        {
          title: "Building a Rate Limiter with Redis",
          summary:
            "Step-by-step guide to implementing a distributed rate limiting system using Redis to protect your APIs from abuse.",
          date: "2025-10-05",
          url: "https://dev.to/xjarifx/rate-limiter-redis",
          tags: ["Redis", "Node.js", "API Security", "Backend"],
          image: "/articles/redis.svg",
        },
      ],
    },

    // ========== CERTIFICATIONS SECTION ==========
    // Type: 'certification' - Professional certifications and courses
    // Structure: List of certifications with name, issuer, date, credential URL, and skills
    {
      id: "certifications",
      type: "certification",
      title: "Certifications",
      items: [
        {
          name: "AWS Certified Solutions Architect – Associate",
          issuer: "Amazon Web Services",
          date: "Jan 2026",
          description:
            "Validated expertise in designing distributed systems on AWS with focus on security, reliability, and cost optimization.",
          credentialId: "AWS-ASA-123456",
          credentialUrl: "https://aws.amazon.com/verification",
          skills: ["AWS", "Cloud Architecture", "EC2", "S3", "RDS", "Lambda"],
        },
        {
          name: "Node.js Application Developer Certification",
          issuer: "OpenJS Foundation",
          date: "Oct 2025",
          description:
            "Demonstrated proficiency in Node.js core concepts, asynchronous programming, and building production-grade applications.",
          credentialId: "JSNAD-789012",
          credentialUrl: "https://openjsf.org/certification",
          skills: [
            "Node.js",
            "Express",
            "Async/Await",
            "Event Loop",
            "Streams",
          ],
        },
        {
          name: "MongoDB Certified Developer Associate",
          issuer: "MongoDB University",
          date: "Aug 2025",
          description:
            "Certified in MongoDB fundamentals including data modeling, aggregation framework, and performance optimization.",
          credentialId: "MDB-DEV-345678",
          credentialUrl: "https://university.mongodb.com/certification",
          skills: [
            "MongoDB",
            "NoSQL",
            "Aggregation",
            "Indexing",
            "Data Modeling",
          ],
        },
        {
          name: "Docker Certified Associate",
          issuer: "Mirantis",
          date: "Jun 2025",
          description:
            "Validated skills in containerization, orchestration, and deploying applications using Docker and Docker Compose.",
          credentialId: "DCA-901234",
          credentialUrl: "https://www.mirantis.com/certification",
          skills: [
            "Docker",
            "Containerization",
            "Docker Compose",
            "Networking",
            "Volumes",
          ],
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
