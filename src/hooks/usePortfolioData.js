import { useMemo } from "react";
import { theme } from "../config/theme";
import { config } from "../config/app";
import { getPortfolioData } from "../services";

/**
 * Hook to extract and provide portfolio data
 */
export const usePortfolioData = () => {
  return useMemo(() => {
    const { metadata, sections } = getPortfolioData();
    return { metadata, theme, sections, config };
  }, []);
};
