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
import CPPIcon from "../../images/svg/CPPIcon";

function Skills() {
  return (
    <StyledSkills id="skills" className="content-item hidden">
      <h3 className="section-header">
        My Skills
      </h3>

      <div className="progress-bars">
        <CircularProgressBar className="bar" percentage={75} skill="Java" icon={true} skillIcon={faJava} />

        {/* <CircularProgressBar percentage={65} skill="C++" /> */}

        <CircularProgressBar percentage={70} skill="HTML" icon={true} skillIcon={faHtml5} />

        <CircularProgressBar percentage={60} skill="CSS" icon={true} skillIcon={faCss3} />

        <CircularProgressBar
          percentage={60}
          skill="Javascript"
          icon={true}
          skillIcon={faSquareJs}
        />

        <CircularProgressBar
          percentage={50}
          skill="React"
          icon={true}
          skillIcon={faReact}
        />

        <CircularProgressBar
          percentage={40}
          skill="Python"
          icon={true}
          skillIcon={faPython}
        />

        <CircularProgressBar percentage={80} skill="Git" icon={true} skillIcon={faGitAlt} />

        <CircularProgressBar percentage={60} skill="C++" icon={true} skillIcon={<CPPIcon/>} />

      </div>
      <a
        href={resume}
        rel="noreferrer"
        download="Resume (Riyad A.)"
        className="resume-link"
      >
        Download My Resume Here
      </a>
    </StyledSkills>
  );
}

export default Skills;
