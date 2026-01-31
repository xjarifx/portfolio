function About() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">About Me</h1>

      <div className="space-y-6 text-gray-600">
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Introduction
          </h2>
          <p className="leading-relaxed">
            I'm a fresher backend developer passionate about building robust
            server-side applications. I enjoy solving complex problems,
            designing database schemas, and creating efficient APIs that power
            modern web applications.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Backend Technologies I'm Learning
          </h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Node.js and Express.js for building RESTful APIs</li>
            <li>PostgreSQL and MongoDB for database management</li>
            <li>JWT authentication and authorization</li>
            <li>API design patterns and best practices</li>
            <li>Database optimization and query performance</li>
            <li>Git version control and collaborative development</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Career Goals
          </h2>
          <p className="leading-relaxed">
            I'm seeking an entry-level backend developer position where I can
            contribute to building scalable systems and continue learning from
            experienced engineers. I'm particularly interested in roles that
            involve API development, database design, and backend architecture.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Beyond Code
          </h2>
          <p className="leading-relaxed">
            When I'm not coding, I enjoy reading technical blogs, exploring new
            backend frameworks, and contributing to open-source projects. I
            believe in continuous learning and staying updated with the latest
            backend development trends.
          </p>
        </section>
      </div>
    </div>
  );
}

export default About;
