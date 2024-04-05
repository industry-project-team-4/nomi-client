import "./OrderDetails.scss"
import visa from "../../assets/visa-logo.svg"

export default function OrderDetails() {
    return (
        <article className="order-details">
            <h2 className="order-details__title" >Order details</h2>
            <section className="order-details__container">
                <section className="order-details__contact">
                    <h3 className="order-details__sub-header">Contact information</h3>
                    <p className="order-details__body">Pete Griffth</p>
                    <p className="order-details__body">pete.griffith@mycoffee.com</p>
                </section>
                <section className="order-details__company">
                    <h3 className="order-details__sub-header">Company</h3>
                    <p className="order-details__body">My Coffee</p>
                </section>
                <section className="order-details__shipping">
                    <h3 className="order-details__sub-header">Shipping address</h3>
                    <p className="order-details__body">Pete Griffth</p>
                    <p className="order-details__body">St Joseph Blvd E</p>
                    <p className="order-details__body">Montreal QC H2Y 4F4</p>
                    <p className="order-details__body">Canada</p>
                </section>
                <section className="order-details__shipping-method">
                    <h3 className="order-details__sub-header">Shipping method</h3>
                    <p className="order-details__body">-</p>
                </section>
            </section>
            <section className="order-details__container">
                <section className="order-details__payment">
                    <h3 className="order-details__sub-header">Payment</h3>
                    <img src={visa} alt="visa logo" className="order-details__icon" />
                    <p className="order-details__body">ending with 1234</p>
                    <p className="order-details__body">-$1,852.36</p>
                </section>
                <section className="order-details__billing">
                    <h3 className="order-details__sub-header">Billing address</h3>
                    <p className="order-details__body">Pete Griffth</p>
                    <p className="order-details__body">St Joseph Blvd E</p>
                    <p className="order-details__body">Montreal QC H2Y 4F4</p>
                    <p className="order-details__body">Canada</p>
                </section>
                <section className="order-details__location">
                    <h3 className="order-details__sub-header">Location</h3>
                    <p className="order-details__body">151 St Jospeh Blvd E</p>
                </section>
            </section>
        </article>
    )
}