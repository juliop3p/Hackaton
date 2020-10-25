import styled from "styled-components";

export const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: #0005;
  z-index: 10;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ModalMarket = styled.div`
  max-width: 800px;
  width: 100%;
  height: 600px;

  background: #fff;
  border-radius: 8px;
  padding: 16px 16px 32px 16px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  div {
    display: flex;
    align-items: flex-end;
    justify-content: flex-end;

    svg {
      cursor: pointer;
    }
  }

  div + div {
    height: 200px;
    margin: 16px 0;
    border-radius: 8px;
    background-position: center;
    background-size: cover;
  }

  strong {
    font-size: 24px;
  }
`;

export const Labels = styled.span`
  strong {
    font-size: 16px;
  }

  span {
    background: var(--color-green);
    padding: 4px 8px;
    margin: 0 8px;
    border-radius: 12px;
    color: #fff;
    font-weight: bold;
  }
`;
