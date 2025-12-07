import "./Button.css"
import "./../styleSettings.css"
import { Link } from "react-router-dom";

const Button = (props) => {
    return (
        <Link to={props.link} className="basic-button">{props.text}</Link>
    )
}

export default Button