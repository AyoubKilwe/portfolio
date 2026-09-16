import type { NextConfig } from "next";

const basePath = process.env.BASE_PATH || "";

const nextConfig: NextConfig = {
  // Set BASE_PATH=/portfolio when hosting under ayoubkilwe.github.io/portfolio.
  // Leave it empty for a custom domain (e.g. ayoubkilwe.dev).
  basePath,
  assetPrefix: basePath || undefined,
  // Static export: works on GitHub Pages, Cloudflare Pages, Netlify or any static host.
  output: "export",
  images: { unoptimized: true },
  trailingSlash: true,
};

export default nextConfig;
