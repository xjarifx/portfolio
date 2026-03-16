/**
 * Resume button that links to a static PDF file
 */
export const ResumeButton = ({ className }) => {
  return (
    <a
      href="https://docs.google.com/document/d/1Is5jUhyEGggU1dsqlMcQj3Q3tldcAdldZ-xW4WpTKDk/edit?usp=sharing"
      target="_blank"
      rel="noreferrer noopener"
      className={className}
      aria-label="View resume (opens PDF in new tab)"
      title="Resume"
    >
      <span className="sr-only">Resume</span>
      <svg
        className="h-6 w-6"
        fill="currentColor"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6zM6 20V4h7v5h5v11H6zm2-6h8v2H8v-2zm0-4h8v2H8v-2zm0 8h5v2H8v-2z" />
      </svg>
    </a>
  );
};
