/** @type {import('next').NextConfig} */
import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

const nextConfig = {
  turbopack: {
    root: __dirname,
  },
  /** Sharper full-bleed photos: larger breakpoints + WebP before AVIF (AVIF can look bandy on some photos). */
  images: {
    formats: ["image/webp", "image/avif"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 2560, 3840, 4480],
  },
};

export default nextConfig;
