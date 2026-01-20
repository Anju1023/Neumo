import { forwardRef } from "react";
import type { DividerProps, DividerOrientation } from "./Divider.types";

/**
 * 方向ごとのTailwindクラス
 */
const orientationClasses: Record<DividerOrientation, string> = {
  horizontal: "w-full h-0.5 my-nuform-md",
  vertical: "w-0.5 h-full mx-nuform-md",
};

/**
 * ベースのTailwindクラス
 * ニューモフィズムの溝（groove）エフェクト
 */
const baseClasses =
  "border-none bg-transparent shadow-[inset_1px_1px_2px_var(--nuform-shadow-dark),inset_-1px_-1px_2px_var(--nuform-shadow-light)] rounded-nuform-full";

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
  ({ orientation = "horizontal", className, ...props }, ref) => {
    // クラスを結合
    const dividerClasses = [
      baseClasses,
      orientationClasses[orientation],
      className,
    ]
      .filter(Boolean)
      .join(" ");

    return (
      <hr
        ref={ref}
        // hr要素はデフォルトでseparatorロールを持つため、roleは不要
        // aria-orientationはverticalの時のみ指定（horizontalがデフォルト）
        aria-orientation={orientation === "vertical" ? "vertical" : undefined}
        className={dividerClasses}
        {...props}
      />
    );
  }
);

Divider.displayName = "Divider";
