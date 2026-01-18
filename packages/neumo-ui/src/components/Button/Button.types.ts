import type { ButtonHTMLAttributes, ReactNode } from "react";

/**
 * Buttonコンポーネントのバリアント
 * - default: 標準のニューモフィズムボタン
 * - primary: プライマリカラーのボタン
 * - ghost: 背景なしの透明ボタン
 */
export type ButtonVariant = "default" | "primary" | "ghost";

/**
 * Buttonコンポーネントのサイズ
 * - sm: 小サイズ
 * - md: 中サイズ（デフォルト）
 * - lg: 大サイズ
 */
export type ButtonSize = "sm" | "md" | "lg";

/**
 * Buttonコンポーネントのプロパティ
 */
export interface ButtonProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "children"> {
  /** ボタンのバリアント */
  variant?: ButtonVariant;

  /** ボタンのサイズ */
  size?: ButtonSize;

  /** ローディング状態 */
  loading?: boolean;

  /** 左側のアイコン */
  leftIcon?: ReactNode;

  /** 右側のアイコン */
  rightIcon?: ReactNode;

  /** ボタンの中身 */
  children: ReactNode;
}
