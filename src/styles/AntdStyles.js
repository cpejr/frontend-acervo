import { createGlobalStyle } from "styled-components";
import { colors, fonts } from "../styles/stylesVariables";

export const AntdStyles = createGlobalStyle`
    .ant-menu.ant-menu-sub.ant-menu-vertical{
      background-color: ${colors.menu.background};
    }
    .ant-menu-title-content{
      color: ${colors.menu.font};
    }

    .ant-menu-item.ant-menu-item-selected.ant-menu-item-only-child{
      background-color:  ${colors.menu.background};
    }`;
export default AntdStyles;
