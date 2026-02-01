/**
 * Theme Configuration
 * Design tokens and styling constants for the portfolio
 * These are Tailwind class references - update here to change global look
 * All components use these tokens, so one change updates everywhere
 */
export const theme = {
  colors: {
    background: "bg-slate-900",
    text: "text-slate-400",
    textPrimary: "text-slate-200",
    textMuted: "text-slate-500",
    accent: "text-teal-300",
    accentBg: "bg-teal-400/10",
    line: "bg-slate-600",
    lineActive: "bg-slate-200",
    hoverOverlay: "lg:group-hover:bg-slate-800/50",
  },
  spacing: {
    sectionGap: "lg:mb-36 md:mb-24 mb-16",
    itemGap: "mb-12",
    contentGap: "mt-2",
  },
  typography: {
    heading: "text-4xl font-bold tracking-tight sm:text-5xl",
    subheading: "text-lg font-medium tracking-tight sm:text-xl",
    label: "text-xs font-bold uppercase tracking-widest",
  },
};
