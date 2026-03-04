/**
 * Portfolio data service
 * Handles data fetching and transformation logic
 */
import { portfolio } from '../data/portfolio';
import { SECTION_TYPES } from '../constants';

/**
 * Get all portfolio data
 */
export const getPortfolioData = () => {
  return portfolio;
};

/**
 * Get metadata
 */
export const getMetadata = () => {
  return portfolio.metadata;
};

/**
 * Get all sections
 */
export const getSections = () => {
  return portfolio.sections;
};

/**
 * Get section by ID
 */
export const getSectionById = (sectionId) => {
  return portfolio.sections.find((section) => section.id === sectionId);
};

/**
 * Get sections by type
 */
export const getSectionsByType = (type) => {
  return portfolio.sections.filter((section) => section.type === type);
};

/**
 * Get navigation items from sections
 */
export const getNavigationItems = () => {
  return portfolio.sections.map((section) => ({
    id: section.id,
    title: section.title,
  }));
};

/**
 * Validate section structure
 */
export const validateSection = (section) => {
  if (!section.id || !section.type || !section.title) {
    console.warn('Invalid section structure:', section);
    return false;
  }
  return true;
};
