import "./OrderHeader.scss"
import arrowLeft from "../../assets/arrowLeft.svg"
import chevron from "../../assets/chevronDown.svg"
export default function OrderHeader() {
    return (
        <section className="order-header">
            <img src={arrowLeft} alt="back arrow" className="order-header__image" />
            <section className="order-header__container">
                <h2 className="order-header__info">Order #1093</h2>
                <p className="order-header__po">No PO number</p>
            </section>
            <section className="order-header__container">
                <button className="order-header__btn">Buy Again</button>
                <button className="order-header__btn">
                    Buy Again
                    <img src={chevron} alt="arrow down" className="order-header__icon" />
                </button>
            </section>
        </section>

    )
}