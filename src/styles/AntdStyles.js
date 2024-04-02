import { createGlobalStyle } from "styled-components";
import { colors, font } from "../styles/stylesVariables";

export const HamburguerMenuStyles = createGlobalStyle`

.ant-menu-light.ant-menu-submenu-popup>.ant-menu{
    background-color: ${colors.background.menu};
  }
  .ant-menu-light>.ant-menu .ant-menu-item-selected{
    background-color: ${colors.background.menu};
  }
  .ant-menu-light>.ant-menu .ant-menu-item-selected{
    color:${colors.font.primary};
  }
`;
