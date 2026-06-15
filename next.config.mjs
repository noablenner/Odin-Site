/** @type {import('next').NextConfig} */

// On GitHub Pages the site is served from a sub-path (https://<user>.github.io/<repo>/).
// The CI workflow sets PAGES_BASE_PATH (e.g. "/Odin-Site"); locally it stays empty.
const basePath = process.env.PAGES_BASE_PATH || "";

const nextConfig = {
  reactStrictMode: true,
  // Static HTML export so the site can be hosted on GitHub Pages.
  output: "export",
  // next/image optimization is not available on a static host.
  images: { unoptimized: true },
  // Emit /route/index.html so deep links resolve on a static host.
  trailingSlash: true,
  // Exposed to components so unoptimized <Image> src can be prefixed manually
  // (next/image does not apply basePath to unoptimized images).
  env: { NEXT_PUBLIC_BASE_PATH: basePath },
  ...(basePath ? { basePath, assetPrefix: basePath } : {}),
};

export default nextConfig;
