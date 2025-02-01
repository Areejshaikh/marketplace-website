"use client"

import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import CheckoutPage from '../../components/Checkoutpage';
import convertToSubcurrency from '@/lib/convertToSubcurrency';

if (process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY === undefined) {
    throw new Error('NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY is not defined')
}

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);

const StripePayment = () => {
    const amount = 49.99
    return (
        <div>
            <h1 className='text-6xl font-bold text-center'>Ali Jawwad has requested $ {amount}</h1>

            <Elements
                stripe={stripePromise}
                options={{
                    mode: 'payment',
                    amount: convertToSubcurrency(amount),
                    currency: 'usd'
                }}
            >
                <CheckoutPage amount={amount} />
            </Elements>

        </div>
    )
}

export default StripePayment