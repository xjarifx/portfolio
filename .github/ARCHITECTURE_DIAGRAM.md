# Architecture Diagram

## Application Structure

```
┌─────────────────────────────────────────────────────────────┐
│                         User Browser                         │
└────────────────────────┬────────────────────────────────────┘
                         │
                         ▼
┌─────────────────────────────────────────────────────────────┐
│                      App.jsx (Root)                          │
│                   + ErrorBoundary                            │
└────────────────────────┬────────────────────────────────────┘
                         │
                         ▼
┌─────────────────────────────────────────────────────────────┐
│                    React Router                              │
│                  ┌──────────┬──────────┐                     │
│                  │   Home   │  Resume  │                     │
│                  └──────────┴──────────┘                     │
└────────────────────────┬────────────────────────────────────┘
                         │
                         ▼
┌─────────────────────────────────────────────────────────────┐
│                      Page Layer                              │
│  ┌──────────────────────────────────────────────────────┐   │
│  │  Home.jsx                                            │   │
│  │  - Uses hooks for data & interactions                │   │
│  │  - Composes layout components                        │   │
│  └──────────────────────────────────────────────────────┘   │
└────────────────────────┬────────────────────────────────────┘
                         │
                         ▼
┌─────────────────────────────────────────────────────────────┐
│                    Layout Layer                              │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐      │
│  │   Header     │  │ MainContent  │  │  Spotlight   │      │
│  │  (Sidebar)   │  │  (Sections)  │  │   (Effect)   │      │
│  └──────────────┘  └──────────────┘  └──────────────┘      │
└────────────────────────┬────────────────────────────────────┘
                         │
                         ▼
┌─────────────────────────────────────────────────────────────┐
│                   Section Layer                              │
│  ┌──────────┬──────────┬──────────┬──────────┬──────────┐   │
│  │ Project  │ Article  │  Cert    │   Text   │Education │   │
│  │ Section  │ Section  │ Section  │ Section  │ Section  │   │
│  └──────────┴──────────┴──────────┴──────────┴──────────┘   │
└────────────────────────┬────────────────────────────────────┘
                         │
                         ▼
┌─────────────────────────────────────────────────────────────┐
│                      UI Layer                                │
│  ┌──────┬──────┬──────┬──────┬──────┬──────┬──────────┐     │
│  │Badge │Button│ Card │Card  │Ext   │Section│  ...    │     │
│  │      │      │      │Link  │Link  │Header │         │     │
│  └──────┴──────┴──────┴──────┴──────┴──────┴──────────┘     │
└─────────────────────────────────────────────────────────────┘
```

## Data Flow

```
┌─────────────────────────────────────────────────────────────┐
│                    Data Source                               │
│                 portfolio.js (JSON)                          │
└────────────────────────┬────────────────────────────────────┘
                         │
                         ▼
┌─────────────────────────────────────────────────────────────┐
│                   Service Layer                              │
│              portfolioService.js                             │
│  - getPortfolioData()                                        │
│  - getSectionById()                                          │
│  - getSectionsByType()                                       │
│  - getNavigationItems()                                      │
└────────────────────────┬────────────────────────────────────┘
                         │
                         ▼
┌─────────────────────────────────────────────────────────────┐
│                     Hook Layer                               │
│              usePortfolioData.js                             │
│  - Consumes services                                         │
│  - Provides memoized data                                    │
│  - Combines with config/theme                                │
└────────────────────────┬────────────────────────────────────┘
                         │
                         ▼
┌─────────────────────────────────────────────────────────────┐
│                   Components                                 │
│  - Receive data via props                                    │
│  - Pure presentation logic                                   │
│  - No direct data access                                     │
└─────────────────────────────────────────────────────────────┘
```

## Component Dependency Graph

```
App
 ├─ ErrorBoundary
 │   └─ Router
 │       ├─ Home
 │       │   ├─ usePortfolioData (hook)
 │       │   │   └─ portfolioService
 │       │   ├─ useMouseTracking (hook)
 │       │   ├─ useSmoothScroll (hook)
 │       │   ├─ useActiveSection (hook)
 │       │   ├─ Spotlight
 │       │   ├─ Header
 │       │   │   ├─ Navigation
 │       │   │   ├─ ContactSection
 │       │   │   └─ SocialLinks
 │       │   └─ MainContent
 │       │       ├─ SectionHeader
 │       │       └─ [Dynamic Sections]
 │       │           ├─ ProjectSection
 │       │           │   ├─ Card
 │       │           │   ├─ Badge
 │       │           │   └─ ExternalLink
 │       │           ├─ ArticleSection
 │       │           │   ├─ Card
 │       │           │   ├─ CardLink
 │       │           │   └─ Badge
 │       │           ├─ CertificationSection
 │       │           │   ├─ Card
 │       │           │   ├─ CardLink
 │       │           │   └─ Badge
 │       │           ├─ TextSection
 │       │           └─ EducationSection
 │       │               └─ Card
 │       └─ Resume
 └─ [Error UI]
```

## Module Dependencies

```
┌─────────────────────────────────────────────────────────────┐
│                      Components                              │
│                          ↓                                   │
│                    ┌─────────┐                               │
│                    │  Hooks  │                               │
│                    └────┬────┘                               │
│                         ↓                                    │
│              ┌──────────┴──────────┐                         │
│              ↓                     ↓                         │
│         ┌─────────┐          ┌─────────┐                    │
│         │Services │          │ Config  │                    │
│         └────┬────┘          └─────────┘                    │
│              ↓                                               │
│         ┌─────────┐                                          │
│         │  Data   │                                          │
│         └─────────┘                                          │
│                                                              │
│  All layers can use:                                         │
│  - Utils (pure functions)                                    │
│  - Constants (enums, routes)                                 │
│  - Types (PropTypes)                                         │
└─────────────────────────────────────────────────────────────┘
```

## File Organization Pattern

```
Feature/Domain
├── Component.jsx          # Main component
├── SubComponent.jsx       # Related sub-components
├── index.js              # Barrel export
├── useFeature.js         # Related hooks (if any)
└── feature.utils.js      # Related utilities (if any)

Example:
sections/
├── ProjectSection.jsx
├── ArticleSection.jsx
├── CertificationSection.jsx
├── TextSection.jsx
├── EducationSection.jsx
└── index.js
```

## Configuration Flow

```
┌─────────────────────────────────────────────────────────────┐
│                   Configuration Files                        │
│                                                              │
│  ┌──────────────────┐         ┌──────────────────┐          │
│  │   theme.js       │         │    app.js        │          │
│  │                  │         │                  │          │
│  │ - colors         │         │ - spotlight      │          │
│  │ - spacing        │         │ - smoothScroll   │          │
│  │ - typography     │         │ - observer       │          │
│  └────────┬─────────┘         └────────┬─────────┘          │
│           │                            │                    │
│           └────────────┬───────────────┘                    │
│                        ↓                                    │
│              ┌──────────────────┐                           │
│              │ usePortfolioData │                           │
│              └────────┬─────────┘                           │
│                       ↓                                     │
│              ┌──────────────────┐                           │
│              │   Components     │                           │
│              │  (via props)     │                           │
│              └──────────────────┘                           │
└─────────────────────────────────────────────────────────────┘
```

## Error Handling Flow

```
┌─────────────────────────────────────────────────────────────┐
│                    Component Tree                            │
│                                                              │
│  Any component throws error                                  │
│           ↓                                                  │
│  ErrorBoundary catches                                       │
│           ↓                                                  │
│  componentDidCatch() logs error                              │
│           ↓                                                  │
│  getDerivedStateFromError() updates state                    │
│           ↓                                                  │
│  Renders fallback UI                                         │
│           ↓                                                  │
│  User can reload page                                        │
└─────────────────────────────────────────────────────────────┘
```

## Build Process

```
┌─────────────────────────────────────────────────────────────┐
│                    Source Files                              │
│  src/**/*.{jsx,js,css}                                       │
└────────────────────────┬────────────────────────────────────┘
                         │
                         ▼
┌─────────────────────────────────────────────────────────────┐
│                      Vite Build                              │
│  - Transpile JSX → JS                                        │
│  - Bundle modules                                            │
│  - Process Tailwind CSS                                      │
│  - Optimize assets                                           │
│  - Tree shake unused code                                    │
└────────────────────────┬────────────────────────────────────┘
                         │
                         ▼
┌─────────────────────────────────────────────────────────────┐
│                   Production Build                           │
│  dist/                                                       │
│  ├── index.html                                              │
│  └── assets/                                                 │
│      ├── index-[hash].js                                     │
│      └── index-[hash].css                                    │
└─────────────────────────────────────────────────────────────┘
```

## Key Principles

### 1. Unidirectional Data Flow
Data flows down from services → hooks → components. Components never modify data directly.

### 2. Component Composition
Complex components are built by composing simpler components. Each component has a single responsibility.

### 3. Separation of Concerns
- **Components**: Presentation
- **Hooks**: State & side effects
- **Services**: Data access
- **Utils**: Pure functions
- **Config**: Settings

### 4. Dependency Inversion
Components depend on abstractions (hooks, services) not concrete implementations (data files).

### 5. Single Source of Truth
- Data: `portfolio.js`
- Theme: `theme.js`
- Config: `app.js`
- Routes: `routes.js`
- Types: `sectionTypes.js`
