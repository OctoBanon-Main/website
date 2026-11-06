import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",

  experimental: {
    useTypeScriptCli: true,
  },
};

export default nextConfig;
