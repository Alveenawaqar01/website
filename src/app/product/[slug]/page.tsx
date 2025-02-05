import { Suspense } from "react"
import { notFound } from "next/navigation"
import { client } from "@/sanity/lib/client"
import ProductDetails from "./ProductDetail"
import { urlFor } from "@/sanity/lib/image"

// Define type for the image object
interface SanityImage {
  _type: string
  asset: {
    _ref: string
  }
}

// Define the product interface with more specific types
interface Product {
  _id: string
  name: string
  price: number
  description: string
  mainImage: SanityImage // Replace 'any' with a more specific type
  additionalImages: SanityImage[] // Replace 'any' with a more specific type (array of images)
  category: {
    name: string
    slug: {
      current: string
    }
  }
  rating: number
  reviews: number
}

// Function to fetch product by slug
async function getProduct(slug: string): Promise<Product | null> {
  try {
    const product = await client.fetch(
      `*[_type == "product" && slug.current == $slug][0]{
        _id,
        name,
        price,
        description,
        mainImage,
        additionalImages,
        category->{
          name,
          "slug": slug
        },
        rating,
        reviews
      }`,
      { slug },
    )

    if (!product) {
      return null
    }

    return product
  } catch (error) {
    console.error("Error fetching product:", error)
    return null
  }
}

export default async function ProductPage({ params }: { params: { slug: string } }) {
  const product = await getProduct(params.slug)

  if (!product) {
    notFound()
  }

  // Transform the image data for the client component
  const transformedProduct = {
    ...product,
    mainImage: urlFor(product.mainImage).url(),
    additionalImages: product.additionalImages?.map((img) => urlFor(img).url()) || [],
  }

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ProductDetails product={transformedProduct} />
    </Suspense>
  )
}
