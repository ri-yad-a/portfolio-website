import styled from "styled-components";

export const StyledContact = styled.div`
  /* min-height: 100vh; */

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  form {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    width: 50%;
    font-size: 16px;
    input {
      width: 100%;
      height: 35px;
      padding: 7px;
      outline: none;
      border-radius: 5px;
      border-style: none;
      background-color: var(--background-secondary);
      color: var(--text-primary);
      &:focus {
        border: 2px solid var(--accent-primary);
      }
    }
    textarea {
      border-style: none;
      background-color: var(--background-secondary);
      color: var(--text-primary);
      max-width: 100%;
      min-width: 100%;
      width: 100%;
      max-height: 100px;
      min-height: 100px;
      padding: 7px;
      outline: none;
      border-radius: 5px;
      border-style: none;
      &:focus {
        border: 2px solid var(--accent-primary);
      }
    }
    label {
      margin-top: 1rem;
    }
    input[type="submit"] {
      margin-top: 2rem;
      cursor: pointer;
      background: var(--accent-primary);
      filter: opacity(0.7);
      color: var(--text-secondary);
      border: none;
      transition: all 300ms;
      border-radius: 1rem;
      &:hover {
        filter: opacity(1);
      }
    }
    
  }

  .or {
    margin-top: 3rem;
  }

  .message-me {
    margin-top: 1rem;
    margin-bottom: 3rem;
    font-size: 2rem;
  }

  .message-me > a {
    font-size: 2rem;
    text-decoration: none;
    color: var(--accent-primary);
    filter: opacity(0.7);
    border-radius: 1rem;
    transition: all 500ms;
  }

  .message-me > a:hover {
    filter: opacity(1);
  }

`;
