<div align="center">

# ayoubkilwe.dev

**Personal portfolio of Ayoub Jama Khalid (Ayoub Kilwe), Software Engineer.**

[![Live site](https://img.shields.io/badge/Live-ayoubkilwe.dev-0ea5e9?style=for-the-badge&logo=googlechrome&logoColor=white)](https://ayoubkilwe.dev)
![Next.js](https://img.shields.io/badge/Next.js-16-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)
![Sanity](https://img.shields.io/badge/CMS-Sanity-F03E2F?style=for-the-badge&logo=sanity&logoColor=white)

</div>

## Overview

A fast, fully static portfolio. Content is managed in a headless CMS (Sanity), the site is prerendered
with Next.js and served from GitHub Pages on a custom domain.

- **Static export**: `next build` produces plain HTML/CSS/JS in `out/`. No server, nothing to patch.
- **Loads before JavaScript**: all content is in the server HTML; animations are CSS only.
- **Self-hosted assets**: skill icons, photo, fonts and CV are served from the site itself.
- **SEO**: canonical URL, Open Graph / Twitter cards, JSON-LD `Person` + `WebSite`, sitemap, robots.
- **CMS-driven**: projects, skills, services, journey, certificates and site settings come from Sanity.
  `src/data/profile.ts` is the fallback used when the CMS has no content.

## Project structure

```
src/
  app/            layout (metadata, security headers, JSON-LD), page, global styles
  components/     hero, about, services, skills, projects, certifications, journey, contact, navbar, footer
  data/           profile.ts – fallback content
  lib/            sanity.ts – GROQ query + content merge, icons.ts
public/           icons/, avatar.jpg, cv.pdf, og.png, robots.txt, sitemap.xml, CNAME
studio/           Sanity Studio (schemas + config), deployed separately
.github/workflows deploy.yml – build and publish to GitHub Pages
```

## Development

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # static site in ./out
```

## Deployment

Every push to `main` runs the GitHub Actions workflow, which builds the site and publishes `out/` to
GitHub Pages. A daily scheduled run refreshes the prerendered HTML with the latest CMS content
(the browser also fetches live content on load, so edits are visible immediately).

## Security notes

- The site is static: no server code, no database credentials, no secrets in this repository.
- The CMS dataset is read-only to the public and exposes only published content; writes require an
  authenticated Sanity account. The Studio is a separate, login-protected app.
- A Content-Security-Policy and referrer policy are declared in the document head.
- The GitHub Actions workflow runs with least-privilege permissions; dependencies are updated by Dependabot.

## License

MIT © Ayoub Jama Khalid
