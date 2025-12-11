import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.pexels.com', // pour les images venant de pexel
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com', // pour les images venant de unsplash
      },
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com', // pour les images venant de Cloudinary
      },
    ],
  },
};

export default nextConfig;
