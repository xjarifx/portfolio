/**
 * Section type constants
 * Defines all available section types in the portfolio
 */
export const SECTION_TYPES = {
  TEXT: 'text',
  PROJECT: 'project',
  ARTICLE: 'article',
  CERTIFICATION: 'certification',
  EDUCATION: 'education',
};

/**
 * Check if a section type is valid
 */
export const isValidSectionType = (type) => {
  return Object.values(SECTION_TYPES).includes(type);
};
