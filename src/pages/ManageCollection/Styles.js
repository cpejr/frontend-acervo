import styled from "styled-components";
import { breakpoints, colors,fonts } from "../../styles/stylesVariables";
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 3rem 0;
  z-index: 0;
`;
export const Title = styled.div`
  color: ${colors.font.title};
  font-size: 36px;
  margin-left: 3%;
  text-decoration: underline ${colors.underline};
  text-underline-offset: 0.5rem;
  text-decoration-thickness: 3px;
  @media (max-width: ${breakpoints.tablet}) {
    font-size: 34px;
  }
  @media (max-width: ${breakpoints.mobile}) {
    font-size: 28px;
    margin-left: 8%;
  }
`;
export const SubTitle = styled.h2`
  width: 100%;
  font-size: 36px;
  font-family: ${fonts.Cabin};
  color: ${colors.font.title};
  margin-left:5%;
  text-decoration: underline ${colors.font.line};
  text-decoration-skip-ink: auto;
  text-underline-offset: 0.5rem;
  text-decoration-thickness: 3px;

  @media (max-width: ${breakpoints.tablet}) {
    font-size: 32px;
    text-underline-offset: 0.5rem;
  }
  @media (max-width: ${breakpoints.mobile}) {
    font-size: 26px;
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
  margin-left: 14.7%;
  z-index: 1;
  margin-top: -110px;
`;
