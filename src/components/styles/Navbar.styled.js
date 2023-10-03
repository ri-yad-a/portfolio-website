import styled from "styled-components";

export const StyledNavBar = styled.div`
  /* Navbar stuff */

  .navbar {
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: fixed;
    /* background-color: var(--background-secondary); */
  }

  .navbar-nav {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .nav-item {
    width: 100%;
  }

  .nav-item:hover {
    width: 100%;
  }

  .nav-link {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 7rem;
    text-decoration: none;
    color: var(--accent-primary);
    filter: opacity(0.7);
    transition: filter 300ms ease;
  }

  .nav-link:hover {
    filter: opacity(1);
  }

  .link-text {
    margin: 1rem 0;
    font-size: 0rem;
    transition: font-size 300ms ease;
  }

  /* Smaller screens */
  @media (max-width: 600px) {
    .navbar {
      bottom: 0;
      width: 100%;
      height: 5rem;
      background-color: black;
      z-index: 1;
    }

    .navbar-nav {
      margin-top: 2rem;
      flex-direction: row;
      gap: 10px;
      justify-content: space-evenly;
      align-items: center;
    }

    .nav-link {
      /* justify-content: center;
    align-items: center; */
    }
  }

  /* Large Screens */
  @media (min-width: 600px) {
    .navbar {
      top: 0;
      width: 7rem;
      height: 100vh;
    }
    .nav-link:hover .link-text {
      /* display: block; */
      font-size: 0.7em;
    }
  }
`;
