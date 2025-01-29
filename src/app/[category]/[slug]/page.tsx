// import { client } from "@/sanity/lib/client";
// import { groq } from "next-sanity";
// import ProductPageClient from "./ProductPageClient";
// // fetch data From sanity
// interface ProductPageProps {
//   params : Promise<{slug: string}>
// }
// async function getProduct(slug: string ): Promise<Product> {
//   return client.fetch(
//     groq`*[_type == "products" && slug.current == $slug][0] {
//       _id,
//       name,
//       price,
//       description,
//       "imageUrl": image.asset->url,
//       category,
//       slug,
//       discountPercent,
//       new,
//       colors,
//       sizes,
//       rating,
//       quantity,
//     }`,
//     { slug }
//   );
// }
// export default async function ProductPage({ params }: ProductPageProps) {
//   const { slug } = await params;
//   const product = await getProduct(params.slug);

//   return <ProductPageClient product={product} />;
// }






import { client } from "@/sanity/lib/client";
import { groq } from "next-sanity";
import ProductPageClient from "./ProductPageClient";
import { Product } from "@/utils/type"; // Ensure this is correct

interface ProductPageProps {
  params: { slug: string };
}

async function getProduct(slug: string): Promise<Product> {
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
  const { slug } = params;
  const product = await getProduct(slug);

  return <ProductPageClient product={product} />;
}


