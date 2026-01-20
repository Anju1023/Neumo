import { useState, useCallback, ReactNode, useMemo } from "react";
import { ToastContext } from "./ToastContext";
import { Toast } from "./Toast";
import type { ToastProps } from "./Toast.types";

export const ToastProvider = ({ children }: { children: ReactNode }) => {
  const [toasts, setToasts] = useState<ToastProps[]>([]);

  const toast = useCallback((props: Omit<ToastProps, "id" | "isExiting">) => {
    const id = Math.random().toString(36).substring(2, 9);
    const newToast: ToastProps = { ...props, id };
    
    setToasts((prev) => [...prev, newToast]);
  }, []);

  const dismiss = useCallback((id: string) => {
    setToasts((prev) =>
      prev.map((t) => (t.id === id ? { ...t, isExiting: true } : t))
    );

    // アニメーション後に削除
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 200); 
  }, []);
  
  // ToastコンポーネントのonCloseから呼ばれる直接削除
  const removeToast = useCallback((id: string) => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
  }, []);

  const value = useMemo(
    () => ({
      toast,
      dismiss,
      toasts,
    }),
    [toast, dismiss, toasts]
  );

  return (
    <ToastContext.Provider value={value}>
      {children}
      <div className="fixed bottom-0 right-0 z-50 flex flex-col gap-2 p-4 max-h-screen overflow-hidden pointer-events-none w-full max-w-[420px]">
        {toasts.map((toastProps) => (
          <Toast
            key={toastProps.id}
            {...toastProps}
            onClose={() => toastProps.id && removeToast(toastProps.id)}
          />
        ))}
      </div>
    </ToastContext.Provider>
  );
};
