import "./NavBar.css"
import "./../styleSettings.css"

import data from "../data.js"
import NavbarButton from "./NavBarButton.js"
import { Link } from "react-router-dom"

const NavBar = () => {
    return (
        <>
            <div className="topBarBackground"></div>
            <nav className="topBar">
                <Link to="/" className="pageNameHeading"><h1>Petr Smehlik</h1></Link>
                <div className="navigationButtons">
                {data.navBarButtons.map(b => (
                    <NavbarButton key={b.id} link={b.link} text={b.text} />
                ))}
            </div>
        </nav>
        </>
    )
}

export default NavBar