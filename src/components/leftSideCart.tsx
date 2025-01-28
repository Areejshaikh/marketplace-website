'use client'

import { RiDeleteBin6Line } from "react-icons/ri";
import Image from "next/image";
import { FaMinus, FaPlus } from "react-icons/fa";
import { useAppDispatch, useAppSelector } from "@/app/store/hooks";
import { addCart, deleteItem, lessCart } from "@/app/store/features/cart";
import { urlFor } from "@/sanity/lib/image";
export default function LeftSideCart() {
    const cartArray = useAppSelector((state) => state.cart)
    const dispatch = useAppDispatch()
    return (
        <>
            {
                cartArray.length >= 1 &&
                cartArray.map((item, i) => (
                    <div key={i} className="my-12  md:w-[700px] md:h-[258px] w-[360px] h-[390px] mt-20 border border-gray-1 rounded-3xl py-2 px-4 md:space-y-8 ">
                        <div className="md:w-[667px] md:h-[124px] w-[230px] h-[99px]  flex justify-between">
                            <div className="md:flex md:space-x-6 space-x-2">
                                {/* Iamge
                                 */}
                                <div>
                                    <Image
                                        src={urlFor(item.image).url()} 
                                        alt={item.name}
                                        width={140}
                                        height={94}
                                        className=" rounded-md items-center md:p-4 transition-all duration-300 group-hover:brightness-50 group-hover:shadow-lg group-hover:shadow-black w-[240px] h-[220px] flex object-cover object-center  md:mx-auto basis-1/2 sm:basis-1/4 md:basis-1/6"
                                    />



                                </div>
                                <div className="flex md:py-4 md:justify-between md:w-[427px] md:h-[124px]">
                                    <div className="md:w-[327px] md:h-[124px] w-[215px] h-[99px]  md:space-y-2 space-y-1">
                                        <h3 className="md:text-lg text-md font-bold mb-4">{item.name}</h3>
                                        <p> Size:<span className="text-gray-400 my-4">{item.sizes}</span></p>

                                        <p>Color:<span className="text-gray-400 my-8">{item.colors[0]}</span></p>
                                        {/* Price  ,Discount*/}
                                       
                                        <div className="flex items-center ">
                                            <p className={`text-base leading-6 font-medium text-maincolor ${item.discountPercent > 0 &&
                                                "line-through decoration-2 decoration-red-500"} `} >
                                                ${item.price * item.quantity}</p>

                                            {/* price */}
                                            <p className="text-black font-bold text-xl ">&nbsp;
                                                {item.discountPercent > 0 ? (item.price - ((item.price * item.discountPercent) / 100)) * item.quantity : item.price * item.quantity}

                                            </p>
                                        </div>
                                    </div>
                                    <div className="md:w-[225px] md:h-[124px] w-[115px] h-[99px] relative flex mt-12 md:mt-0 items-end justify-end">
                                        {/* <div onClick={() => dispatch(deleteItem(item.uuid))} className="absolute right-4 mb-24 top-0 text-2xl text-red-500 cursor-pointer">
                                            < RiDeleteBin6Line onClick={() => dispatch(deleteItem(item.uuid))} />
                                        </div> */}
                                          <div className="absolute right-4 top-0 text-2xl text-red-500 cursor-pointer">
                                            < RiDeleteBin6Line onClick={() => dispatch(deleteItem(item._id))} />
                                        </div>
                                       {/* Increment Decrement Button */}
                                        <div className="absolute text-center flex justify-center bg-slate-200  w-[120px] md:w-[146px] h-[44px] items-center  rounded-full" >
                                            <button
                                                className="hover:text-myred duration-600">
                                                <FaPlus onClick={() => dispatch(addCart(item))} />
                                            </button>
                                            <span className="w-6 h-6 px-8">{item.quantity}</span>
                                            <button
                                                className="hover:text-myred duration-600">
                                                <FaMinus onClick={() => dispatch(lessCart(item))} />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                ))
            }
        </>


    )
}