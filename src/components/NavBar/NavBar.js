import "./NavBar.scss"
import logo from "../../assets/logo.png"
import avatar from "../../assets/Avatar.png"
import chevronDown from "../../assets/chevronDown.svg"



export default function NavBar() {
    return (
        <>
            <nav className="nav-bar">
                <section className="nav-bar__container">
                    <img src={logo} alt="company logo" className="nav-bar__logo" />
                    <h2 className="nav-bar__title">Orders</h2>
                </section>
                <section className="nav-bar__container">
                    <section className="nav-bar__info">
                        <img src={avatar} alt="blank avatar" className="nav-bar__avatar" />
                        <img src={chevronDown} alt="chevron down" className="nav-bar__chevron" />
                    </section>
                    <button className="nav-bar__storeBtn">Go To store</button>
                </section>
            </nav>
        </>
    )
}

