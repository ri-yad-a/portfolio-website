import "./App.css";
import Navbar from "./components/Navbar/Navbar.js";
import Skills from "./components/Body/Skills.js";
import Intro from "./components/Body/About.js";
import Projects from "./components/Body/Projects.js";
import Greeting from "./components/Body/Greeting.js";

function App() {
  return (
      <div className="black" id="main">
        <Greeting />
        <Navbar/>
        <Intro />
        <Skills />
        <Projects />
      </div>
  );
}

export default App;
