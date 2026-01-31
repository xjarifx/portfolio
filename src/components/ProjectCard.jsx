function ProjectCard({ title, description, techStack, features, githubUrl }) {
  return (
    <div className="bg-gray-50 border border-gray-200 p-6 rounded-lg hover:shadow-md transition-shadow">
      <h3 className="text-xl font-semibold text-gray-900 mb-3">{title}</h3>

      <p className="text-gray-600 mb-4">{description}</p>

      <div className="mb-4">
        <h4 className="text-sm font-semibold text-gray-900 mb-2">Tech Stack</h4>
        <div className="flex flex-wrap gap-2">
          {techStack.map((tech, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-white border border-gray-300 text-sm text-gray-600 rounded"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      <div className="mb-4">
        <h4 className="text-sm font-semibold text-gray-900 mb-2">
          Key Features
        </h4>
        <ul className="list-disc list-inside text-gray-600 text-sm space-y-1">
          {features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
      </div>

      <a
        href={githubUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block mt-4 px-4 py-2 bg-gray-900 text-white hover:bg-gray-700 transition-colors rounded"
      >
        View on GitHub
      </a>
    </div>
  );
}

export default ProjectCard;
