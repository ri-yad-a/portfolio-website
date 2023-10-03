import styled from "styled-components";

export const StyledHome = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;

  .home-frame {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    /* padding: 1rem 1rem; */
    border-radius: 5rem;
    /* background-color: var(--background-secondary); */
    /* transition: transform 300ms ease, box-shadow 500ms ease; */
  }

  .home-frame:hover {
    /* transform: translateY(-1px); */
    /* box-shadow: 0 8px 10px var(--accent-primary); */
  }

  .tagline {
    text-align: center;
    font-family: "Courier New", Courier, monospace;
    font-size: 1.5rem;
    margin-bottom: 2rem;
    color: var(--text-primary);
  }

  p {
    font-size: 1.5rem;
  }

  /* Smaller screens */
  @media (max-width: 600px) {
    h1 {
      font-size: 3rem;
    }

    p {
      font-size: 1.5rem;
      text-align: center;
    }
  }
  /* Larger screens */
  @media (min-width: 600px) {
    h1 {
      font-size: 4rem;
    }

    p {
      font-size: 1.5rem;
    }
 
  }

  @media (min-width: 1400px) {
    .home-frame {
      padding: 15rem 15rem;
    }
  }

  .avatar {
    background-color: var(--background-secondary);
    border-radius: 5rem;
    width: 150px;
    height: auto;
    display: block;
    margin-left: auto;
    margin-right: auto;
    object-fit: contain;
  }
  h1 {
    color: var(--accent-primary);
    text-align: center;
    padding: 0;
    margin: 0;
  }

  p {
    color: var(--text-primary);
    /* padding: 0 5rem; */
    /* text-align: center; */
  }

  

`;



