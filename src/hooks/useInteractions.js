import { useState, useEffect, useCallback } from "react";

/**
 * Hook to manage smooth scrolling behavior
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
 * Hook to set up Intersection Observer for active section detection
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

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries.reduce(
          (max, entry) =>
            entry.intersectionRatio > (max?.intersectionRatio || 0)
              ? entry
              : max,
          null,
        );

        if (visibleEntry && visibleEntry.isIntersecting) {
          setActiveSection(visibleEntry.target.id);
        }
      },
      {
        threshold: thresholds,
        rootMargin,
      },
    );

    sectionElements.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, [enabled, thresholds, rootMargin]);

  return activeSection;
};
