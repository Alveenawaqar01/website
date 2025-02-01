"use client"


import Link from "next/link"
import { useCartStore } from "../../../store/cardstore"

const CartPage = () => {
  const { items, removeItem, clearCart, getTotalPrice } = useCartStore()

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold mb-8">Your Cart</h1>
      {items.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <>
          <div className="space-y-4">
            {items.map((item) => (
              <div key={item._id} className="flex justify-between items-center border-b pb-4">
                <div>
                  <h3 className="text-lg font-semibold">{item.name}</h3>
                  <p className="text-gray-600">
                    ${item.price.toFixed(2)} x {item.quantity}
                  </p>
                </div>
                <div>
                  <p className="font-semibold">${(item.price * item.quantity).toFixed(2)}</p>
                  <button onClick={() => removeItem(item._id)} className="text-red-500 hover:text-red-700">
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8">
            <p className="text-xl font-semibold">Total: ${getTotalPrice().toFixed(2)}</p>
            <div className="mt-4 space-x-4">
              <button
                onClick={clearCart}
                className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500"
              >
                Clear Cart
              </button>
              <Link
                href="/checkout"
                className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                Proceed to Checkout
              </Link>
            </div>
          </div>
        </>
      )}
    </div>
  )
}

export default CartPage

