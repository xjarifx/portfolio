import { skillsData } from "../data/skills";

function Skills() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-gray-900 mb-4">Skills</h1>
      <p className="text-gray-600 mb-12">
        Technologies and tools I use to build backend applications and APIs.
      </p>

      <div className="space-y-8">
        {Object.entries(skillsData).map(([category, skills]) => (
          <div key={category}>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              {category}
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {skills.map((skill, index) => (
                <div
                  key={index}
                  className="bg-gray-50 border border-gray-200 px-4 py-3 rounded text-center text-gray-600 hover:border-gray-900 transition-colors"
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
