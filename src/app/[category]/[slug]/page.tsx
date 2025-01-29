// import { client } from "@/sanity/lib/client";
// import { groq } from "next-sanity";
// import ProductPageClient from "./ProductPageClient";

// // fetch data From sanity

// async function getProduct(slug: string) {
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

// export default async function ProductPage({ params }: { params: { slug: string } }) {
//   const product = await getProduct(params.slug);

//   return <ProductPageClient product={product} />;
// }



import { client } from "@/sanity/lib/client";
import { groq } from "next-sanity";
import ProductPageClient from "./ProductPageClient";

// Fetch data from Sanity
async function getProduct(slug: string) {
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

// Define page props explicitly
interface PageProps {
  params: { slug: string };
}

// Dynamic route page component
export default async function ProductPage({ params }: PageProps) {
  const product = await getProduct(params.slug);

  return <ProductPageClient product={product} />;
}

// Generate static paths for dynamic routing (if using SSG)
export async function generateStaticParams() {
  const products = await client.fetch(
    groq`*[_type == "products"]{ "slug": slug.current }`
  );

  return products.map((product: { slug: string }) => ({
    slug: product.slug,
  }));
}
