---
name: アクセシビリティ改善
overview: WCAG 2.2 AA準拠に向けて、既存コンポーネントのアクセシビリティを強化し、eslint-plugin-jsx-a11yでリンターチェックを追加する。
todos:
  - id: add-sr-only
    content: sr-only ユーティリティクラスをCSSに追加
    status: completed
  - id: add-reduce-motion
    content: reduce-motion メディアクエリを追加
    status: completed
  - id: fix-button-spinner
    content: Buttonのローディングスピナーにa11y対応追加
    status: completed
  - id: fix-ghost-focus
    content: ghostバリアントにフォーカスリング追加
    status: completed
  - id: install-a11y-plugin
    content: eslint-plugin-jsx-a11y をインストール
    status: completed
  - id: configure-a11y-plugin
    content: ESLint設定にa11yプラグインを追加
    status: completed
  - id: verify-lint
    content: リントを実行して確認
    status: completed
---

# アクセシビリティ改善

## 現状分析

既に実装済みのアクセシビリティ対応:

- Button: `aria-busy`, `aria-disabled`, フォーカスリング
- Input: ラベル関連付け、`aria-invalid`, `aria-describedby`, エラーの `role="alert"`
- Avatar: `role="img"`, `aria-label`
- Divider: `role="separator"`, `aria-orientation`

## 実装内容

### 1. Button のローディングスピナー改善

[packages/neumo-ui/src/components/Button/Button.tsx](packages/neumo-ui/src/components/Button/Button.tsx)

スピナーにスクリーンリーダー用のテキストを追加:

```tsx
{loading ? (
  <>
    <LoadingSpinner />
    <span className="sr-only">読み込み中</span>
  </>
) : (
  // ...
)}
```

LoadingSpinnerに `aria-hidden="true"` を追加。

### 2. スクリーンリーダー用ユーティリティクラス追加

[packages/neumo-ui/src/styles/index.css](packages/neumo-ui/src/styles/index.css)

```css
@utility sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}
```

### 3. reduce-motion 対応

[packages/neumo-ui/src/styles/index.css](packages/neumo-ui/src/styles/index.css)

アニメーションを無効化するメディアクエリを追加:

```css
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

### 4. eslint-plugin-jsx-a11y の導入

アクセシビリティ違反を自動検出するESLintプラグインを追加。

```bash
pnpm --filter neumo-ui add -D eslint-plugin-jsx-a11y
```

[packages/neumo-ui/eslint.config.js](packages/neumo-ui/eslint.config.js) に設定追加:

```js
import jsxA11y from "eslint-plugin-jsx-a11y";

// configsに追加
jsxA11y.flatConfigs.recommended,
```

### 5. ghostバリアントのフォーカス対応

[packages/neumo-ui/src/components/Button/Button.tsx](packages/neumo-ui/src/components/Button/Button.tsx)

ghostバリアントにもフォーカスリングを追加:

```tsx
const interactionClasses =
  isInteractive
    ? variant !== "ghost"
      ? "hover:neumo-elevation-hover ... focus:neumo-focus-ring"
      : "hover:bg-neumo-bg/50 focus:neumo-focus-ring"  // ghostにもfocus追加
    : "";
```

## 変更ファイル一覧

| ファイル | 変更内容 |

|---------|---------|

| `Button.tsx` | ローディングスピナーのa11y改善、ghostフォーカス追加 |

| `index.css` | sr-only、reduce-motion追加 |

| `eslint.config.js` | jsx-a11yプラグイン追加 |

| `package.json` | eslint-plugin-jsx-a11y追加 |