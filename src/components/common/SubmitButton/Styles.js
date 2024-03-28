import styled from "styled-components";
import { breakpoints, colors, fonts } from "../../../styles/stylesVariables";

export const SubmitSpace = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
`;

export const Button = styled.button`
  width: 150rem;
  height: 3rem;
  background-color: ${colors.accent.primary};
  border: solid 1px white;
  border-radius: 6px;
  cursor: pointer;
  font-weight: 500;
  font-size: 1rem;
  color: ${colors.font.primary};

  @media (max-width: ${breakpoints.desktop}) {
    width: 128px;
    height: 40px;
  }
  @media (max-width: ${breakpoints.tablet}) {
    width: 96px;
    height: 30px;
  }

  @media (max-width: ${breakpoints.smallTablet}) {
    width: 86.4px;
    height: 27px;
  }
  @media (max-width: ${breakpoints.mobile}) {
    width: 128px;
    height: 40px;
  }
  &:hover {
    background-color: ${colors.background.primary};
    color: ${colors.font.secondary};
    > p {
      font-weight: 500;
      font-size: 1.5rem;
    }
  }
  p {
    color: ${colors.background.p};
    text-transform: uppercase;
    font-family: ${fonts.Exo2};
    margin: 0;
  }
`;
