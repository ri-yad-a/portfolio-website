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
    <StyledSkills id="skills" className="content-item hidden">
      <h3 className="section-header" data-aos="fade-left">My Skills</h3>

      <div className="progress-bars" data-aos="fade-left" data-aos-delay="300">
        <CircularProgressBar percentage={75} skill="Java" skillIcon={faJava} />

        {/* <CircularProgressBar percentage={65} skill="C++" /> */}

        <CircularProgressBar
          percentage={40}
          skill="Python"
          skillIcon={faPython}
        />

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

        <CircularProgressBar percentage={80} skill="Git" skillIcon={faGitAlt} />
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
