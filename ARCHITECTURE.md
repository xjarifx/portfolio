# Architecture Overview

## Component Hierarchy

```
Home.jsx (Main Entry Point)
│
├── Spotlight (Effect Layer)
│
├── Header (Layout)
│   ├── Profile Section
│   │   ├── Name, Title, Tagline
│   │   ├── Email Button (uses useEmailCopy)
│   │   └── Resume Download Button
│   │
│   ├── Navigation (uses useActiveSection, useSmoothScroll)
│   │   └── Section Links
│   │
│   └── Social Links
│
└── MainContent (Layout)
    └── [Dynamic Sections based on type]
        │
        ├── TextSection
        │   └── Content Paragraph
        │
        ├── ExperienceSection
        │   ├── ExperienceItem
        │   │   ├── Badge (tech)
        │   │   └── Achievement List
        │   └── ExperienceItem
        │
        ├── ProjectSection
        │   ├── ProjectItem
        │   │   ├── Image
        │   │   ├── ExternalLink (GitHub, Live, etc)
        │   │   └── Badge (techStack)
        │   └── ProjectItem
        │
        └── ArticleSection
            ├── ArticleItem
            │   ├── Image
            │   ├── SectionHeader
            │   └── Badge (tags)
            └── ArticleItem
```

## Data Flow

```
data/portfolio.js (Single Source of Truth)
        ↓
usePortfolioData() Hook
        ↓
Home.jsx Component
        ↓
    ┌───┴────────────────────────────┐
    ↓                                ↓
Header Layout                   MainContent Layout
    ├─ metadata                      ├─ sections
    ├─ theme                         ├─ theme
    ├─ sections                      └─ config
    └─ config
        ↓
    UI Components (reusable)
    ├─ Button
    ├─ Badge
    ├─ ExternalLink
    └─ SectionHeader
```

## Hook Dependencies

```
Home.jsx
├── usePortfolioData()
│   └── Extracts: metadata, theme, sections, config
│
├── useMouseTracking(enabled)
│   └── Returns: { x, y } position
│
├── useSmoothScroll(enabled, behavior)
│   └── Returns: handleNavClick function
│
└── useActiveSection(enabled, thresholds, rootMargin)
    └── Returns: activeSection id
```

## File Structure

```
src/
├── hooks/                    # Business Logic & State Management
│   ├── index.js
│   ├── usePortfolioData.js   ← Data extraction
│   ├── useEmailCopy.js       ← Email clipboard
│   └── useInteractions.js    ← Effects & observations
│
├── components/
│   ├── ui/                   # Atomic/Primitive UI
│   │   ├── index.js
│   │   ├── Button.jsx        ← 6 lines
│   │   ├── Badge.jsx         ← 10 lines
│   │   ├── ExternalLink.jsx  ← 27 lines
│   │   └── SectionHeader.jsx ← 12 lines
│   │
│   ├── sections/             # Domain-specific Components
│   │   ├── index.js
│   │   ├── TextSection.jsx        ← 10 lines
│   │   ├── ExperienceSection.jsx  ← 70 lines
│   │   ├── ProjectSection.jsx     ← 70 lines
│   │   └── ArticleSection.jsx     ← 90 lines
│   │
│   ├── layout/               # Page Layout Components
│   │   ├── index.js
│   │   ├── Header.jsx        ← 155 lines
│   │   ├── MainContent.jsx   ← 40 lines
│   │   └── Spotlight.jsx     ← 12 lines
│   │
│   └── YourComponent.jsx     ← For custom additions
│
├── pages/
│   └── Home.jsx              ← REFACTORED: 68 lines ✨
│
└── data/
    └── portfolio.js          ← UNCHANGED: Your data source
```

## Lines of Code Reduction

```
Before:  Home.jsx (642 lines) - All logic in one file
After:   Home.jsx (68 lines)  - Pure composition ✨
         + 10 New Focused Components
         + 3 Custom Hooks
         = Better, Modular Codebase

Code is now:
✅ Testable (components are pure functions)
✅ Reusable (UI components can be used anywhere)
✅ Scalable (easy to add new features)
✅ Maintainable (clear separation of concerns)
✅ Documented (JSDoc comments everywhere)
```

## Props Interfaces

### Header Component

```javascript
<Header
  metadata={{
    name: string,
    title: string,
    tagline: string,
    email: string,
    social: { github?: string, linkedin?: string }
  }}
  theme={object}        // From portfolio.js
  sections={array}      // Section definitions
  activeSection={string} // Current section ID
  onNavClick={function}  // Navigation handler
/>
```

### MainContent Component

```javascript
<MainContent
  sections={array} // Section data
  theme={object} // Theme config
  config={object} // Global config
/>
```

### Section Components

```javascript
<TextSection content={string[]} theme={object} />

<ExperienceSection items={ExperienceItem[]} theme={object} />

<ProjectSection items={ProjectItem[]} theme={object} />

<ArticleSection items={ArticleItem[]} theme={object} />
```

### UI Components

```javascript
<Button variant="default"|"accent" size="sm"|"md"|"lg" />

<Badge variant="accent"|"default" />

<ExternalLink href={string} label={string} showIcon={boolean} />

<SectionHeader title={string} theme={object} show={boolean} />
```

## Import Patterns

### Before (Monolithic)

```javascript
import { portfolio } from "../data/portfolio";
// Everything imported, mixed concerns
```

### After (Modular)

```javascript
// Option 1: Individual imports
import { usePortfolioData } from "../hooks/usePortfolioData";
import { Button, Badge } from "../components/ui";
import { Header, MainContent } from "../components/layout";

// Option 2: Index imports (cleaner)
import { usePortfolioData } from "../hooks";
import { Button, Badge } from "../components/ui";
import { Header, MainContent } from "../components/layout";
```

## Scalability Features

### Adding New Section Type

1. Create `src/components/sections/NewSection.jsx`
2. Add to portfolio.js sections array
3. Add case to MainContent.jsx
4. Done! ✅

### Adding New UI Component

1. Create `src/components/ui/NewComponent.jsx`
2. Export from `ui/index.js`
3. Use in any component
4. Done! ✅

### Switching Data Sources

1. Update `usePortfolioData()` hook
2. No component changes needed
3. Done! ✅

### Adding Dark Mode

1. Create useTheme() hook
2. Use in components
3. Done! ✅
