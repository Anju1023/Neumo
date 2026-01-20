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