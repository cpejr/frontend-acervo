import styled from "styled-components";
import { Card, Button } from "antd";
import { breakpoints, colors } from "../../../styles/stylesVariables";

export const StyledCard = styled(Card)`
  display: flex;
  flex-direction: column;
  width: 50%;
  max-width: 60%;
  margin-top: 3rem;
  height: auto;
  align-items: center;
  border-radius: 24px;
  gap: 3.33rem;
  background-color: white;
  margin-bottom: 4rem;
  &:hover {
  }
  @media (max-width: ${breakpoints.miniTablet}) {
    width: 80%;
    max-width: 80%;
  }
  @media (max-width: ${breakpoints.tablet}) {
    width: 70%;
    max-width: 70%;
  }
  @media (max-width: ${breakpoints.mobile}) {
    width: 80%;
    max-width: 80%;
    margin-top: 2rem;
    margin-bottom: 2rem;
  }
`;

export const Image = styled.div`
  display: flex;
  height: auto;
  width: 100%;
  cursor: pointer;
  > img {
    width: 100%;
    height: 14rem;
    border-radius: 1rem;
    @media (max-width: ${breakpoints.miniTablet}) {
      height: 12rem;
    }
  }
`;

export const CardLine = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: auto;
  font-size: 30px;
  color: ${colors.font.secondary};
  cursor: pointer;
  @media (max-width: ${breakpoints.miniTablet}) {
    font-size: 24px;
  }
`;

export const LineSVG = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: end;
  align-items: center;
  > svg {
    cursor: pointer;
    font-size: 30px;
    @media (max-width: ${breakpoints.miniTablet}) {
      font-size: 24px;
    }
  }
`;

export const Group = styled.div`
  display: flex;
  flex-direction: row;
  font-size: 17.5px;
  @media (max-width: ${breakpoints.miniTablet}) {
    font-size: 15.75px;
  }
`;

export const ButtonDiv = styled.div`
  display: flex;
  width: 100%;
  align-content: center;
  justify-content: flex-end;
`;

export const OrangeButton = styled(Button)`
  width: 10rem;
  height: 3rem;
  background-color: ${colors.accent};
  border: none;
  margin-top: 1rem;
  border-radius: 10px;
  @media (max-width: ${breakpoints.miniTablet}) {
    width: 12rem;
    height: 2.25rem;
  }

  &:hover {
    background-color: blue;
  }
`;
