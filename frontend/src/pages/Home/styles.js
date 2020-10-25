import styled from "styled-components";

export const ButtonsContainer = styled.div`
  a {
    width: 30rem;
    height: 102px;
    border-radius: 0.8rem;
    padding: 0.8rem;
    margin-right: 1.6rem;
    font: 700 2rem "Lato";
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    color: #fff;
    transition: background-color 0.2s;
    border: none;
  }
  a svg {
    margin-right: 2.4rem;
  }
  a:nth-child(1) {
    background: var(--color-green);
  }
  a:nth-child(2) {
    background: blue;
  }
  a:nth-child(1):hover {
    opacity: 0.8;
  }
  a:nth-child(2):hover {
    opacity: 0.8;
  }
`;
