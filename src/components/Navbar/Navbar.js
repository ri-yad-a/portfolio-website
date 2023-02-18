import "../../App.css";

function Navbar() {
  return (
    <nav className="navbar navbar-block small hide-small center">
      <a href="#" className="navbar-item button padding-large black">
        <i className="fa fa-home xxlarge"></i>
        <p>HOME</p>
      </a>
      <a href="#about" className="navbar-item button padding-large hover-black">
        <i className="fa fa-user xxlarge"></i>
        <p>ABOUT ME</p>
      </a>
      <a
        href="#skills"
        className="navbar-item button padding-large hover-black"
      >
        <i className="fa fa-eye xxlarge"></i>
        <p>SKILLS</p>
      </a>
      <a
        href="#projects"
        className="navbar-item button padding-large hover-black"
      >
        <i className="fa fa-eye xxlarge"></i>
        <p>PROJECTS</p>
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
