import { ImgHTMLAttributes, ReactNode } from "react";

/**
 * Avatarコンポーネントのサイズ
 */
export type AvatarSize = "xs" | "sm" | "md" | "lg" | "xl";

/**
 * Avatarコンポーネントのバリアント
 */
export type AvatarVariant = "circle" | "rounded";

/**
 * Avatarコンポーネントのprops
 */
export interface AvatarProps extends Omit<ImgHTMLAttributes<HTMLImageElement>, "size"> {
  /** アバターのサイズ */
  size?: AvatarSize;
  /** アバターの形状 */
  variant?: AvatarVariant;
  /** 画像が読み込めない場合のフォールバック */
  fallback?: ReactNode;
  /** 代替テキスト */
  alt?: string;
}
