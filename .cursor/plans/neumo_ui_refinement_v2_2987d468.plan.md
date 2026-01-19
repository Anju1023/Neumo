---
name: neumo_ui_refinement_v2
overview: 既存コンポーネントのデザインとコード品質を改善し、より洗練された「大人なニューモフィズム」を実現します。シャドウの色調調整、ハードコードの排除、グラデーションの廃止を行います。
todos:
  - id: update-shadow-color
    content: "index.css: シャドウカラーの彩度を落としてグレー寄りに変更"
    status: completed
  - id: fix-card-hardcode
    content: "Card.tsx: border色のハードコードを修正"
    status: completed
  - id: fix-badge-shadow
    content: "Badge.tsx: 色付き影を削除し、標準影に統一"
    status: completed
  - id: fix-avatar-gradient
    content: "Avatar.tsx: グラデーション背景を廃止し、シンプル化"
    status: completed
---

# デザイン＆コード品質改善計画 v2

あんじゅさんのGOサインが出たので、既存コンポーネントを一気に洗練させていくよ！
「シンプル・大人っぽく」をキーワードに、以下の4点を改善します。

## 1. シャドウカラーの調整 (大人なグレーへ)

青みの強い影から、無彩色のグレーに変更して、どんなデザインにも馴染むようにします。

- **ファイル**: `packages/neumo-ui/src/styles/index.css`
- **変更**:
- `--neumo-shadow-dark`: `rgba(174, 190, 205, 0.5)` → `rgba(166, 175, 186, 0.5)` (彩度を落としたグレー)
- ダークモード用も合わせて微調整します。

## 2. Badgeの影色を統一 (シンプル化)

色付きの影をやめて、標準の影に統一します。色は背景色だけで表現します。

- **ファイル**: `packages/neumo-ui/src/components/Badge/Badge.tsx`
- **変更**:
- `variantClasses` の `success`, `warning`, `error`, `info` から `shadow-[...]` の記述を削除。
- 代わりに共通の `neumo-elevation-1` (またはサイズに合わせて調整) を適用。

## 3. Cardのハードコード修正 (保守性UP)

直接書かれた色コードを変数に置き換えます。

- **ファイル**: `packages/neumo-ui/src/components/Card/Card.tsx`
- **変更**:
- `variantClasses` の `flat` にある `border-[rgba(163,177,198,0.6)] `を `border-neumo-text-muted` または適切なボーダー色変数に変更。

## 4. Avatarのグラデーション廃止 (フラット化)

イニシャル表示の背景をグラデーションから単色（または落ち着いたトーン）に変更します。

- **ファイル**: `packages/neumo-ui/src/components/Avatar/Avatar.tsx`
- **変更**:
- `bg-linear-to-br from-neumo-primary to-neumo-info` を `bg-neumo-bg` (凹ませる) や `bg-neumo-primary` (単色) など、よりシンプルなスタイルに変更。
- 今回は「凹んでる」表現(`neumo-elevation-inset`)にして、文字色をアクセントカラーにするのが一番「ニューモフィズムっぽい」かも！

## 実行順序

1. `index.css` で全体のシャドウ色を調整
2. `Card` のハードコード修正
3. `Badge` の影修正
4. `Avatar` のグラデーション廃止

よし、これで一気にクオリティ上げるよ～！✨