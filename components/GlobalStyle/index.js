import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body, html {
    margin: 0;
    padding: 0;
    font-family: Open-Sans, Helvetica, Sans-Serif;
  }

  * {
    box-sizing: border-box;      
  }

  a {
    text-decoration: underline ;
    :hover {
      color: red;
    }
  }
`;

export default GlobalStyle;
