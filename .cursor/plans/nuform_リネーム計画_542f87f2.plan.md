---
name: Nuform リネーム計画
overview: プロジェクト名を「Neumo UI」から「Nuform」に変更し、npmパッケージ名を「@anju/nuform」にリネームする。
todos:
  - id: rename-folder
    content: packages/neumo-ui を packages/nuform にリネーム
    status: completed
  - id: update-package-json
    content: 3つの package.json を更新（ルート、パッケージ、docs）
    status: completed
  - id: update-css-vars
    content: CSS変数とユーティリティクラスのプレフィックス変更（--neumo- → --nuform-）
    status: completed
  - id: update-imports
    content: import文の更新（neumo-ui → @anju/nuform）
    status: completed
  - id: update-docs
    content: ドキュメント内のテキスト変更（Neumo UI → Nuform）
    status: completed
  - id: build-test
    content: pnpm install && pnpm build && pnpm test で動作確認
    status: completed
  - id: commit
    content: 変更をコミット
    status: completed
---

# Nuform リネーム計画

## 概要

- **旧名**: Neumo UI / neumo-ui / neumo
- **新名**: Nuform / @anju/nuform / nuform
- **npm スコープ**: @anju

## 変更対象ファイル（約50ファイル）

### Phase 1: フォルダ名とパッケージ設定の変更

1. **フォルダ名のリネーム**

- `packages/neumo-ui/` → `packages/nuform/`

2. **package.json の更新**

- [package.json](package.json): 
- name: `"neumo"` → `"nuform"`
- scripts内の `--filter neumo-ui` → `--filter @anju/nuform`

- [packages/nuform/package.json](packages/neumo-ui/package.json):
- name: `"neumo-ui"` → `"@anju/nuform"`
- repository.directory: `"packages/neumo-ui"` → `"packages/nuform"`

- [apps/docs/package.json](apps/docs/package.json):
- dependencies: `"neumo-ui": "workspace:*"` → `"@anju/nuform": "workspace:*"`

### Phase 2: CSS変数とユーティリティクラスの変更

3. **CSS変数のプレフィックス変更** (`--neumo-` → `--nuform-`)

対象ファイル:

- [packages/nuform/src/styles/theme.css](packages/neumo-ui/src/styles/theme.css)
- [packages/nuform/src/styles/index.css](packages/neumo-ui/src/styles/index.css)

変更例:

- `--color-neumo-bg` → `--color-nuform-bg`
- `--neumo-elevation-1` → `--nuform-elevation-1`
- `@utility neumo-elevation-1` → `@utility nuform-elevation-1`
- `@keyframes neumo-spin` → `@keyframes nuform-spin`

4. **コンポーネント内のクラス名変更**

- [Divider.tsx](packages/neumo-ui/src/components/Divider/Divider.tsx)
- [Input.tsx](packages/neumo-ui/src/components/Input/Input.tsx)
- その他 `neumo-` クラスを参照しているファイル

### Phase 3: import文の更新

5. **docs内のimport文を変更** (`neumo-ui` → `@anju/nuform`)

対象ファイル (17ファイル):

- [apps/docs/components/ui/neumo-components.tsx](apps/docs/components/ui/neumo-components.tsx)
- [apps/docs/app/global.css](apps/docs/app/global.css)
- [apps/docs/content/docs/*.mdx](apps/docs/content/docs/) 内の各ファイル
- [apps/docs/components/landing/*.tsx](apps/docs/components/landing/) 内の各ファイル

### Phase 4: ドキュメント内のテキスト変更

6. **表示名の変更** (`Neumo UI` → `Nuform`)

対象ファイル:

- [README.md](README.md)
- [packages/nuform/README.md](packages/neumo-ui/README.md)
- [apps/docs/README.md](apps/docs/README.md)
- [apps/docs/content/docs/index.mdx](apps/docs/content/docs/index.mdx)
- [apps/docs/content/docs/installation.mdx](apps/docs/content/docs/installation.mdx)
- その他 landing ページのコンポーネント

### Phase 5: ビルド確認とテスト

7. **pnpm install** で依存関係を再解決
8. **pnpm build** でビルドが通ることを確認
9. **pnpm test** でテストが通ることを確認

### Phase 6: Git コミット

10. 全変更をコミット

## 注意点

- **破壊的変更**: このリネームは破壊的変更。既に npm に公開済みの場合、メジャーバージョンアップまたは新パッケージとしてリリースが必要
- **GitHub リポジトリ名**: 現在 `Anju1023/Neumo` だが、必要に応じて GitHub 側でもリネーム検討（コード変更後でOK）
- **pnpm-workspace.yaml**: `packages/*` のままで問題なし（フォルダ名変更のみ）

## 作業順序のポイント

フォルダ名を先に変更してから他のファイルを編集すると、パス参照がずれなくて済む