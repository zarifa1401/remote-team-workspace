"use client";

import { useState } from "react";
import { Bell, Menu, MoonStar, PanelLeft, Search, SunMedium } from "lucide-react";
import { notifications, workspaceUser } from "@/data/workspace-data";
import { getNotificationTone } from "@/lib/utils";

export default function SiteHeader({ onOpenMobileMenu, onToggleSidebar }) {
  const [showNotifications, setShowNotifications] = useState(false);

  return (
    <header className="sticky top-4 z-40 mb-6">
      <div className="card-surface flex items-center gap-3 rounded-[28px] px-4 py-3 md:px-5">
        <button
          type="button"
          onClick={onOpenMobileMenu}
          className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-rose-100 bg-white/85 text-slate-600 shadow-sm lg:hidden dark:border-white/10 dark:bg-white/5 dark:text-slate-200"
          aria-label="Open navigation"
        >
          <Menu className="h-4 w-4" />
        </button>

        <button
          type="button"
          onClick={onToggleSidebar}
          className="hidden h-11 w-11 items-center justify-center rounded-2xl border border-rose-100 bg-white/85 text-slate-600 shadow-sm xl:inline-flex dark:border-white/10 dark:bg-white/5 dark:text-slate-200"
          aria-label="Toggle sidebar"
        >
          <PanelLeft className="h-4 w-4" />
        </button>

        <div className="relative min-w-0 flex-1">
          <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
          <input
            type="search"
            placeholder="Search projects, tasks, members..."
            className="h-11 w-full rounded-2xl border border-rose-100 bg-white/78 pl-11 pr-4 text-sm text-slate-700 outline-none focus:border-rose-300 focus:ring-4 focus:ring-rose-100 dark:border-white/10 dark:bg-white/5 dark:text-white dark:placeholder:text-slate-400"
          />
        </div>

        <div className="relative">
          <button
            type="button"
            onClick={() => setShowNotifications((current) => !current)}
            className="relative inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-rose-100 bg-white/85 text-slate-600 shadow-sm hover:text-rose-500 dark:border-white/10 dark:bg-white/5 dark:text-slate-200 dark:hover:text-rose-100"
            aria-label="Open notifications"
          >
            <Bell className="h-4 w-4" />
            <span className="absolute right-2.5 top-2.5 h-2.5 w-2.5 rounded-full bg-rose-400" />
          </button>

          {showNotifications ? (
            <div className="absolute right-0 top-14 z-50 w-80 rounded-[26px] border border-rose-100 bg-white p-4 shadow-[0_24px_60px_rgba(31,23,33,0.16)] dark:border-white/10 dark:bg-[#241829]">
              <div className="flex items-center justify-between gap-3">
                <div>
                  <p className="text-sm font-semibold text-slate-900 dark:text-white">Notifications</p>
                  <p className="text-xs text-slate-500 dark:text-slate-300">Latest workspace updates</p>
                </div>
                <span className="rounded-full bg-rose-100 px-2.5 py-1 text-[11px] font-semibold text-rose-600 dark:bg-white/10 dark:text-rose-100">
                  {notifications.length} new
                </span>
              </div>
              <div className="mt-4 space-y-3">
                {notifications.map((notification) => (
                  <div
                    key={notification.id}
                    className={`rounded-2xl border px-4 py-3 ${getNotificationTone(notification.tone)} dark:border-white/10`}
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <p className="text-sm font-semibold">{notification.title}</p>
                        <p className="mt-1 text-xs leading-6 opacity-85">{notification.detail}</p>
                      </div>
                      <span className="text-[11px] font-semibold uppercase tracking-[0.18em]">
                        {notification.time}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ) : null}
        </div>

        <ThemeToggle />

        <button className="hidden items-center gap-3 rounded-2xl border border-rose-100 bg-white/85 px-3 py-2 text-left shadow-sm md:inline-flex dark:border-white/10 dark:bg-white/5">
          <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-rose-300 to-fuchsia-400 text-sm font-semibold text-white">
            {workspaceUser.initials}
          </div>
          <div>
            <p className="text-sm font-semibold text-slate-900 dark:text-white">{workspaceUser.name}</p>
            <p className="text-xs text-slate-500 dark:text-slate-300">{workspaceUser.role}</p>
          </div>
        </button>
      </div>
    </header>
  );
}

function ThemeToggle() {
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
      className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-rose-100 bg-white/85 text-slate-600 shadow-sm hover:text-rose-500 dark:border-white/10 dark:bg-white/5 dark:text-slate-200 dark:hover:text-rose-100"
      aria-label="Toggle theme"
    >
      <SunMedium className="h-4 w-4 dark:hidden" />
      <MoonStar className="hidden h-4 w-4 dark:block" />
    </button>
  );
}
