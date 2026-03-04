import PropTypes from 'prop-types';
import { Card } from "../ui";
import { ThemePropType } from "../../types";

/**
 * EducationSection component
 * Renders education items with glass effect styling
 */
export const EducationSection = ({ content }) => {
  return (
    <div className="group/list">
      <Card>
        <div className="relative z-10 space-y-1">
          {content.map((line, index) => (
            <p key={`education-${index}`} className="text-sm leading-relaxed">
              {line}
            </p>
          ))}
        </div>
      </Card>
    </div>
  );
};

EducationSection.propTypes = {
  content: PropTypes.arrayOf(PropTypes.string).isRequired,
  theme: ThemePropType.isRequired,
};
