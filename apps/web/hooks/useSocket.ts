import { use, useEffect, useState } from "react";
import { WS_SERVER_URL } from "../app/config";

export function useSocket(){
    const [loading,setLoading]=useState(true);
    const [socket,setSocket]=useState<WebSocket>();

    useEffect(()=>{
        const ws=new WebSocket(WS_SERVER_URL);
        ws.onopen=()=>{
            setLoading(false);
            setSocket(ws);
        }
        return () => {
            ws.close();
        };
    },[]);

    return {socket,loading};
}