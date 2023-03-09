import "../../App.css";
import { StyledProjects } from "../styles/Projects.styled";
import ProjectItem from "./ProjectItem";

function Projects() {
  const locationarySummary = "Locationary is an intuitive journaling system designed for travellers to easily log and manage their bucket list locations and travel history. ";
    const locationaryLink = "https://github.com/ri-yad-a/Locationary";

  const smpleHabtsSummary =
    "SMPLE is a simplified productivity system built with React. The world of productivity has become far too complex and SMPLE aims to simplify it by providing a streamlined and user-friendly platform that allows users to focus on what's important without getting bogged down by overwhelming features and complex interfaces. (Currently in the design and setup phase)";

  const portfolioSummary = "What you are currently viewing is my portfolio website built with React.js";
  const portfolioLink = "https://github.com/ri-yad-a/portfolio-website";

  return (
    <StyledProjects id="projects" className="content-item">
      <h2 className="section-header">Projects</h2>
      <div className="project-items snaps-inline">
        <ProjectItem
          name="Locationary"
          description={"Java Desktop Application for Travellers"}
          summary={locationarySummary}
          repo={true}
          repoLink={locationaryLink}
        ></ProjectItem>

          {/* <ProjectItem
            name="SmpleHabts"
            description="In progress React application to simplify your goals"
            summary={smpleHabtsSummary}
            repo={false}
          ></ProjectItem> */}

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
