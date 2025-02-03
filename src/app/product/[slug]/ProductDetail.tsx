"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Star, Facebook, Twitter, Instagram, LinkIcon, Minus, Plus } from "lucide-react";
import AddToCartButton from "@/app/components/addtocartbutton";

interface ProductDetailsProps {
  product: {
    _id: string;
    name: string;
    price: number;
    description: string;
    mainImage: string;
    additionalImages: string[];
    category: {
      name: string;
      slug: string;
    };
    rating: number;
    reviews: number;
    slug: string;
  };
}

export default function ProductDetails({ product }: ProductDetailsProps) {
  const [selectedImage, setSelectedImage] = useState(product.mainImage);
  const [quantity, setQuantity] = useState(1);

  const allImages = [product.mainImage, ...(product.additionalImages || [])];

  const handleQuantityChange = (type: "increase" | "decrease") => {
    if (type === "increase") {
      setQuantity((prev) => prev + 1);
    } else if (type === "decrease" && quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Thumbnail Gallery */}
        <div className="lg:w-24 flex lg:flex-col gap-4 order-2 lg:order-1">
          {allImages.map((image, index) => (
            <button
              key={index}
              onClick={() => setSelectedImage(image)}
              className={`relative w-20 h-20 border-2 rounded-lg overflow-hidden ${
                selectedImage === image ? "border-blue-500" : "border-gray-200"
              }`}
            >
              <Image
                src={image || "/placeholder.svg"}
                alt={`${product.name} thumbnail ${index + 1}`}
                fill
                className="object-cover"
              />
            </button>
          ))}
        </div>

        {/* Main Image */}
        <div className="relative w-full lg:w-2/3 h-[400px] lg:h-[600px] order-1 lg:order-2">
          <Image
            src={selectedImage || "/placeholder.svg"}
            alt={product.name}
            fill
            className="rounded-lg object-cover"
            priority
          />
        </div>

        {/* Product Details */}
        <div className="lg:w-1/3 order-3">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <span className="inline-block px-3 py-1 bg-orange-100 text-orange-500 rounded-full text-sm font-medium mb-4">
              Featured
            </span>
            <h1 className="text-3xl font-bold text-gray-900 mb-4">{product.name}</h1>
            <div className="flex items-center gap-2 mb-4">
              <div className="flex items-center">
                {[...Array(5)].map((_, index) => (
                  <Star
                    key={index}
                    className={`w-5 h-5 ${
                      index < Math.floor(product.rating)
                        ? "text-yellow-400 fill-current"
                        : "text-gray-300"
                    }`}
                  />
                ))}
              </div>
              <span className="text-sm text-gray-500">
                {product.rating} Rating ({product.reviews} Reviews)
              </span>
            </div>
            <p className="text-gray-600 mb-6">{product.description}</p>
            <div className="flex items-center justify-between mb-6">
              <span className="text-3xl font-bold text-gray-900">${product.price.toFixed(2)}</span>
              <div className="flex items-center border rounded-lg">
                <button
                  onClick={() => handleQuantityChange("decrease")}
                  className="p-2 hover:bg-gray-100"
                  disabled={quantity <= 1}
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="px-4 py-2 border-x">{quantity}</span>
                <button onClick={() => handleQuantityChange("increase")} className="p-2 hover:bg-gray-100">
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>
            {/* AddToCartButton */}
            <AddToCartButton
              product={{
                _id: product._id,
                name: product.name,
                price: product.price,
                slug: product.slug,
                image: product.mainImage, // Pass mainImage as image
              }}
            />
            <div className="mt-6">
              <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
                <span>Category:</span>
                <Link href={`/category/${product.category?.slug}`} className="text-blue-500 hover:underline">
                  {product.category?.name}
                </Link>
              </div>
              <div className="flex items-center gap-4 mt-4">
                <span className="text-sm text-gray-600">Share:</span>
                <div className="flex gap-2">
                  <button className="p-2 hover:bg-gray-100 rounded-full">
                    <Facebook className="w-5 h-5" />
                  </button>
                  <button className="p-2 hover:bg-gray-100 rounded-full">
                    <Twitter className="w-5 h-5" />
                  </button>
                  <button className="p-2 hover:bg-gray-100 rounded-full">
                    <Instagram className="w-5 h-5" />
                  </button>
                  <button className="p-2 hover:bg-gray-100 rounded-full">
                    <LinkIcon className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
