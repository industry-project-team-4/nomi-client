import "./OrderHeader.scss"
import arrowLeft from "../../assets/arrowLeft.svg"
import chevron from "../../assets/chevronDown.svg"
export default function OrderHeader() {
    return (
        <section className="order-header">
            <section className="order-header__container">
                <img src={arrowLeft} alt="back arrow" className="order-header__image" />
                <section className="order-header__info">
                    <h1 className="order-header__order">Order #1093</h1>
                    <p className="order-header__po">No PO number</p>
                </section>
            </section>
            <section className="order-header__container">
                <button className="order-header__btn">Buy Again</button>
                <button className="order-header__btn">
                    Manage
                    <img src={chevron} alt="arrow down" className="order-header__icon" />
                </button>
            </section>
        </section>

    )
}