import styled from "styled-components";
import { breakpoints, colors } from "../../styles/stylesVariables";
import { Dropdown } from "primereact/dropdown";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;
export const Title = styled.div`
  color: ${colors.font.other};
  font-size: 30px;
  margin-left: 5%;
  width: 60%;
  border-bottom: 1px solid ${colors.font.other};
  @media (max-width: ${breakpoints.tablet}) {
    font-size: 27px;
  }
  @media (max-width: ${breakpoints.smallTablet}) {
    font-size: 25px;
  }
  @media (max-width: ${breakpoints.mobile}) {
    font-size: 24px;
  }
  @media (max-width: ${breakpoints.smallDevice}) {
    font-size: 22px;
  }
`;

export const ProfilePic = styled.img`
  border-radius: 50%;
  width: 50px;
  height: 50px;
`;

export const Select = styled(Dropdown)`
  width: 70%;
  background-color: ${colors.font.primary};
  color: ${colors.font.secondary};
  border-radius: 4px;
  border: 2px solid ${colors.background.primary};
  height: 4vh;
  text-align: center;
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

export const LoadingStyles = styled.div`
  display: "block";
  font-size: 24px;
  margin: 20px auto;
`;
