"use client"

import { useState } from "react"

const categories = ["All", "Pizza", "Burger", "Sushi", "Pasta", "Dessert"]

const Categories = () => {
  const [activeCategory, setActiveCategory] = useState("All")

  return (
    <div className="flex flex-wrap gap-2 mt-8">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => setActiveCategory(category)}
          className={`px-4 py-2 rounded-full ${
            activeCategory === category ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-800 hover:bg-gray-300"
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  )
}

export default Categories

