import { forwardRef } from "react";
import type { BadgeProps } from "./Badge.types";

/**
 * ニューモフィズムスタイルのバッジコンポーネント
 * ステータス表示やラベルに使用
 */
export const Badge = forwardRef<HTMLSpanElement, BadgeProps>(
  (
    {
      variant = "default",
      size = "md",
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
      rounded-[var(--neumo-radius-full,9999px)]
      shadow-[var(--neumo-elevation-1)]
    `;

    // サイズ別スタイル
    const sizeStyles: Record<string, string> = {
      sm: "px-2 py-0.5 text-xs",
      md: "px-3 py-1 text-sm",
    };

    // バリアント別スタイル
    const variantStyles: Record<string, string> = {
      default: `
        bg-[var(--neumo-bg,#e0e5ec)]
        text-[var(--neumo-text,#2d3436)]
      `,
      success: `
        bg-[var(--neumo-success,#00b894)]
        text-white
        shadow-[2px_2px_4px_rgba(0,184,148,0.4),-2px_-2px_4px_rgba(0,184,148,0.2)]
      `,
      warning: `
        bg-[var(--neumo-warning,#fdcb6e)]
        text-[var(--neumo-text,#2d3436)]
        shadow-[2px_2px_4px_rgba(253,203,110,0.4),-2px_-2px_4px_rgba(253,203,110,0.2)]
      `,
      error: `
        bg-[var(--neumo-error,#d63031)]
        text-white
        shadow-[2px_2px_4px_rgba(214,48,49,0.4),-2px_-2px_4px_rgba(214,48,49,0.2)]
      `,
      info: `
        bg-[var(--neumo-info,#0984e3)]
        text-white
        shadow-[2px_2px_4px_rgba(9,132,227,0.4),-2px_-2px_4px_rgba(9,132,227,0.2)]
      `,
    };

    return (
      <span
        ref={ref}
        className={`
          ${baseStyles}
          ${sizeStyles[size]}
          ${variantStyles[variant]}
          ${className}
        `}
        {...props}
      >
        {children}
      </span>
    );
  }
);

Badge.displayName = "Badge";
