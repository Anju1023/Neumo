# neumo-ui

ニューモフィズム2.0デザインに基づいたモダンなReact UIコンポーネントライブラリ

## インストール

```bash
npm install neumo-ui
```

## 使い方

```tsx
import { Button, Card, Input, Badge, Avatar, Divider } from 'neumo-ui';
import 'neumo-ui/styles.css';
```

## コンポーネント

- **Button** - ニューモフィズムボタン（variant: default/primary/ghost）
- **Card** - カードコンテナ（variant: elevated/flat/inset）
- **Input** - 入力フィールド（type: text/email/password/number/search）
- **Avatar** - プロフィール画像（自動イニシャル生成）
- **Badge** - ステータスラベル（variant: default/success/warning/error/info）
- **Divider** - 区切り線（orientation: horizontal/vertical）

## 開発

```bash
# watchモード（開発時）
pnpm dev

# ビルド
pnpm build

# テスト
pnpm test

# リント
pnpm lint
```

## ドキュメント

詳細なドキュメントは http://localhost:3000 で確認できる（ルートから `pnpm dev` で起動）。

## ライセンス

MIT
