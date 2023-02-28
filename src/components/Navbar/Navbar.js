import "../../App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faDiagramProject, faToolbox, faUser} from "@fortawesome/free-solid-svg-icons";


function Navbar() {
  return (
    <nav>
        <a href="#home" className="navbar-item">
          <FontAwesomeIcon icon={faHouse} size="2x" />
          <p className="link-text">HOME</p>
        </a>

        <a href="#skills" className="navbar-item">
          <FontAwesomeIcon icon={faToolbox} size="2x"></FontAwesomeIcon>
          <p className="link-text">SKILLS</p>
        </a>

        <a href="#projects" className="navbar-item">
          <FontAwesomeIcon icon={faDiagramProject} size="2x"></FontAwesomeIcon>
          <p className="link-text">PROJECTS</p>
        </a>

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
