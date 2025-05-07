import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        hostname: "images.dog.ceo",
      },
    ],
  },
};

export default nextConfig;
