# Agent Instructions

## Project Overview

Mona Mayhem is a retro arcade-themed Astro app that compares GitHub contribution graphs of two users. It uses server-side rendering with the Node.js adapter.
- The `workshop/` folder is instructional material only; ignore it unless the task explicitly asks to update workshop content. 

**Key directories:**
- `src/pages/` — Astro pages and API routes
- `src/pages/api/contributions/[username].ts` — Dynamic API endpoint (TODO: implement GitHub contributions fetch)
- `public/` — Static assets

## Commands

```bash
npm run dev      # Start dev server
npm run build    # Production build
npm run preview  # Preview production build
```

## Astro Best Practices

### File Conventions
- Pages go in `src/pages/` (file-based routing)
- API routes use `.ts` files with exported `GET`/`POST` handlers
- Components go in `src/components/`
- Layouts go in `src/layouts/`

### SSR Notes
- This project uses `output: 'server'` with `@astrojs/node` adapter
- API routes must set `export const prerender = false;` to run server-side
- Use `Astro.request` for request data, return `Response` objects

### Component Patterns
- Use `.astro` for static/server-rendered components
- Framework components (React, etc.) only when client interactivity is needed
- Use `client:*` directives sparingly to minimize JS bundle

### Styling
- Scoped `<style>` blocks in `.astro` files preferred
- Global styles via `<style is:global>` or imported CSS
