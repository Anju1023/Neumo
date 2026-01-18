import { forwardRef } from "react";
import type { CardProps } from "./Card.types";

/**
 * ニューモフィズムスタイルのカードコンポーネント
 * コンテンツを包むコンテナとして使用
 */
export const Card = forwardRef<HTMLDivElement, CardProps>(
  (
    {
      variant = "elevated",
      padding = "md",
      className = "",
      children,
      ...props
    },
    ref
  ) => {
    // ベーススタイル
    const baseStyles = `
      bg-[var(--neumo-bg,#e0e5ec)]
      rounded-[var(--neumo-radius-lg,16px)]
      transition-all duration-200 ease-out
    `;

    // パディング別スタイル
    const paddingStyles: Record<string, string> = {
      none: "p-0",
      sm: "p-3",
      md: "p-5",
      lg: "p-8",
    };

    // バリアント別スタイル
    const variantStyles: Record<string, string> = {
      elevated: "shadow-[var(--neumo-elevation-2)]",
      flat: "shadow-none border border-[rgba(163,177,198,0.2)]",
      inset: "shadow-[var(--neumo-inset-2)]",
    };

    return (
      <div
        ref={ref}
        className={`
          ${baseStyles}
          ${paddingStyles[padding]}
          ${variantStyles[variant]}
          ${className}
        `}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Card.displayName = "Card";
