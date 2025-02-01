// 'use client'
// import convertToSubcurrency from "@/lib/convertToSubcurrency"

// import { useState, useEffect, Suspense } from 'react'
// import { useStripe, useElements, PaymentElement } from '@stripe/react-stripe-js'

// interface Payment {
//     amount: number 
// }
// export default function CheckOutPage  ({ amount }: Payment)   {
//     console.log(window.location.host)

//     const myhost = window.location.host
//     let URL = '';

//     if (myhost === 'localhost:3000') {
//         URL = 'http://localhost:3000'
//     }
//     else {
//         URL = 'https://marketplace-website-shop-co.vercel.app/';
//     }

//     const stripe = useStripe()
//     const elements = useElements()

//     const [errorMessage, setError] = useState<string>()
//     const [clientSecret, setClientSecret] = useState('')
//     const [loading, setLoading] = useState(false)


//     // as the payment method changes it is necessary to generate a new client secret.
//     useEffect(() => {
//         fetch('api/payment-intent', {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify({ amount: convertToSubcurrency(amount) })
//         })

//             .then(res => res.json())
//             .then(data => setClientSecret(data.clientSecret))
//     }, [amount])

//     const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//         e.preventDefault()
//         setLoading(true)

//         // Error handling
//         if (!stripe || !elements) {
//             return
//         }

//         const { error: submitErrors } = await elements.submit()
//         if (submitErrors) {
//             setError(submitErrors.message)
//             setLoading(false)
//             return
//         }

//         const { error } = await stripe.confirmPayment({
//             elements,
//             clientSecret,
//             confirmParams: {
//                 return_url: `${URL}/payment-success?amount=${amount}`
//             }
//         })

//         if (error) {
//             setError(error.message)
//         }
//         else {
//             setError('')
//             setLoading(false)
//         }
//     }

//     return (
//         <form onSubmit={handleSubmit} className='p-8 my-24'>
//             {clientSecret && <PaymentElement />}
//             <button className='w-full bg-black text-white py-2 mt-5'>Pay Now</button>
//         </form>
//     )
// }




"use client";  // Ensure this is at the top

import convertToSubcurrency from "@/lib/convertToSubcurrency";
import { useState, useEffect } from "react";
import { useStripe, useElements, PaymentElement } from "@stripe/react-stripe-js";

export default function CheckOutPage() {
    if (typeof window === "undefined") return null; // Ensure it runs only in the client

    const myhost = window.location.host;
    let URL = myhost === "localhost:3000" ? "http://localhost:3000" : "https://marketplace-website-shop-co.vercel.app/";

    const stripe = useStripe();
    const elements = useElements();

    const [errorMessage, setError] = useState<string>();
    const [clientSecret, setClientSecret] = useState("");
    const [loading, setLoading] = useState(false);

    // Dummy amount for testing, replace it with proper logic
    const amount = 1000; 

    useEffect(() => {
        fetch("/api/payment-intent", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ amount: convertToSubcurrency(amount) }),
        })
            .then((res) => res.json())
            .then((data) => setClientSecret(data.clientSecret))
            .catch((err) => console.error("Error fetching client secret:", err));
    }, [amount]);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);

        if (!stripe || !elements) return;

        const { error: submitErrors } = await elements.submit();
        if (submitErrors) {
            setError(submitErrors.message);
            setLoading(false);
            return;
        }

        const { error } = await stripe.confirmPayment({
            elements,
            clientSecret,
            confirmParams: { return_url: `${URL}/payment-success?amount=${amount}` },
        });

        if (error) {
            setError(error.message);
        } else {
            setError("");
            setLoading(false);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="p-8 my-24">
            {clientSecret && <PaymentElement />}
            <button className="w-full bg-black text-white py-2 mt-5" disabled={loading}>
                {loading ? "Processing..." : "Pay Now"}
            </button>
            {errorMessage && <p className="text-red-500 mt-2">{errorMessage}</p>}
        </form>
    );
}
