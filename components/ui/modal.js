"use client";

import { useEffect } from "react";
import { X } from "lucide-react";

export default function Modal({ open, onClose, title, description, children }) {
  useEffect(() => {
    if (!open) {
      return undefined;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    function handleKeyDown(event) {
      if (event.key === "Escape") {
        onClose();
      }
    }

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose, open]);

  if (!open) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
      <button
        type="button"
        aria-label="Close modal overlay"
        onClick={onClose}
        className="absolute inset-0 bg-slate-950/35 backdrop-blur-sm"
      />
      <div className="card-surface relative z-10 w-full max-w-3xl rounded-[30px] p-6 md:p-7">
        <div className="absolute inset-x-0 top-0 h-20 rounded-t-[30px] bg-gradient-to-r from-rose-100/70 via-white to-sky-100/70" />
        <div className="relative flex items-start justify-between gap-4">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-rose-500 dark:text-rose-200">
              Quick view
            </p>
            <h3 className="mt-2 font-display text-2xl font-semibold text-slate-900 dark:text-white">
              {title}
            </h3>
            {description ? (
              <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-500 dark:text-slate-300">
                {description}
              </p>
            ) : null}
          </div>
          <button
            type="button"
            onClick={onClose}
            className="rounded-2xl border border-rose-100 bg-white/85 p-2 text-slate-500 hover:text-rose-500 dark:border-white/10 dark:bg-white/5 dark:text-slate-200"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
        <div className="relative mt-6">{children}</div>
      </div>
    </div>
  );
}
