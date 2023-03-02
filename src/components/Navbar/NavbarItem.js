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
        className="nav-link"
      >
        <FontAwesomeIcon icon={props.icon} size="2x" />
        <span className="link-text">{props.text}</span>
      </Link>
    );
}

export default NavbarItem;