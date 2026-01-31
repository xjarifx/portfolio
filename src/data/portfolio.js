/**
 * PORTFOLIO CONFIGURATION - SINGLE SOURCE OF TRUTH
 *
 * This file is THE ONLY data file needed. All frontend rendering is driven by this config.
 * The frontend components are completely dumb - they only read this data and render accordingly.
 *
 * ARCHITECTURE:
 * - metadata: Personal information and global settings
 * - theme: Design tokens (colors, fonts, spacing)
 * - sections: Array of sections (about, experience, projects, etc.)
 * - Each section is self-contained and describes how to render itself
 *
 * ADDING/REMOVING CONTENT:
 * 1. To add a new section: Add object to sections array with proper type
 * 2. To remove a section: Remove from sections array
 * 3. To add experience/project: Push to the appropriate section's items
 * 4. Frontend will automatically render everything correctly
 *
 * SECTION TYPES:
 * - 'text': Simple paragraph text (About section)
 * - 'experience': Work history with achievements (Experience section)
 * - 'project': Portfolio projects with highlights (Projects section)
 * - 'skill': Skills organized by category
 * - Custom types can be added following the same pattern
 */

export const portfolio = {
  // ============================================================
  // METADATA: Personal information and navigation config
  // ============================================================
  metadata: {
    name: "Your Name",
    title: "Backend Developer",
    tagline: "I build scalable, robust backend systems and APIs for the web.",

    // Social links - displayed in sidebar footer
    social: {
      github: "https://github.com/yourusername",
      linkedin: "https://linkedin.com/in/yourprofile",
    },

    // Contact information
    contact: {
      email: "your.email@example.com",
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
      sectionTitle: "text-sm font-bold uppercase tracking-widest",
      heading: "text-4xl font-bold tracking-tight sm:text-5xl",
      subheading: "text-lg font-medium tracking-tight sm:text-xl",
      body: "text-base leading-normal",
      small: "text-xs",
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
        "I'm a backend developer with a specialty in building RESTful APIs, designing database schemas, and creating server-side applications. I enjoy working at the intersection of performance and scalability, where clean architecture meets efficient code.",
        "Currently, I'm learning and building projects with Node.js, Express, PostgreSQL, and exploring microservices architecture. In this journey, I focus on API design, database optimization, and backend patterns, partnering closely with frontend developers to ensure seamless integration.",
        "Previously, I've worked on various backend projects ranging from task management systems to e-commerce platforms, including REST APIs, authentication systems, and database design. These experiences have shaped how I think about building systems that are both well-crafted and scalable.",
      ],
    },

    // ========== EXPERIENCE SECTION ==========
    // Type: 'experience' - Work history with achievements
    // Structure: List of jobs with period, title, company, description, achievements, technologies
    // Frontend renders as: Job card with timeline + tech badges + achievements bullets
    {
      id: "experience",
      type: "experience",
      title: "Experience",
      items: [
        {
          period: "2024 — PRESENT",
          title: "Backend Developer",
          company: "Your Company",
          companyUrl: "https://yourcompany.com",
          description:
            "Build and maintain backend services and APIs used across multiple products. Work closely with cross-functional teams, including developers, designers, and product managers, to implement and advocate for best practices in API design, database optimization, and system architecture.",
          achievements: [
            "Improved API response time by 40% through query optimization and caching strategies",
            "Led migration of monolithic architecture to microservices, reducing deployment time by 60%",
            "Mentored 3 junior developers on backend best practices and code review processes",
          ],
          technologies: ["Node.js", "Express", "PostgreSQL", "Redis", "Docker"],
        },
        {
          period: "2023 — 2024",
          title: "Junior Backend Developer",
          company: "Another Company",
          companyUrl: "https://anothercompany.com",
          description:
            "Developed and maintained RESTful APIs, database schemas, and server-side logic for various client projects. Collaborated with frontend developers to ensure seamless integration and optimal performance.",
          achievements: [
            "Designed and implemented authentication system serving 10,000+ daily active users",
            "Reduced database query time by 30% through indexing and query refactoring",
            "Created comprehensive API documentation using Swagger/OpenAPI specifications",
          ],
          technologies: ["Node.js", "MongoDB", "Express", "JWT", "REST APIs"],
        },
        {
          period: "2022 — 2023",
          title: "Backend Intern",
          company: "Startup Inc",
          companyUrl: "https://startup.com",
          description:
            "Assisted in building backend features for a SaaS platform. Implemented authentication systems, designed database schemas, and wrote API documentation.",
          achievements: [
            "Developed automated testing suite achieving 85% code coverage",
            "Built real-time notification system using WebSockets",
            "Contributed to open-source Django packages used by the company",
          ],
          technologies: ["Python", "Django", "PostgreSQL", "Redis"],
        },
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
          title: "Task Management API",
          description:
            "A RESTful API for managing tasks with user authentication and CRUD operations. Features include JWT authentication, role-based access control, and pagination.",
          highlights: [
            "Implemented rate limiting to prevent API abuse (100 requests/15min per user)",
            "Added real-time task updates using WebSocket connections",
            "Achieved 95% test coverage with integration and unit tests",
          ],
          techStack: [
            "Node.js",
            "Express",
            "PostgreSQL",
            "JWT",
            "WebSocket",
            "Jest",
          ],
          githubUrl: "https://github.com/yourusername/task-api",
          image: "/projects/task-api.png",
        },
        {
          title: "E-commerce Backend",
          description:
            "Backend system for an e-commerce platform with product and order management. Includes shopping cart, order processing, and admin dashboard endpoints.",
          highlights: [
            "Processed 1000+ concurrent orders with zero downtime during peak hours",
            "Implemented payment gateway integration with Stripe",
            "Built inventory management system with low-stock alerts",
          ],
          techStack: [
            "Node.js",
            "Express",
            "MongoDB",
            "Mongoose",
            "Stripe",
            "Redis",
          ],
          githubUrl: "https://github.com/yourusername/ecommerce-backend",
          image: "/projects/ecommerce.png",
        },
        {
          title: "Blog API with CMS",
          description:
            "A content management system API for creating and managing blog posts. Features Redis caching for improved performance and rate limiting for security.",
          highlights: [
            "Reduced response time by 70% using Redis caching strategy",
            "Implemented full-text search with PostgreSQL trigram indexes",
            "Added automated image optimization and CDN integration",
          ],
          techStack: ["Node.js", "Express", "PostgreSQL", "Redis", "AWS S3"],
          githubUrl: "https://github.com/yourusername/blog-api",
          image: "/projects/blog-api.png",
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
    // Navigation: automatically generated from sections array
    // Frontend will create nav items for each section with id and title
    navigation: {
      // Position: "sticky" (left sidebar) or "scroll" (top bar)
      position: "sticky",
      // Sticky position on desktop
      sticky: true,
    },

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
      sidebarWidth: "lg:w-1/2",
      contentWidth: "lg:w-1/2",
    },

    // Show/hide elements
    display: {
      showSocialLinks: true,
      showSpotlight: true,
      showSectionHeaders: true,
    },
  },
};

/**
 * USAGE GUIDE FOR MAINTAINING THIS FILE
 * =====================================
 *
 * 1. UPDATING PERSONAL INFO:
 *    - Edit metadata.name, metadata.title, metadata.tagline
 *    - Update social links in metadata.social
 *
 * 2. ADDING A NEW EXPERIENCE ENTRY:
 *    - Find the experience section (id: "experience")
 *    - Push new object to items array:
 *    {
 *      period: "2025 — PRESENT",
 *      title: "Senior Developer",
 *      company: "Company Name",
 *      companyUrl: "https://...",
 *      description: "...",
 *      achievements: ["...", "..."],
 *      technologies: ["Tech1", "Tech2"]
 *    }
 *
 * 3. ADDING A NEW PROJECT:
 *    - Find projects section (id: "projects")
 *    - Push new object to items array (same structure as existing projects)
 *
 * 4. REMOVING A SECTION:
 *    - Delete the entire section object from sections array
 *    - Frontend automatically updates navigation and removes the section
 *
 * 5. CHANGING THEME:
 *    - Update colors in theme.colors object
 *    - All Tailwind class names - update them globally and site updates everywhere
 *    Example: Change "bg-slate-900" to "bg-gray-900" throughout theme.colors
 *
 * 6. CHANGING LAYOUT:
 *    - Update config.layout properties
 *    - Modify theme.spacing for gaps and margins
 *
 * 7. TOGGLING FEATURES:
 *    - Disable spotlight: config.display.showSpotlight = false
 *    - Disable smooth scroll: config.smoothScroll.enabled = false
 *    - Hide social: config.display.showSocialLinks = false
 *
 * SECTION TYPES REFERENCE:
 * ========================
 *
 * TYPE: 'text'
 * - Used for: About section, general paragraphs
 * - Content: Array of strings (each string = one paragraph)
 * - Frontend renders: Simple text blocks with margin
 *
 * TYPE: 'experience'
 * - Used for: Work history
 * - Content: Array of job objects with period, title, company, description, achievements, technologies
 * - Frontend renders: Card with timeline indicator, company link, tech badges, achievement bullets
 *
 * TYPE: 'project'
 * - Used for: Portfolio projects
 * - Content: Array of project objects with title, description, highlights, techStack, githubUrl, image
 * - Frontend renders: Card with optional image, tech badges, highlight bullets, GitHub link
 *
 * NOTE: Adding new section types requires updating Home.jsx with a renderer
 * for that type, but the data structure remains the same!
 */
