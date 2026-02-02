"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { HTTP_BACKEND } from "@/config";

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

    const handleLogout = () => {
        localStorage.removeItem("token");
        router.push("/signin");
    };

    return (
        <div className="min-h-screen bg-gray-900 text-white">
            {/* Header */}
            <header className="bg-gray-800 p-4 flex justify-between items-center">
                <h1 className="text-2xl font-bold">Excalidraw Clone</h1>
                <button 
                    onClick={handleLogout}
                    className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded transition-colors"
                >
                    Logout
                </button>
            </header>

            {/* Main Content */}
            <main className="max-w-4xl mx-auto p-8">
                {/* Create/Join Room Section */}
                <div className="bg-gray-800 rounded-lg p-6 mb-8">
                    <h2 className="text-xl font-semibold mb-4">Create or Join a Room</h2>
                    
                    {error && (
                        <div className="mb-4 p-3 bg-red-900/50 text-red-300 rounded">
                            {error}
                        </div>
                    )}

                    <div className="flex gap-4 flex-col sm:flex-row">
                        <input
                            type="text"
                            placeholder="Enter room name or ID"
                            value={newRoomName}
                            onChange={(e) => setNewRoomName(e.target.value)}
                            className="flex-1 p-3 bg-gray-700 border border-gray-600 rounded focus:outline-none focus:border-blue-500 text-white"
                        />
                        <button
                            onClick={createRoom}
                            disabled={creating}
                            className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded font-semibold transition-colors disabled:bg-blue-400"
                        >
                            {creating ? "Creating..." : "Create Room"}
                        </button>
                        <button
                            onClick={joinRoom}
                            className="bg-green-600 hover:bg-green-700 px-6 py-3 rounded font-semibold transition-colors"
                        >
                            Join Room
                        </button>
                    </div>
                </div>

                {/* Instructions */}
                <div className="bg-gray-800 rounded-lg p-6">
                    <h2 className="text-xl font-semibold mb-4">How to Use</h2>
                    <ul className="list-disc list-inside space-y-2 text-gray-300">
                        <li><strong>Create Room:</strong> Enter a unique name and click "Create Room" to start a new collaborative canvas</li>
                        <li><strong>Join Room:</strong> Enter an existing room name and click "Join Room" to collaborate with others</li>
                        <li><strong>Share:</strong> Share the room name with others so they can join your canvas</li>
                        <li><strong>Draw:</strong> Use the tools (rectangle, circle, pencil) to draw on the canvas</li>
                    </ul>
                </div>
            </main>
        </div>
    );
}
