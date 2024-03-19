import styled from "styled-components";
import { breakpoints, colors } from "../../styles/stylesVariables";
export const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  gap: 2rem;
  overflow: hidden;
  align-items: center;
`;

export const Title = styled.h1`
  font-size: 50px;
  color: ${colors.font.primary};
  text-decoration: underline ${colors.underline};
  text-decoration-skip-ink: auto;
  text-underline-offset: 1.3rem;
  text-decoration-thickness: 3px;
  align-self: flex-start;
`;

export const Line = styled.div`
  display: flex;
  flex-direction: row;
  width: 90%;
  height: 30rem;
  gap: 3rem;
`;
export const TextColumn = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  > img {
    width: 100%;
    height: 100%;
  }
  > p {
    font-size: 40px;
    color: ${colors.font.primary};
    text-align: justify;
    @media (max-width: ${breakpoints.desktop};) {
    }
  }
`;

export const Banner = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  > p {
    font-size: 40px;
    color: ${colors.font.primary};
    width: 80%;
    text-align: center;
  }
`;
export const TextLine = styled.div`
  display: flex;
  flex-direction: row;
  width: 90%;
  > p {
    font-size: 40px;
    color: ${colors.font.primary};
  }
`;
