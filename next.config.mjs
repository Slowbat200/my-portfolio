/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "api.microlink.io", // Microlink Image Preview
    ],
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.(mp3|wav|png|jpg|gif)$/i,
    });
    return config
  },
};

export default nextConfig;
