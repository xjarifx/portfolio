/**
 * Application Configuration
 */
export const config = {
  smoothScroll: {
    enabled: true,
    behavior: "smooth",
    block: "start",
  },

  observer: {
    enabled: true,
    thresholds: [0, 0.25, 0.5, 0.75, 1],
    rootMargin: "-10% 0px -50% 0px",
  },

  // Layout configuration
  layout: {
    maxWidth: "max-w-screen-xl",
  },

  // Show/hide elements
  display: {
    showSocialLinks: true,
    showSectionHeaders: true,
  },
};
