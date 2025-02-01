import { create } from "zustand"
import { persist } from "zustand/middleware"

export interface CartItem {
  _id: string
  name: string
  price: number
  quantity: number
}

interface CustomerDetails {
  name: string
  email: string
  phone: string
  address: string
}

export interface Order {
  id: string
  customerDetails: CustomerDetails
  items: CartItem[]
  total: number
  date: string
  status: "Pending" | "Processing" | "Shipped" | "Delivered"
}

interface CartStore {
  items: CartItem[]
  orders: Order[]
  addItem: (item: CartItem) => void
  removeItem: (id: string) => void
  clearCart: () => void
  getTotalItems: () => number
  getTotalPrice: () => number
  placeOrder: (customerDetails: CustomerDetails) => Order
  updateOrderStatus: (orderId: string, status: Order["status"]) => void
  removeOrder: (orderId: string) => void
}

export const useCartStore = create<CartStore>()(
  persist(
    (set, get) => ({
      items: [],
      orders: [],
      addItem: (item) =>
        set((state) => {
          const existingItem = state.items.find((i) => i._id === item._id)
          if (existingItem) {
            return {
              items: state.items.map((i) => (i._id === item._id ? { ...i, quantity: i.quantity + 1 } : i)),
            }
          }
          return { items: [...state.items, { ...item, quantity: 1 }] }
        }),
      removeItem: (id) =>
        set((state) => ({
          items: state.items.filter((i) => i._id !== id),
        })),
      clearCart: () => set({ items: [] }),
      getTotalItems: () => {
        const { items } = get()
        return items.reduce((total, item) => total + item.quantity, 0)
      },
      getTotalPrice: () => {
        const { items } = get()
        return items.reduce((total, item) => total + item.price * item.quantity, 0)
      },
      placeOrder: (customerDetails) => {
        const { items, getTotalPrice } = get()
        const newOrder: Order = {
          id: `ORD-${Math.random().toString(36).substr(2, 9)}`,
          customerDetails,
          items,
          total: getTotalPrice(),
          date: new Date().toISOString(),
          status: "Pending",
        }
        set((state) => ({
          orders: [...state.orders, newOrder],
          items: [], // Clear the cart after placing the order
        }))
        return newOrder
      },
      updateOrderStatus: (orderId, status) =>
        set((state) => ({
          orders: state.orders.map((order) => (order.id === orderId ? { ...order, status } : order)),
        })),
      removeOrder: (orderId) =>
        set((state) => ({
          orders: state.orders.filter((order) => order.id !== orderId),
        })),
    }),
    {
      name: "cart-storage",
    },
  ),
)

