import { forwardRef } from "react";
import type { ButtonProps } from "./Button.types";

/**
 * ニューモフィズムスタイルのボタンコンポーネント
 * 押し込み/浮き上がりエフェクトを持つ
 */
export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = "default",
      size = "md",
      loading = false,
      leftIcon,
      rightIcon,
      disabled,
      className = "",
      children,
      ...props
    },
    ref
  ) => {
    // ベーススタイル
    const baseStyles = `
      inline-flex items-center justify-center
      font-medium
      transition-all duration-200 ease-out
      focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2
      disabled:opacity-50 disabled:cursor-not-allowed
    `;

    // サイズ別スタイル
    const sizeStyles: Record<string, string> = {
      sm: "px-3 py-1.5 text-sm rounded-lg gap-1.5",
      md: "px-4 py-2 text-base rounded-xl gap-2",
      lg: "px-6 py-3 text-lg rounded-xl gap-2.5",
    };

    // バリアント別スタイル（ニューモフィズム）
    const variantStyles: Record<string, string> = {
      default: `
        bg-(--neumo-bg,#e0e5ec)
        text-(--neumo-text,#2d3436)
        shadow-(--neumo-elevation-1)
        hover:shadow-(--neumo-elevation-2)
        active:shadow-(--neumo-inset-1)
      `,
      primary: `
        bg-(--neumo-primary,#6c5ce7)
        text-white
        shadow-[4px_4px_8px_rgba(108,92,231,0.4),-4px_-4px_8px_rgba(162,155,254,0.4)]
        hover:shadow-[6px_6px_12px_rgba(108,92,231,0.5),-6px_-6px_12px_rgba(162,155,254,0.5)]
        active:shadow-[inset_2px_2px_4px_rgba(0,0,0,0.2),inset_-2px_-2px_4px_rgba(255,255,255,0.1)]
      `,
      ghost: `
        bg-transparent
        text-(--neumo-text,#2d3436)
        hover:bg-(--neumo-bg,#e0e5ec)
        hover:shadow-(--neumo-elevation-1)
        active:shadow-(--neumo-inset-1)
      `,
    };

    // ローディングスピナー
    const LoadingSpinner = () => (
      <svg
        className="animate-spin h-4 w-4"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <circle
          className="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          strokeWidth="4"
        />
        <path
          className="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
        />
      </svg>
    );

    return (
      <button
        ref={ref}
        disabled={disabled || loading}
        className={`
          ${baseStyles}
          ${sizeStyles[size]}
          ${variantStyles[variant]}
          ${className}
        `}
        {...props}
      >
        {/* ローディング時はスピナーを表示 */}
        {loading && <LoadingSpinner />}
        
        {/* 左アイコン（ローディング中は非表示） */}
        {!loading && leftIcon && <span className="shrink-0">{leftIcon}</span>}
        
        {/* ボタンテキスト */}
        {children && <span>{children}</span>}
        
        {/* 右アイコン */}
        {rightIcon && <span className="shrink-0">{rightIcon}</span>}
      </button>
    );
  }
);

Button.displayName = "Button";
