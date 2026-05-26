import { ChevronLeft, ChevronRight, Flower2, Sparkles } from "lucide-react";
import NavigationLinks from "./navigation-links";
import { navItems, workspaceUser } from "@/data/workspace-data";

export default function Sidebar({ collapsed, onToggle, onNavigate }) {
  return (
    <aside className={`hidden shrink-0 transition-all duration-300 lg:block ${collapsed ? "w-24" : "w-[298px]"}`}>
      <div className="sidebar-blur sticky top-4 overflow-hidden rounded-[30px] border border-rose-100/90 shadow-[0_30px_80px_rgba(236,188,214,0.22)] dark:border-fuchsia-900/60">
        <div className="relative flex min-h-[calc(100vh-2rem)] flex-col p-4">
          <div className={`flex items-start ${collapsed ? "justify-center" : "justify-between"} gap-3`}>
            {!collapsed ? (
              <div className="flex items-center gap-3">
                <div className="flex h-14 w-14 items-center justify-center rounded-[22px] bg-gradient-to-br from-rose-400 to-fuchsia-500 text-white shadow-[0_18px_40px_rgba(244,114,182,0.28)]">
                  <Flower2 className="h-7 w-7" />
                </div>
                <div>
                  <p className="font-display text-[1.65rem] font-semibold tracking-tight text-slate-900 dark:text-white">
                    BloomSpace
                  </p>
                  <p className="text-sm text-slate-500 dark:text-slate-300">Remote Team Workspace</p>
                </div>
              </div>
            ) : (
              <div className="flex h-14 w-14 items-center justify-center rounded-[22px] bg-gradient-to-br from-rose-400 to-fuchsia-500 text-white shadow-[0_18px_40px_rgba(244,114,182,0.28)]">
                <Flower2 className="h-7 w-7" />
              </div>
            )}

            <button
              type="button"
              onClick={onToggle}
              className="hidden rounded-2xl border border-rose-100 bg-white/80 p-2 text-slate-500 shadow-sm hover:text-rose-500 dark:border-white/10 dark:bg-white/5 dark:text-slate-300 lg:inline-flex"
              aria-label="Toggle sidebar"
            >
              {collapsed ? <ChevronRight className="h-4 w-4" /> : <ChevronLeft className="h-4 w-4" />}
            </button>
          </div>

          {!collapsed ? (
            <div className="relative mt-6 rounded-[26px] bg-gradient-to-br from-fuchsia-500 via-rose-400 to-sky-400 p-[1px] shadow-[0_22px_50px_rgba(244,114,182,0.24)]">
              <div className="rounded-[25px] bg-white/90 p-5 dark:bg-[#241829]">
                <div className="flex items-center gap-2 text-sm font-semibold text-rose-500 dark:text-rose-200">
                  <Sparkles className="h-4 w-4" />
                  Upgrade to Pro
                </div>
                <p className="mt-3 text-lg font-semibold text-slate-900 dark:text-white">
                  Unlock advanced insights and boost your team productivity.
                </p>
                <button
                  type="button"
                  className="mt-4 inline-flex rounded-2xl bg-white px-4 py-3 text-sm font-semibold text-rose-500 shadow-sm dark:bg-white/10 dark:text-white"
                >
                  Upgrade Now
                </button>
              </div>
            </div>
          ) : null}

          <div className="relative mt-6 flex-1">
            <NavigationLinks items={navItems} collapsed={collapsed} onNavigate={onNavigate} />
          </div>

          <div className="relative mt-6 rounded-[24px] bg-white/80 p-3 shadow-sm dark:bg-white/5">
            <div className={`flex items-center gap-3 ${collapsed ? "justify-center" : ""}`}>
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-rose-300 to-fuchsia-400 text-sm font-semibold text-white">
                {workspaceUser.initials}
              </div>
              {!collapsed ? (
                <div className="min-w-0">
                  <p className="truncate text-sm font-semibold text-slate-900 dark:text-white">{workspaceUser.name}</p>
                  <p className="truncate text-xs text-slate-500 dark:text-slate-300">{workspaceUser.role}</p>
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}
