import styled from "styled-components";

export const Search = styled.div`
  position: relative;
  height: 100vh;
  padding: 32px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: #1d976c; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to right,
    #93f9b9,
    #1d976c
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right,
    #93f9b9,
    #1d976c
  ); /*W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+*/

  img {
    width: 60%;
    align-self: center;
  }

  a {
    height: 52px;
    background: #3f3d56;

    border: none;
    border-radius: 8px;
    transition: 0.5s ease-in-out;
    outline: 0 !important;
    color: #fff;

    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
      background: #2f2e41;
      text-decoration: none;
    }
  }
`;

export const MapStyle = styled.div`
  width: 100%;
  height: 100vh;
  padding: 0;
`;

export const MarkerIcon = styled.button`
  border: 0;
  background: none;
  outline: 0 !important;

  img {
    width: 80px;
  }
`;

export const InputSearch = styled.div`
  width: 100%;
  height: 52px;
  background: #ffff;
  overflow: hidden;
  border: 1px solid #fff;
  border-radius: 8px;
  box-shadow: 1px 1px 5px #888;

  display: grid;
  grid-template-columns: 90% 10%;

  button {
    display: flex;
    border: none;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    border-left: 1px solid #ddd;

    &:hover {
      background: #d9d9d9;
    }
  }

  input {
    border: 0;
    background: #f2f2f2;
    text-indent: 8px;
    outline: none;
  }
`;

export const Hamburguer = styled.div`
  position: absolute;
  top: 24px;
  left: 24px;
  width: 52px;
  height: 52px;
  border-radius: 50%;
  background: var(--color-green);
  color: #fff;
  z-index: 10;
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;
`;
