import styled from "styled-components";
import { colors } from "../../../styles/stylesVariables";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  font-style: normal;
  font-weight: 500;

  width: 100%;
`;

export const StyledInput = styled.input`
  width: 70%;
  height: 2rem;
  padding: 0.8rem 1.6rem;
  border-radius: 0.4rem;
  color: ${colors.font.secondary};
  font-size: 20px;
  background-color: inherit;
  padding-right: 25px;
  background: url(${(props) => props?.icon}) no-repeat;
  background-size: 40px;
  background-position: 95%;
  border: ${(props) =>
    props?.error ? "0.1rem red solid" : `0.1rem ${props?.color} solid`};
  ::placeholder {
    color: ${colors.font.secondary};
  }
  @media (max-width: 700px) {
    margin-bottom: 20px;
  }
`;
export const IconContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  svg {
    position: absolute;
    right: 15%;
    display: flex;
    @media (max-width: 700px) {
      margin-bottom: 20px;
    }
  }
`;
