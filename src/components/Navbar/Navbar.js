import "../../App.css";
import {
  faHouse,
  faDiagramProject,
  faToolbox,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import NavbarItem from "./NavbarItem";
import { StyledNavBar } from "../styles/Navbar.styled";

function Navbar() {
  return (
    <StyledNavBar>
      <nav className="navbar">
        <ul className="navbar-nav">
          <li className="navbar-item">
            <NavbarItem icon={faHouse} to="home" text="HOME"></NavbarItem>
          </li>

          <li className="navbar-item">
            <NavbarItem icon={faToolbox} to="skills" text="SKILLS"></NavbarItem>
          </li>

          <li className="navbar-item">
            <NavbarItem
              icon={faDiagramProject}
              to="projects"
              text="PROJECTS"
            ></NavbarItem>
          </li>

          <li className="navbar-item">
            <NavbarItem
              icon={faEnvelope}
              to="contact"
              text="CONTACT"
            ></NavbarItem>
          </li>
        </ul>
      </nav>
    </StyledNavBar>
  );
}

export default Navbar;

