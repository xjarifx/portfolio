export const projects = [
  {
    title: "Task Management API",
    description:
      "A RESTful API for managing tasks with user authentication and CRUD operations. Features include JWT authentication, role-based access control, and pagination.",
    highlights: [
      "Implemented rate limiting to prevent API abuse (100 requests/15min per user)",
      "Added real-time task updates using WebSocket connections",
      "Achieved 95% test coverage with integration and unit tests",
    ],
    techStack: ["Node.js", "Express", "PostgreSQL", "JWT", "WebSocket", "Jest"],
    features: [
      "User registration and authentication with JWT",
      "CRUD operations for tasks",
      "Role-based access control",
      "Input validation and error handling",
      "Pagination and filtering",
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
    techStack: ["Node.js", "Express", "MongoDB", "Mongoose", "Stripe", "Redis"],
    features: [
      "Product catalog with search and filters",
      "Shopping cart functionality",
      "Order processing and tracking",
      "User authentication and profiles",
      "Admin dashboard endpoints",
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
    features: [
      "Post creation, editing, and deletion",
      "Comment system with moderation",
      "Category and tag management",
      "Redis caching for improved performance",
      "Rate limiting and security middleware",
    ],
    githubUrl: "https://github.com/yourusername/blog-api",
    image: "/projects/blog-api.png",
  },
];
