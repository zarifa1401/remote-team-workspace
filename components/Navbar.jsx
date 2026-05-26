"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"

export default function Navbar() {
  const pathname = usePathname()
  const links = [
    { name: "Dashboard", href: "/" },
    { name: "Projects", href: "/projects" },
    { name: "Team", href: "/team" },
    { name: "Meetings", href: "/meetings" },
    { name: "Support", href: "/contact" },
  ]

  return (
    <nav className="bg-white dark:bg-gray-800 shadow px-6 py-3 flex justify-between items-center">
      <h1 className="text-lg font-bold text-brand dark:text-white">Remote Team Workspace</h1>
      <div className="space-x-4">
        {links.map(link => (
          <Link
            key={link.name}
            href={link.href}
            className={`hover:text-brand transition ${
              pathname === link.href ? "text-brand font-semibold" : "text-gray-700 dark:text-gray-300"
            }`}
          >
            {link.name}
          </Link>
        ))}
      </div>
    </nav>
  )
}
