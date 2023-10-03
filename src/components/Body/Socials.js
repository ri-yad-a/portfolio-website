import "../../App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faInbox } from "@fortawesome/free-solid-svg-icons";
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
            rel="noreferrer"
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
            rel="noreferrer"
            className="socials-link"
          >
            <FontAwesomeIcon
              icon={faGithub}
              size="2x"
              className="icon"
            ></FontAwesomeIcon>
          </a>
        </li>

        <li className="socials-item">
          <a href="mailto:riyadabdullayev04@gmail.com" target="_blank">
            <FontAwesomeIcon
              icon={faInbox}
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
  align-items: center;

  /* Smaller screens */
  @media (max-width: 600px) {
  }

  .socials-soc {
    display: flex;
    list-style: none;
    gap: 3rem;
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
