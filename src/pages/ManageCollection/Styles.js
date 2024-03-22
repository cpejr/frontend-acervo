import styled from "styled-components";
import { breakpoints, colors } from "../../styles/stylesVariables";
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 3rem 0;
`;
export const Title = styled.div`
  color: ${colors.font.title};
  font-size: 30px;
  margin-left: 5%;
  width: fit-content;
  border-bottom: 2px solid ${colors.font.title};
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
