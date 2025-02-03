import { create } from "zustand";
import { persist } from "zustand/middleware";

// Cart Item Interface
export interface CartItem {
  _id: string; // Product ID
  name: string; // Product name
  price: number; // Product price
  quantity: number; // Quantity of product in the cart
  slug: string; // Product slug for URL or SEO
  image: string; // Product image URL
}

// Customer Details Interface
interface CustomerDetails {
  name: string;
  email: string;
  phone: string;
  address: string;
  paymentMethod: string; // Payment method (e.g., Credit Card, PayPal, etc.)
  paymentAccount?: string; // Optional payment account information (e.g., PayPal account)
}

// Order Interface
export interface Order {
  id: string;
  customerDetails: CustomerDetails;
  items: CartItem[]; // Items that were in the cart at the time of the order
  total: number; // Total price of the order
  date: string; // Date of the order
  status: "Pending" | "Processing" | "Shipped" | "Delivered"; // Order status
}

// Cart Store Interface
interface CartStore {
  items: CartItem[]; // List of items in the cart
  orders: Order[]; // List of placed orders
  addItem: (item: CartItem) => void; // Add item to cart
  removeItem: (id: string) => void; // Remove item from cart by ID
  clearCart: () => void; // Clear all items from cart
  getTotalItems: () => number; // Get the total number of items in the cart
  getTotalPrice: () => number; // Get the total price of items in the cart
  placeOrder: (customerDetails: CustomerDetails) => Order; // Place an order and return the order object
  updateOrderStatus: (orderId: string, status: Order["status"]) => void; // Update the status of an order
  removeOrder: (orderId: string) => void; // Remove an order from the store
}

// Creating the Zustand store
export const useCartStore = create<CartStore>()(
  persist(
    (set, get) => ({
      items: [], // Initialize with an empty cart
      orders: [], // Initialize with no orders
      addItem: (item: CartItem) =>
        set((state) => {
          const existingItem = state.items.find((i) => i._id === item._id);
          if (existingItem) {
            // If item exists in cart, update the quantity
            return {
              items: state.items.map((i) =>
                i._id === item._id
                  ? { ...i, quantity: i.quantity + item.quantity }
                  : i
              ),
            };
          }
          // If item doesn't exist, add a new item to the cart
          return { items: [...state.items, { ...item }] };
        }),

      removeItem: (id: string) =>
        set((state) => ({
          // Filter out the item with the given id
          items: state.items.filter((i) => i._id !== id),
        })),

      clearCart: () => set({ items: [] }), // Clears all items from the cart

      getTotalItems: () => {
        const { items } = get();
        // Sum up the quantities of all items in the cart
        return items.reduce((total, item) => total + item.quantity, 0);
      },

      getTotalPrice: () => {
        const { items } = get();
        // Calculate total price by multiplying quantity by price for each item
        return items.reduce((total, item) => total + item.price * item.quantity, 0);
      },

      placeOrder: (customerDetails: CustomerDetails) => {
        const { items, getTotalPrice } = get();
        const newOrder: Order = {
          id: `ORD-${Math.random().toString(36).substr(2, 9)}`, // Generate a random order ID
          customerDetails,
          items,
          total: getTotalPrice(),
          date: new Date().toISOString(),
          status: "Pending", // Set initial status to "Pending"
        };
        // Add new order to the orders list and clear the cart
        set((state) => ({
          orders: [...state.orders, newOrder],
          items: [], // Clear the cart after placing the order
        }));
        return newOrder; // Return the new order
      },

      updateOrderStatus: (orderId: string, status: Order["status"]) =>
        set((state) => ({
          orders: state.orders.map((order) =>
            order.id === orderId ? { ...order, status } : order
          ),
        })),

      removeOrder: (orderId: string) =>
        set((state) => ({
          orders: state.orders.filter((order) => order.id !== orderId),
        })),
    }),
    {
      name: "cart-storage", // Persist cart data in localStorage
    }
  )
);
