import { HTMLAttributes } from "react";

/**
 * Dividerコンポーネントの方向
 */
export type DividerOrientation = "horizontal" | "vertical";

/**
 * Dividerコンポーネントのprops
 */
export interface DividerProps extends HTMLAttributes<HTMLDivElement> {
  /** 区切り線の方向 */
  orientation?: DividerOrientation;
}
