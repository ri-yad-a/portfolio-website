import "../../App.css";
import { StyledSkills } from "../styles/Skills.styled";
import CircularProgressBar from "./CircularProgressBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faJava, faPython, faGitAlt, faHtml5, faCss3, faSquareJs, faReact} from "@fortawesome/free-brands-svg-icons";

function Skills() {
  return (
    <div id="skills" style={{minHeight: '100vh'}}>
      <h3>My Skills</h3>

      <StyledSkills>
        <CircularProgressBar percentage={75} skill="Java" skillIcon={faJava}/>

        {/* <CircularProgressBar percentage={65} skill="C++" /> */}

        <CircularProgressBar percentage={40} skill="Python" skillIcon={faPython} />

        <CircularProgressBar percentage={80} skill="Git" skillIcon={faGitAlt}/>

        <CircularProgressBar percentage={70} skill="HTML" skillIcon={faHtml5}/>

        <CircularProgressBar percentage={60} skill="CSS" skillIcon={faCss3}/>

        <CircularProgressBar percentage={60} skill="Javascript" skillIcon={faSquareJs}/>

        <CircularProgressBar percentage={50} skill="React" skillIcon={faReact} />

        <br></br>
      </StyledSkills>
      <button>Download My Resume here</button>

    </div>
  );
}

export default Skills;
