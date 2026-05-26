import './globals.css'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import Footer from '../components/Footer'
import ThemeToggle from '../components/ThemeToggle'

export const metadata = {
  title: 'Remote Team Workspace',
  description: 'Manage projects, tasks, meetings, and collaboration',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex min-h-screen bg-gray-50 dark:bg-gray-900">
        <Sidebar />
        <div className="flex flex-col flex-1">
          <Navbar />
          <main className="flex-1 p-6">{children}</main>
          <div className="p-4 flex justify-center">
            <ThemeToggle />
          </div>
          <Footer />
        </div>
      </body>
    </html>
  )
}
