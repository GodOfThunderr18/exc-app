"use client";

import { useEffect, useState } from "react";
import { useSocket } from "../hooks/useSocket";

export function ChatRoomClient({
    messages,
    id
}: {
    messages: {message: string}[];
    id: string
}) {
    const [chats, setChats] = useState(messages);
    const [currentMessage, setCurrentMessage] = useState("");
    const [isJoined, setIsJoined] = useState(false);
    const {socket, loading} = useSocket();

    useEffect(() => {
        if (socket && !loading && socket.readyState === WebSocket.OPEN && !isJoined) {
            console.log("Joining room:", id);
            
            // Join the room
            socket.send(JSON.stringify({
                type: "join_room",
                roomId: id
            }));
            
            setIsJoined(true);

            // Set up message handler
            socket.onmessage = (event) => {
                console.log("Received message:", event.data);
                try {
                    const parsedData = JSON.parse(event.data);
                    if (parsedData.type === "chat") {
                        console.log("Adding chat message:", parsedData.message);
                        setChats(c => [...c, {message: parsedData.message}]);
                    }
                } catch (error) {
                    console.error("Error parsing WebSocket message:", error);
                }
            };
        }
    }, [socket, loading, id, isJoined]);

    const sendMessage = () => {
        if (currentMessage.trim() && socket && socket.readyState === WebSocket.OPEN) {
            console.log("Sending message:", currentMessage);
            
            socket.send(JSON.stringify({
                type: "chat",
                roomId: id,
                message: currentMessage
            }));
            
            setCurrentMessage("");
        } else {
            console.log("Cannot send message. Socket state:", socket?.readyState, "Message:", currentMessage);
        }
    };

    const handleKeyPress = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter') {
            sendMessage();
        }
    };

    if (loading) {
        return <div style={{ color: 'white', padding: '20px' }}>Connecting to chat...</div>;
    }

    if (!socket || socket.readyState !== WebSocket.OPEN) {
        return <div style={{ color: 'white', padding: '20px' }}>Failed to connect to chat server</div>;
    }

    return (
        <div style={{ color: 'white', padding: '20px' }}>
            <div style={{ marginBottom: '20px', minHeight: '300px', border: '1px solid #333', padding: '10px', backgroundColor: '#111' }}>
                <h3>Chat Messages:</h3>
                <div style={{ maxHeight: '250px', overflowY: 'auto' }}>
                    {chats.length === 0 ? (
                        <p style={{ color: '#666' }}>No messages yet...</p>
                    ) : (
                        chats.map((m, index) => (
                            <div key={index} style={{ marginBottom: '8px', padding: '8px', backgroundColor: '#222', borderRadius: '4px' }}>
                                {m.message}
                            </div>
                        ))
                    )}
                </div>
            </div>

            <div style={{ display: 'flex', gap: '10px' }}>
                <input 
                    type="text" 
                    value={currentMessage} 
                    onChange={e => setCurrentMessage(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Type your message..."
                    style={{
                        flex: 1,
                        padding: '12px',
                        border: '1px solid #555',
                        backgroundColor: '#333',
                        color: 'white',
                        borderRadius: '6px',
                        fontSize: '14px'
                    }}
                />
                <button 
                    onClick={sendMessage}
                    disabled={!currentMessage.trim() || socket?.readyState !== WebSocket.OPEN}
                    style={{
                        padding: '12px 24px',
                        backgroundColor: currentMessage.trim() && socket?.readyState === WebSocket.OPEN ? '#0070f3' : '#555',
                        color: 'white',
                        border: 'none',
                        borderRadius: '6px',
                        cursor: currentMessage.trim() && socket?.readyState === WebSocket.OPEN ? 'pointer' : 'not-allowed',
                        fontSize: '14px',
                        fontWeight: 'bold'
                    }}
                >
                    Send
                </button>
            </div>
            
            <div style={{ marginTop: '10px', fontSize: '12px', color: '#666' }}>
                Status: {isJoined ? `Connected to room ${id}` : 'Connecting...'}
            </div>
        </div>
    );
}