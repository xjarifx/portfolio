# Backend Developer Portfolio (Data-Driven)

A clean, minimalistic portfolio website built with React, Vite, Tailwind CSS, and React Router. The entire frontend is driven by a single data file, so you never need to touch component code when updating content.

## Key Concept

Single source of truth: all content, structure, and UI behavior is defined in src/data/portfolio.js. The UI renders dynamically from that file.

## Tech Stack

- React
- Vite
- Tailwind CSS
- React Router

## Project Structure (Core)

```
portfolio/
├── src/
│   ├── data/
│   │   └── portfolio.js
│   ├── pages/
│   │   └── Home.jsx
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── tailwind.config.js
├── postcss.config.js
└── package.json
```

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

### Build for Production

```bash
npm run build
```

```bash
npm run preview
```

## Data-Driven Configuration Guide

All updates happen in src/data/portfolio.js.

### Architecture

- metadata: personal information and social links
- theme: design tokens (Tailwind classes)
- sections: ordered list of sections to render
- config: UI behavior settings (spotlight, smooth scroll, observer)

### Updating Personal Info

- Edit metadata.name, metadata.title, metadata.tagline
- Update social links in metadata.social

### Adding a New Experience Entry

Add an object to sections[id="experience"].items:

```
{
  period: "2025 — PRESENT",
  title: "Senior Developer",
  company: "Company Name",
  companyUrl: "https://...",
  description: "...",
  achievements: ["...", "..."],
  technologies: ["Tech1", "Tech2"]
}
```

### Adding a New Project

Add an object to sections[id="projects"].items (same shape as existing projects):

```
{
  title: "Project Name",
  description: "...",
  highlights: ["..."],
  techStack: ["Tech1", "Tech2"],
  githubUrl: "https://...",
  image: "/projects/example.png"
}
```

### Removing a Section

Delete the section object from the sections array. Navigation updates automatically.

### Changing Theme

- Update theme.colors values (Tailwind classes)
- Update theme.typography or theme.spacing as needed

Example:

```
theme: {
  colors: {
    background: "bg-gray-900",
    textPrimary: "text-gray-100"
  }
}
```

### Changing Layout

- Update config.layout.maxWidth
- Adjust spacing in theme.spacing

### Toggling Features

- Disable spotlight: config.spotlight.enabled = false
- Disable smooth scroll: config.smoothScroll.enabled = false
- Hide social links: config.display.showSocialLinks = false

## Section Types Reference

TYPE: text

- content: array of paragraphs
- renders as simple text blocks

TYPE: experience

- items: array of jobs (period, title, company, description, achievements, technologies)
- renders as timeline cards

TYPE: project

- items: array of projects (title, description, highlights, techStack, githubUrl, image)
- renders as project cards

Note: If you add new section types, the renderer in Home.jsx must be extended to support them.
