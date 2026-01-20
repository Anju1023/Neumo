import { forwardRef, useId } from "react";
import type { InputProps, InputSize } from "./Input.types";

/**
 * サイズごとのTailwindクラス
 */
const sizeClasses: Record<InputSize, string> = {
  sm: "px-nuform-sm py-nuform-xs text-nuform-sm rounded-nuform-sm",
  md: "px-nuform-md py-nuform-sm text-nuform-md rounded-nuform-md",
  lg: "px-nuform-lg py-nuform-md text-nuform-lg rounded-nuform-lg",
};

/**
 * ベースのTailwindクラス
 */
const baseClasses =
  "w-full bg-nuform-bg text-nuform-text border-none nuform-elevation-inset-sm transition-all outline-none";

/**
 * フォーカス時のTailwindクラス
 */
const focusClasses = "focus:nuform-elevation-inset focus:nuform-focus-ring";

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
      leftIcon ? "pl-[calc(theme(spacing.nuform-lg)+8px)]" : "",
      rightIcon ? "pr-[calc(theme(spacing.nuform-lg)+8px)]" : "",
    ]
      .filter(Boolean)
      .join(" ");

    // エラー時のクラス（フォーカス時のスタイルを上書き）
    const errorClasses = error
      ? "shadow-[var(--nuform-elevation-inset-sm),_0_0_0_2px_theme(colors.nuform-error)] focus:shadow-[var(--nuform-elevation-inset),_0_0_0_2px_theme(colors.nuform-error)]"
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
      <div className="flex flex-col gap-nuform-xs">
        {/* ラベル */}
        {label && (
          <label
            htmlFor={inputId}
            className="text-nuform-sm font-medium text-nuform-text"
          >
            {label}
          </label>
        )}

        {/* インプットコンテナ */}
        <div className="relative flex items-center">
          {/* 左アイコン */}
          {leftIcon && (
            <span
              className="absolute left-nuform-sm flex items-center justify-center text-nuform-text-muted pointer-events-none"
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
            aria-invalid={error ? "true" : undefined}
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
              className="absolute right-nuform-sm flex items-center justify-center text-nuform-text-muted pointer-events-none"
              aria-hidden="true"
            >
              {rightIcon}
            </span>
          )}
        </div>

        {/* エラーメッセージ */}
        {error && errorMessage && (
          <span id={errorId} className="text-nuform-xs text-nuform-error" role="alert">
            {errorMessage}
          </span>
        )}

        {/* ヘルパーテキスト */}
        {!error && helperText && (
          <span id={helperId} className="text-nuform-xs text-nuform-text-muted">
            {helperText}
          </span>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";
