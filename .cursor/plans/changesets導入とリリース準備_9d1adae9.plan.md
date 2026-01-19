---
name: Changesets導入とリリース準備
overview: Changesetsをモノレポに導入し、npm公開に向けたリリース管理の基盤を整える。リポジトリURLも正しいものに修正する。
todos:
  - id: install-changesets
    content: "@changesets/cli をインストール"
    status: completed
  - id: init-changesets
    content: changeset init で初期化
    status: completed
  - id: config-changesets
    content: ".changeset/config.json を編集（access: public, ignore: docs）"
    status: completed
  - id: add-scripts
    content: ルート package.json にリリーススクリプト追加
    status: completed
  - id: fix-repo-url
    content: neumo-ui の package.json でリポジトリURL修正
    status: completed
---

# Changesets導入とリリース準備

## 背景

npm パッケージ公開に向けて、バージョン管理とChangelog生成を自動化するためChangesetsを導入する。

## 実装内容

### 1. Changesets CLIのインストール

ルートの `package.json` に devDependency として追加:

```bash
pnpm add -Dw @changesets/cli
```

### 2. Changesets初期化

```bash
pnpm changeset init
```

これで `.changeset/` フォルダが作成される。

### 3. Changesets設定ファイルの編集

[.changeset/config.json](.changeset/config.json) を以下のように設定:

```json
{
  "$schema": "https://unpkg.com/@changesets/config@3.1.1/schema.json",
  "changelog": "@changesets/cli/changelog",
  "commit": false,
  "fixed": [],
  "linked": [],
  "access": "public",
  "baseBranch": "main",
  "updateInternalDependencies": "patch",
  "ignore": ["docs"]
}
```

- `access: "public"` - npm に公開パッケージとして登録
- `baseBranch: "main"` - メインブランチ
- `ignore: ["docs"]` - ドキュメントサイトは公開対象外

### 4. ルート package.json にスクリプト追加

[package.json](package.json) に以下を追加:

```json
{
  "scripts": {
    "changeset": "changeset",
    "version-packages": "changeset version",
    "release": "pnpm build:lib && changeset publish"
  }
}
```

### 5. neumo-ui の package.json 修正

[packages/neumo-ui/package.json](packages/neumo-ui/package.json) のリポジトリURLを修正:

```json
{
  "repository": {
    "type": "git",
    "url": "https://github.com/Anju1023/Neumo.git",
    "directory": "packages/neumo-ui"
  },
  "bugs": {
    "url": "https://github.com/Anju1023/Neumo/issues"
  },
  "homepage": "https://github.com/Anju1023/Neumo#readme"
}
```

## 使い方（導入後）

### 変更を記録する時

```bash
pnpm changeset
```

対話形式でパッケージ選択、バージョンタイプ（patch/minor/major）選択、変更内容を記述。

### リリースする時

```bash
pnpm version-packages  # バージョン更新 + CHANGELOG生成
pnpm release           # ビルド + npm公開
```

## ファイル変更一覧

| ファイル | 変更内容 |

|---------|---------|

| `package.json` | devDependencies追加、scripts追加 |

| `.changeset/config.json` | 新規作成（init後に編集） |

| `.changeset/README.md` | 自動生成 |

| `packages/neumo-ui/package.json` | repository, bugs, homepage 修正 |