import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Hostinger shared hosting serves static files, so the site is exported to `out/`.
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  poweredByHeader: false,
  reactStrictMode: true,
};

export default nextConfig;
