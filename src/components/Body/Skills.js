import "../../App.css";
import { StyledSkills } from "../styles/Skills.styled";
import CircularProgressBar from "./CircularProgressBar";
import {
  faJava,
  faPython,
  faGitAlt,
  faHtml5,
  faCss3,
  faSquareJs,
  faReact,
} from "@fortawesome/free-brands-svg-icons";
import resume from "../../images/resume.pdf";

function Skills() {
  return (
    <StyledSkills id="skills">
      <h3 className="header">My Skills</h3>

      <div className="progress-bars">
        <CircularProgressBar percentage={75} skill="Java" skillIcon={faJava} />

        {/* <CircularProgressBar percentage={65} skill="C++" /> */}

        <CircularProgressBar
          percentage={40}
          skill="Python"
          skillIcon={faPython}
        />

        <CircularProgressBar percentage={80} skill="Git" skillIcon={faGitAlt} />

        <CircularProgressBar percentage={70} skill="HTML" skillIcon={faHtml5} />

        <CircularProgressBar percentage={60} skill="CSS" skillIcon={faCss3} />

        <CircularProgressBar
          percentage={60}
          skill="Javascript"
          skillIcon={faSquareJs}
        />

        <CircularProgressBar
          percentage={50}
          skill="React"
          skillIcon={faReact}
        />
      </div>

      <br></br>
      <a href={resume} download="Resume (Riyad A.)" className="resume-link">
        Download My Resume Here
      </a>
    </StyledSkills>
  );
}

export default Skills;
