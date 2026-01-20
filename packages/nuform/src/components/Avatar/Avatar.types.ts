import type { ImgHTMLAttributes } from "react";

/**
 * Avatarコンポーネントのサイズ
 */
export type AvatarSize = "xs" | "sm" | "md" | "lg" | "xl";

/**
 * Avatarコンポーネントのバリアント
 * - circle: 円形（デフォルト）
 * - rounded: 角丸四角形
 */
export type AvatarVariant = "circle" | "rounded";

/**
 * Avatarコンポーネントのプロパティ
 */
export interface AvatarProps
  extends Omit<ImgHTMLAttributes<HTMLImageElement>, "src" | "alt"> {
  /** 画像のURL */
  src?: string;

  /** 代替テキスト */
  alt: string;

  /** アバターのサイズ */
  size?: AvatarSize;

  /** アバターの形状 */
  variant?: AvatarVariant;

  /** フォールバック（画像がない場合に表示） */
  fallback?: string;
}
