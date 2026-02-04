"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { HTTP_BACKEND } from "@/config";
import { Pencil, ArrowRight, Github, Eye, EyeOff } from "lucide-react";
import Link from "next/link";

export function AuthPage({isSignin}: {
    isSignin: boolean
}) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
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

    const handleKeyPress = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter') {
            handleSubmit();
        }
    };

    return (
        <div className="min-h-screen bg-[#0a0a0f] overflow-hidden relative flex items-center justify-center">
            {/* Background effects */}
            <div className="fixed inset-0 bg-[linear-gradient(rgba(255,255,255,.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.02)_1px,transparent_1px)] bg-[size:50px_50px] pointer-events-none" />
            <div className="fixed top-0 left-1/4 w-[600px] h-[600px] bg-purple-500/20 rounded-full blur-[120px] animate-pulse pointer-events-none" />
            <div className="fixed bottom-0 right-1/4 w-[500px] h-[500px] bg-cyan-500/20 rounded-full blur-[120px] animate-pulse pointer-events-none" style={{ animationDelay: "2s" }} />
            
            {/* Floating orbs */}
            <div className="absolute top-20 left-20 w-2 h-2 bg-purple-500 rounded-full shadow-[0_0_20px_rgba(168,85,247,0.8)] animate-bounce" style={{ animationDuration: "3s" }} />
            <div className="absolute top-40 right-32 w-3 h-3 bg-cyan-500 rounded-full shadow-[0_0_20px_rgba(6,182,212,0.8)] animate-bounce" style={{ animationDuration: "4s", animationDelay: "1s" }} />
            <div className="absolute bottom-32 left-40 w-2 h-2 bg-pink-500 rounded-full shadow-[0_0_20px_rgba(236,72,153,0.8)] animate-bounce" style={{ animationDuration: "3.5s", animationDelay: "0.5s" }} />

            {/* Back to home link */}
            <Link href="/" className="absolute top-6 left-6 flex items-center gap-2 text-zinc-400 hover:text-white transition-colors group z-10">
                <div className="relative">
                    <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-xl blur opacity-40 group-hover:opacity-70 transition duration-300" />
                    <div className="relative h-10 w-10 rounded-xl bg-gradient-to-br from-purple-500 via-purple-600 to-cyan-500 flex items-center justify-center">
                        <Pencil className="h-5 w-5 text-white" />
                    </div>
                </div>
                <span className="font-semibold">CanvasSync</span>
            </Link>

            {/* Main content */}
            <div className="relative z-10 w-full max-w-sm mx-4">
                {/* Card glow effect */}
                <div className="absolute -inset-[1px] bg-gradient-to-r from-purple-500/20 via-transparent to-cyan-500/20 rounded-2xl blur-sm" />
                
                <div className="relative backdrop-blur-xl bg-zinc-900/90 rounded-2xl border border-zinc-800 p-6 shadow-2xl">
                    {/* Header */}
                    <div className="text-center mb-6">
                        <h1 className="text-2xl font-bold text-white mb-1">
                            {isSignin ? "Welcome back" : "Create account"}
                        </h1>
                        <p className="text-sm text-zinc-500">
                            {isSignin 
                                ? "Sign in to continue to CanvasSync" 
                                : "Get started with CanvasSync"}
                        </p>
                    </div>
                    
                    {error && (
                        <div className="mb-4 px-3 py-2 bg-red-500/10 border border-red-500/20 text-red-400 rounded-lg text-sm">
                            {error}
                        </div>
                    )}

                    <div className="space-y-3">
                        {!isSignin && (
                            <div>
                                <label className="text-xs font-medium text-zinc-400 mb-1.5 block">Name</label>
                                <input 
                                    type="text" 
                                    placeholder="John Doe"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    onKeyPress={handleKeyPress}
                                    className="w-full px-3 py-2.5 bg-zinc-800/50 border border-zinc-700/50 rounded-lg text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/20 transition-all"
                                />
                            </div>
                        )}

                        <div>
                            <label className="text-xs font-medium text-zinc-400 mb-1.5 block">Email</label>
                            <input 
                                type="email" 
                                placeholder="you@example.com"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                onKeyPress={handleKeyPress}
                                className="w-full px-3 py-2.5 bg-zinc-800/50 border border-zinc-700/50 rounded-lg text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/20 transition-all"
                            />
                        </div>

                        <div>
                            <label className="text-xs font-medium text-zinc-400 mb-1.5 block">Password</label>
                            <div className="relative">
                                <input 
                                    type={showPassword ? "text" : "password"}
                                    placeholder="••••••••"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    onKeyPress={handleKeyPress}
                                    className="w-full px-3 py-2.5 pr-10 bg-zinc-800/50 border border-zinc-700/50 rounded-lg text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/20 transition-all"
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-500 hover:text-zinc-300 transition-colors"
                                >
                                    {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                                </button>
                            </div>
                        </div>

                        {isSignin && (
                            <div className="flex justify-end">
                                <a href="#" className="text-xs text-zinc-500 hover:text-purple-400 transition-colors">
                                    Forgot password?
                                </a>
                            </div>
                        )}

                        <button 
                            className="w-full bg-purple-600 hover:bg-purple-500 text-white font-medium py-2.5 rounded-lg transition-colors flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed mt-1"
                            onClick={handleSubmit}
                            disabled={loading}
                        >
                            {loading ? (
                                <>
                                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                    Please wait...
                                </>
                            ) : (
                                <>
                                    {isSignin ? "Sign in" : "Create account"}
                                    <ArrowRight className="h-4 w-4" />
                                </>
                            )}
                        </button>
                    </div>

                    {/* Divider */}
                    <div className="relative my-5">
                        <div className="absolute inset-0 flex items-center">
                            <div className="w-full border-t border-zinc-800"></div>
                        </div>
                        <div className="relative flex justify-center text-xs">
                            <span className="px-3 bg-zinc-900 text-zinc-600">or</span>
                        </div>
                    </div>

                    {/* Social login */}
                    <button className="w-full flex items-center justify-center gap-2 px-3 py-2.5 bg-zinc-800/50 hover:bg-zinc-800 border border-zinc-700/50 rounded-lg text-sm text-zinc-400 hover:text-white transition-all">
                        <Github className="h-4 w-4" />
                        Continue with GitHub
                    </button>

                    {/* Footer link */}
                    <p className="mt-5 text-center text-sm text-zinc-500">
                        {isSignin ? (
                            <>
                                Don't have an account?{" "}
                                <Link href="/signup" className="text-purple-400 hover:text-purple-300 font-medium transition-colors">
                                    Sign up for free
                                </Link>
                            </>
                        ) : (
                            <>
                                Already have an account?{" "}
                                <Link href="/signin" className="text-purple-400 hover:text-purple-300 font-medium transition-colors">
                                    Sign in
                                </Link>
                            </>
                        )}
                    </p>
                </div>
            </div>
        </div>
    );
}