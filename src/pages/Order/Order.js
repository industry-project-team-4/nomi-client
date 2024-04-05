import Delivery from "../../components/Delivery/Delivery";
import OrderHeader from "../../components/OrderHeader/OrderHeader";
import "./Order.scss"

export default function Order() {
    return (
        <main>
            <OrderHeader />
            <section className="container">
                <Delivery />
            </section>
            <section className="container">

            </section>
        </main>
    )
}