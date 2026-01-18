import { forwardRef, useId } from "react";
import type { InputProps, InputSize } from "./Input.types";

/**
 * サイズごとのTailwindクラス
 */
const sizeClasses: Record<InputSize, string> = {
  sm: "px-neumo-sm py-neumo-xs text-neumo-sm rounded-neumo-sm",
  md: "px-neumo-md py-neumo-sm text-neumo-md rounded-neumo-md",
  lg: "px-neumo-lg py-neumo-md text-neumo-lg rounded-neumo-lg",
};

/**
 * ベースのTailwindクラス
 */
const baseClasses =
  "w-full bg-neumo-bg text-neumo-text border-none neumo-elevation-inset-sm transition-all outline-none";

/**
 * フォーカス時のTailwindクラス
 */
const focusClasses = "focus:neumo-elevation-inset focus:neumo-focus-ring";

/**
 * 無効時のTailwindクラス
 */
const disabledClasses = "disabled:opacity-50 disabled:cursor-not-allowed";

/**
 * Inputコンポーネント
 *
 * ニューモフィズム2.0デザインのインプットコンポーネント
 * 凹んだ（inset）デザインで、フォーカス時に深くなるエフェクト
 *
 * @example
 * ```tsx
 * <Input
 *   label="Email"
 *   type="email"
 *   placeholder="Enter your email"
 *   helperText="We'll never share your email"
 * />
 * ```
 */
export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      type = "text",
      size = "md",
      error = false,
      errorMessage,
      disabled = false,
      leftIcon,
      rightIcon,
      label,
      helperText,
      className,
      ...props
    },
    ref
  ) => {
    // ユニークIDの生成（アクセシビリティ用）
    const generatedId = useId();
    const inputId = props.id || generatedId;
    const errorId = `${inputId}-error`;
    const helperId = `${inputId}-helper`;

    // アイコンがある場合のパディングクラス
    const iconPaddingClasses = [
      leftIcon ? "pl-[calc(theme(spacing.neumo-lg)+8px)]" : "",
      rightIcon ? "pr-[calc(theme(spacing.neumo-lg)+8px)]" : "",
    ]
      .filter(Boolean)
      .join(" ");

    // エラー時のクラス（フォーカス時のスタイルを上書き）
    const errorClasses = error
      ? "shadow-[var(--neumo-elevation-inset-sm),_0_0_0_2px_theme(colors.neumo-error)] focus:shadow-[var(--neumo-elevation-inset),_0_0_0_2px_theme(colors.neumo-error)]"
      : "";

    // インプットのクラスを結合
    const inputClasses = [
      baseClasses,
      sizeClasses[size],
      !error ? focusClasses : "",
      errorClasses,
      disabledClasses,
      iconPaddingClasses,
      className,
    ]
      .filter(Boolean)
      .join(" ");

    return (
      <div className="flex flex-col gap-neumo-xs">
        {/* ラベル */}
        {label && (
          <label
            htmlFor={inputId}
            className="text-neumo-sm font-medium text-neumo-text"
          >
            {label}
          </label>
        )}

        {/* インプットコンテナ */}
        <div className="relative flex items-center">
          {/* 左アイコン */}
          {leftIcon && (
            <span
              className="absolute left-neumo-sm flex items-center justify-center text-neumo-text-muted pointer-events-none"
              aria-hidden="true"
            >
              {leftIcon}
            </span>
          )}

          {/* インプット */}
          <input
            ref={ref}
            id={inputId}
            type={type}
            disabled={disabled}
            aria-invalid={error}
            aria-describedby={
              error && errorMessage
                ? errorId
                : helperText
                  ? helperId
                  : undefined
            }
            className={inputClasses}
            {...props}
          />

          {/* 右アイコン */}
          {rightIcon && (
            <span
              className="absolute right-neumo-sm flex items-center justify-center text-neumo-text-muted pointer-events-none"
              aria-hidden="true"
            >
              {rightIcon}
            </span>
          )}
        </div>

        {/* エラーメッセージ */}
        {error && errorMessage && (
          <span id={errorId} className="text-neumo-xs text-neumo-error" role="alert">
            {errorMessage}
          </span>
        )}

        {/* ヘルパーテキスト */}
        {!error && helperText && (
          <span id={helperId} className="text-neumo-xs text-neumo-text-muted">
            {helperText}
          </span>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";
