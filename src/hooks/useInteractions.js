import { useState, useEffect, useCallback } from "react";

/**
 * Hook to manage smooth scrolling behavior
 * Handles navigation clicks and scrolls to target sections
 */
export const useSmoothScroll = (enabled = true, behavior = "smooth") => {
  const handleNavClick = useCallback(
    (e, targetId) => {
      e.preventDefault();
      const element = document.getElementById(targetId);
      if (element && enabled) {
        element.scrollIntoView({
          behavior,
          block: "start",
        });
      }
    },
    [enabled, behavior],
  );

  return { handleNavClick };
};

/**
 * Hook to detect which section is currently active in the viewport
 * Uses Intersection Observer API for efficient scroll tracking
 */
export const useActiveSection = (
  enabled = true,
  thresholds = [0, 0.25, 0.5, 0.75, 1],
  rootMargin = "-10% 0px -50% 0px",
) => {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    if (!enabled) return;

    const sectionElements = document.querySelectorAll("section[id]");
    if (sectionElements.length === 0) return;

    // Track all currently visible sections with their intersection data
    const visibleSections = new Map();

    const observer = new IntersectionObserver(
      (entries) => {
        // Update the map with current intersection states
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            visibleSections.set(entry.target.id, {
              element: entry.target,
              ratio: entry.intersectionRatio,
              top: entry.boundingClientRect.top,
              bottom: entry.boundingClientRect.bottom,
            });
          } else {
            visibleSections.delete(entry.target.id);
          }
        });

        // If no sections are visible, don't update
        if (visibleSections.size === 0) return;

        // Convert map to array for processing
        const visibleArray = Array.from(visibleSections.entries());

        // Find the section that should be considered "active"
        // Priority logic:
        // 1. Section closest to the top of viewport (but still visible)
        // 2. If multiple sections at top, prefer the one with higher intersection ratio
        let activeEntry = visibleArray[0];
        let minDistance = Math.abs(visibleArray[0][1].top);

        for (let i = 1; i < visibleArray.length; i++) {
          const [id, data] = visibleArray[i];
          const distance = Math.abs(data.top);

          // If this section is closer to the top of viewport
          if (distance < minDistance) {
            activeEntry = visibleArray[i];
            minDistance = distance;
          } 
          // If same distance, prefer higher intersection ratio
          else if (distance === minDistance && data.ratio > activeEntry[1].ratio) {
            activeEntry = visibleArray[i];
          }
        }

        // Update active section if it changed
        const newActiveId = activeEntry[0];
        setActiveSection((prev) => (prev !== newActiveId ? newActiveId : prev));
      },
      {
        threshold: thresholds,
        rootMargin,
      },
    );

    // Observe all sections
    sectionElements.forEach((section) => observer.observe(section));

    // Cleanup
    return () => {
      observer.disconnect();
      visibleSections.clear();
    };
  }, [enabled, thresholds, rootMargin]);

  return activeSection;
};
