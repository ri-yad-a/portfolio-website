import "../../App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDiscord,
  faLinkedin,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import styled from "styled-components";

function Socials() {
  return (
    <StyledSocials className="socials">
      <ul className="socials-soc">
        {/* <li classNane="socials-item">
                    <a className="socials-link" >
                    <FontAwesomeIcon icon={faDiscord}></FontAwesomeIcon>
                    </a>
                </li> */}

        <li classNane="socials-item">
          <a
            href="https://www.linkedin.com/in/riyad-abdullayev-79b29b239/"
            target="_blank"
            className="socials-link"
          >
            <FontAwesomeIcon
              icon={faLinkedin}
              size="2x"
              className="icon"
            ></FontAwesomeIcon>
          </a>
        </li>

        <li classNane="socials-item">
          <a
            href="https://github.com/ri-yad-a"
            target="_blank"
            className="socials-link"
          >
            <FontAwesomeIcon
              icon={faGithub}
              size="2x"
              className="icon"
            ></FontAwesomeIcon>
          </a>
        </li>
      </ul>
    </StyledSocials>
  );
}

export default Socials;

const StyledSocials = styled.div`
  display: flex;
  justify-content: center;

  /* Smaller screens */
  @media (max-width: 600px) {
  }

  .socials-soc {
    display: flex;
    list-style: none;
    gap: 5rem;
  }

  .icon {
    color: var(--accent-primary);
    filter: opacity(0.7);
    transition: filter 300ms ease;
  }

  .icon:hover {
    filter: opacity(1);
  }
`;
