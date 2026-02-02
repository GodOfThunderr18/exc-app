import { RoomCanvas } from "@/components/RoomCanvas"; 

export default async function CanvasPage({ params }: {
    params: {
        roomid: string
    }
}) {
    const roomid = (await params).roomid;

    return <RoomCanvas roomId={roomid} />
   
}