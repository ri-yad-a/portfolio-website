import styled from "styled-components";

export const StyledNavBar = styled.div`
  
  background-color: #373737;
  display: flex;
  flex-direction: column;
  padding: 10% 0;
  position: fixed;
  width: 10rem;
  height: 100vh;

  a {
    color: yellow;
    text-decoration: none;
  }

  a:hover {
    background-color: black;
  }

  .navbar-item {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 35px 0;
  }

  .link-text {
    display: none;
  }

  .navbar-item:hover .link-text {
    display: block;
  }


`;
