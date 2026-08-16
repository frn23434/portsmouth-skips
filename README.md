# Portsmouth Skips

Portsmouth Skips is a full-stack TypeScript website for a local skip hire business. It uses Vite and React for the frontend and Express for the backend, with SEO-focused location pages for Portsmouth and nearby service areas.

## Live domain

- Primary domain: `https://portsmouthskips.co.uk`
- Sitemap: `https://portsmouthskips.co.uk/sitemap.xml`
- Robots: `https://portsmouthskips.co.uk/robots.txt`

## Current location pages

- `/`
- `/skip-hire-in-southsea`
- `/skip-hire-in-cosham`
- `/skip-hire-in-fratton`
- `/skip-hire-in-hilsea`

## Tech stack

- React 18
- Vite 5
- TypeScript
- Tailwind CSS
- Express
- Wouter

## Requirements

- Node.js 20+
- npm 10+

## Local development

```bash
npm install
npm run dev
```

The app runs on `http://127.0.0.1:5000` by default.

## Build and start

```bash
npm run build
npm run start
```

## Scripts

- `npm run dev` - start the development server
- `npm run check` - run the TypeScript check
- `npm run build` - create a production build
- `npm run start` - run the production server

## Project structure

- [client/](C:/Users/farha/Downloads/portsmouth-skips/client) - Vite/React frontend
- [server/](C:/Users/farha/Downloads/portsmouth-skips/server) - Express server and runtime sitemap/robots endpoints
- [shared/](C:/Users/farha/Downloads/portsmouth-skips/shared) - shared route/location data and schema

## SEO notes

- Canonical URLs and Open Graph URLs are set through [use-meta-tags.ts](C:/Users/farha/Downloads/portsmouth-skips/client/src/lib/use-meta-tags.ts)
- Location page configuration is centralized in [location-pages.ts](C:/Users/farha/Downloads/portsmouth-skips/shared/location-pages.ts)
- Static sitemap is stored in [sitemap.xml](C:/Users/farha/Downloads/portsmouth-skips/client/public/sitemap.xml)
- Runtime sitemap and robots responses are served from [index.ts](C:/Users/farha/Downloads/portsmouth-skips/server/index.ts)

## Deployment notes

- Update sitemap dates when adding or changing location pages
- Keep the domain in [index.html](C:/Users/farha/Downloads/portsmouth-skips/client/index.html), [location-pages.ts](C:/Users/farha/Downloads/portsmouth-skips/shared/location-pages.ts), and [sitemap.xml](C:/Users/farha/Downloads/portsmouth-skips/client/public/sitemap.xml) aligned with the live site
- After deployment, submit the sitemap to Google Search Console

## CI

This repository includes a GitHub Actions workflow at [.github/workflows/ci.yml](C:/Users/farha/Downloads/portsmouth-skips/.github/workflows/ci.yml) that runs type checks and builds on pushes and pull requests.
