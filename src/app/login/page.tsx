'use client';

import { SignedIn, SignedOut, SignIn, SignOutButton, UserButton } from '@clerk/clerk-react';
import { SignInButton } from '@clerk/nextjs';
import Link from 'next/link';
import { useState } from 'react';

export default function LoginPage() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const Login = () => {
        if (username === 'admin@gmail.com' && password === 'password') {
            alert('Login successful!');
        } else {
            setError('Invalid username or password');
        }
    };

    return (
        <div className="flex flex-col lg:flex-row justify-around mx-auto max-w-screen-xl items-center my-24 bg-gray-100 p-4">
            {/* Left Side */}
            <div className="text-center lg:text-left mb-6 lg:mb-0">
                <h2 className='text-5xl font-bold'>Welcome to Shop Co</h2>
                <p className='text-md shadow-2xl mt-2'>
                    Discover Exclusive Deals and latest trends!..
                </p>
            </div>

            {/* Right Side */}
            <div className="bg-white p-10 rounded-lg shadow-md w-full max-w-md lg:max-w-lg">
                
                  
                    {/* coupon */}
                    <SignedIn>
                        <div className="text-center">
                            <UserButton />
                            <h3 className='text-3xl capitalize font-bold mt-4'>
                                welcome
                            </h3>
                            <p className="text-xl mt-4">
                                Use coupon <span className='text-red-500 font-bold'>Discount</span>
                                to get a 50% discount on your next order!
                            </p>

                        </div>
                    </SignedIn>
                    <SignedOut>

                    <div className="mb-6">
                    <h2 className="text-center text-xl font-bold mb-4">Login</h2>
                        <label className="block mb-2 text-lg font-medium">Email</label>
                        <input
                            type="email"
                            placeholder='Enter your Email'
                            className="w-full p-3 border rounded-lg text-lg"
                        />
                    </div>
                    <div className="mb-6">
                        <label className="block mb-2 text-lg font-medium">Password</label>
                        <input
                            type="password"
                            placeholder='Enter your password'
                            className="w-full p-3 border rounded-lg text-lg"
                        />
                    </div>
                    <button
                        onClick={Login}
                        className="w-full p-3 bg-red-500 text-white rounded-lg text-lg  hover:bg-white border hover:border-red-500 hover:text-red-500"
                    >
                        <SignInButton mode='modal' />
                    </button>
                    <p className="text-gray-500 text-center mt-4 text-lg gap-2">Now here?
                        <Link href={'/'} className="text-red-500 font-bold">Create an Acoount</Link>
                    </p>
                </SignedOut>
            </div>



        </div>
    );
}
