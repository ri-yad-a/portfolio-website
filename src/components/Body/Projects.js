import "../../App.css";
import { StyledProjects } from "../styles/Projects.styled";
import ProjectItem from "./ProjectItem";

function Projects() {
  return (
    <div id="projects" style={{mihHeight: '100vh'}}>
      <StyledProjects>
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
