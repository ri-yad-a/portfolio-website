import { StyledProjectItem } from "../styles/ProjectItem.styled";
import placeHolderPic from "../../images/placeholder.png"

function ProjectItem(props) {

  if (props.repo) {
    return (
      <StyledProjectItem>
        <p className="summary">{props.summary}</p>
        <div className="project">
          {/* <img src={placeHolderPic} className="project-preview"></img> */}
          <h1 className="project-name">{props.name}</h1>
          <p className="project-description">{props.description}</p>
          <a href={props.repoLink}className="project-link">View Github Repository</a>
        </div>
      </StyledProjectItem>
    );
  } else {
    return (
      <StyledProjectItem>
        <p className="summary">{props.summary}</p>
        <div className="project">
          {/* <img src={placeHolderPic} className="project-preview"></img> */}
          <h1 className="project-name">{props.name}</h1>
          <p className="project-description">{props.description}</p>
          <p className="coming-soon">Coming Soon!</p>
        </div>
      </StyledProjectItem>
    );
  }

 
}

export default ProjectItem;
