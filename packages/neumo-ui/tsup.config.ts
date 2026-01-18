import { defineConfig } from "tsup";

// tsup設定: ESM/CJS両対応のビルド
export default defineConfig({
  entry: ["src/index.ts"],
  format: ["cjs", "esm"],
  dts: true,
  splitting: false,
  sourcemap: true,
  clean: true,
  external: ["react", "react-dom", "tailwindcss"],
  // CSSファイルを別ファイルとして出力
  injectStyle: false,
});
