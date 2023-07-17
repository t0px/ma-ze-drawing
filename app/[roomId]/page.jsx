import Canvas from "@/components/private/canvas/Canvas";
import Chat from "@/components/private/chat/Chat";
import UsersList from "@/components/private/userslist/UsersList";

const Room = () => {
    return ( 
        <div className="flex w-full gap-4">
            <UsersList />
            <Canvas />
            <Chat />
        </div>
     );
}
 
export default Room;