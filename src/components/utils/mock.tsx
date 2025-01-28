import { client } from "@/sanity/lib/client";
import { Product } from "./types";

export const products = async (): Promise<Product[]> => {
  const query = `*[_type == "products"] {
    _id,
    name,
    price,
    description,
    "imageUrl": image.asset->url,
    slug,
    category,
    discountPercent,
    new,
    quantity,
    colors,
    sizes ,
    rating,
}`;



  const result = await client.fetch(query);
  return result;
};

