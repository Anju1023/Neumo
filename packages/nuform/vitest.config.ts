import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    // テスト環境（DOM）
    environment: "jsdom",

    // グローバルAPIを有効化（describe, it, expectなど）
    globals: true,

    // セットアップファイル
    setupFiles: ["./src/test-setup.ts"],

    // テストファイルのパターン
    include: ["src/**/*.test.{ts,tsx}"],

    // カバレッジ設定
    coverage: {
      provider: "v8",
      reporter: ["text", "json", "html"],
      exclude: [
        "node_modules/",
        "dist/",
        "**/*.d.ts",
        "**/*.test.{ts,tsx}",
        "**/index.ts",
      ],
      // カバレッジしきい値（下回るとテスト失敗）
      thresholds: {
        lines: 70,
        functions: 70,
        branches: 70,
        statements: 70,
      },
    },
  },
});
