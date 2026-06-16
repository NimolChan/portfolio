# Chan Nimol — Portfolio

> Network Infrastructure Engineer portfolio built with Next.js 15 (App Router) and NestJS.

## Architecture

```
app/               Next.js frontend (App Router)
├── page.tsx       Home page — hero, profile, skills, projects, explore
├── layout.tsx     Root layout with nav
├── projects/      Projects list & [slug] detail pages
├── credentials/   Education & certifications
├── contact/       Contact info
└── components/    Shared UI components
backend/
└── main.ts        NestJS API server (port 3001)
lib/
├── types.ts       Portfolio data model
├── portfolio.ts   Static portfolio data
└── getPortfolio.ts Fetches from API, falls back to static data
```

The API serves portfolio data at `GET /portfolio`. The frontend tries to fetch from the API first and falls back to the bundled static data if the API is unavailable.

## Getting Started

```bash
npm install
npm run dev
```

Runs both API (port 3001) and frontend (port 3000) concurrently.

| Command | Description |
|---------|-------------|
| `npm run dev` | Start API + frontend (concurrent) |
| `npm run dev:web` | Frontend only (port 3000) |
| `npm run dev:api` | API only (port 3001) |
| `npm run build` | Build frontend |
| `npm run typecheck` | TypeScript check |

## Tech Stack

- **Frontend:** Next.js 15, React 19, TypeScript
- **Backend:** NestJS 10 (standalone, no CLI)
- **Tooling:** tsx (dev runner), concurrently
