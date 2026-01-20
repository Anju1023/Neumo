import type { HTMLAttributes } from "react";

/**
 * Dividerコンポーネントの方向
 * - horizontal: 水平方向（デフォルト）
 * - vertical: 垂直方向
 */
export type DividerOrientation = "horizontal" | "vertical";

/**
 * Dividerコンポーネントのプロパティ
 */
export interface DividerProps extends HTMLAttributes<HTMLHRElement> {
  /** 区切り線の方向 */
  orientation?: DividerOrientation;
}
