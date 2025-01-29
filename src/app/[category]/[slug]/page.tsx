import { client } from "@/sanity/lib/client";
import { groq } from "next-sanity";
import ProductPageClient from "./ProductPageClient";

// fetch data From sanity
interface PageProps {
  params: { slug: string };
}

async function getProduct({params}: PageProps) {
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
    { slug: params.slug }
  );
}

export default async function ProductPage({ params }: PageProps) {
  const product = await getProduct({ params });

  return <ProductPageClient product={product} />;
}
