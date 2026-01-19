import js from "@eslint/js";
import tseslint from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";

/**
 * ESLint Flat Config for Neumo UI
 * @see https://eslint.org/docs/latest/use/configure/configuration-files-new
 */
export default [
  // 無視するファイル（最初に定義するのが重要！）
  {
    ignores: [
      "dist/**",
      "node_modules/**",
      "coverage/**",
      "*.config.*",
      "**/*.d.ts",
    ],
  },

  // 基本のJavaScript推奨設定
  js.configs.recommended,

  // TypeScript & React設定
  {
    files: ["src/**/*.{ts,tsx}"],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    plugins: {
      "@typescript-eslint": tseslint,
      react: react,
      "react-hooks": reactHooks,
    },
    rules: {
      // TypeScript推奨ルール
      ...tseslint.configs.recommended.rules,

      // React Hooks ルール
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "warn",

      // React設定（React 17+のJSX Transform対応）
      "react/react-in-jsx-scope": "off",
      "react/prop-types": "off",

      // TypeScript固有の調整
      "@typescript-eslint/no-unused-vars": [
        "error",
        { argsIgnorePattern: "^_" },
      ],
      "@typescript-eslint/explicit-function-return-type": "off",
      "@typescript-eslint/explicit-module-boundary-types": "off",

      // 未定義変数のチェック（TypeScriptが担当するのでオフ）
      "no-undef": "off",
    },
    settings: {
      react: {
        version: "detect",
      },
    },
  },

  // テストファイル用の設定
  {
    files: ["src/**/*.test.{ts,tsx}"],
    rules: {
      // テストファイルでは一部ルールを緩和
      "@typescript-eslint/no-explicit-any": "off",
    },
  },
];
