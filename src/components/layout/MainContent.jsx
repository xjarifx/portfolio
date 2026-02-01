import { SectionHeader } from "../ui/SectionHeader";
import { TextSection } from "../sections/TextSection";
import { ProjectSection } from "../sections/ProjectSection";
import { ArticleSection } from "../sections/ArticleSection";
import { CertificationSection } from "../sections/CertificationSection";

/**
 * MainContent component
 * Renders all sections dynamically based on section type
 */
export const MainContent = ({ sections, theme, config }) => {
  /**
   * Render section based on type
   */
  const renderSectionContent = (section) => {
    switch (section.type) {
      case "text":
        return <TextSection content={section.content} theme={theme} />;
      case "project":
        return <ProjectSection items={section.items} theme={theme} />;
      case "article":
        return <ArticleSection items={section.items} theme={theme} />;
      case "certification":
        return <CertificationSection items={section.items} theme={theme} />;
      default:
        return null;
    }
  };

  return (
    <main className="pt-24 lg:w-1/2 lg:py-24">
      {sections.map((section) => (
        <section
          key={section.id}
          id={section.id}
          className={`${theme.spacing.sectionGap} scroll-mt-16 lg:scroll-mt-24`}
        >
          <SectionHeader
            title={section.title}
            theme={theme}
            show={config.display.showSectionHeaders}
          />
          {renderSectionContent(section)}
        </section>
      ))}

      {/* Attribution Footer */}
      <footer className="mt-24 pt-8 border-t border-slate-700/50">
        <p className={`text-xs ${theme.colors.textMuted}`}>
          Design inspired by{" "}
          <a
            className={`font-medium ${theme.colors.textPrimary} hover:${theme.colors.accent} transition-colors`}
            href="https://brittanychiang.com"
            target="_blank"
            rel="noreferrer noopener"
          >
            Brittany Chiang
          </a>
          .
        </p>
      </footer>
    </main>
  );
};
