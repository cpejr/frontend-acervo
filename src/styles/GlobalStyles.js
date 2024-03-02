import { createGlobalStyle } from "styled-components";
import { colors, fonts } from "../styles/stylesVariables";

export const GlobalStyles = createGlobalStyle`
  html, body {
    font-family: ${fonts.Cabin};
    font-size: 15px;
    background-color: ${colors.background.primary};
    color: ${colors.font.primary};

    padding: 0;
    margin: 0;

.p-datatable .p-datatable-tbody > tr > td {
  background-color: ${colors.background.primary}; 
  color: white;
  border-bottom: 0.5px solid ${colors.font.other};
  padding-bottom: 15px;
  font-size: 18px;
  font-weight: bold;
  }  

  .p-dropdown-item {
    background-color: ${colors.background.primary};
    color:${colors.font.secondary};
    text-align: center;
    &:hover {
      background-color: ${colors.font.other};
    }
  }


  }
`;
export default GlobalStyles;
