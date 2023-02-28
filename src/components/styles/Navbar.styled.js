import styled from "styled-components";

export const StyledNavBar = styled.div`

background-color: #373737;

  @media only screen and (max-width: 600px) {

  
  }

  @media only screen and (min-width: 600px) {
    display: flex;
    flex-direction: column;
    padding: 10% 0;
    position: fixed;
    width: 7rem;
    height: 100vh;

    .navbar-item {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding: 35px 0;
    }
  }

  a {
    color: yellow;
    text-decoration: none;
  }

  a:hover {
    background-color: black;
  }

  .link-text {
    font-size: 15px;
    display: none;
  }

  .navbar-item:hover .link-text {
    display: block;
  }
`;
