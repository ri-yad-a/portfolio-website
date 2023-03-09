import { StyledProjectItem } from "../styles/ProjectItem.styled";

function ProjectItem(props) {

  if (props.repo) {
    return (
      <StyledProjectItem data-aos="fade-up" data-aos-duration="400" data-aos-delay="50">
         <div className="project">
          {/* <img src={placeHolderPic} className="project-preview"></img> */}
          <h1 className="project-name">{props.name}</h1>
          <p className="project-description">{props.description}</p>
          <a href={props.repoLink} target="_blank" rel="noreferrer" className="project-link">View Github Repository</a>
        </div>
        <p className="summary">{props.summary}</p>
       
      </StyledProjectItem>
    );
  } else {
    return (
      <StyledProjectItem>
        <div className="project" data-aos="fade-up">
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
