import { client } from "@/sanity/lib/client";
import { groq } from "next-sanity";
import ProductPageClient from "./ProductPageClient";

// fetch data From sanity
interface ProductPageClientProps {
  params : Promise<{slug: string}>
}
async function getProduct(slug: string ): Promise<Product> {
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

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = await getProduct(params.slug);

  return <ProductPageClient product={product} />;
}



