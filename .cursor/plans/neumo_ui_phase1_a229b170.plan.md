---
name: Neumo UI Phase1
overview: Neumo UIはニューモフィズム2.0デザインに基づいたReact/Next.jsコンポーネントライブラリ。pnpm workspaceでモノレポ構造を構築し、Fumadocsでドキュメントサイトを作成、6つの基本コンポーネントを実装する。
todos:
  - id: setup-workspace
    content: pnpm workspaceのセットアップ（pnpm-workspace.yaml, root package.json, tsconfig.json）
    status: completed
  - id: create-fumadocs
    content: Fumadocsでドキュメントサイトを作成（pnpm create fumadocs-app）
    status: completed
  - id: setup-neumo-ui
    content: neumo-uiパッケージの作成とビルド設定（package.json, tsup.config.ts, tsconfig.json）
    status: completed
  - id: design-tokens
    content: デザイントークンの定義（tokens.css）
    status: completed
  - id: impl-button
    content: Buttonコンポーネントの実装
    status: completed
  - id: impl-card
    content: Cardコンポーネントの実装
    status: completed
  - id: impl-input
    content: Inputコンポーネントの実装
    status: completed
  - id: impl-avatar
    content: Avatarコンポーネントの実装
    status: completed
  - id: impl-badge
    content: Badgeコンポーネントの実装
    status: completed
  - id: impl-divider
    content: Dividerコンポーネントの実装
    status: completed
  - id: docs-setup
    content: ドキュメントページの作成（各コンポーネントのMDX）
    status: completed
  - id: testing
    content: テストの作成とカバレッジ確認
    status: completed
---

# Neumo UI Phase 1 実装プラン

## 技術スタック（最新版）

- **React**: 19.x
- **Next.js**: 16.x（Turbopackがデフォルト）
- **Tailwind CSS**: v4（PostCSS不要、`@import "tailwindcss"` 形式）
- **tsup**: 最新（ESM/CJS両対応）
- **TypeScript**: 5.x
- **Fumadocs**: 最新
- **pnpm**: 最新（v10+）

---

## Phase 1-1: プロジェクト初期化

### 1. pnpm workspaceのセットアップ

ルートディレクトリに以下を作成：

```yaml
# pnpm-workspace.yaml
packages:
  - "packages/*"
  - "apps/*"
```
```json
// package.json (root)
{
  "name": "neumo",
  "private": true,
  "scripts": {
    "dev": "pnpm -r dev",
    "build": "pnpm -r build",
    "lint": "pnpm -r lint",
    "test": "pnpm -r test"
  },
  "devDependencies": {
    "typescript": "^5.x"
  }
}
```

### 2. Fumadocsでドキュメントサイト作成

```bash
cd apps
pnpm create fumadocs-app docs
```

- フレームワーク: Next.js
- コンテンツソース: Fumadocs MDX

### 3. neumo-uiパッケージの作成

`packages/neumo-ui/` を手動で作成し、以下の構造を構築：

```
packages/neumo-ui/
├── src/
│   ├── components/
│   │   ├── Button/
│   │   ├── Card/
│   │   ├── Input/
│   │   ├── Avatar/
│   │   ├── Badge/
│   │   └── Divider/
│   ├── styles/
│   │   └── tokens.css
│   └── index.ts
├── package.json
├── tsconfig.json
└── tsup.config.ts
```

---

## Phase 1-2: デザイントークンの定義

`packages/neumo-ui/src/styles/tokens.css` にニューモフィズムのCSS変数を定義：

```css
:root {
  /* サーフェスカラー */
  --neumo-bg: #e0e5ec;
  
  /* シャドウカラー */
  --neumo-shadow-light: rgba(255, 255, 255, 0.8);
  --neumo-shadow-dark: rgba(163, 177, 198, 0.6);
  
  /* エレベーション（浮き出し/凹み） */
  --neumo-elevation-1: 4px 4px 8px var(--neumo-shadow-dark), -4px -4px 8px var(--neumo-shadow-light);
  --neumo-elevation-2: 6px 6px 12px var(--neumo-shadow-dark), -6px -6px 12px var(--neumo-shadow-light);
  --neumo-elevation-inset: inset 4px 4px 8px var(--neumo-shadow-dark), inset -4px -4px 8px var(--neumo-shadow-light);
  
  /* 角丸 */
  --neumo-radius-sm: 8px;
  --neumo-radius-md: 12px;
  --neumo-radius-lg: 16px;
  --neumo-radius-full: 9999px;
  
  /* トランジション */
  --neumo-transition: 0.2s ease;
}
```

---

## Phase 1-3: コンポーネント実装

### 各コンポーネントの構造

```
ComponentName/
├── ComponentName.tsx      # メインコンポーネント
├── ComponentName.types.ts # 型定義
└── index.ts              # エクスポート
```

### 実装順序

1. **Button** - バリアント(default/primary/ghost)、サイズ(sm/md/lg)、状態(hover/active/disabled/loading)
2. **Card** - バリアント(elevated/flat/inset)
3. **Input** - タイプ(text/password/email/number)、状態(focus/error/disabled)
4. **Avatar** - サイズ(xs/sm/md/lg/xl)、バリアント(circle/rounded)
5. **Badge** - バリアント(default/success/warning/error/info)
6. **Divider** - 方向(horizontal/vertical)

---

## Phase 1-4: ビルド設定

### tsup.config.ts

```ts
import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/index.ts'],
  format: ['esm', 'cjs'],
  dts: true,
  sourcemap: true,
  clean: true,
  external: ['react', 'react-dom'],
  minify: true,
});
```

### package.json (neumo-ui)

```json
{
  "name": "neumo-ui",
  "version": "0.1.0",
  "type": "module",
  "main": "dist/index.cjs",
  "module": "dist/index.js",
  "types": "dist/index.d.ts",
  "exports": {
    ".": {
      "import": "./dist/index.js",
      "require": "./dist/index.cjs"
    },
    "./styles.css": "./dist/styles.css"
  },
  "peerDependencies": {
    "react": ">=18",
    "react-dom": ">=18"
  }
}
```

---

## Phase 1-5: ドキュメント作成

`apps/docs/content/docs/` にMDXファイルを作成：

- `index.mdx` - 概要・インストール方法
- `installation.mdx` - 詳細なセットアップ手順
- `components/button.mdx` - Buttonコンポーネントのドキュメント
- `components/card.mdx` - Cardコンポーネントのドキュメント
- `components/input.mdx` - Inputコンポーネントのドキュメント
- `components/avatar.mdx` - Avatarコンポーネントのドキュメント
- `components/badge.mdx` - Badgeコンポーネントのドキュメント
- `components/divider.mdx` - Dividerコンポーネントのドキュメント

---

## 実行コマンドまとめ

```bash
# 1. pnpm初期化（ルート）
pnpm init

# 2. Fumadocsアプリ作成
mkdir apps && cd apps
pnpm create fumadocs-app docs

# 3. neumo-uiパッケージ作成
mkdir -p packages/neumo-ui/src
cd packages/neumo-ui
pnpm init

# 4. 依存関係インストール
pnpm add -D tsup typescript @types/react @types/react-dom
pnpm add -D vitest @testing-library/react @testing-library/jest-dom

# 5. ビルド&テスト
pnpm build
pnpm test
```

---

## 注意点

- **Tailwind CSS v4**: `@import "tailwindcss"` 形式を使用（PostCSS不要）
- **Next.js 16**: Turbopackがデフォルト、`proxy.ts`（旧middleware.ts）
- **pnpm v10**: `workspace:` プロトコルでローカルパッケージを参照
- **アクセシビリティ**: WCAG 2.2 AA準拠を意識（コントラスト比、キーボード操作）