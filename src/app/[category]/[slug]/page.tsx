import { client } from "@/sanity/lib/client";
import { groq } from "next-sanity";
import ProductPageClient from "./ProductPageClient";
import { Product } from "@/components/utils/types";
import { use } from "react"; // ✅ Required in Next.js 15 for unwrapping params

interface ProductPageProps {
  params: Promise<{ slug: string }>; // ✅ params is now a Promise
}

// ✅ Use "use" to unwrap params
export default function ProductPage({ params }: ProductPageProps) {
  const { slug } = use(params); // ✅ Unwrap params using use()

  async function getProduct(slug: string): Promise<Product> {
    "use server"; // Ensure it runs on the server
    return client.fetch(
      groq`*[_type == "products" && slug.current == $slug][0] {
        _id,
        name,
        price,
        description,
        "imageUrl": image.asset->url,
        category,
        slug,
        discountPercent,
        new,
        colors,
        sizes,
        rating,
        quantity,
      }`,
      { slug }
    );
  }

  const product = use(getProduct(slug)); // ✅ Fetch data using use()

  if (!product) {
    return <p className="text-center text-gray-500">Product not found.</p>;
  }

  return <ProductPageClient product={product} />;
}
