import "../../App.css";
import { StyledHome } from "../styles/Home.styled";
import Socials from "./Socials";
import avatar from "../../images/myAvatar.png";

function Home() {
  return (
    <StyledHome id="home" className="content-item">
      <div className="home-frame">
        <h1 className>Hi, I'm Riyad</h1>
        {/* <img src={avatar} className="avatar"></img> */}
        <h2 className="tagline">
          Software Developer and Computer Science student
        </h2>
        <p>
          Welcome! I am a 3rd year Computer Science student at the University of
          Calgary and I'm on a mission to apply my knowledge and gain hands-on experience in
          the tech industry with a drive to craft code that brings innovative
          ideas to life. Feel free to browse my projects and get in touch you'd
          like to collaborate or chat as I'm always looking for new opportunities.
          Thank you for visiting!
        </p>

        <Socials />
      </div>
    </StyledHome>
  );
}

export default Home;
