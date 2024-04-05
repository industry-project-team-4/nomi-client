import "./OrderSummary.scss"
import item1 from "../../assets/Rectangle 11.png"
import item2 from "../../assets/Rectangle 11 (1).png"
import item3 from "../../assets/Rectangle 11 (2).png"

export default function OrderSummary() {
    return (
        <section className="summary">
            <h2 className="summary__title">Order Summary</h2>
            <section className="summary__item">
                <img src={item3} alt="item 1" className="summary__icon" />
                <section className="summary__info">
                    <h3 className="summary__name">Premium roasted coffee</h3>
                    <p className="summary__item-desc">Medium roast</p>
                    <p className="summary__item-desc">$20.00/ea</p>
                </section>
                <h3 className="summary__price">$800.00</h3>
            </section>
            <section className="summary__item">
                <img src={item2} alt="item 2" className="summary__icon" />
                <section className="summary__info">
                    <h3 className="summary__name">Ultimate blend coffee beans</h3>
                    <p className="summary__item-desc">Dark Roast</p>
                    <p className="summary__item-desc">$10.00/ea</p>
                </section>
                <h3 className="summary__price">$200.00</h3>
            </section>
            <section className="summary__item">
                <img src={item1} alt="item 3" className="summary__icon" />
                <section className="summary__info">
                    <h3 className="summary__name">Blast blend office</h3>
                    <p className="summary__item-desc">Dark Roast</p>
                    <p className="summary__item-desc">$25.00/ea</p>
                </section>
                <h3 className="summary__price">$750.00</h3>
            </section>
            <section className="summary__total">
                <section className="summary__subheading">Subtotal</section>
                <section className="summary__price">$1,750.00</section>
            </section>
            <section className="summary__total">
                <section className="summary__subheading">Shipping</section>
                <section className="summary__price">Free</section>
            </section>
            <section className="summary__total">
                <section className="summary__subheading">Taxes</section>
                <section className="summary__price">$102.36</section>
            </section>
            <section className="summary__total summary__total--bold">
                <section className="summary__subheading">Total</section>
                <section className="summary__price summary__price--bold"><span className="summary__currency">CAD</span> $1,852.36</section>
            </section>
        </section>
    )
}