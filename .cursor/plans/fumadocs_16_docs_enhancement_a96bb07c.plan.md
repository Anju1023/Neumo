---
name: Fumadocs 16 Docs Enhancement
overview: Fumadocs 16の機能（Tabs, Steps, Callout, TypeTable, Cards等）を最大限活用して、Neumo UIのドキュメントをより詳細でわかりやすく改善する
todos:
  - id: install-deps
    content: fumadocs-typescriptパッケージをインストール
    status: completed
  - id: update-mdx-components
    content: mdx-components.tsxにTabs, Steps, Callout, TypeTableを追加
    status: completed
  - id: update-index
    content: index.mdxをSteps, Callout, Cardsで強化
    status: completed
  - id: update-installation
    content: installation.mdxをSteps, Tabs, Calloutで改善
    status: completed
  - id: update-button
    content: button.mdxにTypeTable, Callout, icon追加
    status: completed
  - id: update-card
    content: card.mdxにTypeTable, Callout, icon追加
    status: completed
  - id: update-input
    content: input.mdxにTypeTable, Callout, icon追加
    status: completed
  - id: update-avatar
    content: avatar.mdxにTypeTable, Callout, icon追加
    status: completed
  - id: update-badge
    content: badge.mdxにTypeTable, Callout, icon追加
    status: completed
  - id: update-divider
    content: divider.mdxにTypeTable, Callout, icon追加
    status: completed
  - id: update-meta
    content: meta.jsonにicon, description追加
    status: completed
  - id: test-build
    content: ビルドとプレビューでテスト
    status: completed
---

# Fumadocs 16 DocsPage 機能最大活用プラン

## 現状の課題

- PropsテーブルがMarkdownの手動テーブルで書かれている
- インストール手順がプレーンなコードブロック
- 重要な注意点が目立っていない
- frontmatterの情報が最小限

## 改善アプローチ

### 1. 追加パッケージのインストール

`fumadocs-typescript`を追加してTypeTable機能を有効化

```bash
pnpm add fumadocs-typescript -D
```

### 2. MDXコンポーネントの拡張 ([mdx-components.tsx](apps/docs/mdx-components.tsx))

以下のFumadocs標準コンポーネントを追加:

- `Tabs` / `Tab` - パッケージマネージャー切り替え
- `Steps` / `Step` - 手順の視覚化
- `Callout` - 重要な情報の強調
- `TypeTable` - Props自動生成
- `Accordions` / `Accordion` - FAQ等の折り畳み

### 3. ドキュメント構造の統一

各コンポーネントドキュメントを以下の形式に統一:

```mdx
---
title: コンポーネント名
description: 説明
icon: アイコン名
---

import { Callout, TypeTable, Tabs, Tab } from 'fumadocs-ui/components/...';

# コンポーネント名

<Callout type="info">概要や重要なポイント</Callout>

## インポート
## 基本的な使い方
## バリアント
## サイズ
## Props
<TypeTable type={...} />
## アクセシビリティ
<Callout type="warn">注意点</Callout>
```

### 4. 各ファイルの改善内容

#### [installation.mdx](apps/docs/content/docs/installation.mdx)

- `<Steps>` でインストール手順を視覚化
- `<Tabs>` でnpm/pnpm/yarn/bunの切り替え
- `<Callout type="info">` で前提条件を明示
- `<Callout type="warn">` でスタイルのインポート忘れ注意

#### [index.mdx](apps/docs/content/docs/index.mdx)

- 機能一覧に `<Cards>` をより効果的に活用
- `<Steps>` でクイックスタート手順を追加
- `<Callout>` で特徴を強調

#### コンポーネントドキュメント (Button, Card, Input, Avatar, Badge, Divider)

- frontmatterに `icon` 追加
- Propsセクションを `<TypeTable>` で自動生成（型ファイルから）
- `<Callout type="info">` でデザインのポイント説明
- `<Callout type="warn">` でよくある間違いの注意
- 「関連コンポーネント」セクションを `<Cards>` で追加

### 5. 型ファイルの準備

TypeTableが参照できるよう、コンポーネントの型ファイルへのパスを確認:

- [Button.types.ts](packages/neumo-ui/src/components/Button/Button.types.ts)
- 同様に各コンポーネント

### 6. meta.json の強化 ([meta.json](apps/docs/content/docs/meta.json))

```json
{
  "title": "Neumo UI",
  "description": "ニューモフィズム2.0デザインのUIライブラリ",
  "icon": "Palette",
  "pages": ["index", "installation", "...components"]
}
```

## 改善前後の比較例 (installation.mdx)

**Before:**

```markdown
## パッケージのインストール
お好みのパッケージマネージャーでインストール...
```

**After:**

```mdx
<Callout type="info">
React 18以上、TypeScript 5.0以上が必要です
</Callout>

<Steps>
  <Step>
    ### パッケージをインストール
    <Tabs items={['npm', 'pnpm', 'yarn', 'bun']} persist groupId="pm">
      <Tab value="npm">npm install neumo-ui</Tab>
      <Tab value="pnpm">pnpm add neumo-ui</Tab>
      ...
    </Tabs>
  </Step>
  <Step>
    ### スタイルをインポート
    <Callout type="warn">この手順を忘れるとスタイルが適用されません</Callout>
    ...
  </Step>
</Steps>
```

## ファイル変更一覧

| ファイル | 変更内容 |

|---------|---------|

| package.json | fumadocs-typescript追加 |

| mdx-components.tsx | Fumadocsコンポーネント追加 |

| index.mdx | Steps, Callout, Cards強化 |

| installation.mdx | Steps, Tabs, Callout追加 |

| components/*.mdx (6件) | TypeTable, Callout, icon追加 |

| meta.json (2件) | icon, description追加 |