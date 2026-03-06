/**
 * Shared PropTypes definitions
 */
import PropTypes from "prop-types";

export const ThemePropType = PropTypes.shape({
  colors: PropTypes.object.isRequired,
  spacing: PropTypes.object.isRequired,
  typography: PropTypes.object.isRequired,
});

export const ProjectPropType = PropTypes.shape({
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  highlights: PropTypes.arrayOf(PropTypes.string),
  techStack: PropTypes.arrayOf(PropTypes.string).isRequired,
  links: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    })
  ),
  image: PropTypes.string,
});

export const ArticlePropType = PropTypes.shape({
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(PropTypes.string),
});

export const CertificationPropType = PropTypes.shape({
  name: PropTypes.string.isRequired,
  issuer: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  description: PropTypes.string,
  credentialUrl: PropTypes.string,
  skills: PropTypes.arrayOf(PropTypes.string),
});
