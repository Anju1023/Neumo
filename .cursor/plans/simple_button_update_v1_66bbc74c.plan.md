---
name: simple_button_update_v1
overview: ボタンのホバー時に上に動くアニメーションを削除し、シンプルで洗練されたデザインに変更します。ユーザーの「シンプルでおしゃれ」な方向性に合わせます。
todos:
  - id: update-css
    content: スタイル定義(index.css)からホバー時の移動アニメーションを削除
    status: completed
  - id: update-button
    content: Buttonコンポーネントからホバー時の移動クラスを削除
    status: completed
---

# シンプルおしゃれなボタンへ！

あんじゅさんの要望に合わせて、ボタンがホバー時にぴょこっと動くアニメーションを削除して、落ち着いた大人のニューモフィズムデザインにするよ！

## 変更内容

### 1. スタイル定義の更新

- **ファイル**: `packages/neumo-ui/src/styles/index.css`
- **内容**: `neumo-elevation-hover` ユーティリティクラスから `transform: translateY(-2px)` を削除します。これにより、物理的な浮上感をなくし、影の変化のみでホバーを表現します。

### 2. ボタンコンポーネントの更新

- **ファイル**: `packages/neumo-ui/src/components/Button/Button.tsx`
- **内容**: `hover:-translate-y-px` クラスを削除します。

## 期待される効果

- ボタンがホバー時に動かなくなり、よりフラットでモダンな印象になります。
- 「シンプルの方がおしゃれ」というコンセプトに近づきます。

まずはこの変更を行って、様子を見てみよう！
その後、もし他にも「ここを変えたい！」って部分があったらどんどん教えてね！