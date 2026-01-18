import { forwardRef } from "react";
import type { CardProps, CardVariant, CardPadding } from "./Card.types";

/**
 * バリアントごとのTailwindクラス
 */
const variantClasses: Record<CardVariant, string> = {
  elevated: "bg-neumo-bg neumo-elevation-2",
  flat: "bg-neumo-bg shadow-none border border-[rgba(163,177,198,0.6)]",
  inset: "bg-neumo-bg neumo-elevation-inset",
};

/**
 * パディングごとのTailwindクラス
 */
const paddingClasses: Record<CardPadding, string> = {
  none: "p-0",
  sm: "p-neumo-sm",
  md: "p-neumo-md",
  lg: "p-neumo-lg",
};

/**
 * ベースのTailwindクラス
 */
const baseClasses = "rounded-neumo-lg text-neumo-text transition-all";

/**
 * Cardコンポーネント
 *
 * ニューモフィズム2.0デザインのカードコンポーネント
 * コンテンツを囲むためのコンテナとして使用
 *
 * @example
 * ```tsx
 * <Card variant="elevated" padding="md">
 *   <h2>Card Title</h2>
 *   <p>Card content goes here</p>
 * </Card>
 * ```
 */
export const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ variant = "elevated", padding = "md", children, className, ...props }, ref) => {
    // クラスを結合
    const cardClasses = [
      baseClasses,
      variantClasses[variant],
      paddingClasses[padding],
      className,
    ]
      .filter(Boolean)
      .join(" ");

    return (
      <div ref={ref} className={cardClasses} {...props}>
        {children}
      </div>
    );
  }
);

Card.displayName = "Card";
