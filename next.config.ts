import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    // EdgeOne supports Next.js image optimization through standalone mode
    // No need to set unoptimized: true
    // path: '/jespers',
    domains: ['images.pexels.com'],
  },
};

export default nextConfig;
