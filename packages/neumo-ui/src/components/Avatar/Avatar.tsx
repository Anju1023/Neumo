import { forwardRef, useState } from "react";
import type { AvatarProps } from "./Avatar.types";

/**
 * ニューモフィズムスタイルのアバターコンポーネント
 * ユーザーアイコンの表示に使用
 */
export const Avatar = forwardRef<HTMLImageElement, AvatarProps>(
  (
    {
      size = "md",
      variant = "circle",
      fallback,
      src,
      alt = "",
      className = "",
      ...props
    },
    ref
  ) => {
    // 画像読み込みエラー状態
    const [hasError, setHasError] = useState(false);

    // サイズ別スタイル
    const sizeStyles: Record<string, string> = {
      xs: "w-6 h-6 text-xs",
      sm: "w-8 h-8 text-sm",
      md: "w-10 h-10 text-base",
      lg: "w-14 h-14 text-lg",
      xl: "w-20 h-20 text-xl",
    };

    // バリアント別スタイル
    const variantStyles: Record<string, string> = {
      circle: "rounded-full",
      rounded: "rounded-[var(--neumo-radius-md,12px)]",
    };

    // ベーススタイル
    const baseStyles = `
      bg-[var(--neumo-bg,#e0e5ec)]
      shadow-[var(--neumo-elevation-1)]
      flex items-center justify-center
      overflow-hidden
      flex-shrink-0
    `;

    // デフォルトのフォールバック（イニシャル表示）
    const DefaultFallback = () => (
      <span className="text-[var(--neumo-text-muted,#636e72)] font-medium">
        {alt ? alt.charAt(0).toUpperCase() : "?"}
      </span>
    );

    // 画像読み込みエラー時のハンドラ
    const handleError = () => {
      setHasError(true);
    };

    return (
      <div
        className={`
          ${baseStyles}
          ${sizeStyles[size]}
          ${variantStyles[variant]}
          ${className}
        `}
      >
        {/* 画像またはフォールバック */}
        {src && !hasError ? (
          <img
            ref={ref}
            src={src}
            alt={alt}
            onError={handleError}
            className="w-full h-full object-cover"
            {...props}
          />
        ) : (
          fallback || <DefaultFallback />
        )}
      </div>
    );
  }
);

Avatar.displayName = "Avatar";
