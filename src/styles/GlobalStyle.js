import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import "./Font.css";

const GlobalStyle = createGlobalStyle`
    ${reset};
    body{
      padding: 0;
      margin: 0;
      font-family: 'Inter', sans-serif;
      background-color: ${({ theme }) => theme.colors.BG_PURPLE};
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
      background-color: transparent;
      &:focus{
        outline: none;
      }
    }
    button {
      border: none;
      background: none;
      margin: 0;
      padding: 0;
      cursor: pointer;
    }
    p, div {
      margin: 0;
      padding: 0;
    }
    img {
      margin: 0;
      padding: 0;
    }
`;
export default GlobalStyle;
