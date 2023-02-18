import "../../App.css";

function Projects() {
  return (
    <div id="projects">
      <h3 class="padding-16 text-light-grey">My Projects</h3>
      <div class="row-padding" style={{ margin: "0 -16px" }}>
        <div class="half margin-bottom">
          <ul class="ul white center opacity hover-opacity-off">
            <li class="dark-grey xlarge padding-32">Locationary</li>
            <li class="padding-16">
              <h2>Locationary</h2>
              <span class="opacity">Java Desktop Application</span>
            </li>
            <li class="light-grey padding-24">
              <button class="button white padding-large hover-black">
                Link to repo
              </button>
            </li>
          </ul>
        </div>

        <div class="half">
          <ul class="ul white center opacity hover-opacity-off">
            <li class="dark-grey xlarge padding-32">SMPLE</li>

            <li class="padding-16">
              <h2>SMPLE</h2>
              <span class="opacity">In progress React Application</span>
            </li>
            <li class="light-grey padding-24">
              <button class="button white padding-large hover-black">
                Link to Repo
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Projects;
