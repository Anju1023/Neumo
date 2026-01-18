import { ButtonHTMLAttributes, ReactNode } from "react";

/**
 * Buttonコンポーネントのバリアント
 */
export type ButtonVariant = "default" | "primary" | "ghost";

/**
 * Buttonコンポーネントのサイズ
 */
export type ButtonSize = "sm" | "md" | "lg";

/**
 * Buttonコンポーネントのprops
 */
export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
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
  /** 子要素 */
  children?: ReactNode;
}
