import "../../App.css";
import { StyledHome } from "../styles/Home.styled";
import Socials from "./Socials";
import avatar from "../../images/myAvatar.png";

function Home() {
  return (
    <StyledHome id="home" className="content-item">
      <div className="home-frame">
        <h1 className="typing">Hi, I'm Riyad</h1>
        {/* <img src={avatar} className="avatar"></img> */}
        <h2 className="tagline">
          Software Developer and Computer Science student
        </h2>
        <p>
          Welcome! I am a 2nd year Computer Science major at the University of
          Calgary with a strong passion for software development. Here, you can
          browse my projects and learn more about my skills and experience.
          Thank you for visiting!
        </p>

        <Socials />
      </div>
    </StyledHome>
  );
}

export default Home;
