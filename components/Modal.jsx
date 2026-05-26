"use client"
import { useState } from "react"

export default function Modal({ title, children }) {
  const [open, setOpen] = useState(false)

  return (
    <>
      {/* Trigger Button */}
      <button
        onClick={() => setOpen(true)}
        className="btn-primary dark:bg-gray-700 dark:text-white"
      >
        Open Modal
      </button>

      {/* Modal Overlay */}
      {open && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="card max-w-md w-full bg-white dark:bg-gray-800 dark:text-gray-100 relative">
            <h3 className="font-semibold mb-2">{title}</h3>
            <div>{children}</div>

            {/* Close Button */}
            <button
              onClick={() => setOpen(false)}
              className="btn-primary mt-4 dark:bg-gray-700 dark:text-white"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  )
}
