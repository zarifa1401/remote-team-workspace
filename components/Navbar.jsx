"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

export const links = [
  { href: "/", label: "Dashboard" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
  { href: "/teamMembers", label: "Team Members" },
  { href: "/tasks", label: "Tasks"},
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/80 backdrop-blur-lg">
      <div className="container navbar-inner mx-auto flex items-center justify-between px-6 py-4">
        
        <Link
          href="/"
          className="logo text-2xl font-bold tracking-wide text-gray-900"
        >
          RTW <span className="text-blue-600">.</span>
        </Link>

        <nav className="nav-link flex items-center gap-8">
          {links.map((link) => {
            const isActive = pathname === link.href;

            return (
              <Link
                key={link.href}
                href={link.href}
                className={
                  isActive
                    ? "nav-link active text-blue-600 font-semibold transition duration-300"
                    : "nav-link text-gray-600 hover:text-blue-600 transition duration-300"
                }
              >
                {link.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}