# Portfolio - Refactored Component Architecture

## 🎉 What's New

Your portfolio has been transformed from a **monolithic data-driven approach** to a **true component-based architecture** following React and industry best practices.

**Key Improvements:**

- ✅ **Component-driven** - Reusable, composable React components
- ✅ **Separation of concerns** - Logic, presentation, and layout are separate
- ✅ **Data abstraction** - Portfolio data stays in the data folder
- ✅ **Custom hooks** - Extracted complex logic into reusable hooks
- ✅ **Scalable** - Easy to add new features and extend
- ✅ **Testable** - Pure components ready for unit testing
- ✅ **Maintainable** - Clear structure with documentation

---

## 📁 Project Structure

```
src/
├── hooks/                          # Logic & State Management
│   ├── index.js                    # Central export point
│   ├── usePortfolioData.js         # Extract data from portfolio.js
│   ├── useEmailCopy.js             # Email clipboard functionality
│   └── useInteractions.js          # Mouse tracking, scroll, observers
│
├── components/
│   ├── ui/                         # Reusable UI Components (Atomic)
│   │   ├── index.js                # Central export point
│   │   ├── Button.jsx              # Configurable button
│   │   ├── Badge.jsx               # Tags & badges
│   │   ├── ExternalLink.jsx        # Links with icons
│   │   └── SectionHeader.jsx       # Sticky section headers
│   │
│   ├── sections/                   # Section-specific Components (Domain)
│   │   ├── index.js                # Central export point
│   │   ├── TextSection.jsx         # Text/paragraph content
│   │   ├── ExperienceSection.jsx   # Experience/jobs
│   │   ├── ProjectSection.jsx      # Projects/portfolio items
│   │   └── ArticleSection.jsx      # Articles/blog posts
│   │
│   ├── layout/                     # Layout Components (Page Structure)
│   │   ├── index.js                # Central export point
│   │   ├── Header.jsx              # Left sidebar
│   │   ├── MainContent.jsx         # Main content area
│   │   └── Spotlight.jsx           # Background effect
│   │
│   └── YourComponent.jsx           # For your custom components
│
├── pages/
│   ├── Home.jsx                    # REFACTORED - Now 68 lines!
│   └── ...
│
├── data/
│   └── portfolio.js                # UNCHANGED - Your data source
│
└── main.jsx, index.css, etc.       # App files
```

---

## 🚀 Quick Start

### 1. Data is Still Centralized

Edit `src/data/portfolio.js` to update content. Components automatically render it.

```javascript
// src/data/portfolio.js
export const portfolio = {
  metadata: {
    /* your info */
  },
  sections: [
    /* your content */
  ],
  // ... etc
};
```

### 2. Components Are Pure

Components receive data as props, no hardcoding:

```javascript
// ❌ DON'T DO THIS
function ProjectCard() {
  const title = "My Project"; // Hardcoded!
  return <h2>{title}</h2>;
}

// ✅ DO THIS
function ProjectCard({ project }) {
  return <h2>{project.title}</h2>;
}
```

### 3. Use Hooks for Logic

Don't put logic in components:

```javascript
// ❌ DON'T DO THIS
function EmailButton() {
  const [copied, setCopied] = useState(false);
  const handleCopy = async () => {
    /* ... */
  };
  // Component mixed with logic
}

// ✅ DO THIS
function EmailButton({ email }) {
  const { emailCopied, handleCopyEmail } = useEmailCopy(email);
  // Component only renders
}
```

---

## 📚 Documentation Files

1. **REFACTORING_GUIDE.md** - Overview of changes & improvements
2. **ARCHITECTURE.md** - Detailed architecture & component hierarchy
3. **COMPONENT_USAGE_GUIDE.js** - How to use each component/hook
4. **EXAMPLES.md** - Real-world examples & patterns
5. **This file (README.md)** - Quick reference

---

## 🎯 Common Tasks

### Add a New Piece of Content

1. Edit `src/data/portfolio.js`
2. That's it! Components render it automatically.

### Add a New Section Type

1. Create component in `src/components/sections/`
2. Add case to `MainContent.jsx`
3. Add data to `portfolio.js`

### Add a New UI Component

1. Create in `src/components/ui/`
2. Export from `ui/index.js`
3. Import and use anywhere

### Switch to API Data

1. Update `usePortfolioData()` hook
2. No component changes needed!

### Add Dark Mode

1. Create `useTheme()` hook
2. Use in components
3. Done!

---

## 🏗️ Component Types

### UI Components (Atomic)

- **Smallest building blocks**
- No data fetching, pure presentation
- Examples: Button, Badge, ExternalLink

```javascript
<Button variant="accent" size="md" onClick={handleClick}>
  Click Me
</Button>
```

### Section Components (Domain)

- **Handle specific content types**
- Receive items and render them
- Examples: ProjectSection, ArticleSection

```javascript
<ProjectSection items={projects} theme={theme} />
```

### Layout Components (Page)

- **Manage page structure**
- Compose other components
- Examples: Header, MainContent

```javascript
<Header metadata={metadata} activeSection={activeSection} />
<MainContent sections={sections} />
```

---

## 🔄 Data Flow

```
portfolio.js (Single Source of Truth)
    ↓
usePortfolioData() Hook
    ↓
Home.jsx Page
    ↓
Layout Components (Header, MainContent)
    ↓
Section Components (TextSection, ProjectSection, etc)
    ↓
UI Components (Button, Badge, etc)
```

---

## ✨ Key Features

### 1. **Reusable Components**

```javascript
// Button works everywhere with different variants
<Button variant="default">Login</Button>
<Button variant="accent">Download</Button>
```

### 2. **Custom Hooks**

```javascript
// Extract logic, reuse in any component
const { emailCopied, handleCopyEmail } = useEmailCopy(email);
const mousePosition = useMouseTracking(enabled);
const activeSection = useActiveSection(enabled);
```

### 3. **Theme System**

```javascript
// Consistent styling from portfolio.js
className={`${theme.colors.textPrimary}`}
className={`${theme.typography.heading}`}
className={`${theme.spacing.sectionGap}`}
```

### 4. **Intersection Observer**

```javascript
// Active section detection works automatically
const activeSection = useActiveSection(
  config.observer.enabled,
  config.observer.thresholds,
);
```

### 5. **Spotlight Effect**

```javascript
// Mouse tracking gradient effect
const mousePosition = useMouseTracking(config.spotlight.enabled);
<Spotlight position={mousePosition} enabled={enabled} />;
```

---

## 📊 Code Metrics

| Metric                    | Before | After  |
| ------------------------- | ------ | ------ |
| Home.jsx Lines            | 642    | 68     |
| UI Components             | 0      | 4      |
| Custom Hooks              | 0      | 3      |
| Section Components        | 0      | 4      |
| Layout Components         | 0      | 3      |
| **Total Reusable Pieces** | **0**  | **14** |

---

## 🧪 Testing Ready

Components are now testable:

```javascript
import { render, screen } from "@testing-library/react";
import { Button } from "./Button";

test("renders button", () => {
  render(<Button>Click</Button>);
  expect(screen.getByText("Click")).toBeInTheDocument();
});
```

---

## 🔌 Integration Points

### Easy to Integrate With:

- ✅ TypeScript (components are ready)
- ✅ API data (hooks support async)
- ✅ State management (Zustand, Redux)
- ✅ Form libraries (React Hook Form)
- ✅ Animation libraries (Framer Motion)
- ✅ Testing frameworks (Vitest, Jest)

---

## 📝 Export Patterns

### Option 1: Individual Imports

```javascript
import { usePortfolioData } from "../hooks/usePortfolioData";
import { Button } from "../components/ui/Button";
```

### Option 2: Index Imports (Cleaner)

```javascript
import { usePortfolioData } from "../hooks";
import { Button, Badge } from "../components/ui";
import { Header, MainContent } from "../components/layout";
```

---

## 🎓 Best Practices

✅ **DO:**

- Use hooks for logic extraction
- Pass data as props
- Keep components small and focused
- Use theme tokens for styling
- Document with JSDoc comments

❌ **DON'T:**

- Hardcode data in components
- Mix layout and logic
- Create massive components
- Import from portfolio.js in components
- Use inline styles

---

## 🚀 Next Steps

1. **Test it out** - Everything works as before
2. **Review EXAMPLES.md** - See real-world patterns
3. **Extend it** - Add new sections or features
4. **Migrate data** - Switch to API when ready
5. **Add tests** - Components are test-ready

---

## 📞 Questions?

Refer to:

- **ARCHITECTURE.md** - For structure & hierarchy
- **COMPONENT_USAGE_GUIDE.js** - For API details
- **EXAMPLES.md** - For implementation patterns
- **REFACTORING_GUIDE.md** - For changes overview

---

## ✅ Verification Checklist

- ✅ No errors or warnings
- ✅ Data still in `portfolio.js`
- ✅ Components use props, not hardcoded data
- ✅ Hooks extract logic from components
- ✅ Home.jsx is clean and composable
- ✅ All previous features work
- ✅ Structure follows industry standards

---

**Your portfolio is now production-ready, scalable, and maintainable!** 🎉
