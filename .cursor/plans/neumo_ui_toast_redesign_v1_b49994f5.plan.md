---
name: neumo_ui_toast_redesign_v1
overview: Toastコンポーネントのデザインを刷新し、「AIっぽい」と言われた左側のボーダーを削除して、よりニューモーフィズムらしい洗練されたデザインに変更します。
todos:
  - id: remove-border
    content: Toast.tsxのvariantClassesからborder定義を削除する
    status: completed
  - id: style-icon-container
    content: アイコン周りのコンテナにニューモーフィズムスタイル（inset等）を適用する実装に変更する
    status: completed
  - id: update-close-button
    content: 閉じるボタンのホバースタイルをニューモーフィズム風に調整する
    status: completed
---

# Toastデザイン刷新プラン

## 概要

ユーザーからのフィードバックに基づき、Toastコンポーネントのデザインを改善します。特に「左の縁に色が入っている」デザインを廃止し、ニューモーフィズムの特徴である「凹凸」を活かしたデザインに変更します。

## 変更点

### 1. スタイルの変更 (`packages/neumo-ui/src/components/Toast/Toast.tsx`)

- **左ボーダーの削除**: `border-l-4` を削除し、フラットなカード形状にします。
- **アイコンエリアの強調**: アイコンを配置するエリアに `neumo-elevation-inset`（凹み効果）またはソフトな `neumo-elevation-1` を適用し、質感を出します。
- **バリアント表現**: 色の帯ではなく、アイコンの色と、必要に応じて背景色の微妙なティント（淡い色味）でステータス（Success, Error等）を表現します。

### 2. インタラクションの改善

- **閉じるボタン**: ホバー時に `neumo-elevation-1` で浮き上がるようなエフェクトを追加し、押しやすさと見た目の楽しさを向上させます。

## デザインイメージ

- 左側の太い線は廃止。
- アイコンは円形の凹み（または浮き出し）の中に配置。
- 全体は背景色 (`bg-neumo-bg`) をベースにし、シンプルかつ立体的。

## 手順

1. `Toast.tsx` の `variantClasses` を修正し、ボーダーを削除。
2. `VariantIcon` コンポーネント、またはそのラッパーのデザインを変更し、ニューモーフィズムスタイルを適用。
3. 閉じるボタンのスタイルを調整。
4. 変更後のコンポーネントを確認（ストーリーブック等がない場合は、ドキュメントサイト等で確認）。