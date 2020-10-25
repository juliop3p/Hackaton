import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  :root {
    --color-green: #04D361;
  }

* {
  margin: 0;
  padding: 0;
  outline: 0!important;
  box-sizing: border-box;
}

html, body, #root {
  height: 100vh;
}
`;

export default GlobalStyle;
