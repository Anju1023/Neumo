import { forwardRef } from "react";
import type { InputProps } from "./Input.types";

/**
 * ニューモフィズムスタイルの入力フィールドコンポーネント
 * フォーカス時にinsetシャドウでへこむ効果
 */
export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      size = "md",
      error = false,
      errorMessage,
      leftIcon,
      rightIcon,
      disabled,
      className = "",
      ...props
    },
    ref
  ) => {
    // サイズ別スタイル
    const sizeStyles: Record<string, string> = {
      sm: "h-9 text-sm px-3",
      md: "h-11 text-base px-4",
      lg: "h-13 text-lg px-5",
    };

    // アイコンがある場合のパディング調整
    const iconPaddingStyles = {
      left: leftIcon ? "pl-10" : "",
      right: rightIcon ? "pr-10" : "",
    };

    // エラー状態のスタイル
    const errorStyles = error
      ? "ring-2 ring-(--neumo-error,#d63031)"
      : "";

    return (
      <div className="relative w-full">
        {/* 左アイコン */}
        {leftIcon && (
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-(--neumo-text-muted,#636e72)">
            {leftIcon}
          </span>
        )}

        {/* 入力フィールド */}
        <input
          ref={ref}
          disabled={disabled}
          className={`
            w-full
            bg-(--neumo-bg,#e0e5ec)
            text-(--neumo-text,#2d3436)
            placeholder:text-(--neumo-text-muted,#636e72)
            rounded-(--neumo-radius-md,12px)
            shadow-(--neumo-inset-1)
            border-none
            outline-none
            transition-all duration-200 ease-out
            focus:shadow-(--neumo-inset-2)
            focus:ring-2 focus:ring-(--neumo-primary,#6c5ce7) focus:ring-opacity-50
            disabled:opacity-50 disabled:cursor-not-allowed
            ${sizeStyles[size]}
            ${iconPaddingStyles.left}
            ${iconPaddingStyles.right}
            ${errorStyles}
            ${className}
          `}
          {...props}
        />

        {/* 右アイコン */}
        {rightIcon && (
          <span className="absolute right-3 top-1/2 -translate-y-1/2 text-(--neumo-text-muted,#636e72)">
            {rightIcon}
          </span>
        )}

        {/* エラーメッセージ */}
        {error && errorMessage && (
          <p className="mt-1.5 text-sm text-(--neumo-error,#d63031)">
            {errorMessage}
          </p>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";
