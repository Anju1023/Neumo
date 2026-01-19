---
name: neumo_ui_toast_implementation
overview: 新しい「Toast」コンポーネントを実装します。トーストのUI作成、コンテキストとフックによる状態管理、ライブラリのエクスポート設定を含みます。
todos:
  - id: implement-toast-ui
    content: ToastコンポーネントのUI実装 (Toast.tsx, types.ts)
    status: completed
  - id: implement-toast-context
    content: Toastの状態管理ロジック実装 (Context, Provider)
    status: completed
  - id: implement-use-toast
    content: useToastフックの実装
    status: completed
  - id: export-toast-module
    content: ライブラリのエクスポート設定 (index.ts)
    status: completed
---

# Toast コンポーネント実装計画

あんじゅさん、お待たせ！
さっきの改善でデザインが洗練されたから、いよいよ新しい**Toast（通知）コンポーネント**を作るよ！

## 概要

画面の右下にフワッと出てくる、おしゃれな通知機能です。
`useToast` フックを使って、どこからでも簡単に呼び出せるように設計するね。

## 実装ステップ

### 1. Toast UIコンポーネントの作成

- **ディレクトリ**: `packages/neumo-ui/src/components/Toast/`
- **ファイル**: `Toast.tsx`, `Toast.types.ts`, `index.ts`
- **内容**:
    - `ToastProps`: `title`, `description`, `variant` (success, error, info), `onClose` など。
    - デザイン: `neumo-elevation-2` で浮き上がらせて、右からスライドインするアニメーションをつけるよ。
    - さっき追加してくれた `animate-neumo-slide-in-right` をここで使うね！

### 2. Toast Context & Provider の実装

- **ファイル**: `packages/neumo-ui/src/components/Toast/ToastContext.tsx`, `ToastProvider.tsx`
- **内容**:
    - アプリ全体でトーストの状態（表示中か、内容は何か）を管理する仕組み。
    - 複数のトーストが重ならないように、リストで管理して順番に表示させるよ。

### 3. useToast フックの実装

- **ファイル**: `packages/neumo-ui/src/components/Toast/useToast.ts`
- **内容**:
    - `const { toast } = useToast()` って書くだけで使える便利なフック。

### 4. エクスポート設定

- **ファイル**: `packages/neumo-ui/src/index.ts`
- **内容**:
    - `Toast`, `ToastProvider`, `useToast` を外から使えるように公開します。

これで、ボタンを押した時とかに「保存しました！」ってフワッと出せるようになるよ✨