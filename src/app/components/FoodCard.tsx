"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useCartStore } from "../../../store/cardstore";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
// Define proper types for Sanity Image objects
interface SanityImage {
  _ref: string; // This is the reference to the image asset in Sanity
  _type: string; // "image"
}

// Updated Product type with more specific image type
interface Product {
  _id: string;
  name: string;
  price: number;
  slug: string;
  description: string;
  mainImage?: SanityImage; // Specify that mainImage follows the SanityImage type
}

export default function FoodCards() {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const addItem = useCartStore((state) => state.addItem);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const fetchedProducts: Product[] = await client.fetch(`
          *[_type == "product"] {
            _id,
            name,
            price,
            "slug": slug.current,
            description,
            mainImage
          }
        `);
        setProducts(fetchedProducts.filter((product) => product.mainImage));
      } catch (err) {
        setError("Failed to load products");
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    }

    fetchProducts();
  }, []);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div className="text-red-500">Error: {error}</div>;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {products.map((product) => (
        <div key={product._id} className="bg-white rounded-lg shadow-md overflow-hidden">
          <Link href={`/product/${product.slug}`}>
            <div className="relative h-48">
              <Image
                src={product.mainImage ? urlFor(product.mainImage).url() : "/placeholder.svg"}
                alt={product.name}
                layout="fill"
                objectFit="cover"
                priority
              />
            </div>
          </Link>
          <div className="p-4">
            <Link href={`/product/${product.slug}`}>
              <h3 className="text-lg font-semibold hover:text-blue-500">{product.name}</h3>
            </Link>
            <p className="text-gray-600 mt-1">${product.price.toFixed(2)}</p>
            <p className="text-sm text-gray-500 mt-2 line-clamp-2">{product.description}</p>
            <button
              onClick={() => addItem({ _id: product._id, name: product.name, price: product.price, quantity: 1 })}
              className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Add to Cart
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
