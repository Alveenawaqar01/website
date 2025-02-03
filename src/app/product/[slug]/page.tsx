import { Suspense } from "react";
import { notFound } from "next/navigation";
import { client } from "@/sanity/lib/client";
import ProductDetails from "./ProductDetail";

interface Product {
  _id: string;
  name: string;
  price: number;
  description: string;
  slug: string;
  mainImage: string;
  additionalImages: string[];
  category: {
    name: string;
    slug: string;
  };
  rating: number;
  reviews: number;
}

async function getProduct(slug: string): Promise<Product | null> {
  try {
    const product = await client.fetch(
      `*[_type == "product" && slug.current == $slug][0]{
        _id,
        name,
        price,
        description,
        "slug": slug.current,
        "mainImage": mainImage.asset->url,
        "additionalImages": additionalImages[].asset->url,
        category->{
          name,
          "slug": slug.current
        },
        rating,
        reviews
      }`,
      { slug }
    );

    if (!product) {
      return null;
    }

    return product;
  } catch (error) {
    console.error("Error fetching product:", error);
    return null;
  }
}

export default async function ProductPage({ params }: { params: { slug: string } }) {
  const product = await getProduct(params.slug);

  if (!product) {
    notFound();
  }

  // Transform the image data for the client component
  const transformedProduct: Product = {
    ...product,
    mainImage: product.mainImage || "/placeholder.svg", // Default to placeholder if mainImage is missing
    additionalImages: product.additionalImages || [],  // Default to empty array if additionalImages is missing
    slug: product.slug || "", // Ensure slug is not undefined or null
  };

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ProductDetails product={transformedProduct} />
    </Suspense>
  );
}
