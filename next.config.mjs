/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config) {
    config.module.rules.push({
      test: /\.(mp3|wav|png|jpg|gif)$/i,
    });
    return config
  },
};

export default nextConfig;
