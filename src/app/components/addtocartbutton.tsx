"use client"


import { toast } from "react-hot-toast"
import { useCartStore } from "../../../store/cardstore"

interface Product {
  _id: string
  name: string
  price: number
  quantity?: number
}

export default function AddToCartButton({ product }: { product: Product }) {
  const addItem = useCartStore((state) => state.addItem)

  const handleAddToCart = () => {
    addItem({
      _id: product._id,
      name: product.name,
      price: product.price,
      quantity: product.quantity || 1,
    })
    toast.success(`Added ${product.name} to cart!`)
  }

  return (
    <button
      onClick={handleAddToCart}
      className="w-full py-3 px-4 bg-green-800 text-white rounded-lg hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
    >
      Add to Cart
    </button>
  )
}

