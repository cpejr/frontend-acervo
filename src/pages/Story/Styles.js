import styled from "styled-components";
import { breakpoints, colors } from "../../styles/stylesVariables";
import { titleBackground } from "../../assets/index";

export const Container = styled.div`
  padding: 3rem 0;
  display: flex;
  width: 70%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${colors.font.primary};
  gap: 2rem;
  margin: 0 auto;
`;

export const Image = styled.img`
  max-width: 100%;
`;

export const Paragraph = styled.p`
  margin: 0;
`;
export const Legend = styled.p`
  margin: 0;
  font-size: 13px;
`;

export const Title = styled.h1`
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
export const BackgroundTitle = styled.div`
  background-image: url(${titleBackground});
  height: 150px;
  display: flex;
  align-items: center;
`;
