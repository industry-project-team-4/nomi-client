import { useState } from "react";
import Delivery from "../../components/Delivery/Delivery";
import OrderDetails from "../../components/OrderDetails/OrderDetails";
import OrderHeader from "../../components/OrderHeader/OrderHeader";
import OrderSummary from "../../components/OrderSummary/OrderSummary";
import Paid from "../../components/Paid/Paid";
import "./Order.scss"

export default function Order() { 
  
    return (
        <main>
            <OrderHeader />
            <article>
                <section className="container">
                    <Delivery />
                    <OrderDetails />
                </section>
                <section className="container">
                    <Paid />
                    <OrderSummary />
                </section>
            </article>
            
        </main>
    )
}