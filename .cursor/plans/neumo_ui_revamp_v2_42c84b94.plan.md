---
name: neumo_ui_revamp_v2
overview: Neumo UIを「令和のニューモフィズム」へ進化させるため、カラーパレットの刷新（透明感のあるブルーグレーベース）、日本語フォントの導入、およびマイクロインタラクションの改善を行います。
todos:
  - id: update-colors
    content: カラーパレットとシャドウ変数の更新 (packages/neumo-ui/src/styles/index.css)
    status: completed
  - id: add-font
    content: 日本語フォント (Noto Sans JP) の導入 (apps/docs/app/layout.tsx)
    status: completed
  - id: enhance-hero
    content: ヒーローセクションへの背景アニメーション追加 (apps/docs/components/landing/hero-section.tsx)
    status: completed
  - id: verify-changes
    content: 変更内容の確認とビルドチェック
    status: completed
---

Neumo UIのデザインを全面的にブラッシュアップし、よりモダンで魅力的なUIライブラリへと進化させます。

### 1. デザインシステムの刷新 (Color & Typography)

カラーパレットを見直し、アクセシビリティと美しさを両立させます。

- **ターゲットファイル**: `packages/neumo-ui/src/styles/index.css`
- **変更内容**:
    - **背景色**: `#e0e5ec` → **`#EEF2F6`** (青みのあるクリアなグレー) に変更し、透明感を演出。
    - **Primaryカラー**: `#6366f1` → **`#4F46E5`** (Indigo-600) に変更。コントラスト比を高め、信頼感と視認性を向上させます。
    - **テキストカラー**: `#2d3748` → **`#334155`** (Slate-700) に変更し、背景色との調和を図ります。
    - **アクセントカラー**: Success/Warning/Errorも彩度を統一し、モダンなトーンに調整します。

### 2. 日本語フォントの導入

- **ターゲットファイル**: `apps/docs/app/layout.tsx`
- **変更内容**:
    - `next/font/google` から **`Noto Sans JP`** を導入し、日本語の表示を美しく整えます。

### 3. マイクロインタラクションとシャドウの改善

ニューモフィズムの肝である「質感」を向上させます。

- **ターゲットファイル**: `packages/neumo-ui/src/styles/index.css`
- **変更内容**:
    - シャドウの色味を新しい背景色に合わせて調整（青みを足す）。
    - `transition` を調整し、押した時の「物理的な沈み込み感」と、離した時の「ふわりとした戻り」を表現します。

### 4. ヒーローセクションの演出強化

- **ターゲットファイル**: `apps/docs/components/landing/hero-section.tsx`
- **変更内容**:
    - 背景にゆっくり動くグラデーションオーブ（Blob）を追加し、静的な印象を払拭して「浮遊感」を演出します。