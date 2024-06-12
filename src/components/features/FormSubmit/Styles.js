import styled from "styled-components";
import { breakpoints } from "../../../styles/stylesVariables";
import { MultiSelect } from "primereact/multiselect";
import { Calendar as PrimeCalendar } from "primereact/calendar";

export const Form = styled.form`
  margin: 30px 0;
  align-items: center;
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 2rem !important;
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
  font-size: 1.3rem;
  width: 70%;
  background-color: inherit;
  color: ${(props) => props?.selectColor};
  border-radius: 4px;
  height: 6.5vh;
  text-align: left;
  border: ${(props) =>
    props?.error ? "0.1rem red solid" : `0.1rem ${props?.selectColor} solid`};

  .p-multiselect-label {
    width: 215px;
    overflow-x: hidden;
  }
  .p-placeholder {
    color: ${(props) => props?.selectColor};
  }
  @media (max-width: ${breakpoints.mobile}) {
    font-size: 1rem;
  }
  &:hover {
    border-color: #f19709;
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
export const Calendar = styled(PrimeCalendar)`
  display: flex;
  justify-content: center;
  width: 260px;
  .p-inputtext {
    color: ${(props) => props?.selectColor};

    border: solid 1px ${(props) => props?.selectColor};
    background-color: inherit;
    cursor: pointer;
    align-items: center;
    &:hover {
      border-color: #f19709;
    }
    &::placeholder {
      color: ${(props) => props?.selectColor};
    }
  }
  @media (max-width: ${breakpoints.tablet}) {
    width: 50%;
  }
  @media (max-width: ${breakpoints.smallTablet}) {
    width: 50%;
  }
  @media (max-width: ${breakpoints.mobile}) {
    display: flex;
    flex-direction: row;
    width: 33%;
  }
  @media (max-width: ${breakpoints.smallDevice}) {
    width: 50%;
  }
`;
