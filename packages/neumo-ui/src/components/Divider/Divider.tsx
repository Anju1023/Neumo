import { forwardRef } from "react";
import type { DividerProps } from "./Divider.types";

/**
 * ニューモフィズムスタイルの区切り線コンポーネント
 * 水平/垂直方向に対応
 */
export const Divider = forwardRef<HTMLDivElement, DividerProps>(
  (
    {
      orientation = "horizontal",
      className = "",
      ...props
    },
    ref
  ) => {
    // 方向別スタイル
    const orientationStyles: Record<string, string> = {
      horizontal: `
        w-full h-[2px]
        bg-gradient-to-r from-transparent via-[var(--neumo-shadow-dark)] to-transparent
        shadow-[0_1px_0_var(--neumo-shadow-light)]
      `,
      vertical: `
        h-full w-[2px]
        bg-gradient-to-b from-transparent via-[var(--neumo-shadow-dark)] to-transparent
        shadow-[1px_0_0_var(--neumo-shadow-light)]
      `,
    };

    return (
      <div
        ref={ref}
        role="separator"
        aria-orientation={orientation}
        className={`
          ${orientationStyles[orientation]}
          ${className}
        `}
        {...props}
      />
    );
  }
);

Divider.displayName = "Divider";
