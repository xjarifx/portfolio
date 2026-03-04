# Portfolio + Resume Workflow

A modern, modular portfolio application built with React, Vite, and Tailwind CSS.

## Features

- 🎨 Modern, responsive design with glass morphism effects
- 🔧 Modular architecture for easy maintenance
- 📱 Mobile-first responsive layout
- ♿ Accessibility-focused components
- 🎯 Type-safe with PropTypes
- 🚀 Fast build with Vite
- 📄 PDF resume generation

## Quick Start

### Installation
```bash
npm install
```

### Development
```bash
npm run dev
```
Visit `http://localhost:5173`

### Build
```bash
npm run build
```

### Lint
```bash
npm run lint
```

## Project Structure

```
src/
├── components/       # React components
│   ├── common/      # Shared components (ErrorBoundary)
│   ├── layout/      # Layout components
│   ├── sections/    # Content sections
│   └── ui/          # Reusable UI components
├── config/          # App & theme configuration
├── constants/       # Application constants
├── data/            # Portfolio data
├── hooks/           # Custom React hooks
├── pages/           # Page components
├── services/        # Business logic layer
├── types/           # PropTypes definitions
└── utils/           # Utility functions
```

## Managing Content

Your single source of truth is `src/data/portfolio.js`.

### Update Portfolio Content
1. Edit `src/data/portfolio.js`
2. Add/modify sections, projects, articles, etc.
3. Changes reflect immediately in dev mode

### Generate Resume PDF
1. Update data in `src/data/portfolio.js`
2. Start the app: `npm run dev`
3. Open: `http://localhost:5173/resume`
4. Click **Download as PDF** or use browser Print → Save as PDF

This ensures your portfolio and resume always stay in sync.

## Architecture

This project follows a modular architecture with:

- **Separation of Concerns**: Components, services, hooks, and utilities are clearly separated
- **Type Safety**: PropTypes validation throughout
- **Error Handling**: ErrorBoundary for graceful error recovery
- **Theme System**: Centralized design tokens
- **Service Layer**: Data logic separated from presentation

See [ARCHITECTURE.md](./ARCHITECTURE.md) for detailed documentation.

## Adding New Content

### Add a New Section
1. Define section type in `src/constants/sectionTypes.js`
2. Create component in `src/components/sections/`
3. Register in `src/components/layout/MainContent.jsx`
4. Add data to `src/data/portfolio.js`

### Add a New Project
Edit `src/data/portfolio.js` and add to the projects section:
```javascript
{
  title: "Project Name",
  description: "Project description",
  highlights: ["Feature 1", "Feature 2"],
  techStack: ["React", "Node.js"],
  links: [
    { label: "GitHub", url: "https://github.com/..." },
    { label: "Live Demo", url: "https://..." }
  ]
}
```

## Configuration

### Theme Configuration
Edit `src/config/theme.js` to customize:
- Colors
- Spacing
- Typography

### App Configuration
Edit `src/config/app.js` to toggle:
- Spotlight effect
- Smooth scrolling
- Section highlighting
- Layout settings

## Tech Stack

- **React 19** - UI library
- **Vite** - Build tool
- **Tailwind CSS 4** - Styling
- **React Router** - Routing
- **PropTypes** - Runtime type checking

## Contributing

See [CONTRIBUTING.md](./CONTRIBUTING.md) for development guidelines.

## Key Features

### Modular Components
- Small, focused components
- Reusable UI primitives
- Easy to test and maintain

### Type Safety
- PropTypes validation
- Shared type definitions
- Runtime error catching

### Performance
- Optimized builds
- Lazy loading
- Memoized computations

### Accessibility
- Semantic HTML
- ARIA labels
- Keyboard navigation
- Screen reader support

## License

MIT
