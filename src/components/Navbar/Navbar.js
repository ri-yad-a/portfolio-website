import "../../App.css";
import { StyledNavbarItem }from "../styles/NavbarItem.styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faDiagramProject, faToolbox, faUser} from "@fortawesome/free-solid-svg-icons";


function Navbar() {
  return (
    <nav>
      <StyledNavbarItem className="navbar-item">
        <a href="#">
          <FontAwesomeIcon icon={faHouse} size="3x" />
          <p>HOME</p>
        </a>
      </StyledNavbarItem>

      <StyledNavbarItem className="navbar-item">
        <a href="#about">
          <FontAwesomeIcon icon={faUser} size="3x"></FontAwesomeIcon>
          <p>ABOUT ME</p>
        </a>
      </StyledNavbarItem>

      <StyledNavbarItem className="navbar-item">
        <a href="#skills">
          <FontAwesomeIcon icon={faToolbox} size="3x"></FontAwesomeIcon>
          <p>SKILLS</p>
        </a>
      </StyledNavbarItem>

      <StyledNavbarItem className="navbar-item">
        <a href="#projects">
          <FontAwesomeIcon icon={faDiagramProject} size="3x"></FontAwesomeIcon>
          <p>PROJECTS</p>
        </a>
      </StyledNavbarItem>

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
