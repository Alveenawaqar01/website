"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";
import { CheckCircle } from "lucide-react";
import { useCartStore } from "../../../store/cardstore";

interface CustomerDetails {
  name: string;
  email: string;
  phone: string;
  address: string;
  paymentMethod: string;
}

interface Item {
  _id: string;
  name: string;
  price: number;
  quantity: number;
  image?: string;
}

interface OrderDetails {
  customerDetails: CustomerDetails;
  items: Item[];
  total: number;
}

const CheckoutPage = () => {
  const router = useRouter();
  const { items, getTotalPrice, placeOrder } = useCartStore();
  const [showOrderConfirmation, setShowOrderConfirmation] = useState(false);
  const [orderDetails, setOrderDetails] = useState<OrderDetails | null>(null);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    country: "",
    city: "",
    address: "",
    paymentMethod: "cash",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const subtotal = getTotalPrice();
  const tax = subtotal * 0.1; // 10% tax
  const total = subtotal + tax; // Adding tax to total price

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const customerDetails = {
      name: `${formData.firstName} ${formData.lastName}`,
      email: formData.email,
      phone: formData.phone,
      address: formData.address,
      paymentMethod: formData.paymentMethod,
    };

    const order = placeOrder(customerDetails);
    setOrderDetails(order);
    setShowOrderConfirmation(true);
    toast.success("Order placed successfully!");
  };

  if (items.length === 0 && !showOrderConfirmation) {
    router.push("/cart");
    return null;
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
                <p className="text-sm text-gray-600">Name: {orderDetails?.customerDetails.name}</p>
                <p className="text-sm text-gray-600">Email: {orderDetails?.customerDetails.email}</p>
                <p className="text-sm text-gray-600">Phone: {orderDetails?.customerDetails.phone}</p>
                <p className="text-sm text-gray-600">Address: {orderDetails?.customerDetails.address}</p>
                <p className="text-sm text-gray-600">Payment Method: {orderDetails?.customerDetails.paymentMethod}</p>
              </div>

              <div className="space-y-2">
                <h3 className="font-semibold">Items Ordered</h3>
                <div className="max-h-40 overflow-y-auto space-y-2">
                  {orderDetails?.items.map((item: Item) => (
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
                <div className="flex justify-between text-sm font-semibold">
                  <span>Subtotal:</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-sm font-semibold">
                  <span>Tax (10%):</span>
                  <span>${tax.toFixed(2)}</span>
                </div>
                <div className="flex justify-between font-semibold">
                  <span>Total:</span>
                  <span>${total.toFixed(2)}</span>
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
            {/* Form and Order Summary Components */}
            <div>
              <label htmlFor="firstName">First Name</label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange} // Using the input change handler here
                className="form-input"
              />
            </div>
            <div>
              <label htmlFor="lastName">Last Name</label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange} // Same for other fields
                className="form-input"
              />
            </div>
            {/* Other fields go here */}
          </form>
        )}
      </div>
    </div>
  );
};

export default CheckoutPage;
