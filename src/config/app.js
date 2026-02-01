/**
 * Application Configuration
 * Frontend behavior and display rules
 */
export const config = {
  // Spotlight effect (mouse tracking background gradient)
  spotlight: {
    enabled: true,
    color: "rgba(29, 78, 216, 0.15)",
    size: "600px",
  },

  // Smooth scroll behavior
  smoothScroll: {
    enabled: true,
    behavior: "smooth",
    block: "start",
  },

  // Intersection Observer for active section highlighting
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
