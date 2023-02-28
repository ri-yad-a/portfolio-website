import "../../App.css";
import { StyledSkills } from "../styles/Skills.styled";
import CircularProgressBar from "./CircularProgressBar";

function Skills() {
  return (
    <div id="skills">
      <h3>My Skills</h3>

      <StyledSkills>
        <CircularProgressBar percentage={75} skill="Java" />

        {/* <div className="white">
    <div
      className="dark-grey"
      style={{ height: "40px", width: "75%" }}
    ></div>
  </div> */}

        <CircularProgressBar percentage={65} skill="C++" />

        <CircularProgressBar percentage={60} skill="Javascript" />

        <CircularProgressBar percentage={50} skill="React" />

        <CircularProgressBar percentage={40} skill="Python" />

        <CircularProgressBar percentage={80} skill="Git" />

        <CircularProgressBar percentage={85} skill="HTML" />

        <CircularProgressBar percentage={60} skill="CSS" />

        <br></br>
      </StyledSkills>
    </div>
  );
}

export default Skills;
