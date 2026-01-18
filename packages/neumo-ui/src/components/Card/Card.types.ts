import { HTMLAttributes, ReactNode } from "react";

/**
 * Cardコンポーネントのバリアント
 */
export type CardVariant = "elevated" | "flat" | "inset";

/**
 * Cardコンポーネントのパディングサイズ
 */
export type CardPadding = "none" | "sm" | "md" | "lg";

/**
 * Cardコンポーネントのprops
 */
export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  /** カードのバリアント */
  variant?: CardVariant;
  /** カードのパディング */
  padding?: CardPadding;
  /** 子要素 */
  children?: ReactNode;
}
