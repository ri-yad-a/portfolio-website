import "../../App.css";
import { StyledGreeting } from "../styles/Greeting.styled";

function Home() {
  return (
    <div id="home" style={{ fontSize: "20px", lineHeight: "1.8", height:'100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
   
        <Greeting />
      
      <p>
        Welcome to my portfolio website! My name is Riyad and I
        am a 2nd year Computer Science major at the University of Calgary with a strong passion for software
        development. Here, you can browse my projects and learn more about my
        skills and experience. Thank you for visiting!
      </p>

      
    </div>
  );
}

function Greeting() {
  return (
    <StyledGreeting>
      <div className="typewriter">
        <h1>Hi, I'm Riyad Abdullayev </h1>
      </div>
    </StyledGreeting>
  );
}

export default Home;
