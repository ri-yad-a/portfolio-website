import "../../App.css";
import { StyledSkills } from "../styles/Skills.styled";
import CircularProgressBar from "./CircularProgressBar";

function Skills() {
  return (
    <div id="skills" style={{height: '100vh'}}>
      <h3>My Skills</h3>

      <StyledSkills>
        <CircularProgressBar percentage={75} skill="Java" />

        <CircularProgressBar percentage={65} skill="C++" />

        <CircularProgressBar percentage={40} skill="Python" />

        <CircularProgressBar percentage={80} skill="Git/Github" />

        <CircularProgressBar percentage={70} skill="HTML" />

        <CircularProgressBar percentage={60} skill="CSS" />

        <CircularProgressBar percentage={60} skill="Javascript" />

        <CircularProgressBar percentage={50} skill="React" />

        <br></br>
      </StyledSkills>
    </div>
  );
}

export default Skills;
