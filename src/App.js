import "./App.css";
import Navbar from "./components/Navbar/Navbar.js";
import Skills from "./components/Body/Skills.js";
import Home from "./components/Body/Home.js";
import Projects from "./components/Body/Projects.js";
import { StyledContent } from "./components/styles/Content.styled";
import Contact from "./components/Body/Contact";

function App() {

  return (
    <>
      <Navbar />

      <StyledContent>
        <Home className="content-item"/>

        <Skills className="content-item"/>

        <Projects className="content-item"/>

        <Contact className="content-item"/>
      </StyledContent>
    </>
  );
}

export default App;
