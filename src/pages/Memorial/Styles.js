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
  color: #eedac5;
  font-size: 30px;
  margin-left: 5%;
  width: 120px;
  border-bottom: 2px solid #eedac5;
  @media (max-width: ${breakpoints.tablet}) {
    font-size: 27px;
    width: 110px;
  }
  @media (max-width: ${breakpoints.smallTablet}) {
    font-size: 25px;
    width: 100px;
  }
  @media (max-width: ${breakpoints.mobile}) {
    font-size: 24px;
    width: 95px;
  }
  @media (max-width: ${breakpoints.smallDevice}) {
    font-size: 22px;
    width: 90px;
  }
`;

export const DivLine = styled.div`
  display: flex;
  flex-direction: column;
  align-self: center;
  align-items: center;
  justify-content: center;
  gap: 2rem;
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

export const Line = styled.div`
  display: flex;
  width: 100%;
  height: auto;
  flex-direction: row;
  justify-content: space-around;
  gap: 2rem;
  flex-wrap: wrap;
`;

export const DivSelect = styled.div`
  display: flex;
  flex-direction: row;
  border-radius: 5px;
  gap:1rem;
  @media (max-width: ${breakpoints.miniTablet}) {
    flex-direction: column;
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
