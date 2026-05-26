"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  BarChart3,
  CalendarDays,
  CalendarRange,
  FolderKanban,
  LayoutDashboard,
  ListTodo,
  MessageSquareText,
  Settings2,
  UsersRound,
} from "lucide-react";
import { cn } from "@/lib/utils";

const iconMap = {
  LayoutDashboard,
  FolderKanban,
  ListTodo,
  UsersRound,
  CalendarDays,
  CalendarRange,
  MessageSquareText,
  BarChart3,
  Settings2,
};

export default function NavigationLinks({ items, collapsed = false, onNavigate }) {
  const pathname = usePathname();

  return (
    <nav className="space-y-1.5">
      {items.map((item) => {
        const isActive =
          item.href === "/"
            ? pathname === item.href
            : pathname === item.href || pathname.startsWith(`${item.href}/`);
        const Icon = iconMap[item.icon];

        return (
          <Link
            key={item.href}
            href={item.href}
            onClick={onNavigate}
            className={cn(
              "group flex items-center gap-3 rounded-[22px] px-3 py-2.5 text-sm font-medium transition",
              collapsed ? "justify-center" : "",
              isActive
                ? "bg-gradient-to-r from-rose-50 to-pink-50 text-rose-600 shadow-[0_16px_35px_rgba(244,114,182,0.16)] dark:from-white/10 dark:to-white/5 dark:text-rose-100"
                : "text-slate-500 hover:bg-rose-50/80 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-white/8 dark:hover:text-white"
            )}
          >
            <span
              className={cn(
                "flex h-10 w-10 items-center justify-center rounded-2xl transition",
                isActive
                  ? "bg-gradient-to-br from-rose-400 to-pink-500 text-white"
                  : "bg-white/90 text-slate-500 shadow-sm group-hover:bg-white group-hover:text-rose-500 dark:bg-white/6 dark:text-slate-300 dark:group-hover:bg-white/12 dark:group-hover:text-rose-100"
              )}
            >
              <Icon className="h-4 w-4" />
            </span>
            {!collapsed ? (
              <>
                <span className="flex-1">{item.label}</span>
                {item.badge ? (
                  <span className="rounded-full bg-rose-100 px-2 py-0.5 text-[11px] font-semibold text-rose-600 dark:bg-white/10 dark:text-rose-100">
                    {item.badge}
                  </span>
                ) : null}
              </>
            ) : null}
          </Link>
        );
      })}
    </nav>
  );
}
