import ProductDetail from "@/app/product/[slug]/ProductDetail";
import { notFound } from "next/navigation";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";

// Define types for image assets
interface ImageAsset {
  _ref: string; // Reference to the image asset in Sanity
}

interface Image {
  asset: ImageAsset;
}

// Define the structure for a product
interface Product {
  _id: string;
  name: string;
  price: number;
  description: string;
  mainImage: Image | null;  // Updated type from any to Image | null
  additionalImages: Image[]; // Array of Image objects
  category: {
    name: string;
    slug: {
      current: string;
    };
  };
  rating: number;
  reviews: number;
}

// Fetch product data from Sanity
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
      { slug }
    );

    if (!product) {
      return null;
    }

    console.log("Fetched Product Data:", product);
    console.log("Main Image Object:", product.mainImage);
    console.log("Additional Images Array:", product.additionalImages);

    return product;
  } catch (error) {
    console.error("Error fetching product:", error);
    return null;
  }
}

// Product page component
export default async function ProductPage({ params }: { params: { slug: string } }) {
  const product = await getProduct(params.slug);

  if (!product) {
    notFound();
  }

  // Transform product data with image URLs
  const transformedProduct = {
    ...product,
    mainImage: product.mainImage?.asset?._ref ? urlFor(product.mainImage).url() : "/fallback-image.jpg",
    additionalImages: Array.isArray(product.additionalImages)
      ? product.additionalImages.map((img) => (img?.asset?._ref ? urlFor(img).url() : "/fallback-image.jpg"))
      : [],
  };

  return <ProductDetail product={transformedProduct} />;
}
