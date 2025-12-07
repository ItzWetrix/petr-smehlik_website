import "./Footer.css"
import "./../styleSettings.css"

import data from "../data.js"
import NavbarButton from "./NavBarButton.js"

const Footer = () => {
    const currentYear = new Date().getFullYear();
    
    return (
        <>
            <nav className="footerBar">
                <p>© {currentYear} Petr Smehlik. All rights reserved.</p>
                <div className="navigationButtons">
                    {data.navBarButtons.map(b => (
                        <NavbarButton key={b.id} link={b.link} text={b.text} />
                    ))}
                </div>
            </nav>
        </>
    )
}

export default Footer