import PropTypes from "prop-types";

/**
 * TextSection component
 */
export const TextSection = ({ content }) => (
  <div>
    {content.map((paragraph, index) => (
      <p key={index} className="mb-4 text-base leading-relaxed">
        {paragraph}
      </p>
    ))}
  </div>
);

TextSection.propTypes = {
  content: PropTypes.arrayOf(PropTypes.string).isRequired,
};
