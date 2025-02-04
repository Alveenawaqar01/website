"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { toast } from "react-hot-toast"
import { ChevronLeft, CheckCircle } from "lucide-react"
import Link from "next/link"
import { useCartStore } from "../../../store/cardstore"

const CheckoutPage = () => {
  const router = useRouter()
  const { items, getTotalPrice, placeOrder } = useCartStore()
  const [showOrderConfirmation, setShowOrderConfirmation] = useState(false)
  const [orderDetails, setOrderDetails] = useState<any>(null)

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    country: "",
    city: "",
    address: "",
    paymentMethod: "cash",
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const subtotal = getTotalPrice()
  const shipping = 0 // Free shipping
  const tax = subtotal * 0.1 // 10% tax
  const total = subtotal + tax

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const customerDetails = {
      name: `${formData.firstName} ${formData.lastName}`,
      email: formData.email,
      phone: formData.phone,
      address: formData.address,
      paymentMethod: formData.paymentMethod,
    }

    const order = placeOrder(customerDetails)
    setOrderDetails(order)
    setShowOrderConfirmation(true)
    toast.success("Order placed successfully!")
  }

  if (items.length === 0 && !showOrderConfirmation) {
    router.push("/cart")
    return null
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {showOrderConfirmation ? (
          <div className="bg-white rounded-lg shadow-xl overflow-hidden max-w-md mx-auto">
            <div className="bg-green-500 p-4 text-white text-center">
              <CheckCircle className="w-12 h-12 mx-auto mb-2" />
              <h2 className="text-xl font-bold">Order Confirmed</h2>
              <p className="text-sm">Thank you for your purchase</p>
            </div>

            <div className="p-6 space-y-4">
              <div className="space-y-2">
                <h3 className="font-semibold">Order Details</h3>
                <p className="text-sm text-gray-600">Name: {orderDetails.customerDetails.name}</p>
                <p className="text-sm text-gray-600">Email: {orderDetails.customerDetails.email}</p>
                <p className="text-sm text-gray-600">Phone: {orderDetails.customerDetails.phone}</p>
                <p className="text-sm text-gray-600">Address: {orderDetails.customerDetails.address}</p>
                <p className="text-sm text-gray-600">Payment Method: {orderDetails.customerDetails.paymentMethod}</p>
              </div>

              <div className="space-y-2">
                <h3 className="font-semibold">Items Ordered</h3>
                <div className="max-h-40 overflow-y-auto space-y-2">
                  {orderDetails.items.map((item: any) => (
                    <div key={item._id} className="flex justify-between text-sm">
                      <span>
                        {item.name} x {item.quantity}
                      </span>
                      <span>${(item.price * item.quantity).toFixed(2)}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t">
                <div className="flex justify-between font-semibold">
                  <span>Total:</span>
                  <span>${orderDetails.total.toFixed(2)}</span>
                </div>
              </div>

              <button
                onClick={() => router.push("/")}
                className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors"
              >
                Continue Shopping
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column - Shipping Details */}
            <div className="lg:col-span-2 bg-white p-8 rounded-lg shadow-sm">
              <div className="mb-8">
                <Link href="/cart" className="flex items-center text-gray-600 hover:text-gray-800">
                  <ChevronLeft className="w-5 h-5 mr-1" />
                  Back to cart
                </Link>
              </div>

              <h2 className="text-2xl font-semibold mb-6">Shipping Address</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">First name</label>
                  <input
                    type="text"
                    name="firstName"
                    required
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Last name</label>
                  <input
                    type="text"
                    name="lastName"
                    required
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email address</label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Phone number</label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Country</label>
                  <select
                    name="country"
                    required
                    value={formData.country}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">Choose country</option>
                    <option value="PK">Pakistan</option>
                    <option value="US">United States</option>
                    <option value="UK">United Kingdom</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">City</label>
                  <select
                    name="city"
                    required
                    value={formData.city}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">Choose city</option>
                    <option value="KHI">Karachi</option>
                    <option value="LHR">Lahore</option>
                    <option value="ISB">Islamabad</option>
                  </select>
                </div>

                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Address</label>
                  <input
                    type="text"
                    name="address"
                    required
                    value={formData.address}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter your complete address"
                  />
                </div>

                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Payment Method</label>
                  <div className="space-y-2">
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="paymentMethod"
                        value="cash"
                        checked={formData.paymentMethod === "cash"}
                        onChange={handleInputChange}
                        className="mr-2"
                      />
                      Cash on Delivery
                    </label>
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="paymentMethod"
                        value="online"
                        checked={formData.paymentMethod === "online"}
                        onChange={handleInputChange}
                        className="mr-2"
                      />
                      Online Payment
                    </label>
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="paymentMethod"
                        value="jazzcash"
                        checked={formData.paymentMethod === "jazzcash"}
                        onChange={handleInputChange}
                        className="mr-2"
                      />
                      JazzCash
                    </label>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Order Summary */}
            <div className="bg-white p-8 rounded-lg shadow-sm h-fit">
              <h2 className="text-2xl font-semibold mb-6">Order Summary</h2>

              <div className="space-y-4 mb-6">
                {items.map((item) => (
                  <div key={item._id} className="flex items-center gap-4">
                    <img
                      src={item.image || "/placeholder.svg"}
                      alt={item.name}
                      className="w-20 h-20 rounded-md object-cover"
                    />
                    <div className="flex-1">
                      <h3 className="font-medium">{item.name}</h3>
                      <p className="text-sm text-gray-500">{item.quantity} pcs</p>
                      <p className="text-sm font-medium">${(item.price * item.quantity).toFixed(2)}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="border-t pt-4 space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Sub-total</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Shipping</span>
                  <span className="text-green-500">Free</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Tax</span>
                  <span>${tax.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-base font-semibold pt-2 border-t">
                  <span>Total</span>
                  <span>${total.toFixed(2)}</span>
                </div>
              </div>

              <button
                type="submit"
                className="w-full mt-8 bg-orange-500 text-white py-3 px-4 rounded-md hover:bg-orange-600 transition-colors focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
              >
                Place an order
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  )
}

export default CheckoutPage

