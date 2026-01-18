import { forwardRef } from "react";
import type { BadgeProps, BadgeVariant, BadgeSize } from "./Badge.types";

/**
 * バリアントごとのTailwindクラス
 */
const variantClasses: Record<BadgeVariant, string> = {
  default: "bg-neumo-bg text-neumo-text neumo-elevation-1",
  success:
    "bg-neumo-success text-white shadow-[2px_2px_4px_rgba(34,197,94,0.3),-2px_-2px_4px_rgba(255,255,255,0.5)]",
  warning:
    "bg-neumo-warning text-white shadow-[2px_2px_4px_rgba(245,158,11,0.3),-2px_-2px_4px_rgba(255,255,255,0.5)]",
  error:
    "bg-neumo-error text-white shadow-[2px_2px_4px_rgba(239,68,68,0.3),-2px_-2px_4px_rgba(255,255,255,0.5)]",
  info: "bg-neumo-info text-white shadow-[2px_2px_4px_rgba(59,130,246,0.3),-2px_-2px_4px_rgba(255,255,255,0.5)]",
};

/**
 * サイズごとのTailwindクラス
 */
const sizeClasses: Record<BadgeSize, string> = {
  sm: "px-1.5 py-0.5 text-neumo-xs rounded-neumo-sm",
  md: "px-2.5 py-1 text-neumo-sm rounded-neumo-md",
};

/**
 * ベースのTailwindクラス
 */
const baseClasses =
  "inline-flex items-center justify-center font-medium leading-none whitespace-nowrap transition-all";

/**
 * Badgeコンポーネント
 *
 * ニューモフィズム2.0デザインのバッジコンポーネント
 * ステータスやカテゴリを表示するための小さなラベル
 *
 * @example
 * ```tsx
 * <Badge variant="success">Completed</Badge>
 * <Badge variant="error">Error</Badge>
 * ```
 */
export const Badge = forwardRef<HTMLSpanElement, BadgeProps>(
  ({ variant = "default", size = "md", children, className, ...props }, ref) => {
    // クラスを結合
    const badgeClasses = [
      baseClasses,
      variantClasses[variant],
      sizeClasses[size],
      className,
    ]
      .filter(Boolean)
      .join(" ");

    return (
      <span ref={ref} className={badgeClasses} {...props}>
        {children}
      </span>
    );
  }
);

Badge.displayName = "Badge";
