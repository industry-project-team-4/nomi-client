import "./Delivery.scss"
import location from "../../assets/marker.svg"
import line from "../../assets/Vertical line.svg"
import down from "../../assets/chevronDown.svg"

export default function Delivery() {
    return (
        <>
            <section className="delivery__container">
                <img src={location} alt="location marker" className="delivery__icon" />
                <h3 className="delivery__title">Delivered</h3>
            </section>
            <section>
                <p className="delivery__subheading delivery__subheading--blue">Show Details</p>
                <img src={down} alt="down marker" className="delivery__icon" />
            </section>
            <section className="delivery__container">
                <img src={line} alt="line marker" className="delivery__icon" />
                <p className="delivery__subheading">Oct 14</p>
            </section>
            <p className="delivery__subheading">Haven't recieved your delivery?</p>
            <p className="delivery__subheading delivery__subheading--blue">Let us know</p>
        </>
    )
}