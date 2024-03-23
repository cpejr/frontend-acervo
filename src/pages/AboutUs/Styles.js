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
  text-align: center;
`;

export const Title = styled.h1`
  color: ${colors.font.title};
  text-decoration: underline ${colors.underline};
  text-decoration-skip-ink: auto;
  text-underline-offset: 1.3rem;
  text-decoration-thickness: 3px;
  align-self: flex-start;
  @media (max-width: ${breakpoints.tablet}) {
    font-size: 40px;
  }
  @media (max-width: ${breakpoints.smallTablet}) {
    align-self: center;
  }
  @media (max-width: ${breakpoints.smallDevice}) {
    font-size: 30px;
  }
`;

export const Line = styled.div`
  display: flex;
  flex-direction: row;
  width: 90%;
  flex-basis: 50%;
  gap: 3rem;
  height: 10rem;
  @media (max-width: ${breakpoints.smallTablet}) {
    flex-direction: column;
    align-items: center;
  }
`;
export const ImageLine = styled.div`
  display: flex;
  flex-direction: row;
  width: 90%;
  flex-basis: 50%;
  gap: 3rem;
  @media (max-width: ${breakpoints.smallTablet}) {
    flex-direction: column-reverse;
    align-items: center;
  }
`;
export const TextColumn = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  height: 10%;
  > img {
    width: 100%;
    height: 50%;
    border: 6px solid ${colors.font.primary};
    border-bottom-width: 12px;
    @media (max-width: ${breakpoints.smallTablet}) {
      border-color: ${colors.font.secondary};
    }
  }
  > p {
    color: ${colors.font.primary};
    text-align: justify;
  }
  @media (max-width: ${breakpoints.smallTablet}) {
    width: 100%;
    flex-direction: row;
  }
`;
export const PintaColumn = styled.div`
  display: flex;
  flex-direction: column;
  width: 30%;
  height: 10%;
  > img {
    width: 100%;
    height: 50%;
    border: 6px solid ${colors.font.primary};
    border-bottom-width: 12px;
    @media (max-width: ${breakpoints.smallTablet}) {
      border-color: ${colors.font.secondary};
    }
  }
  > p {
    color: ${colors.font.primary};
    text-align: justify;
  }
  @media (max-width: ${breakpoints.smallTablet}) {
    width: 100%;
    flex-direction: row;
  }
`;
export const TextPintaColumn = styled.div`
  display: flex;
  flex-direction: column;
  width: 70%;
  > img {
    width: 100%;
    height: 50%;
    border: 6px solid ${colors.font.primary};
    border-bottom-width: 12px;
    @media (max-width: ${breakpoints.smallTablet}) {
      border-color: ${colors.font.secondary};
    }
  }
  > p {
    color: ${colors.font.primary};
    text-align: justify;
  }
  @media (max-width: ${breakpoints.smallTablet}) {
    width: 100%;
    flex-direction: row;
  }
`;
export const Banner = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  > p {
    font-size: 30px;
    color: ${colors.font.primary};
    width: 80%;
    text-align: center;
    @media (max-width: ${breakpoints.desktop}) {
      font-size: 25px;
    }
  }
`;
export const TextLine = styled.div`
  display: flex;
  flex-direction: row;
  width: 90%;
`;
