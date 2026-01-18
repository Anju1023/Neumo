import type { InputHTMLAttributes, ReactNode } from "react";

/**
 * Inputコンポーネントのタイプ
 */
export type InputType = "text" | "password" | "email" | "number" | "search";

/**
 * Inputコンポーネントのサイズ
 */
export type InputSize = "sm" | "md" | "lg";

/**
 * Inputコンポーネントのプロパティ
 */
export interface InputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "size" | "type"> {
  /** インプットのタイプ */
  type?: InputType;

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

  /** ラベル */
  label?: string;

  /** ヘルパーテキスト */
  helperText?: string;
}
