"use client"

import Link from "next/link"
import Image from "next/image"
import { Star, X, Minus, Plus } from "lucide-react"
import { useState, useEffect } from "react"
import { useCartStore } from "../../../store/cardstore"

const CartPage = () => {
  const { items, removeItem, clearCart, addItem } = useCartStore()
  const [quantities, setQuantities] = useState<{ [key: string]: number }>({})
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    setQuantities(Object.fromEntries(items.map((item) => [item._id, item.quantity])))
  }, [items])

  const updateQuantity = (itemId: string, delta: number) => {
    const item = items.find((i) => i._id === itemId)
    if (item) {
      const newQuantity = Math.max(1, (quantities[itemId] || 1) + delta)
      setQuantities((prev) => ({ ...prev, [itemId]: newQuantity }))
      addItem({ ...item, quantity: newQuantity })
    }
  }

  const calculateItemTotal = (price: number, itemId: string) => {
    return price * (quantities[itemId] || 1)
  }

  const calculateTotal = () => {
    return items.reduce((total, item) => total + calculateItemTotal(item.price, item._id), 0)
  }

  if (!mounted) {
    return null // or a loading spinner
  }

  if (items.length === 0) {
    return (
      <div className="max-w-6xl mx-auto px-4 py-16 text-center">
        <h1 className="text-3xl font-bold mb-8">Your Cart is Empty</h1>
        <p className="text-gray-600 mb-8">Looks like you haven't added any items to your cart yet</p>
        <Link
          href="/"
          className="inline-block bg-blue-500 text-white px-8 py-3 rounded-md hover:bg-blue-600 transition-colors"
        >
          Continue Shopping
        </Link>
      </div>
    )
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold mb-8">Shopping Cart</h1>

      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-4 text-left text-sm font-medium text-gray-500">Product</th>
                <th className="px-6 py-4 text-left text-sm font-medium text-gray-500">Price</th>
                <th className="px-6 py-4 text-left text-sm font-medium text-gray-500">Quantity</th>
                <th className="px-6 py-4 text-left text-sm font-medium text-gray-500">Total</th>
                <th className="px-6 py-4 text-left text-sm font-medium text-gray-500">Remove</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {items.map((item) => (
                <tr key={item._id}>
                  <td className="px-6 py-4">
                    <div className="flex items-center">
                      <div className="h-20 w-20 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                        <Image
                          src={item.image || "/placeholder.png"}
                          alt={item.name}
                          width={80}
                          height={80}
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">{item.name}</div>
                        <div className="flex items-center mt-1">
                          {[...Array(5)].map((_, index) => (
                            <Star
                              key={index}
                              className={`w-4 h-4 ${index < 3 ? "text-yellow-400 fill-current" : "text-gray-300"}`}
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-sm text-gray-900">${item.price.toFixed(2)}</div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center space-x-2">
                      <button onClick={() => updateQuantity(item._id, -1)} className="p-1 rounded-md hover:bg-gray-100">
                        <Minus className="w-4 h-4 text-gray-500" />
                      </button>
                      <span className="text-sm text-gray-900 w-8 text-center">{quantities[item._id] || 1}</span>
                      <button onClick={() => updateQuantity(item._id, 1)} className="p-1 rounded-md hover:bg-gray-100">
                        <Plus className="w-4 h-4 text-gray-500" />
                      </button>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-sm text-gray-900">${calculateItemTotal(item.price, item._id).toFixed(2)}</div>
                  </td>
                  <td className="px-6 py-4">
                    <button onClick={() => removeItem(item._id)} className="text-red-500 hover:text-red-700">
                      <X className="w-5 h-5" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="px-6 py-4 bg-gray-50">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex space-x-4">
              <button
                onClick={clearCart}
                className="px-6 py-2 border border-red-500 text-red-500 rounded-md hover:bg-red-50 transition-colors"
              >
                Clear Cart
              </button>
              <Link
                href="/"
                className="px-6 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition-colors"
              >
                Continue Shopping
              </Link>
            </div>
            <div className="text-right">
              <div className="text-lg font-medium text-gray-900">Total: ${calculateTotal().toFixed(2)}</div>
              <Link
                href="/checkout"
                className="mt-2 inline-block px-8 py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
              >
                Proceed to Checkout
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CartPage
