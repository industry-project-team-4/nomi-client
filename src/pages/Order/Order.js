import Delivery from "../../components/Delivery/Delivery";
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
                </section>
            </article>
        </main>
    )
}