import styled from "styled-components";

export const StyledSkills = styled.div`
  min-height: 100vh;

  .section-header {
    font-size: 2rem;
    margin-bottom: 5rem;
  }

  .progress-bars {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-bottom: 5rem;
  }

  @media (min-width: 1200px) {
    .progress-bars {
      /* margin: 0 30%; */
    }
  }

    /* @media (min-width: 1600px) {
    .progress-bars {
      margin: 0 200px;
    }
  }
 */

  /* .resume-link {
    text-decoration: none;
    background-color: var(--background-secondary);
    color: var(--text-primary);
    padding: 1rem 1rem;
    border-radius: 1rem;
    transition: color 300ms ease;

    
} */

 
  .resume-link {
    text-decoration: none;
    display: inline-block;
    padding: 1rem;
    border-radius: 1rem;
    color: var(--text-primary);
    font-size: 1.2rem;
    transition: all 200ms;
    position: relative;
    overflow: hidden;
    z-index: 0;
    &:after {
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: var(--accent-secondary);

      border-radius: 10rem;
      z-index: -2;
    }
    &:before {
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;
      width: 0%;
      height: 100%;
      background-color: var(--accent-primary);
      transition: all 0.3s;
      border-radius: 10rem;
      z-index: -1;
    }
    &:hover {
      color: var(--text-secondary);
      &:before {
        width: 100%;
      }
    }
  }
`;
