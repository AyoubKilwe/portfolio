import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static export: works on GitHub Pages, Cloudflare Pages, Netlify or any static host.
  output: "export",
  images: { unoptimized: true },
  trailingSlash: true,
};

export default nextConfig;
