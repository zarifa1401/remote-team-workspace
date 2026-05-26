import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-gray-800 text-center py-4 mt-6">
      <p className="text-sm text-gray-600 dark:text-gray-400">
        © {new Date().getFullYear()} Remote Team Workspace. All rights reserved.
      </p>
      <div className="space-x-4 mt-2">
        <Link href="/contact" className="hover:text-brand">Support</Link>
        <Link href="#" className="hover:text-brand">Twitter</Link>
        <Link href="#" className="hover:text-brand">LinkedIn</Link>
      </div>
    </footer>
  )
}
