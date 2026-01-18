import { forwardRef } from "react";
import type { CardProps, CardVariant, CardPadding } from "./Card.types";

/**
 * バリアントごとのスタイル
 */
const variantStyles: Record<CardVariant, string> = {
  elevated: `
    background: var(--neumo-bg);
    box-shadow: var(--neumo-elevation-2);
  `,
  flat: `
    background: var(--neumo-bg);
    box-shadow: none;
    border: 1px solid var(--neumo-shadow-dark);
  `,
  inset: `
    background: var(--neumo-bg);
    box-shadow: var(--neumo-elevation-inset);
  `,
};

/**
 * パディングごとのスタイル
 */
const paddingStyles: Record<CardPadding, string> = {
  none: `
    padding: 0;
  `,
  sm: `
    padding: var(--neumo-space-sm);
  `,
  md: `
    padding: var(--neumo-space-md);
  `,
  lg: `
    padding: var(--neumo-space-lg);
  `,
};

/**
 * ベーススタイル
 */
const baseStyles = `
  border-radius: var(--neumo-radius-lg);
  color: var(--neumo-text);
  transition: all var(--neumo-transition);
`;

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
  (
    { variant = "elevated", padding = "md", children, style, ...props },
    ref
  ) => {
    // スタイルを結合
    const cardStyle: React.CSSProperties = {
      ...parseStyles(baseStyles),
      ...parseStyles(variantStyles[variant]),
      ...parseStyles(paddingStyles[padding]),
      ...style,
    };

    return (
      <div ref={ref} style={cardStyle} {...props}>
        {children}
      </div>
    );
  }
);

Card.displayName = "Card";

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
