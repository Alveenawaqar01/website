"use client"

import Image from "next/image"
import Link from "next/link"
import { useState, useEffect } from "react"
import toast from "react-hot-toast"

import { Toaster } from "react-hot-toast"
import { useCartStore } from "../../../store/cardstore"
import { client } from "@/sanity/lib/client"

interface Product {
  _id: string
  name: string
  price: number
  slug: string
  description: string
  image: string
}

const FoodCards = () => {
  const [foodItems, setFoodItems] = useState<Product[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const addItem = useCartStore((state) => state.addItem)

  useEffect(() => {
    const fetchProducts = async () => {
      setIsLoading(true)
      setError(null)
      try {
        const result = await client.fetch<Product[]>(`
          *[_type == "product"] {
            _id,
            name,
            price,
            "slug": slug.current,
            description,
            "image": mainImage.asset->url
          }
        `)
        console.log("Fetched products:", result) // Debugging log
        setFoodItems(result)
      } catch (error) {
        console.error("Error fetching products:", error)
        setError(`Failed to load products: ${error instanceof Error ? error.message : String(error)}`)
        toast.error(`Failed to load products. Please try again later.`)
      } finally {
        setIsLoading(false)
      }
    }
    fetchProducts()
  }, [])

  const handleAddToCart = (item: Product) => {
    addItem({
      _id: item._id,
      name: item.name,
      price: item.price,
      quantity: 1,
      slug: item.slug,
      image: item.image,
    })
    toast.success(`Added ${item.name} to cart!`, {
      duration: 2000,
      position: "bottom-right",
    })
  }

  if (isLoading) {
    return <div className="text-center py-10">Loading products...</div>
  }

  if (error) {
    return <div className="text-center py-10 text-red-500">{error}</div>
  }

  if (foodItems.length === 0) {
    return (
      <div className="text-center py-10">
        No products found Please check your Sanity content and ensure you have products created
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-4">
      {foodItems.map((item) => (
        <div key={item._id} className="bg-white rounded-lg shadow-md overflow-hidden">
          <Link href={`/product/${item.slug}`}>
            <div className="relative h-48">
              <Image src={item.image || "/placeholder.png"} alt={item.name} layout="fill" objectFit="cover" />
            </div>
          </Link>
          <div className="p-4">
            <Link href={`/product/${item.slug}`}>
              <h3 className="text-lg font-semibold hover:text-blue-500">{item.name}</h3>
            </Link>
            <p className="text-gray-600 mt-1">${item.price.toFixed(2)}</p>
            <p className="text-sm text-gray-500 mt-2 line-clamp-2">{item.description}</p>
            <button
              onClick={() => handleAddToCart(item)}
              className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Add to Cart
            </button>
          </div>
        </div>
      ))}
      <Toaster position="bottom-right" />
    </div>
  )
}

export default FoodCards

