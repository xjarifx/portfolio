/**
 * TextSection component
 * Renders simple text/paragraph content
 */
export const TextSection = ({ content, theme }) => {
  return (
    <div>
      {content.map((paragraph, index) => (
        <p key={index} className="mb-4">
          {paragraph}
        </p>
      ))}
    </div>
  );
};
