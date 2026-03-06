import { usePortfolioData } from "../hooks/usePortfolioData";
import {
  useSmoothScroll,
  useActiveSection,
} from "../hooks/useInteractions";
import { Header } from "../components/layout/Header";
import { MainContent } from "../components/layout/MainContent";

/**
 * Home page component
 * Main entry point that composes all portfolio sections
 */
function Home() {
  const { metadata, theme, sections, config } = usePortfolioData();
  const { handleNavClick } = useSmoothScroll(
    config.smoothScroll.enabled,
    config.smoothScroll.behavior,
  );
  const activeSection = useActiveSection(
    config.observer.enabled,
    config.observer.thresholds,
    config.observer.rootMargin,
  );

  return (
    <div
      className={`min-h-screen ${theme.colors.background} ${theme.colors.text}`}
    >
      <div
        className={`mx-auto min-h-screen ${config.layout.maxWidth} px-4 py-8 sm:px-6 sm:py-10 md:px-12 md:py-16 lg:px-24 lg:py-0`}
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
