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
        let ws: WebSocket | null = null;
        let isCancelled = false;

        const token = localStorage.getItem("token");
        
        if (!token) {
            router.push("/signin");
            return;
        }

        // Small delay to ensure component is fully mounted after navigation
        const timeoutId = setTimeout(() => {
            if (isCancelled) return;
            
            ws = new WebSocket(`${WS_URL}?token=${token}`);

            ws.onopen = () => {
                if (isCancelled) {
                    ws?.close();
                    return;
                }
                setSocket(ws);
                const data = JSON.stringify({
                    type: "join_room",
                    roomId
                });
                console.log(data);
                ws?.send(data)
            }

            ws.onerror = (e) => {
                console.error("WebSocket error event:", e);
            }

            ws.onclose = (e) => {
                console.log("WebSocket closed - code:", e.code, "reason:", e.reason, "wasClean:", e.wasClean);
                // Only show error if not intentionally cancelled
                if (!isCancelled) {
                    if (e.code === 1006) {
                        setError("Connection failed. Check if token is valid and server is running on ws://localhost:8080");
                    } else if (e.code !== 1000) {
                        setError("Connection closed unexpectedly.");
                    }
                }
                setSocket(null);
            }
        }, 100);

        return () => {
            isCancelled = true;
            clearTimeout(timeoutId);
            if (ws && ws.readyState === WebSocket.OPEN) {
                ws.close(1000, "Component unmounting");
            }
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