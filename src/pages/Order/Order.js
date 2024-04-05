import Delivery from "../../components/Delivery/Delivery";
import OrderDetails from "../../components/OrderDetails/OrderDetails";
import OrderHeader from "../../components/OrderHeader/OrderHeader";
import Paid from "../../components/Paid/Paid";
import "./Order.scss"

export default function Order() {
    return (
        <main>
            <OrderHeader />
            <article>
                <section className="container">
                    <Delivery />
                </section>
                <section className="container">
                    <Paid />
                    <OrderDetails />
                </section>
            </article>
        </main>
    )
}