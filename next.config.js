/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true,
  },
  images: {
    domains: ["res.cloudinary.com"],
  },

  webpack: (config, { isServer }) => {
    // Adjust webpack configuration here
    if (!isServer) {
      config.resolve.fallback = { fs: false, module: false };
    }

    return config;
  },
};

module.exports = nextConfig;
