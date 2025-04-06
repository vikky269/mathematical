import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        pathname: "/dhoecxgs7/image/upload/**", // Adjust the path if needed
      },
    ],
  },
};

export default nextConfig;
