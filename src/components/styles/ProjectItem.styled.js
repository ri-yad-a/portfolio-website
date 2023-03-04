import styled from "styled-components";

export const StyledProjectItem = styled.div`
  min-width: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  border-radius: 3rem;
  padding: 3rem 0;
  background-color: var(--background-secondary);

  .project {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 40%;
  }

  .summary {
    width: 40%;
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
    box-shadow: 0 8px 16px var(--text-primary);
  }

  .project-link:active {
    transform: translateY(-1px);
    box-shadow: 0 5px 10px var(--accent-primary);
  }
`;
