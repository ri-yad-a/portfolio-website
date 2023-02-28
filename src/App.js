import "./App.css";
import Navbar from "./components/Navbar/Navbar.js";
import Skills from "./components/Body/Skills.js";
import Home from "./components/Body/Home.js";
import Projects from "./components/Body/Projects.js";
import { StyledNavBar } from "./components/styles/Navbar.styled";
import { StyledContainer } from "./components/styles/Container.styled";
import { StyledContent } from "./components/styles/Content.styled";
import { StyledContentItem } from "./components/styles/ContentItem.styled";

function App() {
  return (
    <div>
      <StyledContainer>
        <StyledNavBar>
          <Navbar />
        </StyledNavBar>

        <StyledContent>
         

          <StyledContentItem>
            <Home />
          </StyledContentItem>

          <StyledContentItem>
            <Skills />
          </StyledContentItem>

          <StyledContentItem>
            <Projects />
          </StyledContentItem>
        </StyledContent>
      </StyledContainer>
    </div>
  );
}

export default App;
