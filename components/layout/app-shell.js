"use client";

import { useState } from "react";
import MobileNav from "./mobile-nav";
import Sidebar from "./sidebar";
import SiteFooter from "./site-footer";
import SiteHeader from "./site-header";

export default function AppShell({ children }) {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      <MobileNav open={mobileOpen} onClose={() => setMobileOpen(false)} />
      <div className="mx-auto flex min-h-screen w-full max-w-[1600px] gap-5 px-3 py-4 md:px-5 lg:px-6">
        <Sidebar
          collapsed={sidebarCollapsed}
          onToggle={() => setSidebarCollapsed((current) => !current)}
          onNavigate={() => setMobileOpen(false)}
        />
        <div className="flex min-w-0 flex-1 flex-col">
          <SiteHeader onOpenMobileMenu={() => setMobileOpen(true)} onToggleSidebar={() => setSidebarCollapsed((current) => !current)} />
          <main className="flex-1 pb-4">{children}</main>
          <SiteFooter />
        </div>
      </div>
    </>
  );
}
