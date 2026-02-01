import { useState } from "react";
import { usePortfolioData } from "../hooks/usePortfolioData";
import {
  useMouseTracking,
  useSmoothScroll,
  useActiveSection,
} from "../hooks/useInteractions";
import { Header } from "../components/layout/Header";
import { MainContent } from "../components/layout/MainContent";
import { Spotlight } from "../components/layout/Spotlight";

/**
 * Home page component
 * Main entry point that composes all portfolio sections
 * Uses hooks for data extraction and interaction handling
 */
function Home() {
  // Extract portfolio data from data layer
  const { metadata, theme, sections, config } = usePortfolioData();

  // Track mouse position for spotlight effect
  const mousePosition = useMouseTracking(config.spotlight.enabled);

  // Handle smooth scrolling on nav clicks
  const { handleNavClick } = useSmoothScroll(
    config.smoothScroll.enabled,
    config.smoothScroll.behavior,
  );

  // Detect active section via Intersection Observer
  const activeSection = useActiveSection(
    config.observer.enabled,
    config.observer.thresholds,
    config.observer.rootMargin,
  );

  return (
    <div
      className={`min-h-screen ${theme.colors.background} ${theme.colors.text}`}
    >
      {/* Spotlight effect - dynamically controlled */}
      <Spotlight
        enabled={config.spotlight.enabled}
        position={mousePosition}
        color={config.spotlight.color}
        size={config.spotlight.size}
      />

      <div
        className={`mx-auto min-h-screen ${config.layout.maxWidth} px-6 py-12 md:px-12 md:py-20 lg:px-24 lg:py-0`}
      >
        <div className="lg:flex lg:justify-between lg:gap-4">
          {/* Left Sidebar - Header */}
          <Header
            metadata={metadata}
            theme={theme}
            sections={sections}
            activeSection={activeSection}
            onNavClick={handleNavClick}
          />

          {/* Right Content - Dynamic Sections */}
          <MainContent sections={sections} theme={theme} config={config} />
        </div>
      </div>
    </div>
  );
}

export default Home;
