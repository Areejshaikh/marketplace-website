'use client';

import Image from 'next/image';
import { HiStar } from 'react-icons/hi2';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { urlFor } from '@/sanity/lib/image';
import { Product } from '@/components/utils/types';
import { products } from '@/components/utils/mock';

export default function RelatedProductPage() {
    const [relatedProducts, setRelatedProducts] = useState<Product[]>([]);

    useEffect(() => {
        const getProducts = async () => {
            try {
                const data = await products(); // Ensure this function correctly fetches data
                setRelatedProducts(data.slice(0, 4)); // Show only 4 related products
            } catch (error) {
                console.error('Error fetching related products:', error);
            }
        };
        getProducts();
    }, []);

    return (
        <section className="max-w-screen-xl mx-auto my-24">
            <h1 className="text-2xl font-bold mb-6">Related Products</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {relatedProducts.map((product) => (
                    <div key={product._id} className="mx-auto">
                        <div className="rounded-2xl w-[240px] h-[240px] group mb-4">
                            <Link href={`/${product.category}/${product.slug.current}`}>
                                <Image
                                    src={urlFor(product.imageUrl).url()}
                                    alt={product.name}
                                    width={240}
                                    height={240}
                                    className="rounded-2xl transition-all duration-300 group-hover:brightness-50 group-hover:shadow-lg group-hover:shadow-black w-full h-full object-cover"
                                />
                            </Link>
                        </div>
                        <div className="text-center">
                            <h1 className="text-sm font-medium">{product.name}</h1>
                            <div className="flex justify-center my-2 text-[#FFAD33]">
                                {[...Array(5)].map((_, index) => (
                                    <HiStar key={index} className="w-5 h-5" />
                                ))}
                            </div>
                            <p className="text-sm text-gray-600">{product.rating}</p>
                            <div className="flex justify-center gap-4 mt-2">
                                <p className={`text-base font-medium ${product.discountPercent > 0 ? 'line-through text-red-500' : ''}`}>
                                    ${product.price * product.quantity}
                                </p>
                                {product.discountPercent > 0 && (
                                    <p className="text-base font-medium text-maincolor">
                                        ${(product.price - (product.price * product.discountPercent) / 100) * product.quantity}
                                    </p>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
