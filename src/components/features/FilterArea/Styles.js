import styled from "styled-components";
import { breakpoints, colors } from "../../../styles/stylesVariables";
import { Button } from "antd";
import { MultiSelect } from "primereact/multiselect";
import { Dropdown } from "primereact/dropdown";
import { Calendar as PrimeCalendar } from "primereact/calendar";

export const ContainerFilter = styled.div`
  margin-left: 5%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 90%;
  flex-direction: column;
  gap: 2rem;
  @media (max-width: ${breakpoints.mobile}) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export const MultipleSelect = styled(MultiSelect)`
  background-color: ${colors.background.primary};
  width: 200px;
  .p-placeholder {
    color: ${colors.font.primary};
  }
  .p-multiselect-label {
    width: 200px;
  }
  &:hover {
    border-color: #f19709;
  }
`;

export const ButtonsDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.2rem;
  margin: 20px;
  padding-bottom:30px;
`;

export const DivSelect = styled.div`
  display: flex;
  justify-content: center;
  color: #808080;
  flex-direction: row;
  align-items: center;
  gap: 1rem;
  @media (max-width: ${breakpoints.smallTablet}) {
    display:grid;
    flex-direction: column;
  }
`;

export const Buttons = styled(Button)`
  border: 1px solid #d1d5db;
  width: 130px;
  margin-left: 10px;
  margin-right: 10px;
  background-color: ${colors.black};
  transition: background-color 0.2s, color 0.2s, border-color 0.2s,
  box-shadow 0.2s;

  @media (max-width: ${breakpoints.tablet}) {
    font-size: 90%;
  }
`;

export const UniSelect = styled(Dropdown)`
  display: flex;
  justify-content: center;
  flex-direction: row;
  align-items: center;
  border-radius: 5px;
  min-width: 200px;
  .p-dropdown-label {
    color: ${colors.font.primary};
  }
  .p-inputtext {
    color: ${colors.font.primary};
    font-size: 14px;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }
  &:hover {
    border-color: #f19709;
  }
`;

export const Calendar = styled(PrimeCalendar)`
  display: flex;
  justify-content: center;
  width:200px;
  .p-inputtext {
    background-color: ${colors.background.primary};
    color: ${colors.font.primary};
    border: solid 1px ${colors.font.primary};
    
    &:hover {
      border: 1px solid ${colors.accent.primary};
      color: ${colors.font.secondary};
    } 
  }
`;
