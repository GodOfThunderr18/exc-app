import {WebSocketServer} from "ws";

const wss = new WebSocketServer({ port: 8080 });

wss.on("connection", (ws) => {
  console.log("New WebSocket connection established");
  
  ws.on("message", (message) => {
    console.log(`Received message: ${message}`);
    ws.send(`Echo: ${message}`);
  });
  
  ws.on("close", () => {
    console.log("WebSocket connection closed");
  });
});

wss.on("listening", () => {
  console.log("WebSocket server is running on ws://localhost:8080");
});

wss.on("error", (error) => {
  console.error("WebSocket server error:", error);
});