import { personalInfo } from "../data/personalInfo";

function Contact() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-gray-900 mb-4">Contact</h1>
      <p className="text-gray-600 mb-12">
        I'm open to backend developer opportunities and collaborations. Feel
        free to reach out!
      </p>

      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Get In Touch
          </h2>
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <span className="text-gray-500 font-semibold">Email:</span>
              <a
                href={`mailto:${personalInfo.email}`}
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                {personalInfo.email}
              </a>
            </div>
            <div className="flex items-center space-x-3">
              <span className="text-gray-500 font-semibold">GitHub:</span>
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                {personalInfo.github.replace("https://", "")}
              </a>
            </div>
            <div className="flex items-center space-x-3">
              <span className="text-gray-500 font-semibold">LinkedIn:</span>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                {personalInfo.linkedin.replace("https://", "")}
              </a>
            </div>
          </div>
        </section>

        <section className="bg-gray-50 border border-gray-200 p-8 rounded-lg">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Send a Message
          </h2>
          <p className="text-sm text-gray-500 mb-6">
            Note: This is a frontend-only form. No backend processing is
            implemented.
          </p>
          <form className="space-y-4">
            <div>
              <label
                htmlFor="name"
                className="block text-gray-600 font-medium mb-2"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-gray-900"
                placeholder="Your name"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-gray-600 font-medium mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-gray-900"
                placeholder="your.email@example.com"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-gray-600 font-medium mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                rows="5"
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-gray-900"
                placeholder="Your message..."
              ></textarea>
            </div>
            <button
              type="button"
              onClick={() =>
                alert("This is a demo form. No backend is connected.")
              }
              className="w-full px-6 py-3 bg-gray-900 text-white hover:bg-gray-700 transition-colors rounded"
            >
              Send Message
            </button>
          </form>
        </section>
      </div>
    </div>
  );
}

export default Contact;
