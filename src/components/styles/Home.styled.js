import styled from "styled-components";



export const StyledHome = styled.div`


  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;

.home-frame {
  padding: 5rem 2rem;
  border-top-style: solid;
  border-top-color: var(--text-primary);
  border-top-left-radius: 1rem;
  border-top-right-radius: 1rem;
  border-bottom-style: solid;
  border-bottom-color: var(--text-primary);
  border-bottom-left-radius: 1rem;
  border-bottom-right-radius: 1rem;

}

.tagline {
  text-align: center;
  font-family: 'Courier New', Courier, monospace;
  font-size: 1.5rem;
  margin-bottom: 5rem;
}

  /* Smaller screens */
  @media (max-width: 600px) {
    h1 {
      font-size: 3rem !important;
    }

    p {
      font-size: 1rem !important;
    }
  }
  /* Larger screens */
  @media (min-width: 600px) {
    h1 {
      font-size: 4rem !important;
    }

    p {
      font-size: 1.5rem !important;
    }
  }

  h1 {
    color: var(--accent-primary);
    text-align: center;
  }

  p {
  
    color: var(--text-primary);
  }

  .typewriter h1 {
    font-size: 50px;
    overflow: hidden; /* Ensures the content is not revealed until the animation */
    // border-right: 0.15em solid orange; /* The typwriter cursor */
    white-space: nowrap; /* Keeps the content on a single line */
    margin: 30px auto; /* Gives that scrolling effect as the typing happens */
    letter-spacing: 0.1em; /* Adjust as needed */
    /* animation: typing 2.5s steps(40, end), blink-caret 0.75s step-end infinite; */
  }

  .typewriter p {
    display: flex;
    justify-content: center;
  }

  /* The typing effect */
  @keyframes typing {
    from {
      width: 0;
    }
    to {
      width: 100%;
    }
  }

  /* The typewriter cursor effect */
  @keyframes blink-caret {
    from,
    to {
      border-color: transparent;
    }
    50% {
      border-color: grey;
    }
  }
  
`;
