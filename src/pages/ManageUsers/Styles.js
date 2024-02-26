import styled from "styled-components";
import { Button as AntdButton } from "antd";
import { breakpoints } from "../../styles/stylesVariables";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Dropdown } from "primereact/dropdown";
import { Modal } from "antd";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;
export const Title = styled.div`
  color: #eedac5;
  font-size: 30px;
  margin-left: 5%;
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

export const Line = styled.line`
  height: 1px;
  width: 50%;
  background-color: #eedac5;
  @media (max-width: ${breakpoints.tablet}) {
    width: 50%;
  }
  @media (max-width: ${breakpoints.smallTablet}) {
    width: 60%;
  }
  @media (max-width: ${breakpoints.mobile}) {
    width: 70%;
  }
  @media (max-width: ${breakpoints.smallDevice}) {
    width: 80%;
  }
`;
export const ProfilePic = styled.img`
  border-radius: 50%;
  width: 50px;
  height: 50px;
`;
export const Table = styled(DataTable)`
  display: flex;
  flex-direction: column;
  align-self: center;
  width: 100%;
  min-height: 70%;
  color: white;
  margin-top: 20px;
`;
export const TableColumn = styled(Column)`
  display: flex;
  align-self: center;
  background-color: black;
  color: black;
`;
export const Select = styled(Dropdown)`
  width: 80%;
  background-color: white;
  color: black;
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
export const ModalStyle = styled(Modal)`
  .ant-modal-content {
    background-color: #f5eff9;
    padding: 1rem;
    align-items: center;
    justify-content: center;
    color: white;
    padding: 6;
    margin: 0;
    border-radius: none;
  }
`;

export const Button = styled(AntdButton)`
  display: flex;
  gap: 3px;
  justify-content: center;
  align-items: center;
  color: white;
  font-weight: bold;
  border-color: white;
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
