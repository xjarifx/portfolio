import { BlobProvider } from "@react-pdf/renderer";
import { ResumeDocument } from "./ResumeDocument";

/**
 * Resume button that generates PDF from portfolio data and opens it in a new tab
 */
export const ResumeButton = ({ metadata, sections, className }) => {
  return (
    <BlobProvider
      document={<ResumeDocument metadata={metadata} sections={sections} />}
    >
      {({ url, loading }) => (
        <a
          href={url || "#"}
          target="_blank"
          rel="noreferrer noopener"
          className={className}
          aria-label="View resume (opens PDF in new tab)"
          onClick={(e) => {
            if (loading || !url) {
              e.preventDefault();
            }
          }}
          style={{ pointerEvents: loading ? "none" : "auto" }}
        >
          {loading ? "Generating…" : "Resume"}
        </a>
      )}
    </BlobProvider>
  );
};
