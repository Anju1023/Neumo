# @neumo/ui

ニューモフィズムデザインのReact/Next.js向けUIコンポーネントライブラリ

## 特徴

- **ニューモフィズム2.0** - 高コントラストでアクセシビリティに配慮したモダンなデザイン
- **Tailwind CSS v4対応** - CSS変数によるカスタマイズが簡単
- **TypeScript完全サポート** - 型安全なコンポーネント
- **Tree-shaking対応** - 使用するコンポーネントのみをバンドル

## インストール

```bash
npm install @neumo/ui
# or
yarn add @neumo/ui
# or
pnpm add @neumo/ui
```

## 前提条件

- React >= 18.0.0
- Tailwind CSS >= 4.0.0

## セットアップ

### 1. Tailwind CSSの設定

```ts
// tailwind.config.ts
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@neumo/ui/**/*.{js,mjs}",
  ],
};

export default config;
```

### 2. CSSのインポート

```css
@import "tailwindcss";
@import "@neumo/ui/styles.css";
```

## 使用方法

```tsx
import { Button, Card, Input } from "@neumo/ui";

export default function Example() {
  return (
    <Card>
      <Input placeholder="名前を入力" />
      <Button variant="primary">送信</Button>
    </Card>
  );
}
```

## コンポーネント

### Button

```tsx
<Button variant="default">Default</Button>
<Button variant="primary">Primary</Button>
<Button variant="ghost">Ghost</Button>
<Button size="sm">Small</Button>
<Button loading>Loading</Button>
```

### Card

```tsx
<Card variant="elevated">Elevated</Card>
<Card variant="flat">Flat</Card>
<Card variant="inset">Inset</Card>
```

### Input

```tsx
<Input placeholder="入力" />
<Input error errorMessage="エラー" />
<Input leftIcon={<SearchIcon />} />
```

### Avatar

```tsx
<Avatar src="/avatar.jpg" alt="User" />
<Avatar size="lg" variant="rounded" />
```

### Badge

```tsx
<Badge variant="success">Success</Badge>
<Badge variant="error">Error</Badge>
```

### Divider

```tsx
<Divider />
<Divider orientation="vertical" />
```

## カスタマイズ

CSS変数を上書きしてテーマをカスタマイズできます：

```css
:root {
  --neumo-bg: #e0e5ec;
  --neumo-primary: #6c5ce7;
  --neumo-shadow-light: rgba(255, 255, 255, 0.8);
  --neumo-shadow-dark: rgba(163, 177, 198, 0.6);
}
```

## ライセンス

MIT
