import styled from "styled-components";

export const ItemSearch = styled.div`
  max-width: 100px;
  height: 100px;
  border-radius: 8px;
  box-shadow: 1px 1px 5px #888;
  padding: 16px;
  cursor: pointer;
  margin: 8px;
  background: #fff;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  -moz-transition: all 0.3s;
  -webkit-transition: all 0.3s;
  transition: all 0.3s;
  object-fit: contain;

  &:hover {
    -moz-transform: scale(1.1);
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
  }

  border: ${props =>
    props.active ? "3px solid var(--color-green)" : "1px solid #eee"};
  img {
    width: 60px;
  }
`;
