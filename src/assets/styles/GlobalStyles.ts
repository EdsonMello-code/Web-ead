import { createGlobalStyle } from "styled-components";

const GlobalStyles  = createGlobalStyle`
  :root {
    font-size: 62.5%;
    color: #FFF
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body, #root {
    background-color: #121214;
    color: #FFF;
  }

  a {
    color: #FFF;
    text-decoration: none;
  }
`;

export default GlobalStyles; 