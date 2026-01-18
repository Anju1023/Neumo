# Neumo UI

ニューモフィズム2.0デザインに基づいたモダンなReact UIコンポーネントライブラリ

## 特徴

- **ニューモフィズム2.0** - 高コントラストでアクセシブルなデザイン
- **React 19対応** - 最新のReact機能に対応
- **TypeScript** - 完全な型定義
- **Tree-shaking対応** - 必要なコンポーネントだけをバンドル
- **カスタマイズ可能** - CSS変数でスタイルを調整

## インストール

```bash
# npm
npm install neumo-ui

# pnpm
pnpm add neumo-ui

# yarn
yarn add neumo-ui
```

## 使い方

```tsx
import { Button, Card, Input, Badge, Avatar, Divider } from 'neumo-ui';
import 'neumo-ui/styles.css';

function App() {
  return (
    <div style={{ background: 'var(--neumo-bg)', minHeight: '100vh', padding: '2rem' }}>
      <Card>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <Avatar alt="User" size="lg" />
          <div>
            <h2>Welcome!</h2>
            <Badge variant="success">Active</Badge>
          </div>
        </div>
        
        <Divider />
        
        <Input label="Email" type="email" placeholder="Enter your email" />
        
        <div style={{ marginTop: '1rem', display: 'flex', gap: '0.5rem' }}>
          <Button variant="primary">Submit</Button>
          <Button variant="ghost">Cancel</Button>
        </div>
      </Card>
    </div>
  );
}
```

## コンポーネント

### Button

ニューモフィズムスタイルのボタン。ホバーで浮き上がり、クリックで押し込まれるエフェクト。

```tsx
<Button variant="default">Default</Button>
<Button variant="primary">Primary</Button>
<Button variant="ghost">Ghost</Button>
<Button size="sm">Small</Button>
<Button size="lg">Large</Button>
<Button loading>Loading...</Button>
```

### Card

コンテンツを囲むためのカードコンテナ。

```tsx
<Card variant="elevated">Elevated Card</Card>
<Card variant="flat">Flat Card</Card>
<Card variant="inset">Inset Card</Card>
```

### Input

凹んだデザインの入力フィールド。

```tsx
<Input label="Email" type="email" placeholder="Enter your email" />
<Input error errorMessage="Invalid email" />
```

### Avatar

ユーザーのプロフィール画像。画像がない場合はイニシャルを表示。

```tsx
<Avatar src="/avatar.jpg" alt="John Doe" />
<Avatar alt="John Doe" /> {/* イニシャル JD を表示 */}
```

### Badge

ステータスやカテゴリを表示するラベル。

```tsx
<Badge variant="success">Success</Badge>
<Badge variant="warning">Warning</Badge>
<Badge variant="error">Error</Badge>
```

### Divider

コンテンツを分割する区切り線。

```tsx
<Divider orientation="horizontal" />
<Divider orientation="vertical" />
```

## 開発

### プロジェクト構成

```
neumo/
├── apps/
│   └── docs/          # ドキュメントサイト (Fumadocs + Next.js)
├── packages/
│   └── neumo-ui/      # UIコンポーネントライブラリ
└── package.json       # ルートpackage.json
```

### セットアップ

```bash
# 依存関係のインストール
pnpm install

# ドキュメントサイトを起動（http://localhost:3000）
pnpm dev

# ライブラリのwatchモードを起動（コンポーネント開発時）
pnpm dev:lib
```

### コンポーネント開発時

ライブラリのコードを変更しながらドキュメントサイトで確認したい場合は、2つのターミナルで以下を実行：

```bash
# ターミナル1: ライブラリのwatchモード
pnpm dev:lib

# ターミナル2: ドキュメントサイト
pnpm dev:docs
```

### その他のコマンド

```bash
# ビルド（ライブラリ → ドキュメント）
pnpm build

# ライブラリのみビルド
pnpm build:lib

# テスト
pnpm test

# リント
pnpm lint

# クリーン
pnpm clean
```

## 技術スタック

- React 19
- TypeScript 5
- Tailwind CSS v4
- tsup (ビルド)
- Vitest (テスト)
- Fumadocs (ドキュメント)

## ライセンス

MIT
