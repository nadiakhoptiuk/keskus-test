import withPlaiceholder from '@plaiceholder/next';

/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  staticPageGenerationTimeout: 120,

  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        port: '',
      },
    ],
    deviceSizes: [480, 768, 1080, 1280, 1440, 1920, 2048, 3840],
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

export default withPlaiceholder(nextConfig);
