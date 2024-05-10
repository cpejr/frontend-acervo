import styled from "styled-components";
import { colors, breakpoints } from "../../../styles/stylesVariables";
import { MultiSelect } from "primereact/multiselect";

export const Form = styled.form`
  margin: 30px 0;
  align-items: center;
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 2rem !important;
  height: 100%;
  box-shadow: none;
  z-index: 0;
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

export const Select = styled(MultiSelect)`
  width: 40%;
  background-color: ${colors.font.primary};
  color: ${colors.font.secondary};
  border-radius: 4px;
  border: 2px solid ${colors.background.primary};
  height: 5vh;
  text-align: left;
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
    width: 70%;
  }
  @media (max-width: ${breakpoints.smallDevice}) {
    width: 60%;
  }
`;
export const ErrorMessage = styled.p`
  font-size: 1.3rem;
  margin: 0px;
  color: pink;
  font-weight: 400;
  text-align: center;
  margin-top: 10px;
`;
export const InputKeep = styled.div`
  width: 100%;
`;
export const Selects = styled.div`
  display: flex;
  flex-direction: row;
  width: 70%;
  gap: 10rem;
  justify-content: space-around;

  @media (max-width: 850px) {
    flex-direction: column;
    gap: 1rem;
    align-items: center;
  }
`;
