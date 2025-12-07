import "./NavBarButton.css"
import "./../styleSettings.css"
import { Link } from "react-router-dom";

const NavBarButton = (props) => {
    return (
        <Link to={props.link} className="navbar-button">{props.text}</Link>
    )
}

export default NavBarButton