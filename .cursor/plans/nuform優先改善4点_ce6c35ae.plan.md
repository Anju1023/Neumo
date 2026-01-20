---
name: Nuform優先改善4点
overview: Toastテスト追加、バージョン表示統一、Aria-live対応、CI/CD設定の4つの優先改善を実施する。
todos:
  - id: toast-test
    content: Toast/ToastProvider/useToastのテストファイル作成
    status: completed
  - id: version-fix
    content: hero-section.tsxのバージョン表示を0.1.0に修正
    status: completed
  - id: aria-live
    content: ToastProviderにaria-live属性を追加
    status: completed
  - id: ci-workflow
    content: .github/workflows/ci.yml作成（lint/test/build）
    status: completed
  - id: release-workflow
    content: .github/workflows/release.yml作成（npm公開自動化）
    status: completed
---

# Nuform 優先度高4点の改善計画

## 1. Toastコンポーネントのテスト追加

現在、Toast関連ファイルにはテストがない。他コンポーネントと同様のテストを追加する。

**作成ファイル**: `packages/nuform/src/components/Toast/Toast.test.tsx`

**テスト項目**:

- Toast単体
                - 基本レンダリング（title, description）
                - 全バリアント（default, success, error, info, warning）
                - アイコン表示確認
                - 閉じるボタンのクリック
                - 自動クローズ（duration）
                - `role="alert"` の確認
- ToastProvider
                - toast()でToast追加
                - dismiss()でToast削除
                - 複数Toastの表示
- useToast
                - Provider外で使用時のエラー

**参考**: [Button.test.tsx](packages/nuform/src/components/Button/Button.test.tsx) の構成を踏襲

---

## 2. バージョン表示の統一

現状の不整合:

- ルート `package.json`: `0.0.0`
- `packages/nuform/package.json`: `0.1.0`
- hero-section.tsx 28行目: `v1.0.0`

**修正内容**:

- [hero-section.tsx](apps/docs/components/landing/hero-section.tsx) 28行目のバッジを動的に取得するか、実際のバージョン `v0.1.0` に修正
```tsx
// 修正前
<span className="font-bold">v1.0.0</span>

// 修正後
<span className="font-bold">v0.1.0</span>
```


---

## 3. Toast Aria-live対応（アクセシビリティ改善）

スクリーンリーダーが通知を読み上げるために必要な対応。

**修正ファイル**: [ToastProvider.tsx](packages/nuform/src/components/Toast/ToastProvider.tsx)

**修正内容**:

- Toastコンテナに `aria-live="polite"` と `role="region"` を追加
- 不要な `removeToast` 関数を整理
```tsx
// 修正前（44行目）
<div className="fixed bottom-0 right-0 z-50 ...">

// 修正後
<div 
  className="fixed bottom-0 right-0 z-50 ..."
  aria-live="polite"
  aria-label="Notifications"
>
```


---

## 4. CI/CD設定（GitHub Actions）

PR時のテスト・lint自動実行、mainマージ時のnpm公開自動化。

**作成ファイル**: `.github/workflows/ci.yml`

**ワークフロー内容**:

```yaml
name: CI
on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - checkout
      - setup pnpm
      - setup node (22.x)
      - pnpm install
      - pnpm lint
      - pnpm test
      - pnpm build
```

**作成ファイル**: `.github/workflows/release.yml`

**リリースワークフロー**:

- changesets/action を使用
- mainブランチへのpush時に実行
- NPM_TOKEN シークレット必要

---

## 実装順序

```mermaid
flowchart LR
    A[Toast_Test] --> B[Version_Fix]
    B --> C[Aria_Live]
    C --> D[CI_CD]
```

1. Toastテスト - 最も重要、カバレッジ向上
2. バージョン修正 - 1行の簡単な修正
3. Aria-live - アクセシビリティ改善
4. CI/CD - 今後の開発効率化

各ステップ完了後にテスト実行、最後にコミット。