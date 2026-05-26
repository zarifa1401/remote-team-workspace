"use client";

import { MoonStar, SunMedium } from "lucide-react";

export default function ThemeToggle() {
  function toggleTheme() {
    const currentTheme = document.documentElement.dataset.theme || "light";
    const nextTheme = currentTheme === "light" ? "dark" : "light";
    document.documentElement.dataset.theme = nextTheme;
    localStorage.setItem("rtw-theme", nextTheme);
  }

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-slate-200 bg-white text-slate-600 transition hover:bg-slate-50 hover:text-slate-900 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-300 dark:hover:bg-slate-900 dark:hover:text-white"
      aria-label="Toggle theme"
    >
      <SunMedium className="h-4 w-4 dark:hidden" />
      <MoonStar className="hidden h-4 w-4 dark:block" />
    </button>
  );
}
