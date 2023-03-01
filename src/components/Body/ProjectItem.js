import { StyledProjectItem } from "../styles/ProjectItem.styled";


function ProjectItem(props) {
  return (
    <StyledProjectItem>
      <img src="" alt={props.name}></img>
      <h1>{props.name}</h1>
      <p>{props.description}</p>
    </StyledProjectItem>
  );
}

export default ProjectItem;
