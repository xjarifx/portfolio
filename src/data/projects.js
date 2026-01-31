export const projects = [
  {
    title: "Task Management API",
    description:
      "A RESTful API for managing tasks with user authentication and CRUD operations. Features include JWT authentication, role-based access control, and pagination.",
    techStack: ["Node.js", "Express", "PostgreSQL", "JWT"],
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
    techStack: ["Node.js", "Express", "MongoDB", "Mongoose"],
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
    techStack: ["Node.js", "Express", "PostgreSQL", "Redis"],
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
