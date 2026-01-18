import { createMDX } from "fumadocs-mdx/next";

/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
};

// Fumadocs MDXプラグインを適用
export default createMDX()(config);
