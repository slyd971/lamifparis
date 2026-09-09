import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Modern formats first — the browser picks AVIF/WebP when supported.
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
