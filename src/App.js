import "./App.css";
import Navbar from "./components/Navbar/Navbar.js";
import Skills from "./components/Body/Skills.js";
import Home from "./components/Body/Home.js";
import Projects from "./components/Body/Projects.js";
import { StyledNavBar } from "./components/styles/Navbar.styled";
import { StyledContent } from "./components/styles/Content.styled";
import { StyledContentItem } from "./components/styles/ContentItem.styled";
//import {Routes, Route} from 'react-router-dom'

function App() {
  return (
    <>
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
    </>
  );
}

export default App;
