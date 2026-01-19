import { createContext } from "react";
import type { ToastProps } from "./Toast.types";

export interface ToastContextType {
  toast: (props: Omit<ToastProps, "id" | "isExiting">) => void;
  dismiss: (id: string) => void;
  toasts: ToastProps[];
}

export const ToastContext = createContext<ToastContextType | undefined>(undefined);
