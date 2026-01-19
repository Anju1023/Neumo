---
name: npm公開準備
overview: GitHubリンク修正、LICENSEファイル追加、npm公開の準備を行う。実際の公開は行わない。
todos:
  - id: fix-github-url
    content: hero-section.tsxのGitHubリンクを修正
    status: completed
  - id: add-license
    content: LICENSEファイルをプロジェクトルートに追加
    status: completed
  - id: verify-package
    content: package.jsonのメタデータとビルド確認
    status: completed
  - id: commit
    content: 変更をコミット
    status: completed
---

# npm公開準備プラン

## 1. GitHubリポジトリURLの修正

[apps/docs/components/landing/hero-section.tsx](apps/docs/components/landing/hero-section.tsx) のGitHubリンクを修正。

**変更箇所:**

```tsx
// Before
href="https://github.com/your-repo/neumo-ui"

// After
href="https://github.com/Anju1023/Neumo"
```

## 2. LICENSEファイルの追加

プロジェクトルートにMITライセンスファイルを作成。

**作成ファイル:** `LICENSE`

## 3. npm公開準備の確認

以下の項目をチェック:

- [packages/neumo-ui/package.json](packages/neumo-ui/package.json) のメタデータ確認
  - `name`: neumo-ui
  - `version`: 0.1.0
  - `license`: MIT
  - `repository`, `bugs`, `homepage` のURL

- ビルドが正常に完了するか確認
- `pnpm changeset status` で状態確認

## 4. コミット

全ての変更をコミットして完了。