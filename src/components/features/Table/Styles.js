import styled from "styled-components";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { colors } from "../../../styles/stylesVariables";
export const TableShape = styled(DataTable)`
  display: flex;
  flex-direction: column;
  align-self: center;
  width: 90%;

  min-height: 70%;
  color: ${colors.font.primary};
  margin-top: 20px;
`;

export const TableColumn = styled(Column)`
  display: flex;
  align-self: center;
  background-color: ${colors.font.secondary};
  color: ${colors.font.secondary};
  min-width: 200px;
`;
