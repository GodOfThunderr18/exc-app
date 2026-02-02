"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { HTTP_BACKEND } from "@/config";

export function AuthPage({isSignin}: {
    isSignin: boolean
}) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    const handleSubmit = async () => {
        setError("");
        setLoading(true);

        try {
            const endpoint = isSignin ? "/signin" : "/signup";
            const body = isSignin 
                ? { email, password }
                : { email, password, name };

            const res = await fetch(`${HTTP_BACKEND}${endpoint}`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(body)
            });

            const data = await res.json();

            if (isSignin) {
                if (data.token) {
                    localStorage.setItem("token", data.token);
                    router.push("/dashboard");
                } else {
                    setError(data.message || "Signin failed");
                }
            } else {
                if (data.userId) {
                    router.push("/signin");
                } else {
                    setError(data.message || "Signup failed");
                }
            }
        } catch (e) {
            setError("Something went wrong. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    return <div className="w-screen h-screen flex justify-center items-center bg-gray-900">
        <div className="p-8 m-2 bg-white rounded-lg shadow-lg w-full max-w-md">
            <h1 className="text-2xl font-bold text-center mb-6 text-gray-800">
                {isSignin ? "Sign In" : "Sign Up"}
            </h1>
            
            {error && (
                <div className="mb-4 p-3 bg-red-100 text-red-700 rounded">
                    {error}
                </div>
            )}

            {!isSignin && (
                <div className="mb-4">
                    <label className="block text-gray-700 mb-2">Name</label>
                    <input 
                        type="text" 
                        placeholder="Enter your name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                    />
                </div>
            )}

            <div className="mb-4">
                <label className="block text-gray-700 mb-2">Email</label>
                <input 
                    type="email" 
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                />
            </div>

            <div className="mb-6">
                <label className="block text-gray-700 mb-2">Password</label>
                <input 
                    type="password" 
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                />
            </div>

            <button 
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded transition-colors disabled:bg-blue-300"
                onClick={handleSubmit}
                disabled={loading}
            >
                {loading ? "Please wait..." : (isSignin ? "Sign In" : "Sign Up")}
            </button>

            <div className="mt-4 text-center text-gray-600">
                {isSignin ? (
                    <p>Don't have an account? <a href="/signup" className="text-blue-600 hover:underline">Sign Up</a></p>
                ) : (
                    <p>Already have an account? <a href="/signin" className="text-blue-600 hover:underline">Sign In</a></p>
                )}
            </div>
        </div>
    </div>
}