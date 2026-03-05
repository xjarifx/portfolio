/**
 * Theme Configuration
 * Light theme: purple accent, neutral (black, white, gray). No gradients.
 * Design tokens for the portfolio — components use these for consistent look.
 */
export const theme = {
  colors: {
    background: "bg-white",
    text: "text-gray-600",
    textPrimary: "text-gray-900",
    textMuted: "text-gray-500",
    accent: "text-purple-600",
    accentHover: "hover:text-purple-700",
    accentBg: "bg-purple-50",
    accentBorder: "border-purple-200",
    line: "bg-gray-300",
    lineActive: "bg-purple-600",
    surface: "bg-gray-50",
    surfaceHover: "hover:bg-gray-100",
    border: "border-gray-200",
    borderMuted: "border-gray-100",
  },
  spacing: {
    sectionGap: "mb-12 sm:mb-16 md:mb-20 lg:mb-24",
    itemGap: "mb-8 sm:mb-10",
    contentGap: "mt-2",
  },
  typography: {
    heading: "text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl md:text-5xl",
    subheading: "text-lg font-medium tracking-tight text-gray-900 sm:text-xl",
    label: "text-xs font-semibold uppercase tracking-widest text-gray-500",
  },
};
