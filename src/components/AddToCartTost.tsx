'use client'



import { addToCart } from '@/app/store/features/cart';
import { useAppDispatch } from '@/app/store/hooks';
import React from 'react';


import { ToastContainer, toast } from 'react-toastify';
import { Button } from './ui/button';



interface AddToCartTostProps {
    cartItem: any; // Replace 'any' with the appropriate type if known
}

const AddToCartTost: React.FC<AddToCartTostProps> = ({ cartItem }) => {
    const dispatch = useAppDispatch();



    const notify = () => toast.success('Product Added Successfully', {
        position: "top-left",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
    });


    return (
        <>
            <div onClick={() => dispatch(addToCart(cartItem))}>
                <Button onClick={notify} className=" py-6 px-20 rounded-full shadow-lg bg-black text-white
                   hover:text-black hover:bg-white duration-500 ">
                    Add To Cart</Button>


            </div>
            <div>
                <ToastContainer
                    position="top-left"
                    autoClose={3000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="light"
                />
            </div>
        </>
    )

}


export default AddToCartTost