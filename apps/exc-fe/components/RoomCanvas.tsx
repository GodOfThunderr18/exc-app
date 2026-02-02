"use client";

import { WS_URL } from "@/config";
import { initDraw } from "@/draw";
import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { Canvas } from "./Canvas";

export function RoomCanvas({roomId}: {roomId: string}) {
    const [socket, setSocket] = useState<WebSocket | null>(null);
    const [error, setError] = useState<string | null>(null);
    const router = useRouter();

    useEffect(() => {
        const token = localStorage.getItem("token");
        
        if (!token) {
            router.push("/signin");
            return;
        }

        const ws = new WebSocket(`${WS_URL}?token=${token}`);

        ws.onopen = () => {
            setSocket(ws);
            const data = JSON.stringify({
                type: "join_room",
                roomId
            });
            console.log(data);
            ws.send(data)
        }

        ws.onerror = (e) => {
            console.error("WebSocket error:", e);
            setError("Failed to connect to server. Make sure the WebSocket server is running on ws://localhost:8080");
        }

        ws.onclose = (e) => {
            console.log("WebSocket closed:", e.code, e.reason);
            if (!socket) {
                setError("Connection closed. Server may be down.");
            }
            setSocket(null);
        }

        return () => {
            ws.close();
        }
        
    }, [roomId])
   
    if (error) {
        return <div className="h-screen w-screen flex items-center justify-center bg-gray-900 text-white">
            <div className="text-center">
                <p className="text-red-400 mb-4">{error}</p>
                <button 
                    onClick={() => router.push("/dashboard")}
                    className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded"
                >
                    Back to Dashboard
                </button>
            </div>
        </div>
    }

    if (!socket) {
        return <div className="h-screen w-screen flex items-center justify-center bg-gray-900 text-white">
            Connecting to server....
        </div>
    }

    return <div>
        <Canvas roomId={roomId} socket={socket} />
    </div>
}