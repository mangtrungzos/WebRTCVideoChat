import { NameInput } from "../common/name";
import { Button } from "./common/Button";
import { ws } from "../ws"
export const Join: React.FC = () => {
    // Join button
    // Join Room
    const createRoom = () => {
        ws.emit("create-room");
    }
    return (
        <div className="flex flex-col">
            <NameInput/>
            <Button 
                onClick={createRoom} 
                className="py-2 px-8 text-xl">
                Start new meeting
            </Button>
        </div>
    );
};