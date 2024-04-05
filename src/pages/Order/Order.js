import { useState } from "react";
import ChatBot from "../../components/ChatBot/ChatBot";
import Delivery from "../../components/Delivery/Delivery";
import OrderHeader from "../../components/OrderHeader/OrderHeader";
import Paid from "../../components/Paid/Paid";
import "./Order.scss"

export default function Order() { 
  
    const [isOpen, setIsOpen] = useState(true);

    const toggleChat = () => {
        setIsOpen(!isOpen);
    };
    return (
        <main>
            <OrderHeader />
            <article>
                <section className="container">
                    <Delivery />
                </section>
                <section className="container">
                    <Paid />
                </section>
            </article>
        </main>
    )
}