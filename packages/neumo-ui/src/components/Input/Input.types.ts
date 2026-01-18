import { InputHTMLAttributes, ReactNode } from "react";

/**
 * Inputコンポーネントのサイズ
 */
export type InputSize = "sm" | "md" | "lg";

/**
 * Inputコンポーネントのprops
 */
export interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "size"> {
  /** インプットのサイズ */
  size?: InputSize;
  /** エラー状態 */
  error?: boolean;
  /** エラーメッセージ */
  errorMessage?: string;
  /** 左側のアイコン */
  leftIcon?: ReactNode;
  /** 右側のアイコン */
  rightIcon?: ReactNode;
}
