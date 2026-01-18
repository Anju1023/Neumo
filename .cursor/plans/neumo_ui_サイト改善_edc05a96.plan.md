---
name: Neumo UI サイト改善
overview: ドキュメントサイトにライブデモ機能を追加し、ランディングページの骨組みを作成。デザインはGeminiに依頼する形で進める。
todos:
  - id: live-demo-component
    content: ComponentPreviewコンポーネントを作成（コード + プレビュー表示）
    status: completed
  - id: add-neumo-ui-dep
    content: apps/docsにneumo-uiを依存関係として追加
    status: completed
  - id: register-mdx
    content: mdx-components.tsxにComponentPreviewを登録
    status: completed
  - id: update-docs
    content: button.mdxなどにライブデモを追加
    status: completed
  - id: landing-skeleton
    content: ランディングページの骨組み（セクション構成）を作成
    status: completed
  - id: landing-components
    content: 各セクションコンポーネント（Hero, Features等）を作成
    status: completed
  - id: gemini-design
    content: Geminiからデザイン案を受け取り、スタイルを適用
    status: completed
---

# Neumo UI サイト改善プラン

## 概要

ドキュメントサイトの充実とランディングページ作成を並行で進める。

- 私（Claude）: 技術実装、骨組み作り、ライブデモ機能
- Gemini: デザイン案、ビジュアル、レイアウト提案

---

## Phase 1: ライブデモ機能の実装

### 1.1 ComponentPreviewコンポーネント作成

コードとプレビューを並べて表示するコンポーネントを作成。

**作成ファイル:** `apps/docs/components/ui/component-preview.tsx`

```tsx
// イメージ
<ComponentPreview>
  <Preview>
    <Button variant="primary">Click me</Button>
  </Preview>
  <Code>
    {`<Button variant="primary">Click me</Button>`}
  </Code>
</ComponentPreview>
```

### 1.2 neumo-uiをdocsに追加

[apps/docs/package.json](apps/docs/package.json) に neumo-ui を依存関係として追加し、コンポーネントをインポートできるようにする。

### 1.3 MDXコンポーネント登録

[apps/docs/mdx-components.tsx](apps/docs/mdx-components.tsx) に `ComponentPreview` を追加し、MDXファイルから使えるようにする。

### 1.4 ドキュメント更新

`content/docs/components/*.mdx` にライブデモを追加。例: [apps/docs/content/docs/components/button.mdx](apps/docs/content/docs/components/button.mdx)

---

## Phase 2: ランディングページの骨組み作成

### 2.1 セクション構成

[apps/docs/app/(home)/page.tsx](apps/docs/app/\\(home)/page.tsx) を以下のセクション構成で作成:

```
1. HeroSection - キャッチコピー + CTA
2. FeaturesSection - 4つの特徴
3. ShowcaseSection - コンポーネントのデモ
4. CodeExampleSection - 使用例コード
5. InstallSection - インストール方法
6. Footer - リンク集
```

### 2.2 各セクションコンポーネント

**作成ディレクトリ:** `apps/docs/components/landing/`

- `hero-section.tsx`
- `features-section.tsx`
- `showcase-section.tsx`
- `code-example-section.tsx`
- `install-section.tsx`

### 2.3 仮スタイリング

Geminiのデザイン待ちの間、最小限のスタイルで骨組みだけ作成。後からデザイン適用しやすい構造にする。

---

## Phase 3: Geminiとの連携

### 3.1 デザイン要件書

既に作成済み: [docs/design-requirements.md](docs/design-requirements.md)

### 3.2 Geminiへの依頼内容

1. ランディングページのワイヤーフレーム/デザイン案
2. カラー・タイポグラフィの提案
3. コンポーネントショーケースのアイデア

### 3.3 デザイン反映

Geminiからデザイン案を受け取ったら、骨組みにスタイルを適用。

---

## ファイル構成（新規作成）

```
apps/docs/
├── components/
│   ├── ui/
│   │   └── component-preview.tsx    # ライブデモ用
│   └── landing/
│       ├── hero-section.tsx
│       ├── features-section.tsx
│       ├── showcase-section.tsx
│       ├── code-example-section.tsx
│       └── install-section.tsx
```

---

## 実装順序

```mermaid
flowchart TD
    A[Phase 1: ライブデモ機能] --> B[1.1 ComponentPreview作成]
    B --> C[1.2 neumo-ui依存追加]
    C --> D[1.3 MDX登録]
    D --> E[1.4 ドキュメント更新]
    
    F[Phase 2: ランディングページ] --> G[2.1 骨組み作成]
    G --> H[2.2 セクションコンポーネント]
    
    I[Phase 3: Geminiデザイン] --> J[3.1 デザイン待ち]
    J --> K[3.2 スタイル適用]
    
    E --> L[完成]
    H --> J
    K --> L
```

---

## 注意点

- Fumadocs v16 + Next.js 16 + React 19 環境
- Tailwind CSS v4 を使用
- neumo-ui のスタイル（`neumo-ui/styles.css`）をdocsでも読み込む必要あり