import styled from "styled-components";
import { colors, breakpoints } from "../../styles/stylesVariables";
import { imageEventNotFound, titleBackground } from "../../assets/index";
import { MultiSelect } from "primereact/multiselect";
import { Dropdown } from "primereact/dropdown";
import { Button } from "antd";
import { Calendar as PrimeCalendar } from "primereact/calendar";


export const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;

  @media (max-width: 700px) {
    height: auto;
    padding-bottom: 3rem;
    margin-bottom: 3rem;
  }
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
 
export const TrendingEvents = styled.div`
  display: flex;
  width: 95%;
  flex-direction: column;
  align-self: center;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  height: auto;
  > h1 {
    font-size: 50px;
  }
`;
export const DivLine = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-self: center;
  align-items: center;
  justify-content: center;
  gap: 2rem;
`;

export const Line = styled.div`
  display: flex;
  width: 90%;
  height: auto;
  flex-direction: row;
  justify-content: space-around;
  gap: 1.5rem;
  flex-wrap: wrap;
`;

export const EventNotFound = styled.div`
  background-image: url(${imageEventNotFound});
  background-size: cover;
  width: 500px;
  height: 500px;
  font-size: 2rem;
  text-align: center;
  @media (max-width: ${breakpoints.smallMobile}) {
    width: 60%;
  }
  @media (max-width: ${breakpoints.smallDevice}) {
    width: 70%;
  }
  @media (max-width: 520px) {
    width: 300px;
    height: 300px;
  }
`;

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
