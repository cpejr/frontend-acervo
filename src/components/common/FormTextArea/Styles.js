import styled from "styled-components";
import { colors } from "../../../styles/stylesVariables";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  font-style: normal;
  font-weight: 500;
  gap: 0.5rem;

  width: 100%;
`;

export const Label = styled.label`
  color: ${colors.background.primary};
  font-size: 2.4rem;

  @media (max-width: 700px) {
    font-size: 2rem;
  }
  @media (max-width: 370px) {
    font-size: 1.5rem;
  }
`;

export const StyledTextArea = styled.textarea`
  height: 6rem;
  font-size: 20px;
  padding: 0.8rem 1.6rem;
  border-radius: 0.4rem;
  color: ${colors.font.primary};
  background-color: ${colors.background.primary};
  border: ${(props) =>
    props?.error ? "0.1rem yellow solid" : `0.1rem white solid`};
  outline: none;

  @media (max-width: 700px) {
    font-weight: 400;
    line-height: 2rem;
    height: 3rem;
  }
  @media (max-width: 370px) {
    font-size: 1.2rem;
  }
`;

export const ErrorMessage = styled.p`
  font-weight: 400;
  font-size: 1.3rem;
  line-height: 1rem;
  color: ${colors.error};

  @media (max-width: 700px) {
    font-weight: 500;
    font-size: 1.4rem;
    line-height: 1.7rem;
  }

  @media (max-width: 370px) {
    font-size: 1.2rem;
  }
`;
