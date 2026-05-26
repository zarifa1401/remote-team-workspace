"use client";

import { usePathname } from "next/navigation";

export default function PageTransition({ children }) {
  const pathname = usePathname();

  return (
    <div key={pathname} className="animate-[pageFade_280ms_ease-out]">
      {children}
    </div>
  );
}
