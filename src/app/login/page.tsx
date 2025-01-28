'use client'

import { client } from "@/sanity/lib/client";
import { useSignIn, useSignUp } from "@clerk/nextjs";
// import { useSignUp, useSignIn } from "@clerk/nextjs";
import { useState } from "react";

const LoginForm = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const { signUp, isLoaded: isSignUpLoaded } = useSignUp();
  const { signIn, isLoaded: isSignInLoaded } = useSignIn();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const saveToSanity = async (data: { name: string; email: string }) => {
    try {
      const result = await client.create({
        _type: "user", // This should match the schema name in your Sanity Studio
        name: data.name,
        email: data.email,
      });
      console.log("User saved to Sanity:", result);
    } catch (error) {
      console.error("Error saving to Sanity:", error);
    }
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const { name, email, password } = formData;

    try {
      if (isSignUp) {
        if (!isSignUpLoaded) return;
        const signUpResponse = await signUp.create({
          emailAddress: email,
          password,
          firstName: name,
        });

        await signUp.attemptEmailAddressVerification({
          code: prompt("Enter the verification code sent to your email:")!,
        });

        console.log("Sign up successful!", signUpResponse);

        // Save user data to Sanity
        await saveToSanity({ name, email });
      } else {
        if (!isSignInLoaded) return;
        const signInResponse = await signIn.create({
          identifier: email,
          password,
        });

        console.log("Sign in successful!", signInResponse);
      }
    } catch (error) {
      console.error("Authentication error:", error);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleFormSubmit}
        className="bg-white shadow-lg rounded p-6 w-full max-w-md"
      >
        <h2 className="text-2xl font-bold mb-4">
          {isSignUp ? "Sign Up" : "Sign In"}
        </h2>

        {isSignUp && (
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className="w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-500"
              required
            />
          </div>
        )}

        <div className="mb-4">
          <label className="block text-sm font-medium mb-1" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className="w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-500"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium mb-1" htmlFor="password">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            className="w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-500"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition"
        >
          {isSignUp ? "Sign Up" : "Sign In"}
        </button>

        <p className="text-sm text-gray-600 mt-4 text-center">
          {isSignUp
            ? "Already have an account?"
            : "Don't have an account?"}{" "}
          <button
            type="button"
            onClick={() => setIsSignUp(!isSignUp)}
            className="text-blue-500 underline"
          >
            {isSignUp ? "Sign In" : "Sign Up"}
          </button>
        </p>
      </form>
    </div>
  );
};

export default LoginForm;



