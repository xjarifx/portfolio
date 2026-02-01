# Migration & Extension Examples

## Example 1: Migrating to API Data Source

### Before (Hardcoded)

```javascript
// src/data/portfolio.js
export const portfolio = {
  sections: [
    {
      id: "projects",
      type: "project",
      items: [
        /* hardcoded projects */
      ],
    },
  ],
};
```

### After (API-Ready)

```javascript
// src/hooks/usePortfolioData.js
import { useState, useEffect } from "react";

export const usePortfolioData = () => {
  const [portfolio, setPortfolio] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch from API instead of hardcoded data
    fetch("/api/portfolio")
      .then((res) => res.json())
      .then((data) => {
        setPortfolio(data);
        setLoading(false);
      });
  }, []);

  if (loading) return null;

  const { metadata, theme, sections, config } = portfolio;
  return { metadata, theme, sections, config };
};
```

✅ Components don't change - just swap the hook!

---

## Example 2: Adding a New Section Type (Skills)

### Step 1: Create Section Component

```javascript
// src/components/sections/SkillsSection.jsx

export const SkillsSection = ({ items, theme }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {items.map((skillGroup) => (
        <div key={skillGroup.category}>
          <h4 className={`font-bold ${theme.colors.textPrimary}`}>
            {skillGroup.category}
          </h4>
          <div className="flex flex-wrap gap-2 mt-2">
            {skillGroup.skills.map((skill) => (
              <Badge key={skill}>{skill}</Badge>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};
```

### Step 2: Add Data to portfolio.js

```javascript
// src/data/portfolio.js

sections: [
  // ... existing sections ...
  {
    id: "skills",
    type: "skill",
    title: "Skills",
    items: [
      {
        category: "Languages",
        skills: ["JavaScript", "TypeScript", "Python"],
      },
      {
        category: "Backend",
        skills: ["Node.js", "Express", "PostgreSQL"],
      },
    ],
  },
];
```

### Step 3: Update MainContent Component

```javascript
// src/components/layout/MainContent.jsx

import { SkillsSection } from "../sections/SkillsSection"; // ADD THIS

const renderSectionContent = (section) => {
  switch (section.type) {
    case "text":
      return <TextSection content={section.content} theme={theme} />;
    case "skill": // ADD THIS CASE
      return <SkillsSection items={section.items} theme={theme} />;
    // ... other cases ...
  }
};
```

Done! Skills section is now live. 🎉

---

## Example 3: Adding a Custom UI Component

### Create Button Variant

```javascript
// src/components/ui/ButtonGroup.jsx

export const ButtonGroup = ({ buttons, onClick, theme }) => {
  return (
    <div className="flex gap-2">
      {buttons.map((btn) => (
        <button
          key={btn.id}
          onClick={() => onClick(btn.id)}
          className={`px-4 py-2 rounded ${
            btn.active
              ? `${theme.colors.accentBg} ${theme.colors.accent}`
              : theme.colors.text
          }`}
        >
          {btn.label}
        </button>
      ))}
    </div>
  );
};
```

### Use in a Component

```javascript
import { ButtonGroup } from "../components/ui";

function MyComponent() {
  const [active, setActive] = useState("all");

  return (
    <ButtonGroup
      buttons={[
        { id: "all", label: "All", active: active === "all" },
        { id: "featured", label: "Featured", active: active === "featured" },
      ]}
      onClick={setActive}
      theme={theme}
    />
  );
}
```

---

## Example 4: Creating a Custom Hook

### Create Filter Hook

```javascript
// src/hooks/useProjectFilter.js

import { useState, useMemo } from "react";

export const useProjectFilter = (projects) => {
  const [selectedTech, setSelectedTech] = useState(null);

  const filteredProjects = useMemo(() => {
    if (!selectedTech) return projects;
    return projects.filter((p) => p.techStack.includes(selectedTech));
  }, [projects, selectedTech]);

  return { filteredProjects, selectedTech, setSelectedTech };
};
```

### Use in Component

```javascript
import { useProjectFilter } from "../hooks/useProjectFilter";

function ProjectSection({ items, theme }) {
  const { filteredProjects, selectedTech, setSelectedTech } =
    useProjectFilter(items);

  return (
    <div>
      <div className="flex gap-2 mb-4">{/* Filter buttons */}</div>
      <ul className="group/list">
        {filteredProjects.map((project) => (
          <ProjectItem key={project.title} project={project} theme={theme} />
        ))}
      </ul>
    </div>
  );
}
```

---

## Example 5: Adding Dark Mode

### Create Theme Hook

```javascript
// src/hooks/useTheme.js

import { useState, useEffect } from "react";
import { portfolio } from "../data/portfolio";

export const useTheme = () => {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    // Load from localStorage or system preference
    const saved = localStorage.getItem("theme");
    if (saved) setIsDark(saved === "dark");
  }, []);

  const toggleTheme = () => {
    const newValue = !isDark;
    setIsDark(newValue);
    localStorage.setItem("theme", newValue ? "dark" : "light");
  };

  const theme = isDark ? portfolio.theme : getLightTheme();

  return { theme, isDark, toggleTheme };
};

function getLightTheme() {
  return {
    colors: {
      background: "bg-white",
      text: "text-gray-600",
      textPrimary: "text-gray-900",
      // ... more colors
    },
    // ... rest of theme
  };
}
```

### Update Home Component

```javascript
function Home() {
  const { metadata, sections, config } = usePortfolioData();
  const { theme, isDark, toggleTheme } = useTheme(); // NEW

  return (
    <div className={theme.colors.background}>
      <button onClick={toggleTheme}>{isDark ? "☀️ Light" : "🌙 Dark"}</button>
      {/* rest of component */}
    </div>
  );
}
```

---

## Example 6: Testing Components

### Test Button Component

```javascript
// src/components/ui/__tests__/Button.test.js

import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Button } from "../Button";

describe("Button Component", () => {
  it("renders button with text", () => {
    render(<Button>Click Me</Button>);
    expect(screen.getByText("Click Me")).toBeInTheDocument();
  });

  it("calls onClick when clicked", async () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>Click</Button>);

    await userEvent.click(screen.getByRole("button"));
    expect(handleClick).toHaveBeenCalled();
  });

  it("applies variant classes", () => {
    const { container } = render(<Button variant="accent">Click</Button>);
    expect(container.firstChild).toHaveClass("border-teal-400/40");
  });
});
```

### Test Hook

```javascript
// src/hooks/__tests__/useEmailCopy.test.js

import { renderHook, act } from "@testing-library/react";
import { useEmailCopy } from "../useEmailCopy";

describe("useEmailCopy Hook", () => {
  it("copies email to clipboard", async () => {
    const { result } = renderHook(() => useEmailCopy("test@example.com"));

    await act(async () => {
      await result.current.handleCopyEmail();
    });

    expect(result.current.emailCopied).toBe(true);
  });
});
```

---

## Example 7: Responsive Behavior

### Create Responsive Hook

```javascript
// src/hooks/useResponsive.js

import { useState, useEffect } from "react";

export const useResponsive = () => {
  const [screen, setScreen] = useState({
    isMobile: false,
    isTablet: false,
    isDesktop: false,
  });

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setScreen({
        isMobile: width < 640,
        isTablet: width >= 640 && width < 1024,
        isDesktop: width >= 1024,
      });
    };

    handleResize(); // Initial call
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return screen;
};
```

### Use in Component

```javascript
function MyComponent() {
  const { isMobile, isTablet, isDesktop } = useResponsive();

  if (isMobile) return <MobileLayout />;
  if (isTablet) return <TabletLayout />;
  return <DesktopLayout />;
}
```

---

## Summary

The refactored architecture makes it easy to:

- ✅ Swap data sources (API, CSV, etc)
- ✅ Add new section types
- ✅ Create reusable components
- ✅ Add hooks for complex logic
- ✅ Implement dark mode
- ✅ Write tests
- ✅ Scale the application

All without touching the data layer or breaking existing functionality!
