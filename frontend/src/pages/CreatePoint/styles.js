import styled from "styled-components";

export const Container = styled.div`
  background: #1d976c; /* fallback for old browsers */
  height: 100%auto;
  background: -webkit-linear-gradient(
    to right,
    #93f9b9,
    #1d976c
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to right, #93f9b9, #1d976c);

  h1 {
    border-left: 1px solid #ddd;
    margin: 0 16px;
    padding-left: 16px;
    font-size: 2rem;
  }

  svg {
    cursor: pointer;
    color: #000;

    &:hover {
      color: #333;
    }
  }

  form {
    padding: 32px;
  }

  @media (max-width: 700px) {
    form {
      padding: 16px;
    }
  }
`;

export const MarkerIcon = styled.button`
  border: 0;
  background: none;
  outline: 0 !important;

  img {
    width: 80px;
  }
`;

export const Image = styled.img`
  position: absolute;
  bottom: 0px;
  right: 32px;
  max-width: 600px;
`;
