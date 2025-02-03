"use client"

import { useState, useEffect } from "react"
import { Search } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { client } from "@/sanity/lib/client"
import { useCartStore } from "../../../store/cardstore"
import { urlFor } from "@/sanity/lib/image"
import { SanityImageSource } from "@sanity/image-url/lib/types/types"

interface Product {
  _id: string
  name: string
  price: number
  slug: { current: string }
  mainImage: SanityImageSource
}

interface CartItem {
  _id: string
  name: string
  price: number
  quantity: number
  slug: string
  image: string
}

export default function CartSearch() {
  const [searchTerm, setSearchTerm] = useState("")
  const [cartResults, setCartResults] = useState<CartItem[]>([]) // Use CartItem type
  const [productResults, setProductResults] = useState<Product[]>([]) // Use Product type
  const { items } = useCartStore()

  useEffect(() => {
    if (searchTerm.length > 0) {
      const cartItems = items.filter((item) =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
      setCartResults(cartItems)

      // Fetch product suggestions from Sanity
      const fetchProducts = async () => {
        const query = `*[_type == "product" && name match $searchTerm]{
          _id,
          name,
          price,
          "slug": slug.current,
          mainImage
        }[0...5]`
        const products = await client.fetch(query, { searchTerm: `${searchTerm}*` })
        setProductResults(products)
      }
      fetchProducts()
    } else {
      setCartResults([])
      setProductResults([])
    }
  }, [searchTerm, items])

  return (
    <div className="relative">
      <div className="flex items-center border border-gray-300 rounded-lg">
        <input
          type="text"
          placeholder="Search cart food items......"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full px-4 py-2 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
        />
        <div className="p-2 bg-yellow-500 rounded-r-lg">
          <Search className="w-6 h-6 text-white" />
        </div>
      </div>
      {(cartResults.length > 0 || productResults.length > 0) && (
        <div className="absolute z-10 w-full mt-2 bg-white border border-gray-300 rounded-lg shadow-lg max-h-60 overflow-y-auto">
          {cartResults.length > 0 && (
            <div>
              <h3 className="px-3 py-2 text-sm font-semibold text-gray-600">In Your Cart</h3>
              {cartResults.map((item) => (
                <Link href={`/product/${item.slug}`} key={item._id} className="flex items-center p-2 hover:bg-gray-100">
                  <div className="w-12 h-12 relative mr-3">
                    <Image
                      src={item.image || "/placeholder.svg"}
                      alt={item.name}
                      fill
                      className="object-cover rounded"
                    />
                  </div>
                  <div>
                    <p className="font-semibold">{item.name}</p>
                    <p className="text-sm text-gray-600">
                      ${item.price.toFixed(2)} x {item.quantity}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          )}
          {productResults.length > 0 && (
            <div>
              <h3 className="px-3 py-2 text-sm font-semibold text-gray-600">Product Suggestions</h3>
              {productResults.map((product) => (
                <Link
                  href={`/product/${product.slug}`}
                  key={product._id}
                  className="flex items-center p-2 hover:bg-gray-100"
                >
                  <div className="w-12 h-12 relative mr-3">
                    <Image
                      src={urlFor(product.mainImage).url() || "/placeholder.svg"}
                      alt={product.name}
                      fill
                      className="object-cover rounded"
                    />
                  </div>
                  <div>
                    <p className="font-semibold">{product.name}</p>
                    <p className="text-sm text-gray-600">${product.price.toFixed(2)}</p>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  )
}
