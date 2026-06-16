# Joyce Le Portfolio

Configured for GitHub repo: `ngoctram-seo/portfolio`

Live URL after GitHub Pages deployment:

```txt
https://ngoctram-seo.github.io/portfolio/
```

> Important: Upload the extracted project files, not the ZIP file itself.

# Joyce Le — SEO & GEO Specialist Portfolio

A single-page personal portfolio website for Joyce Le (Le Hoang Ngoc Tram), built with React, Vite, Tailwind CSS, TypeScript, lucide-react icons, and shadcn/ui-style components.

## Tech stack

- React 18
- Vite
- TypeScript
- Tailwind CSS
- shadcn/ui-style local components
- lucide-react
- Radix Dialog for mobile sheet menu

## Features

- Fullscreen cinematic hero section
- Looping background video support
- Glassmorphic sticky navigation
- Mobile sheet menu
- Case study cards
- Experience timeline
- Skills stack section
- SEO metadata, Open Graph, Twitter Card, and Person schema JSON-LD
- Download links for English and Vietnamese CV PDFs

## Project structure

```txt
src/
  App.tsx
  main.tsx
  index.css
  lib/utils.ts
  components/
    Navbar.tsx
    Hero.tsx
    About.tsx
    CaseStudies.tsx
    Experience.tsx
    Stack.tsx
    Contact.tsx
    ui/
      badge.tsx
      button.tsx
      card.tsx
      separator.tsx
      sheet.tsx
public/
  cv/
    Joyce_Le_CV_EN.pdf
    Joyce_Le_CV_VI.pdf
  video/
    hero-bg.mp4
```

## Add your hero background video

Place your video file here:

```txt
public/video/hero-bg.mp4
```

The hero already includes a fallback gradient if the video is missing or fails to load.

## Install

```bash
npm install
```

## Run locally

```bash
npm run dev
```

## Build

```bash
npm run build
```

## Preview production build

```bash
npm run preview
```

## Deploy to Vercel

1. Push this project to GitHub.
2. Import the repository in Vercel.
3. Use the default Vite settings:
   - Build command: `npm run build`
   - Output directory: `dist`

## Deploy to Netlify

1. Push this project to GitHub.
2. Import the repository in Netlify.
3. Use:
   - Build command: `npm run build`
   - Publish directory: `dist`

## Deploy to GitHub Pages

For GitHub Pages, install the `gh-pages` package and add deploy scripts:

```bash
npm install --save-dev gh-pages
```

Add these scripts to `package.json`:

```json
"predeploy": "npm run build",
"deploy": "gh-pages -d dist"
```

Then run:

```bash
npm run deploy
```

If your repository is not served from the domain root, update `base` in `vite.config.ts`.

## GitHub repository

This project is configured for:

```txt
https://github.com/ngoctram-seo/portfolio
```

GitHub Pages URL:

```txt
https://ngoctram-seo.github.io/portfolio/
```

The Vite `base` path is already set to `/portfolio/` in `vite.config.ts`.
