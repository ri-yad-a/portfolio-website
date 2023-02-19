import "./App.css";
import Navbar from "./components/Navbar/Navbar.js";
import Skills from "./components/Body/Skills.js";
import Intro from "./components/Body/About.js";
import Projects from "./components/Body/Projects.js";
import Greeting from "./components/Body/Greeting.js";
import { StyledNavBar } from "./components/styles/Navbar.styled";
import { StyledContainer } from "./components/styles/Container.styled";
import { StyledContent } from "./components/styles/Content.styled";

function App() {
  return (
    <div>
      <StyledContainer>
        <StyledNavBar>
          <Navbar />
        </StyledNavBar>

        <StyledContent>
          <Greeting />
          <Intro />
          <Skills />
          <Projects />
        </StyledContent>
      </StyledContainer>
    </div>
  );
}

export default App;
