import type { NextConfig } from "next";

const repo = "ME";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  output: "export",
  basePath: `/${repo}`,
  assetPrefix: `/${repo}/`,
  images: { unoptimized: true }
};

export default nextConfig;
