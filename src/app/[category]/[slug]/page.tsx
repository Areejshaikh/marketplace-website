"use client";

import { useEffect, useState } from "react";
import { client } from "@/sanity/lib/client";
import { groq } from "next-sanity";
import ProductPageClient from "./ProductPageClient";
import { Product } from "@/components/utils/types";

interface ProductPageProps {
  params: { slug: string };
}

export default function ProductPage({ params }: ProductPageProps) {
  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    async function fetchProduct() {
      const data = await client.fetch(
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
        { slug: params.slug }
      );
      setProduct(data);
    }

    fetchProduct();
  }, [params.slug]);

  if (!product) {
    return <p className="text-center text-gray-500">Loading...</p>;
  }

  return <ProductPageClient product={product} />;
}
