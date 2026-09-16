<div align="center">

# Ayoub Kilwe · Portfolio

**Personal portfolio of Ayoub Jama Khalid, Software Engineer.**

![Next.js](https://img.shields.io/badge/Next.js-16-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-0055FF?style=for-the-badge&logo=framer&logoColor=white)
![GitHub Pages](https://img.shields.io/badge/Deploy-GitHub_Pages-222222?style=for-the-badge&logo=github&logoColor=white)

</div>

## ✨ Highlights

- Fully static export (`next build` → `out/`), deployable to GitHub Pages, Cloudflare Pages, Netlify or any static host
- Dark, glassmorphism design with animated hero, typewriter roles, counters, reveal-on-scroll and a skills marquee
- Sections: Hero · About · Services · Skills · Projects · Journey · Contact
- SEO ready: Open Graph / Twitter metadata, JSON-LD `Person` schema, semantic HTML
- All content lives in one file: [`src/data/profile.ts`](src/data/profile.ts)

## 🚀 Getting started

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # static site in ./out
```

## ✏️ Editing content (Sanity CMS)

All content is managed in **Sanity Studio**: https://ayoubkilwe.sanity.studio

| Document | What it controls |
|:--|:--|
| Site Settings | name, roles, tagline, photo, about, stats, links, CV (PDF upload) |
| Projects | title, description, cover image + gallery, highlights, stack, links, featured, order |
| Skill Groups | skill cards (icon ids from skillicons.dev) |
| Services | "What I do" cards |
| Journey | timeline milestones |

Edits are published instantly: the site fetches live data from Sanity's CDN in the browser, and a daily
GitHub Action rebuild refreshes the prerendered HTML. `src/data/profile.ts` is only a fallback used when
Sanity has no content.

Studio source lives in `studio/` (`cd studio && npm run dev` locally, `npm run deploy` to publish).

| Asset | Where |
|:--|:--|
| Social preview image | put `og.png` (1200×630) in `public/` |
| Favicon | `src/app/favicon.ico` |

## 🌐 Deployment

Pushing to `main` runs `.github/workflows/deploy.yml`, which builds the site and publishes `out/` to GitHub Pages.

1. Repository → **Settings → Pages → Source: GitHub Actions**
2. For a custom domain (e.g. `ayoubkilwe.dev`): add it under **Settings → Pages → Custom domain**, then point the domain's DNS to GitHub Pages and set `siteUrl` in `src/data/profile.ts`.

## 🧱 Stack

Next.js 16 (App Router, static export) · React 19 · TypeScript · Tailwind CSS 4 · Framer Motion · lucide-react · Sanity CMS

## 📄 License

MIT © Ayoub Jama Khalid
