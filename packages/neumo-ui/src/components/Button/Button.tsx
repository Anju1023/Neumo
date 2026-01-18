import { forwardRef } from "react";
import type { ButtonProps, ButtonVariant, ButtonSize } from "./Button.types";

/**
 * バリアントごとのスタイル
 */
const variantStyles: Record<ButtonVariant, string> = {
  default: `
    background: var(--neumo-bg);
    color: var(--neumo-text);
    box-shadow: var(--neumo-elevation-1);
  `,
  primary: `
    background: var(--neumo-primary);
    color: white;
    box-shadow: var(--neumo-elevation-1);
  `,
  ghost: `
    background: transparent;
    color: var(--neumo-text);
    box-shadow: none;
  `,
};

/**
 * サイズごとのスタイル
 */
const sizeStyles: Record<ButtonSize, string> = {
  sm: `
    padding: var(--neumo-space-xs) var(--neumo-space-sm);
    font-size: var(--neumo-font-sm);
    border-radius: var(--neumo-radius-sm);
    gap: var(--neumo-space-xs);
  `,
  md: `
    padding: var(--neumo-space-sm) var(--neumo-space-md);
    font-size: var(--neumo-font-md);
    border-radius: var(--neumo-radius-md);
    gap: var(--neumo-space-sm);
  `,
  lg: `
    padding: var(--neumo-space-md) var(--neumo-space-lg);
    font-size: var(--neumo-font-lg);
    border-radius: var(--neumo-radius-lg);
    gap: var(--neumo-space-sm);
  `,
};

/**
 * ベーススタイル
 */
const baseStyles = `
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: none;
  cursor: pointer;
  font-weight: 500;
  transition: all var(--neumo-transition);
  outline: none;
  user-select: none;
`;

/**
 * ホバースタイル（default/primary用）
 */
const hoverStyles = `
  box-shadow: var(--neumo-elevation-hover);
  transform: translateY(-1px);
`;

/**
 * アクティブスタイル
 */
const activeStyles = `
  box-shadow: var(--neumo-elevation-active);
  transform: translateY(0);
`;

/**
 * 無効スタイル
 */
const disabledStyles = `
  opacity: 0.5;
  cursor: not-allowed;
  box-shadow: none;
`;

/**
 * フォーカススタイル（アクセシビリティ）
 */
const focusStyles = `
  box-shadow: var(--neumo-focus-ring), var(--neumo-elevation-1);
`;

/**
 * ローディングスピナーコンポーネント
 */
const LoadingSpinner = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    style={{
      animation: "spin 1s linear infinite",
    }}
  >
    <path d="M21 12a9 9 0 1 1-6.219-8.56" />
    <style>
      {`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}
    </style>
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
      style,
      onMouseEnter,
      onMouseLeave,
      onMouseDown,
      onMouseUp,
      onFocus,
      onBlur,
      ...props
    },
    ref
  ) => {
    // スタイルを結合
    const buttonStyle: React.CSSProperties = {
      ...parseStyles(baseStyles),
      ...parseStyles(variantStyles[variant]),
      ...parseStyles(sizeStyles[size]),
      ...(disabled ? parseStyles(disabledStyles) : {}),
      ...style,
    };

    return (
      <button
        ref={ref}
        disabled={disabled || loading}
        style={buttonStyle}
        aria-busy={loading}
        aria-disabled={disabled || loading}
        onMouseEnter={(e) => {
          if (!disabled && !loading && variant !== "ghost") {
            Object.assign(e.currentTarget.style, parseStyles(hoverStyles));
          }
          onMouseEnter?.(e);
        }}
        onMouseLeave={(e) => {
          if (!disabled && !loading) {
            // 元のスタイルに戻す
            e.currentTarget.style.boxShadow =
              variant === "ghost" ? "none" : "var(--neumo-elevation-1)";
            e.currentTarget.style.transform = "translateY(0)";
          }
          onMouseLeave?.(e);
        }}
        onMouseDown={(e) => {
          if (!disabled && !loading && variant !== "ghost") {
            Object.assign(e.currentTarget.style, parseStyles(activeStyles));
          }
          onMouseDown?.(e);
        }}
        onMouseUp={(e) => {
          if (!disabled && !loading && variant !== "ghost") {
            Object.assign(e.currentTarget.style, parseStyles(hoverStyles));
          }
          onMouseUp?.(e);
        }}
        onFocus={(e) => {
          if (!disabled && !loading) {
            Object.assign(e.currentTarget.style, parseStyles(focusStyles));
          }
          onFocus?.(e);
        }}
        onBlur={(e) => {
          if (!disabled && !loading) {
            e.currentTarget.style.boxShadow =
              variant === "ghost" ? "none" : "var(--neumo-elevation-1)";
          }
          onBlur?.(e);
        }}
        {...props}
      >
        {/* ローディング時はスピナーを表示 */}
        {loading ? (
          <LoadingSpinner />
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

/**
 * CSS文字列をReact.CSSPropertiesオブジェクトに変換
 */
function parseStyles(cssString: string): React.CSSProperties {
  const styles: Record<string, string> = {};
  const declarations = cssString.split(";").filter((d) => d.trim());

  for (const declaration of declarations) {
    const [property, value] = declaration.split(":").map((s) => s.trim());
    if (property && value) {
      // CSS プロパティ名をキャメルケースに変換
      const camelCase = property.replace(/-([a-z])/g, (_, letter) =>
        letter.toUpperCase()
      );
      styles[camelCase] = value;
    }
  }

  return styles as React.CSSProperties;
}
