"use client"


import { useState } from "react"  
import { BsSearchHeart } from "react-icons/bs"
const SearchBar = () => {
  const [query, setQuery] = useState("")

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    // Implement search functionality here
    console.log("Searching for:", query)
  }

  return (
    <form onSubmit={handleSearch} className="flex items-center">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search for dishes..."
        className="w-full px-4 py-2 rounded-l-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button
        type="submit"
        className="px-4 py-2 bg-blue-500 text-white rounded-r-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        <BsSearchHeart className="h-5 w-5" />
      </button>
    </form>
  )
}

export default SearchBar

