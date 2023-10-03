import "./App.css";
import Navbar from "./components/Navbar/Navbar.js";
import Skills from "./components/Body/Skills.js";
import Home from "./components/Body/Home.js";
import Projects from "./components/Body/Projects.js";
import { StyledContent } from "./components/styles/Content.styled";
import Contact from "./components/Body/Contact";
import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import particlesConfig from "./components/Particles/config/particles-config";


function App() {
  const particlesInit = useCallback(async (engine) => {
    console.log(engine);
    // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    await console.log(container);
  }, []);

  return (
    <>
      {/* <Particles
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={particlesConfig}
        /> */}
      <Navbar />

      <StyledContent>
        <Home className="content-item" />

        <Skills className="content-item" />

        <Projects className="content-item" />

        <Contact className="content-item" />
      </StyledContent>
    </>
  );
}

export default App;
