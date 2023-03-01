import "../../App.css";
import { StyledProjectItem } from "../styles/ProjectItem.styled";
import { StyledProjects } from "../styles/Projects.styled";
import ProjectItem from "./ProjectItem";

function Projects() {
  return (
    <div style={{height:'100vh'}}>
      <StyledProjects id="projects">
        <ProjectItem
          name="Locationary"
          description="Java Desktop Application for Travellers"
        ></ProjectItem>
        <ProjectItem
          name="SmpleHabts"
          description="In progress React application"
        ></ProjectItem>
      </StyledProjects>
    </div>
  );
}

export default Projects;
