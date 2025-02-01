'use client'
import Link from "next/link";
import { CiShoppingTag } from "react-icons/ci";
import LeftSideCart from "@/components/leftSideCart";
import { useAppSelector } from "../store/hooks";
import { Button } from "@/components/ui/button";

export default function CartPage() {

    const cartArray = useAppSelector((state) => state.cart)

    const total = cartArray.reduce((total: number, arr: { price: number; discountPercent: number; quantity: number }) => {
        return (total + (arr.price - (arr.price * arr.discountPercent) / 100) * arr.quantity);
    }, 0);


    const calculateTotalDiscount = (cartArray: { price: number; discountPercent: number; quantity: number }[]): number =>
        cartArray.reduce((total, item) => total + ((item.price * item.discountPercent) / 100) * item.quantity, 0);

    // // Example usage:
    const totalDiscount = calculateTotalDiscount(cartArray);

    return (
        <section id="cart" className="max-w-screen-xl mx-auto mt-24">

            <div className="breadcrumbs text-sm">
                <ul>
                    <li>
                        <Link href={'/'}>Home</Link>
                    </li>
                    <li><Link href={'/categories'}>Categories</Link></li>
                    <li>Cart</li>
                </ul>
            </div>
            <div className=" max:w-sreen-xl  mx-auto md-space-x-24 grid grid-cols-1 md:grid-cols-2 gap-44">

                <div>
                    <LeftSideCart />
                </div>
                <div className="my-12  md:w-[505px] md:h-[458px] w-[360px] h-[390px] mt-20 border border-gray-1 rounded-3xl py-2 px-4 md:space-y-8 ">
                    <span className="text-2xl font-bold  ">Order Summary</span>
                    <div className="md:w-[457px] md:h-[193px] w-[318px] h-[173px] space-y-4">
                        <div className="flex justify-between ">
                            <span className="text-gray-300">SubTotal</span>
                            <span>${total}</span>
                        </div>
                        <div className="flex justify-between ">
                            <span className="text-gray-300">Discount ({totalDiscount})</span>
                            <span className="text">{totalDiscount}</span>
                        </div>
                        <div className="flex justify-between ">
                            <span className="text-gray-300">Delivery Free</span>
                            <span>$15</span>
                        </div>
                        <div className=" md:w-[420px] w-[230px] h-[1px] bg-gray-300"></div>
                        <div className="flex justify-between ">
                            <span className="">Total</span>
                            <span>${total}</span>
                        </div>

                    </div>
                    <div className="md:w-[457px] md:h-[48px] relative w-[318px] h-[48px]  flex justify-between mb-12">

                        < CiShoppingTag className="w-4 h-4 transform  absolute left-2 top-5 right-1 -translate-y-1/2 text-lg text-gray-700" />
                        <input
                            type="text"
                            placeholder="What are you looking for?"
                            className={`rounded-full pl-6 w-full h-10
                                 bg-gray-200 placeholder:text-[12px] `}
                        />
                        <Button className="w-full md:w-38  inline-block 
                        text-center bg-black hover:bg-black/80 transition-all text-white 
                         rounded-full hover:animate-pulse">Apply</Button>
                    </div>


                    <div className="md:w-[457px] md:h-[60px] w-[318px] h-[54px] ">
                        <div className="md:w-[457px] md:h-[48px] w-[318px] h-[48px]  flex justify-between">
                            <Link href='/stripe-payment' className="w-full md:w-38 pt-[10px]
                              inline-block text-center bg-black hover:bg-black/80 
                              transition-all text-white py- rounded-full hover:animate-pulse">
                                Go to Checkout
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}