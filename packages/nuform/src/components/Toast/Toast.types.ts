import { ReactNode } from "react";

export type ToastVariant = "default" | "success" | "error" | "info" | "warning";

export interface ToastProps {
  id?: string;
  title?: ReactNode;
  description?: ReactNode;
  variant?: ToastVariant;
  duration?: number;
  onClose?: () => void;
  className?: string;
  /**
   * Internal use for animation
   */
  isExiting?: boolean;
}
