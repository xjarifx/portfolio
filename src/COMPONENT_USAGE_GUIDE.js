/**
 * COMPONENT USAGE GUIDE
 * =====================
 *
 * This guide shows how to use the refactored components
 * in the portfolio application.
 */

// ============================================================
// 1. HOOKS - Data & Interaction Logic
// ============================================================

/**
 * usePortfolioData()
 * Extracts all data from data/portfolio.js
 */
import {
  usePortfolioData,
  useSectionById,
  useSectionsByType,
} from "../hooks/usePortfolioData";

function MyComponent() {
  const { metadata, theme, sections, config } = usePortfolioData();
  // Now you have all portfolio data without importing from data/portfolio.js directly
}

/**
 * useEmailCopy(email)
 * Handles email copy to clipboard
 */
import { useEmailCopy } from "../hooks/useEmailCopy";

function EmailButton() {
  const { emailCopied, handleCopyEmail } = useEmailCopy("email@example.com");
  return <button onClick={handleCopyEmail}>Copy {emailCopied && "✓"}</button>;
}

/**
 * useMouseTracking(enabled)
 * Track mouse position for effects
 */
import {
  useMouseTracking,
  useSmoothScroll,
  useActiveSection,
} from "../hooks/useInteractions";

function EffectComponent() {
  const mousePos = useMouseTracking(true);
  return <div style={{ x: mousePos.x, y: mousePos.y }}>Following mouse</div>;
}

// ============================================================
// 2. UI COMPONENTS - Reusable Building Blocks
// ============================================================

/**
 * Button Component
 */
import { Button } from "../components/ui/Button";

<Button onClick={handleClick} variant="default" size="md">
  Click Me
</Button>;

// Variants: "default" | "accent"
// Sizes: "sm" | "md" | "lg"

/**
 * Badge Component
 */
import { Badge } from "../components/ui/Badge";

<Badge variant="accent">React</Badge>;
// Displays: [React] with accent styling

/**
 * ExternalLink Component
 */
import { ExternalLink } from "../components/ui/ExternalLink";

<ExternalLink href="https://example.com" label="Example">
  Visit Site
</ExternalLink>;
// Displays: "Visit Site →" with external link icon

/**
 * SectionHeader Component
 */
import { SectionHeader } from "../components/ui/SectionHeader";

<SectionHeader title="About" theme={theme} show={true} />;

// ============================================================
// 3. SECTION COMPONENTS - Content Renderers
// ============================================================

/**
 * TextSection
 * Renders simple text/paragraph content
 */
import { TextSection } from "../components/sections/TextSection";

const content = ["Paragraph 1", "Paragraph 2"];
<TextSection content={content} theme={theme} />;

/**
 * ExperienceSection
 * Renders job/experience items
 */
import { ExperienceSection } from "../components/sections/ExperienceSection";

const jobs = [
  {
    period: "2023 - Present",
    title: "Senior Dev",
    company: "TechCorp",
    companyUrl: "https://techcorp.com",
    description: "Building awesome stuff",
    achievements: ["Achievement 1", "Achievement 2"],
    technologies: ["React", "Node.js"],
  },
];
<ExperienceSection items={jobs} theme={theme} />;

/**
 * ProjectSection
 * Renders portfolio projects
 */
import { ProjectSection } from "../components/sections/ProjectSection";

const projects = [
  {
    title: "My Project",
    description: "A cool project",
    highlights: ["Feature 1", "Feature 2"],
    image: "/projects/demo.svg",
    links: [
      { label: "GitHub", url: "https://github.com/..." },
      { label: "Live", url: "https://demo.com" },
    ],
    techStack: ["React", "TypeScript"],
  },
];
<ProjectSection items={projects} theme={theme} />;

/**
 * ArticleSection
 * Renders articles/blog posts
 */
import { ArticleSection } from "../components/sections/ArticleSection";

const articles = [
  {
    title: "My Article",
    summary: "About this topic...",
    date: "2024-01-15",
    url: "https://blog.com/article",
    tags: ["Backend", "APIs"],
    image: "/articles/thumbnail.svg",
  },
];
<ArticleSection items={articles} theme={theme} />;

// ============================================================
// 4. LAYOUT COMPONENTS - Page Structure
// ============================================================

/**
 * Header
 * Left sidebar with metadata, navigation, social links
 */
import { Header } from "../components/layout/Header";

<Header
  metadata={metadata}
  theme={theme}
  sections={sections}
  activeSection="about"
  onNavClick={handleNavClick}
/>;

/**
 * MainContent
 * Renders sections dynamically based on type
 */
import { MainContent } from "../components/layout/MainContent";

<MainContent sections={sections} theme={theme} config={config} />;

/**
 * Spotlight
 * Mouse-tracking gradient background effect
 */
import { Spotlight } from "../components/layout/Spotlight";

<Spotlight
  enabled={true}
  position={{ x: 100, y: 200 }}
  color="rgba(29, 78, 216, 0.15)"
  size="600px"
/>;

// ============================================================
// 5. COMPLETE EXAMPLE - Using Everything Together
// ============================================================

import { Header } from "../components/layout/Header";
import { MainContent } from "../components/layout/MainContent";
import { Spotlight } from "../components/layout/Spotlight";
import { usePortfolioData } from "../hooks/usePortfolioData";
import {
  useMouseTracking,
  useSmoothScroll,
  useActiveSection,
} from "../hooks/useInteractions";

function MyPortfolio() {
  const { metadata, theme, sections, config } = usePortfolioData();
  const mousePosition = useMouseTracking(config.spotlight.enabled);
  const { handleNavClick } = useSmoothScroll(config.smoothScroll.enabled);
  const activeSection = useActiveSection(config.observer.enabled);

  return (
    <div className={`min-h-screen ${theme.colors.background}`}>
      <Spotlight
        enabled={config.spotlight.enabled}
        position={mousePosition}
        color={config.spotlight.color}
        size={config.spotlight.size}
      />

      <div className={`mx-auto ${config.layout.maxWidth}`}>
        <div className="lg:flex lg:justify-between">
          <Header
            metadata={metadata}
            theme={theme}
            sections={sections}
            activeSection={activeSection}
            onNavClick={handleNavClick}
          />
          <MainContent sections={sections} theme={theme} config={config} />
        </div>
      </div>
    </div>
  );
}

// ============================================================
// 6. BEST PRACTICES
// ============================================================

/**
 * DO:
 * ✅ Use hooks to extract data
 * ✅ Pass data as props to components
 * ✅ Create small, focused components
 * ✅ Use theme from portfolio.js for consistent styling
 * ✅ Keep components pure (same props = same output)
 *
 * DON'T:
 * ❌ Import from portfolio.js directly in components
 * ❌ Create large monolithic components
 * ❌ Hardcode data in components
 * ❌ Mix layout and content logic
 * ❌ Use inline styles instead of theme classes
 */

// ============================================================
// 7. ADDING NEW FEATURES
// ============================================================

/**
 * To add a new section type:
 *
 * 1. Create section component:
 *    src/components/sections/SkillsSection.jsx
 *
 * 2. Define data structure in portfolio.js:
 *    {
 *      id: "skills",
 *      type: "skill",
 *      title: "Skills",
 *      items: [...]
 *    }
 *
 * 3. Add case in MainContent.jsx renderSectionContent()
 *
 * 4. That's it! No other changes needed.
 */
