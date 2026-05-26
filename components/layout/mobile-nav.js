import { Flower2, X } from "lucide-react";
import NavigationLinks from "./navigation-links";
import { navItems } from "@/data/workspace-data";

export default function MobileNav({ open, onClose }) {
  return (
    <div className={`fixed inset-0 z-50 transition lg:hidden ${open ? "pointer-events-auto" : "pointer-events-none"}`}>
      <button
        type="button"
        onClick={onClose}
        aria-label="Close navigation"
        className={`absolute inset-0 bg-slate-950/35 backdrop-blur-sm transition ${open ? "opacity-100" : "opacity-0"}`}
      />
      <div
        className={`absolute left-0 top-0 h-full w-[88%] max-w-sm border-r border-rose-100 bg-[#fffafc] p-5 shadow-[0_30px_80px_rgba(31,23,33,0.18)] transition duration-300 dark:border-white/10 dark:bg-[#1b1320] ${open ? "translate-x-0" : "-translate-x-full"}`}
      >
        <div className="flex items-start justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-[20px] bg-gradient-to-br from-rose-400 to-fuchsia-500 text-white">
              <Flower2 className="h-6 w-6" />
            </div>
            <div>
              <p className="font-display text-xl font-semibold text-slate-900 dark:text-white">BloomSpace</p>
              <p className="text-sm text-slate-500 dark:text-slate-300">Remote Team Workspace</p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="rounded-2xl border border-rose-100 bg-white/80 p-2 text-slate-500 dark:border-white/10 dark:bg-white/5 dark:text-slate-300"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        <div className="mt-8">
          <NavigationLinks items={navItems} onNavigate={onClose} />
        </div>
      </div>
    </div>
  );
}
