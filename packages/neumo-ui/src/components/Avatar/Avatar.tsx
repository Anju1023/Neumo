import { forwardRef, useState } from "react";
import type { AvatarProps, AvatarSize, AvatarVariant } from "./Avatar.types";

/**
 * サイズごとのTailwindクラス
 */
const sizeClasses: Record<AvatarSize, string> = {
  xs: "w-6 h-6 text-neumo-xs",
  sm: "w-8 h-8 text-neumo-sm",
  md: "w-10 h-10 text-neumo-md",
  lg: "w-14 h-14 text-neumo-lg",
  xl: "w-[72px] h-[72px] text-neumo-xl",
};

/**
 * バリアントごとのTailwindクラス
 */
const variantClasses: Record<AvatarVariant, string> = {
  circle: "rounded-neumo-full",
  rounded: "rounded-neumo-md",
};

/**
 * ベースのTailwindクラス
 */
const baseClasses =
  "inline-flex items-center justify-center bg-neumo-bg neumo-elevation-1 overflow-hidden shrink-0";

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
      className,
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

    // コンテナクラスを結合
    const containerClasses = [
      baseClasses,
      sizeClasses[size],
      variantClasses[variant],
      className,
    ]
      .filter(Boolean)
      .join(" ");

    return (
      <div
        ref={ref}
        className={containerClasses}
        role="img"
        aria-label={alt}
        {...props}
      >
        {showImage ? (
          <img
            src={src}
            alt={alt}
            className="w-full h-full object-cover"
            onError={() => setImageError(true)}
          />
        ) : (
          <span
            className="flex items-center justify-center w-full h-full bg-gradient-to-br from-neumo-primary to-neumo-info text-white font-semibold uppercase"
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
