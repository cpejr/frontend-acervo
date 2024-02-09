import { createGlobalStyle } from "styled-components";
import { colors, fonts } from "../styles/stylesVariables";

export const GlobalStyles = createGlobalStyle`
  html, body {
    font-family: ${fonts.Cabin};
    font-size: 10px;
    background-color: ${colors.background.background1};
    color: ${colors.white};

    padding: 0;
    margin: 0;
  }
`;
export default GlobalStyles;
