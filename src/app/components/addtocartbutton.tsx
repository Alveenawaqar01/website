"use client";

import { toast } from "react-hot-toast";
import { useCartStore } from "../../../store/cardstore";

interface Product {
  _id: string;
  name: string;
  price: number;
  quantity?: number;
  slug?: string | { current: string };
  image?: string;  // Allow image to be a string here
}

export default function AddToCartButton({ product }: { product: Product }) {
  const addItem = useCartStore((state) => state.addItem);

  const handleAddToCart = () => {
    addItem({
      _id: product._id,
      name: product.name,
      price: product.price,
      quantity: product.quantity || 1,
      slug: typeof product.slug === "string" ? product.slug : product.slug?.current || "",
      image: product.image || "/placeholder.png",  // Use the 'image' here which is passed as 'mainImage'
    });

    toast.success(`Added ${product.name} to cart!`, {
      duration: 2000,
      position: "bottom-right",
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
