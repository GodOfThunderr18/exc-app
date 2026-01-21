import { useEffect, useState } from "react";
import { WS_SERVER_URL } from "../app/config";

export function useSocket(){
    const [loading,setLoading]=useState(true);
    const [socket,setSocket]=useState<WebSocket>();

    useEffect(()=>{
        // Hardcoded token for testing
        const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJjZWZmYTQxZS0wNThhLTQxNzYtYjRlNi0xNTJiZGQ3YzAzNDciLCJpYXQiOjE3Njg2MzI4ODB9.ly4ghFDget7AJaB6Tr5_GLczhFFg6HSs_C0z_kWZYmY";
        
        const ws = new WebSocket(`${WS_SERVER_URL}?token=${token}`);
        
        ws.onopen = () => {
            console.log('WebSocket connected');
            setLoading(false);
            setSocket(ws);
        }

        ws.onerror = (error) => {
            console.error('WebSocket error:', error);
            setLoading(false);
        }

        ws.onclose = (event) => {
            console.log('WebSocket closed:', event);
            setLoading(false);
        }

        return () => {
            ws.close();
        };
    },[]);

    return {socket,loading};
}