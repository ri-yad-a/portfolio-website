import "../../App.css";
import { StyledHome } from "../styles/Home.styled";
import Socials from "./Socials";

function Home() {
  return (
    <div  id="home">
<StyledHome>
      <h1>
        Hi, I'm Riyad Abdullayev
      </h1>
      <p>
        Welcome to my portfolio website! I am a 2nd year Computer Science major
        at the University of Calgary with a strong passion for software
        development. Here, you can browse my projects and learn more about my
        skills and experience. Thank you for visiting!
      </p>

      {/* this is for typewriter animation
       <StyledGreeting>
        <div className="typewriter">
          <h1></h1>
        </div>
  </StyledGreeting> */}
    <Socials/>

    </StyledHome>
    </div>
    
  );
}

export default Home;


