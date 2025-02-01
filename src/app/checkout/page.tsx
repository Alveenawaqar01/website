"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useCartStore } from "../../../store/cardstore";
import OrderSlip from "../components/OrderSlip";

interface CustomerDetails {
  name: string;
  email: string;
  phone: string;
  address: string;
}

interface CartItem {
  _id: string;
  name: string;
  price: number;
  quantity: number;
}

interface OrderDetails {
  customerDetails: CustomerDetails;
  items: CartItem[];
  total: number;
}

const CheckoutPage = () => {
  const router = useRouter();
  const { items, getTotalPrice, placeOrder } = useCartStore();
  const [customerDetails, setCustomerDetails] = useState<CustomerDetails>({
    name: "",
    email: "",
    phone: "",
    address: "",
  });
  const [showOrderSlip, setShowOrderSlip] = useState(false);
  const [orderDetails, setOrderDetails] = useState<OrderDetails | null>(null); // Replaced any

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCustomerDetails((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const order: OrderDetails = placeOrder(customerDetails); // Ensure placeOrder returns correct type
    setOrderDetails(order);
    setShowOrderSlip(true);
  };

  const handleFinishOrder = () => {
    router.push("/");
  };

  if (items.length === 0 && !showOrderSlip) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl font-bold mb-8">Checkout</h1>
        <p>Your cart is empty. Please add some items before checking out</p>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold mb-8">Checkout</h1>
      {!showOrderSlip ? (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              value={customerDetails.name}
              onChange={handleInputChange}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={customerDetails.email}
              onChange={handleInputChange}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
              Phone
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              required
              value={customerDetails.phone}
              onChange={handleInputChange}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <div>
            <label htmlFor="address" className="block text-sm font-medium text-gray-700">
              Address
            </label>
            <input
              type="text"
              id="address"
              name="address"
              required
              value={customerDetails.address}
              onChange={handleInputChange}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-2">Order Summary</h2>
            {items.map((item) => (
              <div key={item._id} className="flex justify-between items-center">
                <span>
                  {item.name} x {item.quantity}
                </span>
                <span>${(item.price * item.quantity).toFixed(2)}</span>
              </div>
            ))}
            <div className="mt-4 text-xl font-bold">Total: ${getTotalPrice().toFixed(2)}</div>
          </div>
          <button
            type="submit"
            className="w-full bg-indigo-600 border border-transparent rounded-md shadow-sm py-3 px-4 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Place Order
          </button>
        </form>
      ) : (
        orderDetails && (
          <OrderSlip
            customerDetails={orderDetails.customerDetails}
            items={orderDetails.items}
            total={orderDetails.total}
            onFinish={handleFinishOrder}
          />
        )
      )}
    </div>
  );
};

export default CheckoutPage;
