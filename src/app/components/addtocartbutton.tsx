"use client";

import { toast } from "react-hot-toast";
import { useCartStore } from "../../../store/cardstore";

// Define Product type, allowing the 'image' property to be a string.
interface Product {
  _id: string;
  name: string;
  price: number;
  quantity?: number;
  slug?: string | { current: string };
  image: string;  // 'image' property is required here
}

export default function AddToCartButton({ product }: { product: Product }) {
  const addItem = useCartStore((state) => state.addItem);

  // Function to handle adding the product to the cart
  const handleAddToCart = () => {
    addItem({
      _id: product._id,
      name: product.name,
      price: product.price,
      quantity: product.quantity || 1,  // Default quantity to 1 if not provided
      slug: typeof product.slug === "string" ? product.slug : product.slug?.current || "",
      image: product.image || "/placeholder.png",  // Ensure image is passed as a string
    });

    // Display success message using toast notification
    toast.success(`Added ${product.name} to cart!`, {
      duration: 2000,  // Show for 2 seconds
      position: "bottom-right",  // Position of the toast message
    });
  };

  return (
    <button
      onClick={handleAddToCart}
      className="w-full py-3 px-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
    >
      Add to Cart
    </button>
  );
}
