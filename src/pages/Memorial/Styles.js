import styled from "styled-components";
import { breakpoints, colors } from "../../styles/stylesVariables";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Title = styled.div`
  color: ${colors.font.other};
  font-size: 30px;
  margin-left: 5%;
  width: 60%;
  border-bottom: 1px solid ${colors.font.other};
  @media (max-width: ${breakpoints.tablet}) {
    font-size: 27px;
  }
  @media (max-width: ${breakpoints.smallTablet}) {
    font-size: 25px;
  }
  @media (max-width: ${breakpoints.mobile}) {
    font-size: 24px;
  }
  @media (max-width: ${breakpoints.smallDevice}) {
    font-size: 22px;
  }
`;
