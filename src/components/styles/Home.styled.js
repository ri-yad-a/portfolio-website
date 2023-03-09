import styled from "styled-components";

export const StyledHome = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;

  .home-frame {
    padding: 2rem 2rem;
    border-radius: 5rem;
    background-color: var(--background-secondary);
    transition: transform 300ms ease, box-shadow 500ms ease;
  }

  .home-frame:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 30px var(--accent-primary);
  
  }

  .tagline {
    text-align: center;
    font-family: "Courier New", Courier, monospace;
    font-size: 1.5rem;
    margin-bottom: 5rem;
    color: var(--text-primary);
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
    padding: 0 5rem;
    text-align: center;
  }

  

`;






// .typing {
//   font-size: 50px;
//   overflow: hidden; /* Ensures the content is not revealed until the animation */
//   /* border-right: 0.15em solid orange;  */
//   white-space: nowrap; /* Keeps the content on a single line */
//   margin: 30px auto; /* Gives that scrolling effect as the typing happens */
//   letter-spacing: 0; /* Adjust as needed */
//   animation: typing 5s steps(40, end);
// }

// /* The typing effect */
// @keyframes typing {
//   from {
//     width: 0;
//   }
//   to {
//     width: 100%;
//   }
// }

// /* The typewriter cursor effect */
// @keyframes blink-caret {
//   from,
//   to {
//     border-color: transparent;
//   }
//   50% {
//     border-color: grey;
//   }
// }
