# Nuform ドキュメントサイト

Nuformのドキュメントサイト。[Fumadocs](https://fumadocs.dev) + Next.js 16で構築。

## 起動方法

### 単体で起動

```bash
cd apps/docs
pnpm dev
```

### ルートから起動

```bash
# プロジェクトルートから
pnpm dev
```

http://localhost:3000 でドキュメントサイトが開く。

## ディレクトリ構成

```
apps/docs/
├── app/                    # Next.js App Router
│   ├── (home)/            # ランディングページ
│   ├── docs/              # ドキュメントページ
│   └── api/search/        # 検索API
├── components/            # コンポーネント
│   ├── landing/           # ランディングページ用
│   └── ui/                # UI用（プレビューなど）
├── content/docs/          # MDXコンテンツ
│   ├── index.mdx          # はじめに
│   ├── installation.mdx   # インストール
│   └── components/        # コンポーネントドキュメント
└── lib/                   # ユーティリティ
```

## コンテンツの編集

ドキュメントは `content/docs/` 内のMDXファイルを編集する。

### 新しいコンポーネントドキュメントを追加

1. `content/docs/components/` に新しいMDXファイルを作成
2. `content/docs/components/meta.json` にページを追加

## 参考リンク

- [Fumadocs](https://fumadocs.dev) - ドキュメントフレームワーク
- [Next.js](https://nextjs.org/docs) - Reactフレームワーク
