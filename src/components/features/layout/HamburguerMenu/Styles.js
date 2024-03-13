import { Menu } from "antd";
import styled from "styled-components";
import { breakpoints } from "../../../../styles/stylesVariables";

export const Hamburguer = styled(Menu)`
  width: 0rem;
  border-bottom: none;
  background-color: black;
  @media (max-width: ${breakpoints.mobile}) {
    width: 6rem;
  }
`;
