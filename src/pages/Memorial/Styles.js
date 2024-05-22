import styled from "styled-components";
import { breakpoints, colors } from "../../styles/stylesVariables";
import { Dropdown } from "primereact/dropdown";
import { Checkbox } from "primereact/checkbox";
import { Button } from "antd";
import { titleBackground } from "../../assets/index";
import { Calendar as PrimeCalendar } from "primereact/calendar";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;


export const BackgroundTitle = styled.div`
  background-image: url(${titleBackground});
  height: 150px;
  padding-top: 4rem;
`;

export const Title = styled.div`
  color: ${colors.font.title};
  font-size: 36px;
  margin-left: 3%;
  text-decoration: underline ${colors.underline};
  text-underline-offset: 0.5rem;
  text-decoration-thickness: 3px;
  @media (max-width: ${breakpoints.tablet}) {
    font-size: 34px;
  }
  @media (max-width: ${breakpoints.mobile}) {
    font-size: 28px;
    margin-left: 8%;
  }
`;

export const ContainerFilter = styled.div`
  display: flex;
  flex-direction: column;
  align-self:center;
  gap: 2rem;
  @media (max-width: ${breakpoints.smallTablet}) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;
export const Characteristics = styled.div`
  display: flex;
  flex-direction: column;
  > label {
    align-items: center;
    display: flex;
    gap: 0.5rem;
    padding-top: 0.3rem;
    color: #eedac5;
  }
  @media (max-width: ${breakpoints.tablet}) {
    justify-self:center;
    margin-bottom:20px;
  }
`;
export const VerticalLine = styled.div`
  border-left: 2px solid white;
  height: 10rem;
  @media (max-width: ${breakpoints.smallTablet}) {
    display: none;
  }
`;
export const FilterTitle = styled.div`
  display: flex;
  color: ${colors.accent};
  padding-bottom: 1rem;
  @media (max-width: ${breakpoints.smallMobile}) {
    padding-bottom: 10px;
  }
`;
export const StyledCheckbox = styled(Checkbox)`
  width: 20px;
  height: 20px;
  border: 2px solid ${colors.darkwhite};
  border-radius: 5px;
  justify-content: center;
`;
export const DivSelect = styled.div`
  display: flex;
  flex-direction: row;
  border-radius: 5px;
  gap:1rem;
  @media (max-width: ${breakpoints.tablet}) {
    display:grid;
    flex-direction: column-reverse;
    justify-content:center;
  }
`;
export const UniSelect = styled(Dropdown)`

  width:200px;
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
export const Buttons = styled(Button)`
  border: 1px solid #d1d5db;
  width: 130px;
  margin-inline: 10px;
  background-color: ${colors.black};
  transition: background-color 0.2s, color 0.2s, border-color 0.2s,
    box-shadow 0.2s;

  @media (max-width: ${breakpoints.tablet}) {
    font-size: 90%;
  }
`;

export const OrangeButton = styled(Button)`
  width: 7.5rem;
  height: 2.5rem;
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

export const ButtonsDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content:center;
  gap: 0.2rem;
  margin-bottom:20px;
`;
export const LoadingStyles = styled.div`
  display: "block";
  font-size: 24px;
  margin-inline: auto;
`;

export const Filter = styled.div`
  display: flex;
  flex-direction:row;
  justify-content:space-evenly;
  margin-bottom:50px;

  @media (max-width: ${breakpoints.smallTablet}) {
    flex-direction:column;
    justify-content:center;
    align-items:center;
  }
`;

export const DivLine = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Line = styled.div`
  display:flex;
  justify-content:center;
  width: 100%;
`;