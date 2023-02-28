import "../../App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faDiagramProject,
  faToolbox,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-scroll";

function Navbar() {
  return (
    <nav>
      <Link
        to="home"
        spy={true}
        smooth={true}
        offset={50}
        duration={500}
        className="navbar-item"
      >
        <FontAwesomeIcon icon={faHouse} size="2x" />
        <p className="link-text">HOME</p>
      </Link>

      {/* <a href="#skills" className="navbar-item"> */}
      <Link
        to="skills"
        spy={true}
        smooth={true}
        offset={50}
        duration={500}
        className="navbar-item"
      >
        <FontAwesomeIcon icon={faToolbox} size="2x"></FontAwesomeIcon>
        <p className="link-text">SKILLS</p>
      </Link>

      {/* </a> */}

      <Link
        to="projects"
        spy={true}
        smooth={true}
        offset={50}
        duration={500}
        className="navbar-item"
      >
        <FontAwesomeIcon icon={faDiagramProject} size="2x"></FontAwesomeIcon>
        <p className="link-text">PROJECTS</p>
      </Link>

      {/* <a
        href="#contact"
        className="navbar-item button padding-large hover-black"
      >
        <i className="fa fa-envelope xxlarge"></i>
        <p>CONTACT ME</p>
      </a> */}
    </nav>
  );
}

export default Navbar;
