import type { HTMLAttributes, ReactNode } from "react";

/**
 * Cardコンポーネントのバリアント
 * - elevated: 浮き上がったカード（デフォルト）
 * - flat: フラットなカード（シャドウなし）
 * - inset: 凹んだカード
 */
export type CardVariant = "elevated" | "flat" | "inset";

/**
 * Cardコンポーネントのパディングサイズ
 */
export type CardPadding = "none" | "sm" | "md" | "lg";

/**
 * Cardコンポーネントのプロパティ
 */
export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  /** カードのバリアント */
  variant?: CardVariant;

  /** パディングサイズ */
  padding?: CardPadding;

  /** カードの中身 */
  children: ReactNode;
}
