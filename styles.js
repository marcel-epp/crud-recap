import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  body {
    max-width: 1000px;
    margin: 20px auto;
    font-family: system-ui;
  }
`;
