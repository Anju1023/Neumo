import { defineDocs, defineConfig } from "fumadocs-mdx/config";

// ドキュメントのソース設定
export const docs = defineDocs({
  dir: "content/docs",
});

export default defineConfig();
