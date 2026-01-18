import { forwardRef } from "react";
import type { DividerProps, DividerOrientation } from "./Divider.types";

/**
 * 方向ごとのスタイル
 */
const orientationStyles: Record<DividerOrientation, string> = {
  horizontal: `
    width: 100%;
    height: 2px;
    margin: var(--neumo-space-md) 0;
  `,
  vertical: `
    width: 2px;
    height: 100%;
    margin: 0 var(--neumo-space-md);
  `,
};

/**
 * ベーススタイル
 * ニューモフィズムの溝（groove）エフェクト
 */
const baseStyles = `
  border: none;
  background: transparent;
  box-shadow: 
    inset 1px 1px 2px var(--neumo-shadow-dark),
    inset -1px -1px 2px var(--neumo-shadow-light);
  border-radius: var(--neumo-radius-full);
`;

/**
 * Dividerコンポーネント
 *
 * ニューモフィズム2.0デザインの区切り線コンポーネント
 * 溝（groove）のような凹んだデザイン
 *
 * @example
 * ```tsx
 * <Divider orientation="horizontal" />
 * <Divider orientation="vertical" />
 * ```
 */
export const Divider = forwardRef<HTMLHRElement, DividerProps>(
  ({ orientation = "horizontal", style, ...props }, ref) => {
    // スタイルを結合
    const dividerStyle: React.CSSProperties = {
      ...parseStyles(baseStyles),
      ...parseStyles(orientationStyles[orientation]),
      ...style,
    };

    return (
      <hr
        ref={ref}
        role="separator"
        aria-orientation={orientation}
        style={dividerStyle}
        {...props}
      />
    );
  }
);

Divider.displayName = "Divider";

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
