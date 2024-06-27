/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  images: {
    formats: ['image/webp'],
    remotePatterns: [{
      protocol: 'https',
      hostname: 'picsum.photos',
      port: '',
      pathname: '/seed/**',
    }]
  },

  webpack: config => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });

    config.ignoreWarnings = [
      { module: /node_modules\/node-fetch\/lib\/index\.js/ },
      { file: /node_modules\/node-fetch\/lib\/index\.js/ },
    ];

    return config;
  },

};

module.exports = nextConfig;
