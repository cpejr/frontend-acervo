import styled from "styled-components";
import { breakpoints, colors } from "../../styles/stylesVariables";
import { Dropdown } from "primereact/dropdown";
import { Checkbox } from "primereact/checkbox";
import { titleBackground } from "../../assets/index";

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
  width: 100%;
  align-self: center;
  align-items: center;
  justify-content: center;
  gap: 2rem;
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

export const Filter = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-evenly;
  margin-top:10px;
  @media (max-width: ${breakpoints.smallMobile}) {
    flex-direction:column;
    justify-content: center;
    align-items:center
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
`;

export const VerticalLine = styled.div`
  border-left: 2px solid white;
  height: 10rem;
  @media (max-width: ${breakpoints.smallMobile}) {
    display:none;
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

export const UniSelect = styled(Dropdown)`
  gap: 1rem;
  display: flex;
  justify-content: center;
  flex-direction: row;
  align-items: center;
  border-radius: 5px;
  width:200px;
  .p-dropdown-label {
    color: ${colors.font.primary};
    width: 100%;
  }
  .p-inputtext {
    color: ${colors.font.primary};
    font-size: 14px;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }
  @media (max-width: ${breakpoints.smallMobile}) {
    margin-top: 40px;
  }
`;
export const LoadingStyles = styled.div`
  display: "block";
  font-size: 24px;
  margin: 20px auto;
`;
