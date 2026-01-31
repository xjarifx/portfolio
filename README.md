# Backend Developer Portfolio

A clean, minimalistic portfolio website built with React, Vite, Tailwind CSS, and React Router.

## Features

- **Multi-page routing** with React Router
- **Responsive design** with Tailwind CSS
- **5 main pages**: Home, About, Projects, Skills, Contact
- **Reusable components**: Navbar, Footer, ProjectCard
- **Professional UI** with neutral color palette
- **No backend dependencies** - pure frontend application

## Tech Stack

- **React** - UI library
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **React Router** - Client-side routing

## Project Structure

```
portfolio/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   └── ProjectCard.jsx
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   ├── Projects.jsx
│   │   ├── Skills.jsx
│   │   └── Contact.jsx
│   ├── App.jsx
│   ├── App.css
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

1. Clone the repository or navigate to the project directory
2. Install dependencies:

```bash
npm install
```

### Development

Start the development server:

```bash
npm run dev
```

The site will be available at `http://localhost:5173/`

### Build for Production

Create an optimized production build:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

## Customization

### Personal Information

Update the following files with your information:

- **src/pages/Home.jsx** - Update headline, description, and social links
- **src/pages/About.jsx** - Add your introduction and background
- **src/pages/Projects.jsx** - Replace with your actual projects
- **src/pages/Skills.jsx** - Update with your skills
- **src/pages/Contact.jsx** - Add your contact information
- **src/components/Footer.jsx** - Update social links

### Colors

Modify colors in `tailwind.config.js`:

```javascript
colors: {
  primary: '#1a1a1a',
  secondary: '#404040',
  accent: '#666666',
  light: '#f5f5f5',
}
```

### Fonts

Update fonts in `tailwind.config.js` and add Google Fonts in `index.html` if needed.

## License

This project is open source and available for personal and commercial use.

## Contact

Feel free to reach out for collaborations or opportunities!
