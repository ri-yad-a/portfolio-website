import styled from "styled-components";

export const StyledProjectItem = styled.div`
  
 
  
  max-width: 33%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  border-radius: 3rem;
  padding: 3rem 2rem;
  background-color: var(--background-secondary);
  transition: all 300ms ease, box-shadow 500ms ease;


  @media (max-width: 1000px) {
    max-width: 80%;
  }

  

  :hover {
    transform: translateY(-10px);
    /* box-shadow: 0 5px 5px var(--accent-primary); */
    background-color: black;

  }
  
  /* @media (max-width: 1000px) {
    flex-direction: column;
  } */

  .project {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    /* width: 40%; */
  }
  

  .project-summary {
    /* width: 40%; */
  }

  .project-preview {
  }

  .project-name {
  }

  .project-description {
    
  }

  .project-link {
    color: var(--background-secondary);
    background-color: var(--accent-primary);
    filter: opacity(0.7);
    text-decoration: none;
    border-radius: 1rem;
    padding: 0.5rem;
    transition: background-color 300ms ease, transform 300ms ease;
  }

  .project-link:hover {
    filter: opacity(1);
    transform: translateY(-2px);
    /* box-shadow: 0 2px 10px var(--text-primary); */
  }

  .project-link:active {
    transform: translateY(-1px);
    box-shadow: 0 5px 10px var(--accent-primary);
  }
`;
