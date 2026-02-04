"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { HTTP_BACKEND } from "@/config";
import { Pencil, Plus, LogOut, Users, ArrowRight, Sparkles, Palette, Share2 } from "lucide-react";
import Link from "next/link";

interface Room {
    id: number;
    slug: string;
    createdAt: string;
    adminId: string;
}

export default function Dashboard() {
    const [rooms, setRooms] = useState<Room[]>([]);
    const [loading, setLoading] = useState(true);
    const [newRoomName, setNewRoomName] = useState("");
    const [creating, setCreating] = useState(false);
    const [error, setError] = useState("");
    const router = useRouter();

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (!token) {
            router.push("/signin");
            return;
        }
        fetchRooms();
    }, []);

    const fetchRooms = async () => {
        // For now, we don't have a get all rooms endpoint
        // You can add one to the backend later
        setLoading(false);
    };

    const createRoom = async () => {
        const token = localStorage.getItem("token");
        if (!token) {
            router.push("/signin");
            return;
        }

        if (!newRoomName.trim()) {
            setError("Please enter a room name");
            return;
        }

        setCreating(true);
        setError("");

        try {
            const res = await fetch(`${HTTP_BACKEND}/room`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": token
                },
                body: JSON.stringify({ name: newRoomName })
            });

            const data = await res.json();

            if (data.roomId) {
                router.push(`/canvas/${data.roomId}`);
            } else {
                setError(data.message || "Failed to create room");
            }
        } catch (e) {
            setError("Something went wrong");
        } finally {
            setCreating(false);
        }
    };

    const joinRoom = async () => {
        if (!newRoomName.trim()) {
            setError("Please enter a room name or ID");
            return;
        }

        setError("");

        try {
            // First try to find by slug (room name)
            let res = await fetch(`${HTTP_BACKEND}/room/${newRoomName}`);
            let data = await res.json();

            if (data.room) {
                router.push(`/canvas/${data.room.id}`);
                return;
            }

            // If not found by slug, check if input is a number (room ID)
            const roomId = parseInt(newRoomName);
            if (!isNaN(roomId)) {
                // Navigate directly to canvas with the ID
                router.push(`/canvas/${roomId}`);
                return;
            }

            setError("Room not found");
        } catch (e) {
            setError("Something went wrong");
        }
    };

    const handleKeyPress = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter') {
            createRoom();
        }
    };

    const handleLogout = () => {
        localStorage.removeItem("token");
        router.push("/signin");
    };

    return (
        <div className="min-h-screen bg-[#0a0a0f] overflow-hidden relative">
            {/* Background effects */}
            <div className="fixed inset-0 bg-[linear-gradient(rgba(255,255,255,.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.02)_1px,transparent_1px)] bg-[size:50px_50px] pointer-events-none" />
            <div className="fixed top-0 right-0 w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-[120px] pointer-events-none" />
            <div className="fixed bottom-0 left-0 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />

            {/* Header */}
            <header className="relative z-10 border-b border-zinc-800">
                <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
                    <Link href="/" className="flex items-center gap-3 group">
                        <div className="relative">
                            <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-xl blur opacity-40 group-hover:opacity-70 transition duration-300" />
                            <div className="relative h-10 w-10 rounded-xl bg-gradient-to-br from-purple-500 via-purple-600 to-cyan-500 flex items-center justify-center">
                                <Pencil className="h-5 w-5 text-white" />
                            </div>
                        </div>
                        <div className="flex flex-col">
                            <span className="text-lg font-bold text-white">CanvasSync</span>
                            <span className="text-[10px] text-zinc-500 font-medium tracking-wider uppercase">Dashboard</span>
                        </div>
                    </Link>
                    <button 
                        onClick={handleLogout}
                        className="flex items-center gap-2 px-4 py-2 text-zinc-400 hover:text-white hover:bg-zinc-800/50 rounded-lg transition-all"
                    >
                        <LogOut className="h-4 w-4" />
                        <span className="text-sm">Logout</span>
                    </button>
                </div>
            </header>

            {/* Main Content */}
            <main className="relative z-10 max-w-3xl mx-auto px-6 py-12">
                {/* Welcome Section */}
                <div className="text-center mb-10">
                    <h1 className="text-3xl font-bold text-white mb-2">Welcome to CanvasSync</h1>
                    <p className="text-zinc-500">Create or join a room to start collaborating</p>
                </div>

                {/* Create/Join Room Card */}
                <div className="relative mb-8">
                    <div className="absolute -inset-[1px] bg-gradient-to-r from-purple-500/20 via-transparent to-cyan-500/20 rounded-2xl blur-sm" />
                    <div className="relative backdrop-blur-xl bg-zinc-900/90 rounded-2xl border border-zinc-800 p-6">
                        {error && (
                            <div className="mb-4 px-3 py-2 bg-red-500/10 border border-red-500/20 text-red-400 rounded-lg text-sm">
                                {error}
                            </div>
                        )}

                        <div className="flex gap-3 flex-col sm:flex-row">
                            <input
                                type="text"
                                placeholder="Enter room name or ID"
                                value={newRoomName}
                                onChange={(e) => setNewRoomName(e.target.value)}
                                onKeyPress={handleKeyPress}
                                className="flex-1 px-4 py-3 bg-zinc-800/50 border border-zinc-700/50 rounded-lg text-white placeholder-zinc-500 focus:outline-none focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/20 transition-all"
                            />
                            <button
                                onClick={createRoom}
                                disabled={creating}
                                className="flex items-center justify-center gap-2 bg-purple-600 hover:bg-purple-500 px-5 py-3 rounded-lg font-medium text-white transition-colors disabled:opacity-50"
                            >
                                <Plus className="h-4 w-4" />
                                {creating ? "Creating..." : "Create"}
                            </button>
                            <button
                                onClick={joinRoom}
                                className="flex items-center justify-center gap-2 bg-zinc-800 hover:bg-zinc-700 border border-zinc-700 px-5 py-3 rounded-lg font-medium text-white transition-colors"
                            >
                                <Users className="h-4 w-4" />
                                Join
                            </button>
                        </div>
                    </div>
                </div>

                {/* Quick Actions */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-5 hover:border-purple-500/30 transition-colors group">
                        <div className="w-10 h-10 rounded-lg bg-purple-500/10 flex items-center justify-center mb-3 group-hover:bg-purple-500/20 transition-colors">
                            <Sparkles className="h-5 w-5 text-purple-400" />
                        </div>
                        <h3 className="font-medium text-white mb-1">Create Room</h3>
                        <p className="text-sm text-zinc-500">Start a new canvas and invite others</p>
                    </div>
                    <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-5 hover:border-cyan-500/30 transition-colors group">
                        <div className="w-10 h-10 rounded-lg bg-cyan-500/10 flex items-center justify-center mb-3 group-hover:bg-cyan-500/20 transition-colors">
                            <Palette className="h-5 w-5 text-cyan-400" />
                        </div>
                        <h3 className="font-medium text-white mb-1">Draw Together</h3>
                        <p className="text-sm text-zinc-500">Rectangles, circles, and freehand</p>
                    </div>
                    <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-5 hover:border-pink-500/30 transition-colors group">
                        <div className="w-10 h-10 rounded-lg bg-pink-500/10 flex items-center justify-center mb-3 group-hover:bg-pink-500/20 transition-colors">
                            <Share2 className="h-5 w-5 text-pink-400" />
                        </div>
                        <h3 className="font-medium text-white mb-1">Share & Sync</h3>
                        <p className="text-sm text-zinc-500">Real-time collaboration</p>
                    </div>
                </div>
            </main>
        </div>
    );
}
