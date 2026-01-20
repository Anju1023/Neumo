import { defineConfig } from "tsup";

export default defineConfig({
  // エントリーポイント（JSのみ、CSSは別途postcssでビルド）
  entry: ["src/index.ts"],

  // 出力形式（ESM & CommonJS）
  format: ["esm", "cjs"],

  // 型定義ファイルを生成
  dts: true,

  // ソースマップを生成
  sourcemap: true,

  // distフォルダをクリーン
  clean: true,

  // 外部依存（バンドルに含めない）
  external: ["react", "react-dom"],

  // 本番ビルドで圧縮
  minify: true,

  // コード分割を有効化
  splitting: true,

  // ターゲット環境
  target: "es2022",

  // バナーコメント
  banner: {
    js: "/* Nuform - Neumorphism 2.0 Component Library */",
  },

  // ビルド成功後にCSSをビルド
  // styles.css: 単独使用用（Tailwind込み）
  // theme.css: 他フレームワーク統合用（Tailwindなし、テーマ変数のみ）
  onSuccess:
    "pnpm exec tailwindcss -i src/styles/index.css -o dist/styles.css --minify && pnpm exec tailwindcss -i src/styles/theme.css -o dist/theme.css --minify",
});
