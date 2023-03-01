import "../../App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-scroll";

function NavbarItem(props) {
    return(
        <Link
        to={props.to}
        spy={true}
        smooth={true}
        offset={50}
        duration={700}
        className="navbar-item"
      >
        <FontAwesomeIcon icon={props.icon} size="2x" />
        <p className="link-text">{props.text}</p>
      </Link>
    );
}

export default NavbarItem;