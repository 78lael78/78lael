# 78 Lael Professional Carpentry Website

## Project Overview
This is a professional carpentry consultation website built with React, TypeScript, and Tailwind CSS.

## Getting Started

### Prerequisites
- Node.js (version 16 or higher)
- npm or yarn package manager

### Installation Steps
1. Extract all project files to a folder
2. Open terminal/command prompt in the project folder
3. Run: `npm install`
4. Run: `npm run dev`
5. Open your browser to the URL shown in terminal (usually http://localhost:5173)

## Project Structure
```
src/
├── components/
│   ├── Header.tsx          # Navigation header
│   ├── Footer.tsx          # Site footer
│   └── pages/              # All page components
│       ├── HomePage.tsx    # Main landing page
│       ├── ServicesPage.tsx # Services offered
│       ├── PricingPage.tsx # Pricing information
│       ├── AboutPage.tsx   # About Aaron/company
│       ├── ResourcesPage.tsx # Free resources & guides
│       ├── BlogPage.tsx    # Blog articles
│       └── ContactPage.tsx # Contact form & info
├── App.tsx                 # Main app component with routing
├── main.tsx               # App entry point
└── index.css              # Tailwind CSS imports
```

## Available Scripts
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

## Key Features
- Responsive design for all devices
- Professional carpentry consultation services
- Free resources and guides
- Contact forms and pricing information
- Blog section for DIY tips

## Technologies Used
- React 18
- TypeScript
- Tailwind CSS
- Vite (build tool)
- Lucide React (icons)

## Deployment
The site is currently deployed at: https://78-lael-professional-62gd.bolt.host

## Collaboration Notes
- Make sure to test changes locally before sharing
- Keep the existing design aesthetic and branding
- All images are referenced from the public folder or external URLs
- Contact information is in the Footer.tsx and ContactPage.tsx files

## Need Help?
If you run into issues:
1. Make sure Node.js is installed
2. Try deleting node_modules folder and running `npm install` again
3. Check that all files were copied correctly
4. Ensure you're in the correct directory when running commands