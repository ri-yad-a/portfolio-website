import "../../App.css";
import { StyledGreeting } from "../styles/Greeting.styled";

function Greeting() {
  return (
    <StyledGreeting>
      <div id="home" className="typewriter">
        <h1>I'm Riyad Abdullayev </h1>
        <p>Software Developer and Computer Science Student</p>
      </div>
    </StyledGreeting>
  );
}

export default Greeting;
