import "../../App.css";
import CircularProgressBar from "./CircularProgressBar";

function Skills() {
  return (
    <div className="content justify text-grey padding-64" id="skills">
          <h3 className="padding-16 text-light-grey">
        My Skills
      </h3>
      <p className="wide">Java</p>
      <CircularProgressBar></CircularProgressBar>

      <div className="white">
        <div
          className="dark-grey"
          style={{ height: "40px", width: "75%" }}
        ></div>
      </div>
      <p className="wide">C++</p>
      <div className="white">
        <div
          className="dark-grey"
          style={{ height: "40px", width: "65%" }}
        ></div>
      </div>
      <p className="wide">JavaScript</p>
      <div className="white">
        <div
          className="dark-grey"
          style={{ height: "40px", width: "60%" }}
        ></div>
      </div>
      <p className="wide">React</p>
      <div className="white">
        <div
          className="dark-grey"
          style={{ height: "40px", width: "50%" }}
        ></div>
      </div>
      <p className="wide">Python</p>
      <div className="white">
        <div
          className="dark-grey"
          style={{ height: "40px", width: "40%" }}
        ></div>
      </div>
      <p className="wide">Git</p>
      <div className="white">
        <div
          className="dark-grey"
          style={{ height: "40px", width: "80%" }}
        ></div>
     
      </div>

      <p className="wide">HTML</p>
      <div className="white">
        <div
          className="dark-grey"
          style={{ height: "40px", width: "85%" }}
        ></div>
     
      </div>

      <p className="wide">CSS</p>
      <div className="white">
        <div
          className="dark-grey"
          style={{ height: "40px", width: "75%" }}
        ></div>
     
      </div>

      

      <br></br>
    </div>
  );
}

export default Skills;


// function Skill() {
//   return(
//     <>
//     <p className="wide">Java</p>
//       <div className="white">
//         <div
//           className="dark-grey"
//           style={{ height: "40px", width: "95%" }}
//         ></div>
//       </div>
//     </>
    
//   );
// }