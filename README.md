# Rahul R — Portfolio (Next.js)

A single-page developer portfolio built with the Next.js App Router, TypeScript, and a Three.js
network-graph background scene.

<div align="center">

**Author:** Rahul Rajeevan — rahulrajesh474@gmail.com

GitHub: https://github.com/rahulraji18 · LinkedIn: https://www.linkedin.com/in/rahul-rajeevan/

</div>

## Stack

- **Next.js 14** (App Router)
- **TypeScript**
- **Three.js** for the animated 3D background (`components/BackgroundScene.tsx`)
- Plain CSS (`app/globals.css`) — no Tailwind/UI framework, design tokens as CSS variables
- Fonts loaded via `next/font/google` (JetBrains Mono + Inter)

## Project structure

```
app/
  layout.tsx        Root layout, fonts, metadata
  page.tsx           Assembles all sections
  globals.css         Design tokens + all styles
components/
  BackgroundScene.tsx Three.js network graph (client component)
  Nav.tsx
  Hero.tsx
  Summary.tsx
  Skills.tsx
  Experience.tsx
  Contact.tsx
  Footer.tsx
  Reveal.tsx          Scroll-reveal wrapper (IntersectionObserver)
lib/
  data.ts             Skills / experience / contact content
```

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Editing content

All resume content (skills, jobs, contact info) lives in `lib/data.ts` — edit the arrays there
rather than the components themselves. Hero copy and stats live directly in
`components/Hero.tsx`.

## Deploying

This is a standard Next.js app, so it deploys cleanly to **Vercel**:

```bash
npm install -g vercel
vercel
```

Or push the repo to GitHub and import it at vercel.com — zero config needed.

It will also run on any Node host that supports Next.js (`npm run build && npm start`).

See `DEPLOY.md` for additional deployment tips and environment-variable guidance.

## Notes

- The background scene respects `prefers-reduced-motion` (renders one static frame instead of
  animating) and pauses when the browser tab isn't visible.
- If WebGL isn't available, the canvas hides itself and the page falls back to the flat
  background — no errors, no broken layout.

---

## Contact / Private data

- Email: rahulrajesh474@gmail.com — for privacy reasons the phone number is not stored in this repository. Visitors may request the phone number via the in-site request form; the owner will respond manually.
- Environment variables: see `.env.example` and `DEPLOY.md` for secure deployment instructions.
# portfolio-next.js
