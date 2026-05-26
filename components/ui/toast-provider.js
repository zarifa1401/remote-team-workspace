"use client";

import { createContext, useCallback, useContext, useMemo, useState } from "react";
import { CheckCircle2, X } from "lucide-react";

const ToastContext = createContext(null);

export function ToastProvider({ children }) {
  const [toasts, setToasts] = useState([]);

  const dismissToast = useCallback((id) => {
    setToasts((current) => current.filter((toast) => toast.id !== id));
  }, []);

  const showToast = useCallback(
    ({ title, description }) => {
      const id = crypto.randomUUID();
      setToasts((current) => [...current, { id, title, description }]);
      window.setTimeout(() => dismissToast(id), 3200);
    },
    [dismissToast]
  );

  const value = useMemo(
    () => ({
      showToast,
      dismissToast,
    }),
    [dismissToast, showToast]
  );

  return (
    <ToastContext.Provider value={value}>
      {children}
      <div className="pointer-events-none fixed bottom-4 right-4 z-[70] flex w-full max-w-sm flex-col gap-3">
        {toasts.map((toast) => (
          <div
            key={toast.id}
            className="pointer-events-auto rounded-3xl border border-rose-100 bg-white/95 p-4 shadow-[0_24px_60px_rgba(31,23,33,0.16)] dark:border-white/10 dark:bg-[#241829]"
          >
            <div className="flex items-start gap-3">
              <div className="mt-0.5 rounded-full bg-emerald-50 p-1 text-emerald-600">
                <CheckCircle2 className="h-4 w-4" />
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-sm font-semibold text-slate-900 dark:text-white">{toast.title}</p>
                {toast.description ? (
                  <p className="mt-1 text-sm leading-6 text-slate-500 dark:text-slate-300">{toast.description}</p>
                ) : null}
              </div>
              <button
                type="button"
                aria-label="Dismiss toast"
                onClick={() => dismissToast(toast.id)}
                className="rounded-full p-1 text-slate-400 hover:bg-rose-50 hover:text-rose-500 dark:hover:bg-white/8 dark:hover:text-rose-100"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </ToastContext.Provider>
  );
}

export function useToast() {
  const context = useContext(ToastContext);

  if (!context) {
    throw new Error("useToast must be used within a ToastProvider");
  }

  return context;
}
