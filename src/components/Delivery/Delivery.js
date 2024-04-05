import "./Delivery.scss"
import location from "../../assets/marker.svg"
import line from "../../assets/Vertical line.svg"
import down from "../../assets/chevronDown.svg"

export default function Delivery() {
    return (
        <article className="delivery">
            <section className="delivery__container">
                <img src={location} alt="location marker" className="delivery__icon" />
                <h3 className="delivery__title">Delivered</h3>
            </section>
            <section className="delivery__container">
                <p className="delivery__subheading delivery__subheading--blue">Show Details</p>
                <img src={down} alt="down marker" className="delivery__icon delivery__icon--blue" />
            </section>
            <section className="delivery__container">
                <img src={line} alt="line marker" className="delivery__icon" />
                <p className="delivery__subheading delivery__subheading--grey">Oct 14</p>
            </section>
            <section className="delivery__container">
                <p className="delivery__subheading">Haven't recieved your delivery?
                    <span className="delivery__subheading delivery__subheading--blue"> Let us know</span>
                </p>
            </section>
        </article>
    )
}