import styled from "styled-components";
import { Button as AntdButton } from "antd";
import { breakpoints, colors } from "../../styles/stylesVariables";
// import { DataTable } from "primereact/datatable";
// import { Column } from "primereact/column";
import { Dropdown } from "primereact/dropdown";
import { AutoComplete } from "primereact/autocomplete";

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
// export const Table = styled(DataTable)`
//   display: flex;
//   flex-direction: column;
//   align-self: center;
//   width: 90%;

//   min-height: 70%;
//   color: ${colors.font.primary};
//   margin-top: 20px;
// `;

// export const TableColumn = styled(Column)`
//   display: flex;
//   align-self: center;
//   background-color: ${colors.font.secondary};
//   color: ${colors.font.secondary};
//   min-width: 200px;
// `;

export const Select = styled(Dropdown)`
  width: 80%;
  background-color: ${colors.font.primary};
  color: ${colors.font.secondary};
  border-radius: 3px;
  height: 4vh;
  .p-multiselect-label {
    width: 215px;
    overflow-x: scroll;
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

export const Button = styled(AntdButton)`
  display: flex;
  gap: 3px;
  justify-content: center;
  align-items: center;
  color: ${colors.font.primary};
  font-weight: bold;
  border-color: ${colors.font.primary};
  width: 15%;
  align-self: center;
  @media (max-width: ${breakpoints.tablet}) {
    font-size: smaller;
  }
  @media (max-width: 380px) {
    font-size: 0.6rem;
  }
  > svg {
    font-size: larger;
  }
`;
export const SearchBar = styled(AutoComplete)`
  margin-top: 30px;
  width: 95%;
  align-self: center;
  .p-autocomplete-input {
    display: flex;
    align-items: center;
    width: 100%;
    height: 7vh;
    background-color: ${colors.background.primary};

    border-radius: 25px;
    border: solid 1px ${colors.font.other};
    padding-left: 10px;
    font-size: 1.5rem;
    margin-bottom: 2rem;
    color: ${colors.font.primary};
  }
`;
