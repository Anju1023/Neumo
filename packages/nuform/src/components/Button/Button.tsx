import { forwardRef } from "react";
import type { ButtonProps, ButtonVariant, ButtonSize } from "./Button.types";

/**
 * バリアントごとのTailwindクラス
 */
const variantClasses: Record<ButtonVariant, string> = {
  default: "bg-nuform-bg text-nuform-text nuform-elevation-1",
  primary: "bg-nuform-primary text-white nuform-elevation-1",
  ghost: "bg-transparent text-nuform-text shadow-none",
};

/**
 * サイズごとのTailwindクラス
 */
const sizeClasses: Record<ButtonSize, string> = {
  sm: "px-nuform-sm py-nuform-xs text-nuform-sm rounded-nuform-sm gap-nuform-xs",
  md: "px-nuform-md py-nuform-sm text-nuform-md rounded-nuform-md gap-nuform-sm",
  lg: "px-nuform-lg py-nuform-md text-nuform-lg rounded-nuform-lg gap-nuform-sm",
};

/**
 * ベースのTailwindクラス
 */
const baseClasses =
  "inline-flex items-center justify-center border-none cursor-pointer font-medium transition-all outline-none select-none";

/**
 * 無効時のTailwindクラス
 */
const disabledClasses = "opacity-50 cursor-not-allowed !shadow-none";

/**
 * ローディングスピナーコンポーネント
 * aria-hidden: スクリーンリーダーから隠す（装飾的な要素のため）
 */
const LoadingSpinner = () => (
  <svg
    className="animate-nuform-spin"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M21 12a9 9 0 1 1-6.219-8.56" />
  </svg>
);

/**
 * Buttonコンポーネント
 *
 * ニューモフィズム2.0デザインのボタンコンポーネント
 * ホバーで浮き上がり、クリックで押し込まれるエフェクト
 *
 * @example
 * ```tsx
 * <Button variant="primary" size="md">
 *   Click me
 * </Button>
 * ```
 */
export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = "default",
      size = "md",
      loading = false,
      disabled = false,
      leftIcon,
      rightIcon,
      children,
      className,
      ...props
    },
    ref
  ) => {
    // インタラクティブかどうか（ホバー/アクティブ/フォーカス効果を適用するか）
    const isInteractive = !disabled && !loading;

    // ホバー/アクティブ効果のクラス
    const interactionClasses = isInteractive
      ? variant !== "ghost"
        ? "hover:nuform-elevation-hover active:nuform-elevation-active focus:nuform-focus-ring"
        : "hover:bg-nuform-bg/50 focus:nuform-focus-ring" // ghostバリアントにもフォーカスリング
      : "";

    // クラスを結合
    const buttonClasses = [
      baseClasses,
      variantClasses[variant],
      sizeClasses[size],
      disabled || loading ? disabledClasses : "",
      interactionClasses,
      className,
    ]
      .filter(Boolean)
      .join(" ");

    return (
      <button
        ref={ref}
        disabled={disabled || loading}
        className={buttonClasses}
        aria-busy={loading ? "true" : undefined}
        aria-disabled={disabled || loading ? "true" : undefined}
        {...props}
      >
        {/* ローディング時はスピナーを表示 */}
        {loading ? (
          <>
            <LoadingSpinner />
            {/* スクリーンリーダー用のローディングテキスト */}
            <span className="sr-only">読み込み中</span>
          </>
        ) : (
          <>
            {leftIcon && <span aria-hidden="true">{leftIcon}</span>}
            {children}
            {rightIcon && <span aria-hidden="true">{rightIcon}</span>}
          </>
        )}
      </button>
    );
  }
);

Button.displayName = "Button";
