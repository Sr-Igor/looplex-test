/* eslint-disable @typescript-eslint/no-var-requires */

/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    formats: ["image/avif", "image/webp"],
  },
  compiler: {
    styledComponents: true,
    removeConsole: {
      exclude: ["error"],
    },
  },
  transpilePackages: ["@pqina/pintura", "@pqina/react-pintura"],
  env: {
    NEXTAUTH_SECRET: "looplex-auth-secret",
    GOOGLE_CLIENT_ID:
      "32523114486-f9h96pude3t0ff449675okb5qfvp7nn6.apps.googleusercontent.com",
    GOOGLE_CLIENT_SECRET: "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",
    GITHUB_ID: "a92235a4be1b92117694",
    GITHUB_SECRET: "7de41250b7e3b2db4373d577933aa5565c2f5b35",
  },
};
