# Nuform - 要件定義書

## 1. プロジェクト概要

### 1.1 プロジェクト名
**Nuform** - ニューモフィズムUIコンポーネントライブラリ

### 1.2 目的
React / Next.js アプリケーションで使用できる、ニューモフィズム2.0デザインに基づいたモダンなUIコンポーネントライブラリを提供する。

### 1.3 対象ユーザー
- React / Next.js を使用するフロントエンド開発者
- ドキュメント、日記、SNSなどのアプリケーションを開発する人
- モダンで柔らかいUIデザインを求める人

### 1.4 配布形態
- npm パッケージとして公開
- ローカルプロジェクトでの利用も可能

---

## 2. 技術スタック

| カテゴリ | 技術 | バージョン |
|---------|------|-----------|
| フレームワーク | React | 19.x |
| スタイリング | Tailwind CSS | v4 |
| ビルドツール | tsup (esbuild) | 最新 |
| 言語 | TypeScript | 5.x |
| テスト | Vitest + React Testing Library | 最新 |
| ドキュメント | Fumadocs + Next.js | 16.x |
| パッケージ管理 | pnpm | 最新 |
| リリース管理 | Changesets | 最新 |
| Node.js | Node.js | 22以上 |

---

## 3. プロジェクト構造

```
nuform/
├── packages/
│   └── nuform/                # コンポーネントライブラリ本体
│       ├── src/
│       │   ├── components/    # UIコンポーネント
│       │   │   ├── Button/
│       │   │   ├── Card/
│       │   │   ├── Input/
│       │   │   ├── Avatar/
│       │   │   ├── Badge/
│       │   │   └── Divider/
│       │   ├── styles/        # 共通スタイル・トークン
│       │   │   └── tokens.css
│       │   └── index.ts       # エクスポート
│       ├── package.json
│       └── tsup.config.ts
├── apps/
│   └── docs/                  # Fumadocs ドキュメントサイト
│       ├── content/docs/      # MDX ドキュメント
│       ├── app/
│       ├── source.config.ts
│       └── package.json
├── pnpm-workspace.yaml
├── package.json
└── README.md
```

---

## 4. デザイントークン

### 4.1 ニューモフィズム2.0の原則
- **高コントラスト**: アクセシビリティを考慮した明確な視認性
- **選択的使用**: 全体ではなくアクセント的に使用
- **明確なインタラクション**: hover/active/focus 状態の区別

### 4.2 CSS変数（デザイントークン）

```css
:root {
  /* サーフェスカラー */
  --nuform-bg: #e0e5ec;
  --nuform-bg-dark: #1a1a2e;
  
  /* シャドウカラー */
  --nuform-shadow-light: rgba(255, 255, 255, 0.8);
  --nuform-shadow-dark: rgba(163, 177, 198, 0.6);
  
  /* エレベーション */
  --nuform-elevation-1: 
    4px 4px 8px var(--nuform-shadow-dark),
    -4px -4px 8px var(--nuform-shadow-light);
  --nuform-elevation-2: 
    6px 6px 12px var(--nuform-shadow-dark),
    -6px -6px 12px var(--nuform-shadow-light);
  --nuform-elevation-inset: 
    inset 4px 4px 8px var(--nuform-shadow-dark),
    inset -4px -4px 8px var(--nuform-shadow-light);
  
  /* 角丸 */
  --nuform-radius-sm: 8px;
  --nuform-radius-md: 12px;
  --nuform-radius-lg: 16px;
  --nuform-radius-full: 9999px;
  
  /* トランジション */
  --nuform-transition: 0.2s ease;
}
```

---

## 5. コンポーネント仕様

### Phase 1: 基本コンポーネント

#### 5.1 Button
- **バリアント**: default, primary, ghost
- **サイズ**: sm, md, lg
- **状態**: hover（浮き上がり）, active（押し込み）, disabled
- **Props**: variant, size, disabled, loading, leftIcon, rightIcon

#### 5.2 Card
- **バリアント**: elevated, flat, inset
- **Props**: variant, padding, className, children

#### 5.3 Input
- **タイプ**: text, password, email, number
- **状態**: default, focus（inset shadow）, error, disabled
- **Props**: type, placeholder, error, disabled, leftIcon, rightIcon

#### 5.4 Avatar
- **サイズ**: xs, sm, md, lg, xl
- **バリアント**: circle, rounded
- **Props**: src, alt, size, fallback

#### 5.5 Badge
- **バリアント**: default, success, warning, error, info
- **Props**: variant, children

#### 5.6 Divider
- **方向**: horizontal, vertical
- **Props**: orientation, className

---

## 6. 機能要件

### 6.1 必須機能
- [ ] Tailwind CSS v4 との統合（`@theme` directive対応）
- [ ] TypeScript 型定義の完全サポート
- [ ] Tree-shaking 対応（個別インポート可能）
- [ ] CSS変数によるカスタマイズ
- [ ] アクセシビリティ対応（WCAG 2.2 AA準拠）
- [ ] キーボードナビゲーション対応

### 6.2 ドキュメント機能
- [ ] Fumadocs によるドキュメントサイト
- [ ] 各コンポーネントの使用例（MDX）
- [ ] インタラクティブなプレビュー
- [ ] API リファレンス

---

## 7. 非機能要件

### 7.1 パフォーマンス
- バンドルサイズの最小化
- CSS shadow/filter の最適化
- 不要な再レンダリングの防止

### 7.2 互換性
- React 19+
- Next.js 15+ / 16+
- Tailwind CSS v4

### 7.3 配布
- ESM / CommonJS 両対応
- npm パッケージとして公開
- `exports` フィールドによるサブパスエクスポート

---

## 8. 将来の拡張（Phase 2以降）

### 8.1 ダークモード対応
- `prefers-color-scheme` 対応
- テーマ切り替えコンポーネント

### 8.2 フォーム系コンポーネント
- Select / Dropdown
- Checkbox / Radio
- Toggle / Switch
- Textarea

### 8.3 ナビゲーション系コンポーネント
- Navbar
- Sidebar
- Tabs
- Breadcrumb

### 8.4 Markdown対応コンポーネント
- Markdown エディタ
- Markdown ビューア
- コードブロック（シンタックスハイライト）

---

## 9. 開発ロードマップ

### Phase 1（初期リリース）
1. プロジェクトセットアップ（モノレポ構造）
2. デザイントークンの定義
3. 基本コンポーネント6種の実装
4. Fumadocs ドキュメントサイト構築
5. npm パッケージ公開

### Phase 2
1. ダークモード対応
2. フォーム系コンポーネント追加
3. テストカバレッジ向上

### Phase 3
1. ナビゲーション系コンポーネント
2. Markdown対応コンポーネント
3. アニメーション強化

---

## 10. 参考資料

- [Tailwind CSS v4 Documentation](https://tailwindcss.com/docs)
- [Fumadocs Documentation](https://fumadocs.dev)
- [Neumorphism Design Guidelines](https://neumorphism.io)
- [WCAG 2.2 Accessibility Guidelines](https://www.w3.org/WAI/WCAG22/quickref/)
