'use client';
import { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";
import { HiStar } from "react-icons/hi2";
import AddToCartTost from "@/components/AddToCartTost";
import { urlFor } from "@/sanity/lib/image";
import { Product } from "@/components/utils/types";
import SlugImages from "@/components/slugImage";
import ProductInfo from "@/components/description";

// Props type for ProductPageClient
interface ProductPageClientProps {
    product: Product;
}

// Main function
export default function ProductPageClient({ product }: ProductPageClientProps) {

    const [cartItems, setCartItem] = useState({
        id: product._id,
        name: product.name,
        price: product.price,
        quantity: product.quantity,
        image: urlFor(product.imageUrl).url(),
        colors: product.colors,
        sizes: product.sizes,
        description: product.description,
        discountPercent: product.discountPercent,
        category: product.category,
        slug: product.slug,
        new: product.new,
        rating: product.rating,
    });

    return (
        <section className="max-w-screen-xl mt-10 mx-auto px-4 py-24 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                {/* Product Image Section */}
                <div className="mx-auto flex flex-wrap justify-center">
                    <SlugImages image={[cartItems.image]} />
                </div>

                {/* Product Details Section */}
                <div className="w-full lg:mt-0">
                    {/* Category */}
                    <h2 className="text-xl sm:text-2xl capitalize pb-4 font-extrabold text-red-500 tracking-widest">
                        {product.category}
                    </h2>

                    {/* Product Name */}
                    <h1 className="text-gray-900 text-2xl sm:text-3xl font-bold mb-4">
                        {product.name}
                    </h1>

                    {/* Product Rating */}
                    <div className="flex items-center mb-4">
                        <span className="flex text-[#FFAD33]">
                            {[...Array(5)].map((_, i) => (
                                <HiStar key={i} className="h-5 w-5" />
                            ))}
                            <span className="text-myBlack ml-2">{cartItems.rating}</span>
                        </span>
                    </div>

                    {/* Product Description */}
                    <p className="leading-relaxed text-sm sm:text-base mb-4">
                        {product.description}
                    </p>

                    {/* Product Price and Discount */}
                    <div className="flex items-center gap-4 mb-6">
                        <p
                            className={`text-lg font-medium ${
                                cartItems.discountPercent > 0 ? "line-through text-gray-500" : "text-maincolor"
                            }`}
                        >
                            ${cartItems.price * cartItems.quantity}
                        </p>
                        {cartItems.discountPercent > 0 && (
                            <p className="text-lg font-medium text-maincolor">
                                ${(cartItems.price - (cartItems.price * cartItems.discountPercent) / 100) *
                                    cartItems.quantity}
                            </p>
                        )}
                    </div>

                    {/* Colors */}
                    <div className="flex items-center mb-6">
                        <span className="font-medium mr-2">Color:</span>
                        {cartItems.colors.map((item: any, i: any) => (
                            <button
                                key={i}
                                onClick={() => setCartItem({ ...cartItems, colors: [item] })}
                                className="w-10 h-10 rounded-full shadow-lg mx-1 hover:scale-110 duration-300"
                                style={{ backgroundColor: item }}
                            />
                        ))}
                    </div>

                    {/* Sizes */}
                    <div className="flex items-center mb-6">
                        <span className="font-medium mr-3">Size:</span>
                        <div className="flex gap-2">
                            {cartItems.sizes.map((size: string ,i: number) => (
                                <button
                                    key={i}
                                    onClick={() => setCartItem({ ...cartItems, sizes: [size] })}
                                    className="py-2 px-4 border rounded-full shadow-lg text-sm font-medium bg-white hover:bg-black hover:text-white transition"
                                >
                                    {size}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Quantity and Add to Cart */}
                    <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                        {/* Quantity Control */}
                        <div className="flex items-center bg-slate-200 rounded-full px-4 py-2">
                            <button
                                onClick={() =>
                                    setCartItem({ ...cartItems, quantity: cartItems.quantity + 1 })
                                }
                                className="hover:text-myred duration-300"
                            >
                                <FaPlus />
                            </button>
                            <span className="mx-4">{cartItems.quantity}</span>
                            <button
                                onClick={() =>
                                    setCartItem({
                                        ...cartItems,
                                        quantity: Math.max(1, cartItems.quantity - 1),
                                    })
                                }
                                className="hover:text-myred duration-300"
                            >
                                <FaMinus />
                            </button>
                        </div>

                        {/* Add to Cart Button */}
                        <AddToCartTost cartItem={cartItems} />
                    </div>

                    {/* Product Info */}
                    <div className="mt-6">
                        <ProductInfo />
                    </div>
                </div>
            </div>
        </section>
    );
}
