import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  *,
  &::after,
  &::before {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body {
    height: 100%;
  }

  html {
    font-size: 16px; 
    font-family: "DM Sans", sans-serif;
  }

  body {
    display: flex;
    align-items: center;
    justify-content: center;
    background:#000;
    
  }

  ul, ol {
    padding: 0;
    margin: 0;
    list-style: none;
  }

  a {
    text-decoration: none;
  }

  button {
    outline: none;
    border: none;
    background: none;
  }
`;

export default GlobalStyle;
