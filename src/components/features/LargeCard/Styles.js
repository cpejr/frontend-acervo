import styled from "styled-components";
import { Card } from "antd";
import { breakpoints, colors } from "../../../styles/stylesVariables";

export const StyledCard = styled(Card)`
  display: block;
  flex-direction: column;
  width: 50%;
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

export const CardTitle = styled.div`
  margin-top: 1rem;
  align-items: center;
  font-size: 30px;
  color: ${colors.font.secondary};
  @media (max-width: ${breakpoints.miniTablet}) {
    font-size: 24px;
  }
`;

export const ShortDesc = styled.div`
  font-size: 20px;
  color: ${colors.font.secondary};
  word-break: break-word;
  @media (max-width: ${breakpoints.miniTablet}) {
    font-size: 18px;
  }
`;

export const LongDesc = styled.div`
  font-size: 15px;
  color: ${colors.font.secondary};
  word-break: break-word;
  @media (max-width: ${breakpoints.miniTablet}) {
    font-size: 13px;
  }
`;

export const LinkDesc = styled.div`
  font-size: 15px;
  color: ${colors.font.secondary};
  word-break: break-word;
  @media (max-width: ${breakpoints.miniTablet}) {
    font-size: 13px;
  }
`;