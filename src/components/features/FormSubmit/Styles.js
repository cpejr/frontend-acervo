import styled from "styled-components";
import { colors, breakpoints } from "../../../styles/stylesVariables";
import { Dropdown } from "primereact/dropdown";

export const Form = styled.form`
  margin-top: 30px;
  align-items: center;
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 2rem;
  height: 100%;
  box-shadow: none;
  
  @media (max-width: 700px) {
    align-items: center;
    flex-direction: column;
    width: 100%;
    gap: 0%;
  }

  @media (min-width: 1440px) {
    max-width: 144rem;
  }
`;

export const Select = styled(Dropdown)`
  width: 70%;
  background-color: ${colors.font.primary};
  color: ${colors.font.secondary};
  border-radius: 4px;
  border: 2px solid ${colors.background.primary};
  height: 4vh;
  text-align: center;
  border: ${(props) =>
    props?.error ? "0.1rem red solid" : `0.1rem ${colors.font.primary} solid`};
  ::placeholder {
    font-weight: 400;
  }
  .p-multiselect-label {
    width: 215px;
    overflow-x: scroll;
  }
  &:hover {
    border: 2px solid ${colors.font.other};
  }
  @media (max-width: ${breakpoints.tablet}) {
    width: 50%;
  }
  @media (max-width: ${breakpoints.smallTablet}) {
    width: 50%;
  }
  @media (max-width: ${breakpoints.mobile}) {
    width: 33%;
  }
  @media (max-width: ${breakpoints.smallDevice}) {
    width: 50%;
  }
`;
export const ErrorMessage = styled.p`
  font-size: 1.3rem;
  color: pink;
  font-weight: 400;
`;
