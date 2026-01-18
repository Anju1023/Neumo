import { forwardRef } from "react";
import type { BadgeProps, BadgeVariant, BadgeSize } from "./Badge.types";

/**
 * バリアントごとのスタイル
 */
const variantStyles: Record<BadgeVariant, string> = {
  default: `
    background: var(--neumo-bg);
    color: var(--neumo-text);
    box-shadow: var(--neumo-elevation-1);
  `,
  success: `
    background: var(--neumo-success);
    color: white;
    box-shadow: 2px 2px 4px rgba(34, 197, 94, 0.3), -2px -2px 4px rgba(255, 255, 255, 0.5);
  `,
  warning: `
    background: var(--neumo-warning);
    color: white;
    box-shadow: 2px 2px 4px rgba(245, 158, 11, 0.3), -2px -2px 4px rgba(255, 255, 255, 0.5);
  `,
  error: `
    background: var(--neumo-error);
    color: white;
    box-shadow: 2px 2px 4px rgba(239, 68, 68, 0.3), -2px -2px 4px rgba(255, 255, 255, 0.5);
  `,
  info: `
    background: var(--neumo-info);
    color: white;
    box-shadow: 2px 2px 4px rgba(59, 130, 246, 0.3), -2px -2px 4px rgba(255, 255, 255, 0.5);
  `,
};

/**
 * サイズごとのスタイル
 */
const sizeStyles: Record<BadgeSize, string> = {
  sm: `
    padding: 2px 6px;
    font-size: var(--neumo-font-xs);
    border-radius: var(--neumo-radius-sm);
  `,
  md: `
    padding: 4px 10px;
    font-size: var(--neumo-font-sm);
    border-radius: var(--neumo-radius-md);
  `,
};

/**
 * ベーススタイル
 */
const baseStyles = `
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-weight: 500;
  line-height: 1;
  white-space: nowrap;
  transition: all var(--neumo-transition);
`;

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
  (
    {
      variant = "default",
      size = "md",
      children,
      style,
      ...props
    },
    ref
  ) => {
    // スタイルを結合
    const badgeStyle: React.CSSProperties = {
      ...parseStyles(baseStyles),
      ...parseStyles(variantStyles[variant]),
      ...parseStyles(sizeStyles[size]),
      ...style,
    };

    return (
      <span ref={ref} style={badgeStyle} {...props}>
        {children}
      </span>
    );
  }
);

Badge.displayName = "Badge";

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
