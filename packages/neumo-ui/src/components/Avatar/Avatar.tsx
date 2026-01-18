import { forwardRef, useState } from "react";
import type { AvatarProps, AvatarSize, AvatarVariant } from "./Avatar.types";

/**
 * サイズごとのスタイル
 */
const sizeStyles: Record<AvatarSize, { width: string; height: string; fontSize: string }> = {
  xs: { width: "24px", height: "24px", fontSize: "var(--neumo-font-xs)" },
  sm: { width: "32px", height: "32px", fontSize: "var(--neumo-font-sm)" },
  md: { width: "40px", height: "40px", fontSize: "var(--neumo-font-md)" },
  lg: { width: "56px", height: "56px", fontSize: "var(--neumo-font-lg)" },
  xl: { width: "72px", height: "72px", fontSize: "var(--neumo-font-xl)" },
};

/**
 * バリアントごとの角丸
 */
const variantStyles: Record<AvatarVariant, string> = {
  circle: "var(--neumo-radius-full)",
  rounded: "var(--neumo-radius-md)",
};

/**
 * ベーススタイル
 */
const baseStyles = `
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: var(--neumo-bg);
  box-shadow: var(--neumo-elevation-1);
  overflow: hidden;
  flex-shrink: 0;
`;

/**
 * 画像スタイル
 */
const imageStyles = `
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

/**
 * フォールバックスタイル
 */
const fallbackStyles = `
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, var(--neumo-primary) 0%, var(--neumo-info) 100%);
  color: white;
  font-weight: 600;
  text-transform: uppercase;
`;

/**
 * イニシャルを取得
 */
function getInitials(name: string): string {
  const parts = name.trim().split(/\s+/);
  if (parts.length === 1) {
    return parts[0]?.charAt(0) || "?";
  }
  return (parts[0]?.charAt(0) || "") + (parts[parts.length - 1]?.charAt(0) || "");
}

/**
 * Avatarコンポーネント
 *
 * ニューモフィズム2.0デザインのアバターコンポーネント
 * 画像がない場合はイニシャルを表示
 *
 * @example
 * ```tsx
 * <Avatar
 *   src="/avatar.jpg"
 *   alt="John Doe"
 *   size="md"
 *   variant="circle"
 * />
 * ```
 */
export const Avatar = forwardRef<HTMLDivElement, AvatarProps>(
  (
    {
      src,
      alt,
      size = "md",
      variant = "circle",
      fallback,
      style,
      ...props
    },
    ref
  ) => {
    // 画像の読み込み状態
    const [imageError, setImageError] = useState(false);

    // フォールバックテキスト（イニシャル）
    const fallbackText = fallback || getInitials(alt);

    // 画像を表示するかどうか
    const showImage = src && !imageError;

    // コンテナスタイル
    const containerStyle: React.CSSProperties = {
      ...parseStyles(baseStyles),
      width: sizeStyles[size].width,
      height: sizeStyles[size].height,
      borderRadius: variantStyles[variant],
      ...style,
    };

    return (
      <div
        ref={ref}
        style={containerStyle}
        role="img"
        aria-label={alt}
      >
        {showImage ? (
          <img
            src={src}
            alt={alt}
            style={parseStyles(imageStyles)}
            onError={() => setImageError(true)}
            {...props}
          />
        ) : (
          <span
            style={{
              ...parseStyles(fallbackStyles),
              fontSize: sizeStyles[size].fontSize,
            }}
            aria-hidden="true"
          >
            {fallbackText}
          </span>
        )}
      </div>
    );
  }
);

Avatar.displayName = "Avatar";

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
