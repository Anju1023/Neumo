# Neumo

ニューモフィズムデザインのReact/Next.js向けUIコンポーネントライブラリ

## パッケージ

| パッケージ | 説明 |
|-----------|------|
| [@neumo/ui](./packages/neumo-ui) | UIコンポーネントライブラリ |
| [docs](./apps/docs) | Fumadocsドキュメントサイト |

## 開発

### 前提条件

- Node.js >= 22
- pnpm >= 9

### セットアップ

```bash
# 依存関係のインストール
pnpm install

# 開発サーバー起動
pnpm dev

# ドキュメントサイト起動
pnpm docs:dev

# ビルド
pnpm build
```

## プロジェクト構造

```
neumo/
├── packages/
│   └── neumo-ui/          # UIコンポーネントライブラリ
│       ├── src/
│       │   ├── components/
│       │   └── styles/
│       └── package.json
├── apps/
│   └── docs/              # Fumadocsドキュメントサイト
│       ├── content/docs/
│       └── package.json
├── pnpm-workspace.yaml
└── package.json
```

## ライセンス

MIT
