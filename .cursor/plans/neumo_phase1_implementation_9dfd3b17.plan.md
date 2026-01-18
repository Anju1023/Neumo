---
name: Neumo Phase1 Implementation
overview: Neumo UIライブラリのPhase 1実装 - モノレポセットアップから基本コンポーネント6種の実装、Fumadocsドキュメントサイト構築まで
todos:
  - id: setup-monorepo
    content: "Step 1: モノレポ環境セットアップ（git, pnpm workspace, 共通設定）"
    status: completed
  - id: setup-neumo-ui
    content: "Step 2: neumo-ui パッケージセットアップ（tsup, デザイントークン）"
    status: completed
  - id: implement-components
    content: "Step 3: 基本コンポーネント6種実装（Button, Card, Input, Avatar, Badge, Divider）"
    status: completed
  - id: setup-docs
    content: "Step 4: Fumadocs ドキュメントサイト構築"
    status: completed
  - id: publish-prep
    content: "Step 5: パッケージ公開準備（README, exports設定）"
    status: in_progress
---

# Neumo UI Phase 1 実装プラン

## 概要

要件定義書に基づき、ニューモフィズムUIコンポーネントライブラリ「Neumo」のPhase 1を実装する。

---

## Step 1: モノレポ環境セットアップ

### 1.1 Git初期化 & pnpm workspace設定

- `git init` でリポジトリ初期化
- `pnpm-workspace.yaml` 作成
- ルート `package.json` 作成

### 1.2 ディレクトリ構造作成

```
neumo/
├── packages/neumo-ui/
└── apps/docs/
```

### 1.3 共通設定ファイル

- `tsconfig.json`（ベース設定）
- `.gitignore`
- `.npmrc`

---

## Step 2: neumo-ui パッケージセットアップ

### 2.1 パッケージ初期化

- `packages/neumo-ui/package.json` 作成
- 依存関係インストール: `react`, `tailwindcss`, `typescript`

### 2.2 ビルド設定

- `tsup.config.ts` 作成（ESM/CJS出力）
- `tsconfig.json` 作成

### 2.3 デザイントークン定義

- `src/styles/tokens.css` 作成
- ニューモフィズム用CSS変数定義

---

## Step 3: 基本コンポーネント実装

各コンポーネントの構成:

```
src/components/[Component]/
├── [Component].tsx      # コンポーネント本体
├── [Component].types.ts # 型定義
└── index.ts             # エクスポート
```

### 3.1 Button

- バリアント: default, primary, ghost
- ニューモフィズムの押し込み/浮き上がりエフェクト

### 3.2 Card

- バリアント: elevated, flat, inset

### 3.3 Input

- フォーカス時のinsetシャドウ

### 3.4 Avatar

- 画像/フォールバック対応

### 3.5 Badge

- ステータス表示用

### 3.6 Divider

- 水平/垂直対応

---

## Step 4: Fumadocs ドキュメントサイト

### 4.1 Next.js 16 プロジェクト作成

- `apps/docs/` に作成
- Fumadocs インストール & 設定

### 4.2 ドキュメント構成

```
content/docs/
├── index.mdx           # はじめに
├── installation.mdx    # インストール
└── components/
    ├── button.mdx
    ├── card.mdx
    ├── input.mdx
    ├── avatar.mdx
    ├── badge.mdx
    └── divider.mdx
```

### 4.3 コンポーネントプレビュー

- MDX内でneumo-uiコンポーネントを表示

---

## Step 5: パッケージ公開準備

### 5.1 package.json 最終調整

- `exports` フィールド設定
- `peerDependencies` 設定
- `sideEffects` 設定

### 5.2 README.md 作成

- インストール方法
- 使用例

---

## 技術詳細

### 使用ライブラリ

- **React**: 19.x
- **Tailwind CSS**: v4（@theme directive）
- **tsup**: ビルド
- **Fumadocs**: ドキュメント
- **Next.js**: 16.x（docs用）

### ファイル出力形式

- ESM: `dist/index.mjs`
- CJS: `dist/index.js`
- Types: `dist/index.d.ts`
- CSS: `dist/styles.css`