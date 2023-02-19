import "../../App.css";
import { StyledNavbarItem } from "../styles/NavbarItem.styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";

function Navbar() {
  return (
    <nav className="navbar navbar-block small hide-small center">
      <StyledNavbarItem>
        <a href="#">
          <FontAwesomeIcon icon={faHouse} />
        </a>
      </StyledNavbarItem>

      <StyledNavbarItem>
        <a href="#about">
          <p>ABOUT ME</p>
        </a>
      </StyledNavbarItem>

      <StyledNavbarItem>
        <a href="#skills" id="skills">
          <p>SKILLS</p>
        </a>
      </StyledNavbarItem>

      <StyledNavbarItem>
        <a href="#projects">
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
