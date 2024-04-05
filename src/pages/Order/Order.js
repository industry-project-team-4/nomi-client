import { useState } from "react";
import ChatBot from "../../components/ChatBot/ChatBot";

export default function Order(){

    const [isOpen, setIsOpen] = useState(true);

    const toggleChat = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <button onClick={toggleChat}>Open</button>
            {isOpen && <ChatBot></ChatBot>}
        </>
    );
}