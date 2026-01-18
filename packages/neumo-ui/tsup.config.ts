import { defineConfig } from "tsup";

export default defineConfig({
  // エントリーポイント
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
    js: "/* Neumo UI - Neumorphism 2.0 Component Library */",
  },
});
