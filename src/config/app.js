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
    // Multiple thresholds for fine-grained intersection detection
    thresholds: [0, 0.1, 0.25, 0.5, 0.75, 1],
    // Top margin: -10% ensures section needs to be past header
    // Bottom margin: -35% focuses on sections in upper portion of viewport
    rootMargin: "-10% 0px -35% 0px",
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
