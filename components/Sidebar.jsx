"use client"
import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"

export default function Sidebar() {
  const [open, setOpen] = useState(true)
  const pathname = usePathname()
  const links = [
    { name: "Dashboard", href: "/" },
    { name: "Projects", href: "/projects" },
    { name: "Tasks", href: "/tasks" },
    { name: "Team Members", href: "/team" },
    { name: "Meetings", href: "/meetings" },
    { name: "Support", href: "/contact" },
  ]

  return (
    <aside className={`bg-white dark:bg-gray-800 shadow-md ${open ? "w-64" : "w-20"} transition-all`}>
      <button onClick={() => setOpen(!open)} className="p-2 text-gray-600 hover:text-brand dark:text-gray-300">
        {open ? "<<" : ">>"}
      </button>
      <ul className="mt-4 space-y-2">
        {links.map(link => (
          <li key={link.name}>
            <Link
              href={link.href}
              className={`block px-4 py-2 rounded hover:bg-gray-100 dark:hover:bg-gray-700 transition ${
                pathname === link.href ? "bg-brand text-white" : "text-gray-700 dark:text-gray-300"
              }`}
            >
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  )
}
