import styled from "styled-components";
import { breakpoints, colors } from "../../styles/stylesVariables";
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 3rem 0;
`;
export const Title = styled.div`
  color: ${colors.font.other};
  font-size: 50px;
  margin-left: 5%;
  width: 43%;
  border-bottom: 1px solid ${colors.font.other};
  @media (max-width: ${breakpoints.tablet}) {
    font-size: 30px;
  }
  @media (max-width: ${breakpoints.smallTablet}) {
    font-size: 27px;
  }
  @media (max-width: ${breakpoints.mobile}) {
    font-size: 25px;
    width: 54%;
  }
  @media (max-width: ${breakpoints.smallDevice}) {
    font-size: 25px;
    width: 60%;
  }
`;
export const LoadingStyles = styled.div`
  display: "block";
  font-size: 24px;
  margin: 20px auto;
`;

export const AddArchive = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-left: 13%;
`;
