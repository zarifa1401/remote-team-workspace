"use client"
import { useState } from "react"

export default function SearchBar({ data, onFilter }) {
  const [query, setQuery] = useState("")

  const handleSearch = e => {
    setQuery(e.target.value)
    const filtered = data.filter(item =>
      item.title.toLowerCase().includes(e.target.value.toLowerCase())
    )
    onFilter(filtered)
  }

  return (
    <input
      type="text"
      value={query}
      onChange={handleSearch}
      placeholder="Search..."
      className="border rounded px-3 py-2 w-full dark:bg-gray-800 dark:text-gray-100"
    />
  )
}
