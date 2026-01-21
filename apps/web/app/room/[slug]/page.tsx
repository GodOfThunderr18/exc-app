import axios from 'axios';
import { BACKEND_URL } from '../../config';
import { ChatRoomClient } from '../../../components/ChatRoomClient';

async function getRoom(slug: string) {
   try {
       const response = await axios.get(`${BACKEND_URL}/room/${slug}`);
       return response.data.room.id;
   } catch (error) {
       console.error('Room not found:', error);
       return null;
   }
}

async function getMessages(roomId: string) {
   try {
       const response = await axios.get(`${BACKEND_URL}/chats/${roomId}`);
       return response.data.messages || [];
   } catch (error) {
       console.error('Error fetching messages:', error);
       return [];
   }
}

export default async function ChatRoom({
    params
}: {
    params: Promise<{slug: string}>
}) {
    const resolvedParams = await params;
    const slug = resolvedParams.slug;
    const roomId = await getRoom(slug);

    if (!roomId) {
        return <div>Room not found</div>;
    }

    const messages = await getMessages(roomId.toString());

    return (
        <div>
            <h1>Room: {slug}</h1>
            <ChatRoomClient messages={messages} id={roomId.toString()} />
        </div>
    );
}