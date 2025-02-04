"use client"

import { useEffect, useState } from "react"
import { useParams, useRouter } from "next/navigation"
import { CheckCircle } from "lucide-react"
import Link from "next/link"
import { Order, useCartStore } from "../../../../store/cardstore"

export default function OrderConfirmationPage() {
  const { orderId } = useParams()
  const router = useRouter()
  const { orders } = useCartStore()
  const [order, setOrder] = useState<Order | null>(null)

  useEffect(() => {
    const foundOrder = orders.find((o) => o.id === orderId)
    if (!foundOrder) {
      router.push("/")
      return
    }
    setOrder(foundOrder)
  }, [orderId, orders, router])

  if (!order) {
    return null
  }

  return (
    <div className="max-w-3xl mx-auto px-4 py-16">
      <div className="text-center mb-8">
        <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
        <h1 className="text-3xl font-bold text-gray-900">Order Confirmed!</h1>
        <p className="text-gray-600 mt-2">Thank you for your order.</p>
      </div>

      <div className="bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="p-6">
          <div className="border-b pb-4 mb-4">
            <h2 className="text-lg font-semibold">Order Details</h2>
            <p className="text-gray-600">Order ID: {order.id}</p>
            <p className="text-gray-600">Date: {new Date(order.date).toLocaleDateString()}</p>
          </div>

          <div className="border-b pb-4 mb-4">
            <h3 className="font-semibold mb-2">Shipping Information</h3>
            <p className="text-gray-600">{order.customerDetails.name}</p>
            <p className="text-gray-600">{order.customerDetails.email}</p>
            <p className="text-gray-600">{order.customerDetails.phone}</p>
            <p className="text-gray-600">{order.customerDetails.address}</p>
          </div>

          <div className="border-b pb-4 mb-4">
            <h3 className="font-semibold mb-2">Order Summary</h3>
            <div className="space-y-2">
              {order.items.map((item) => (
                <div key={item._id} className="flex justify-between">
                  <span className="text-gray-600">
                    {item.name} x {item.quantity}
                  </span>
                  <span className="text-gray-900">${(item.price * item.quantity).toFixed(2)}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-between items-center text-lg font-semibold">
            <span>Total</span>
            <span>${order.total.toFixed(2)}</span>
          </div>
        </div>
      </div>

      <div className="text-center mt-8">
        <Link
          href="/"
          className="inline-block bg-blue-600 text-white px-8 py-3 rounded-md hover:bg-blue-700 transition-colors"
        >
          Continue Shopping
        </Link>
      </div>
    </div>
  )
}

