import PropTypes from 'prop-types';
import { ThemePropType } from "../../types";

/**
 * TextSection component
 * Renders simple text/paragraph content
 */
export const TextSection = ({ content }) => {
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

TextSection.propTypes = {
  content: PropTypes.arrayOf(PropTypes.string).isRequired,
  theme: ThemePropType.isRequired,
};
