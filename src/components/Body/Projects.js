import "../../App.css";
import { StyledProjects } from "../styles/Projects.styled";
import ProjectItem from "./ProjectItem";

function Projects() {
  const locationarySummary =
    "Locationary is a journaling system designed for travellers to log and manage their bucket list and travel history. The system allows users to easily track their desired destinations and record their experiences at previously visited locations. The application presents an interactive bucket list and provides a rating system for documenting the quality of past travel experiences. The system's organization and intuitive interface provide users with a convenient and efficient way to manage their travel goals and memories.";
  const locationaryLink = "https://github.com/ri-yad-a/Locationary";

  const smpleHabtsSummary =
    "SMPLE is a simplified productivity system built with React. The world of productivity has become far too complex and SMPLE aims to simplify it by providing a streamlined and user-friendly platform that allows users to focus on what's important without getting bogged down by overwhelming features and complex interfaces. (Currently in the design and setup phase)";

  const portfolioSummary = "This was how I started learning React.js";
  const portfolioLink = "https://github.com/ri-yad-a/portfolio-website";

  return (
    <StyledProjects id="projects">
      <h2 className="header">Projects</h2>
      <div className="project-items">
        <ProjectItem
          name="Locationary"
          description={"Java Desktop Application for Travellers"}
          summary={locationarySummary}
          repo={true}
          repoLink={locationaryLink}
        ></ProjectItem>

        <ProjectItem
          name="SmpleHabts"
          description="In progress React application to simplify your goals"
          summary={smpleHabtsSummary}
          repo={false}
        ></ProjectItem>

        <ProjectItem
          name="Portfolio Website"
          description="My Personal Website"
          summary={portfolioSummary}
          repo={true}
          repoLink={portfolioLink}
        ></ProjectItem>
      </div>
    </StyledProjects>
  );
}

export default Projects;
