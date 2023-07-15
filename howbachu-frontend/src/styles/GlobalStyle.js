import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
const GlobalStyle = createGlobalStyle`
    ${reset};
    body{
        padding: 0;
        margin: 0;
        font-family: ‘Noto Sans KR’, sans-serif;
    };
    a{
        text-decoration: none;
        color: inherit;
    }
    *{
        box-sizing: border-box;
    }
    input, textarea {
      -moz-user-select: auto;
      -webkit-user-select: auto;
      -ms-user-select: auto;
      user-select: auto;
    }
    input:focus {
      outline: none;
    }
    button {
      border: none;
      background: none;
      padding: 0;
      cursor: pointer;
    }
    p, div {
      margin: 0;
    }
`;
export default GlobalStyle;