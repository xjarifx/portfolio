# Backend Developer Portfolio

A professional portfolio website built with React, Vite, and Tailwind CSS. Clean component architecture with data-driven content management.

## Tech Stack

- React 18+
- Vite
- Tailwind CSS
- Custom Hooks

## Project Structure

```
src/
├── hooks/                    # Data & interaction logic
│   ├── usePortfolioData.js   # Extract data from portfolio.js
│   ├── useEmailCopy.js       # Email clipboard
│   └── useInteractions.js    # Mouse tracking, scroll, observers
│
├── components/
│   ├── ui/                   # Reusable UI components
│   │   ├── Button.jsx
│   │   ├── Badge.jsx
│   │   ├── ExternalLink.jsx
│   │   └── SectionHeader.jsx
│   │
│   ├── sections/             # Content-specific components
│   │   ├── TextSection.jsx
│   │   ├── ExperienceSection.jsx
│   │   ├── ProjectSection.jsx
│   │   └── ArticleSection.jsx
│   │
│   └── layout/               # Page layout components
│       ├── Header.jsx
│       ├── MainContent.jsx
│       └── Spotlight.jsx
│
├── pages/
│   └── Home.jsx              # Main entry point
│
└── data/
    └── portfolio.js          # Single data source
```

## Quick Start

```bash
npm install
npm run dev        # Development server
npm run build      # Production build
```

## How to Use

### Add Content

Edit `src/data/portfolio.js` - all content comes from here. Components automatically render your data.

### Add New Component

1. Create in `src/components/ui/`, `src/components/sections/`, or `src/components/layout/`
2. Import and use in other components
3. No data changes needed

### Create a Custom Hook

1. Create in `src/hooks/`
2. Export from `hooks/index.js`
3. Use in any component

## Data Structure (`src/data/portfolio.js`)

```javascript
export const portfolio = {
  // Your name, title, tagline, email, social links
  metadata: { ... },

  // Design tokens for styling
  theme: { ... },

  // Page sections (ordered list)
  sections: [
    { id: "about", type: "text", title: "About", content: [...] },
    { id: "projects", type: "project", title: "Projects", items: [...] },
    // ... more sections
  ],

  // UI behavior configuration
  config: { ... }
}
```

### Section Types

**text** - Simple paragraphs

```javascript
{ id: "about", type: "text", title: "About", content: ["Paragraph 1", "Paragraph 2"] }
```

**experience** - Job/work history

```javascript
{
  id: "work", type: "experience", title: "Experience",
  items: [
    {
      period: "2024 — Present",
      title: "Role", company: "Company", companyUrl: "...",
      description: "...", achievements: [...], technologies: [...]
    }
  ]
}
```

**project** - Portfolio projects

```javascript
{
  id: "projects", type: "project", title: "Projects",
  items: [
    {
      title: "Project Name", description: "...", highlights: [...],
      techStack: [...], links: [{label: "GitHub", url: "..."}], image: "..."
    }
  ]
}
```

**article** - Blog posts or articles

```javascript
{
  id: "articles", type: "article", title: "Articles",
  items: [
    {
      title: "Article", summary: "...", date: "2024-01-15",
      url: "...", tags: [...], image: "..."
    }
  ]
}
```

## Component API

### Hooks

```javascript
import { usePortfolioData } from "./hooks";
import { useEmailCopy } from "./hooks";
import { useMouseTracking, useSmoothScroll, useActiveSection } from "./hooks";
```

### UI Components

```javascript
import { Button, Badge, ExternalLink, SectionHeader } from "./components/ui";

<Button variant="default" size="md" onClick={...}>Click</Button>
<Badge variant="accent">Tag</Badge>
<ExternalLink href="..." label="...">Text</ExternalLink>
<SectionHeader title="Section" theme={theme} show={true} />
```

## Key Features

✅ **Component-driven** - Reusable, testable components
✅ **Data-driven** - Update content without touching code
✅ **Custom hooks** - Logic extracted and reusable
✅ **Responsive** - Mobile, tablet, desktop optimized
✅ **Fast** - Built with Vite for instant reload
✅ **Styled** - Tailwind CSS with custom theme
✅ **Accessible** - ARIA labels, semantic HTML
✅ **Optimized** - No dead code, clean codebase

## Tips

- Customize theme in `portfolio.js` → change design globally
- Add new sections to `portfolio.js` → components render automatically
- Reorder sections by moving them in the array
- Disable features in `config.display` or `config.spotlight`
- Keep component props simple and data-driven
- Use theme tokens instead of hardcoded colors
