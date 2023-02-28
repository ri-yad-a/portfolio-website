import "../../App.css";
import { StyledGreeting } from "../styles/Greeting.styled";

function Home() {
  return (

    <div id="home" style={{fontSize: "20px", lineHeight: "1.8"}}>
      <StyledGreeting>
        <Greeting/>
      </StyledGreeting>
      <h2>Introduction</h2>
      <p>
        Welcome to my portfolio website! My name is Riyad and I am a computer
        science major with a passion for software development. As a computer
        science major, I have built a foundation in programming fundamentals,
        data structures, algorithms, and computer architecture. I have also been
        exposed to a variety of programming languages such as Java, C++, Python,
        and JavaScript, which have helped me develop my skills and broaden my
        perspective. <br />
        <br />
        Through my coursework and extracirriculars, I have had the opportunity
        to work on several team projects, which have taught me the importance of
        collaboration and communication in software development, getting hands
        on experience with git in the process. Aside from my academic
        experience, I have also been working on personal projects that allow me
        to apply my skills in a practical setting. These projects include
        developing web applications, and building games. 
        <br/><br/>

        I enjoy the challenge of tackling complex problems and finding creative
        solutions that make the end product both functional and aesthetically
        pleasing. Throughout my journey as a software developer, I have come to
        appreciate the constantly evolving nature of the field. The ability to
        learn new technologies and adapt to changing requirements is crucial for
        success, and I am always eager to expand my knowledge and
        take on new challenges. This portfolio website is a platform for me to
        showcase my work and share my passion for software development with
        others. Thank you for visiting!
      </p>
    </div>
  );
}

function Greeting() {
  return (
    <StyledGreeting>
      <div className="typewriter">
        <h1>I'm Riyad Abdullayev </h1>
        <p>Software Developer and Computer Science Student</p>
      </div>
    </StyledGreeting>
  );
}

export default Home;
