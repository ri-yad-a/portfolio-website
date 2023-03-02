import styled from "styled-components";

export const StyledGreeting = styled.div`

max-width: 700px;
margin: 0 auto;
color: #66fcf1;


  .typewriter h1 {
    font-size: 50px;
    overflow: hidden; /* Ensures the content is not revealed until the animation */
    border-right: 0.15em solid orange; /* The typwriter cursor */
    white-space: nowrap; /* Keeps the content on a single line */ 
    margin: 30px auto; /* Gives that scrolling effect as the typing happens */
    letter-spacing: 0.1em; /* Adjust as needed */
    animation: typing 2.5s steps(40, end), blink-caret 0.75s step-end infinite;
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
