import { portfolio } from "../data/portfolio";
import { theme } from "../config/theme";
import { config } from "../config/app";

/**
 * Custom hook to extract and provide portfolio data
 * Centralizes all data access from the portfolio.js file
 * Allows for future API integration without affecting components
 */
export const usePortfolioData = () => {
  const { metadata, sections } = portfolio;

  return {
    metadata,
    theme,
    sections,
    config,
  };
};

/**
 * Hook to get a specific section by id
 */
export const useSectionById = (sectionId) => {
  const { sections } = usePortfolioData();
  return sections.find((section) => section.id === sectionId);
};

/**
 * Hook to get all sections of a specific type
 */
export const useSectionsByType = (type) => {
  const { sections } = usePortfolioData();
  return sections.filter((section) => section.type === type);
};
