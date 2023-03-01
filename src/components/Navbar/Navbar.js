import "../../App.css";
import {
  faHouse,
  faDiagramProject,
  faToolbox,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import NavbarItem from "./NavbarItem";

function Navbar() {
  return (
    <nav>
      <NavbarItem icon={faHouse} to="home" text="HOME"></NavbarItem>

      <NavbarItem icon={faToolbox} to="skills" text="SKILLS"></NavbarItem>

      <NavbarItem icon={faDiagramProject} to="projects" text="PROJECTS"></NavbarItem>

      <NavbarItem icon={faEnvelope} to="contact" text="CONTACT"></NavbarItem>
    </nav>
  );
}

export default Navbar;
