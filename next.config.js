/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "files.edgestore.dev",
      },
      {
        protocol: "http",
        hostname: "files.edgestore.dev",
      },
    ],
  },
};

module.exports = nextConfig;
