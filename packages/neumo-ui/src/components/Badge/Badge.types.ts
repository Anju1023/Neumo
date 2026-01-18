import { HTMLAttributes, ReactNode } from "react";

/**
 * Badgeコンポーネントのバリアント
 */
export type BadgeVariant = "default" | "success" | "warning" | "error" | "info";

/**
 * Badgeコンポーネントのサイズ
 */
export type BadgeSize = "sm" | "md";

/**
 * Badgeコンポーネントのprops
 */
export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  /** バッジのバリアント */
  variant?: BadgeVariant;
  /** バッジのサイズ */
  size?: BadgeSize;
  /** 子要素 */
  children?: ReactNode;
}
