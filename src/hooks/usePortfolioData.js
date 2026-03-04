import { useMemo } from "react";
import { theme } from "../config/theme";
import { config } from "../config/app";
import {
  getPortfolioData,
  getSectionById,
  getSectionsByType,
} from "../services";

/**
 * Custom hook to extract and provide portfolio data
 * Centralizes all data access from the portfolio.js file
 * Allows for future API integration without affecting components
 */
export const usePortfolioData = () => {
  return useMemo(() => {
    const { metadata, sections } = getPortfolioData();
    return {
      metadata,
      theme,
      sections,
      config,
    };
  }, []);
};

/**
 * Hook to get a specific section by id
 */
export const useSectionById = (sectionId) => {
  return useMemo(() => getSectionById(sectionId), [sectionId]);
};

/**
 * Hook to get all sections of a specific type
 */
export const useSectionsByType = (type) => {
  return useMemo(() => getSectionsByType(type), [type]);
};
