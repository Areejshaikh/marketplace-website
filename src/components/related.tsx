// "use client";

// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import Image from "next/image";
// import { HiStar } from "react-icons/hi2";
// import { useEffect, useState } from "react";
// import Link from "next/link";
// import { urlFor } from "@/sanity/lib/image";
// import { products } from "./utils/mock";
// import { Product } from "./utils/types";

// interface RelatedProductProps {
//   category: string;
//   currentProductId: string;
// }

// const RelatedProduct = ({ category, currentProductId }: RelatedProductProps) => {
//   const [relatedProducts, setRelatedProducts] = useState<Product[]>([]);

//   useEffect(() => {
//     const getProducts = async () => {
//       const allProducts = await products();
//       const filteredProducts = allProducts
//         .filter((product) => product.category === category && product._id !== currentProductId)
//         .slice(0, 4);
//       setRelatedProducts(filteredProducts);
//     };
//     getProducts();
//   }, [category, currentProductId]);

//   return (
//     <div className="mb-0 md:flex mt-24 w-full max-w-screen-xl mx-auto overflow-hidden">
//       {relatedProducts.map((product) => (
//         <div key={product._id} className="mx-auto ml-6 md:ml-0 max-w-screen-2xl">
//           <div className="rounded-2xl w-[260px] h-[240px] group mb-4 flex object-cover object-center">
//             <Link href={`/${product.category}/${product.slug.current}`}>
//               <Image
//                 src={urlFor(product.imageUrl).url()}
//                 alt={product.name}
//                 width={140}
//                 height={94}
//                 className="rounded-2xl transition-all duration-300 group-hover:brightness-50 group-hover:shadow-lg group-hover:shadow-black w-[260px] h-[240px] mb-4 flex object-cover object-center"
//               />
//             </Link>
//           </div>
//           <div className="w-[240px] h-[94px]">
//             <h1 className="text-sm leading-2 font-medium">{product.name}</h1>
//             <div className="flex">
//               <span className="w-[100px] h-[20px] my-2 flex text-[#FFAD33]">
//                 {[...Array(5)].map((_, index) => (
//                   <HiStar key={index} className="w-[20px] h-[20px]" />
//                 ))}
//               </span>
//               <span className="w-[32px] m-2 h-[20px] text-[#7D8184] leading-5 text-sm font-semibold">
//                 {product.rating}
//               </span>
//             </div>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default RelatedProduct;
