import { useEffect, useState, forwardRef } from "react";
import type { ToastProps, ToastVariant } from "./Toast.types";

/**
 * バリアントごとのスタイル
 */
const variantClasses: Record<ToastVariant, string> = {
  default: "bg-nuform-bg text-nuform-text",
  success: "bg-nuform-bg text-nuform-text",
  error: "bg-nuform-bg text-nuform-text",
  info: "bg-nuform-bg text-nuform-text",
  warning: "bg-nuform-bg text-nuform-text",
};

/**
 * バリアントごとのアイコン
 */
const VariantIcon = ({ variant }: { variant: ToastVariant }) => {
  switch (variant) {
    case "success":
      return (
        <svg
          className="w-5 h-5 text-nuform-success"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 13l4 4L19 7"
          />
        </svg>
      );
    case "error":
      return (
        <svg
          className="w-5 h-5 text-nuform-error"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      );
    case "info":
      return (
        <svg
          className="w-5 h-5 text-nuform-info"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      );
    case "warning":
      return (
        <svg
          className="w-5 h-5 text-nuform-warning"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
          />
        </svg>
      );
    default:
      return null;
  }
};

/**
 * Toastコンポーネント
 *
 * 画面端に表示される通知メッセージ
 */
export const Toast = forwardRef<HTMLDivElement, ToastProps>(
  (
    {
      title,
      description,
      variant = "default",
      duration = 5000,
      onClose,
      className,
      isExiting,
      ...props
    },
    ref
  ) => {
    const [isVisible, setIsVisible] = useState(true);

    // 自動で閉じるタイマー
    useEffect(() => {
      if (duration === Infinity) return;

      const timer = setTimeout(() => {
        setIsVisible(false);
        // アニメーション終了を待ってからonCloseを呼ぶ
        setTimeout(() => {
          onClose?.();
        }, 200); // アニメーション時間と合わせる
      }, duration);

      return () => clearTimeout(timer);
    }, [duration, onClose]);

    // ベースクラス
    const baseClasses =
      "pointer-events-auto flex w-full max-w-md items-center gap-3 rounded-nuform-lg p-4 shadow-nuform-elevation-2 transition-all overflow-hidden relative mb-3 last:mb-0";

    // クラス結合
    const toastClasses = [
      baseClasses,
      variantClasses[variant],
      "nuform-elevation-2", // 浮き出し効果
      isExiting || !isVisible
        ? "animate-nuform-fade-out"
        : "animate-nuform-slide-in-right",
      className,
    ]
      .filter(Boolean)
      .join(" ");

    // 閉じるハンドラ
    const handleClose = () => {
      setIsVisible(false);
      setTimeout(() => onClose?.(), 200);
    };

    return (
      <div ref={ref} className={toastClasses} role="alert" {...props}>
        <div className="flex-1 flex items-center gap-3">
          {variant !== "default" && (
            <div className="shrink-0 flex items-center justify-center w-10 h-10 rounded-full nuform-elevation-inset">
              <VariantIcon variant={variant} />
            </div>
          )}
          <div className="flex-1">
            {title && <h3 className="text-sm font-semibold">{title}</h3>}
            {description && (
              <p className="mt-1 text-sm opacity-90">{description}</p>
            )}
          </div>
        </div>

        <button
          onClick={handleClose}
          className="shrink-0 rounded-nuform-sm w-8 h-8 flex items-center justify-center text-nuform-text-muted hover:text-nuform-text hover:nuform-elevation-1 active:nuform-elevation-inset focus:outline-none focus:ring-2 focus:ring-nuform-primary transition-all cursor-pointer"
          aria-label="Close"
        >
          <svg
            className="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
    );
  }
);

Toast.displayName = "Toast";
