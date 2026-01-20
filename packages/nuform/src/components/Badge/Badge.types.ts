import type { HTMLAttributes, ReactNode } from "react";

/**
 * Badgeコンポーネントのバリアント
 * - default: 標準バッジ
 * - success: 成功・完了状態
 * - warning: 警告状態
 * - error: エラー状態
 * - info: 情報表示
 */
export type BadgeVariant = "default" | "success" | "warning" | "error" | "info";

/**
 * Badgeコンポーネントのサイズ
 */
export type BadgeSize = "sm" | "md";

/**
 * Badgeコンポーネントのプロパティ
 */
export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  /** バッジのバリアント */
  variant?: BadgeVariant;

  /** バッジのサイズ */
  size?: BadgeSize;

  /** バッジの中身 */
  children: ReactNode;
}
