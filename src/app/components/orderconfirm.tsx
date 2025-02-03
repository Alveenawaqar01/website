import { CheckCircle } from "lucide-react"
import type React from "react"

interface OrderConfirmationProps {
  customerDetails: {
    name: string
    email: string
    phone: string
    address: string
    paymentMethod: string
    paymentAccount?: string
  }
  items: {
    _id: string
    name: string
    price: number
    quantity: number
    image: string
  }[]
  total: number
  onFinish: () => void
}

const OrderConfirmation: React.FC<OrderConfirmationProps> = ({ customerDetails, items, total, onFinish }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-xl overflow-hidden max-w-md w-full">
        <div className="bg-green-500 p-4 text-white text-center">
          <CheckCircle className="w-12 h-12 mx-auto mb-2" />
          <h2 className="text-xl font-bold">Order Confirmed</h2>
          <p className="text-sm">Thank you for your purchase</p>
        </div>

        <div className="p-6 space-y-4">
          <div className="space-y-2">
            <h3 className="font-semibold">Order Details</h3>
            <p className="text-sm text-gray-600">Name: {customerDetails.name}</p>
            <p className="text-sm text-gray-600">Email: {customerDetails.email}</p>
            <p className="text-sm text-gray-600">Phone: {customerDetails.phone}</p>
            <p className="text-sm text-gray-600">Address: {customerDetails.address}</p>
          </div>

          <div className="space-y-2">
            <h3 className="font-semibold">Items Ordered</h3>
            <div className="max-h-40 overflow-y-auto space-y-2">
              {items.map((item) => (
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
              <span>${total.toFixed(2)}</span>
            </div>
          </div>

          <button
            onClick={onFinish}
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors"
          >
            Continue Shopping
          </button>
        </div>
      </div>
    </div>
  )
}

export default OrderConfirmation

