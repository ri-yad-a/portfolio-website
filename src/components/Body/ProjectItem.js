import { StyledProjectItem } from "../styles/ProjectItem.styled";
import { faPaperPlane, faGithub } from "@fortawesome/free-solid-svg-icons";

function ProjectItem(props) {

  if (props.repo) {
    return (
      <StyledProjectItem>
         <div className="project">
          {/* <img src={placeHolderPic} className="project-preview"></img> */}
          <h1 className="project-name">{props.name}</h1>
          <p className="project-description">{props.description}</p>
          <a href={props.repoLink} target="_blank" rel="noreferrer" className="project-link">View Github Repository</a>
          <p className="project-summary">{props.summary}</p>
        </div>
       
       
      </StyledProjectItem>
    );
  } else {
    return (
      <StyledProjectItem>
        <div className="project">
          {/* <img src={placeHolderPic} className="project-preview"></img> */}
          <h1 className="project-name">{props.name}</h1>
          <p className="project-description">{props.description}</p>
          <p className="coming-soon">Coming Soon!</p>
        </div>
        <p className="summary">{props.summary}</p>
      </StyledProjectItem>
    );
  }

 
}

export default ProjectItem;
