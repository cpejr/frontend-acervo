import { createGlobalStyle } from "styled-components";
import { colors, fonts } from "../styles/stylesVariables";

export const GlobalStyles = createGlobalStyle`
  html, body {
    font-family: ${fonts.Cabin};
    font-size: 15px;
    background-color: ${colors.background.primary};
    color: ${colors.font.primary};
    .ant-menu.ant-menu-sub.ant-menu-vertical{
      background-color: #1C1C1C;
    }
    .ant-menu-title-content{
      color: orange;
    }

    .ant-menu-item.ant-menu-item-selected.ant-menu-item-only-child{
      background-color:  #1C1C1C;
    }
    padding: 0;
    margin: 0;
  }
`;
export default GlobalStyles;
