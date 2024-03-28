import styled from "styled-components";
import { breakpoints, colors } from "../../styles/stylesVariables";
import { MultiSelect } from "primereact/multiselect";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: auto;
  padding-top: 8rem;
  gap: 3rem;

  @media (max-width: 700px) {
    height: auto;
    padding-top: 3rem;
    padding-bottom: 3rem;
    margin-bottom: 3rem;
  }
`;

export const Title = styled.p`
  display: flex;
  align-items: center;
  font-size: 4rem;
  color: ${colors.white};
  font-weight: 600;
  margin: 0;
  margin-left: 5rem;
  text-align: center;

  @media (max-width: 700px) {
    font-weight: 600;
    font-size: 2.5rem;
    line-height: 3.9rem;
    height: 3.9rem;
  }

  @media (max-width: 370px) {
    font-size: 2.5rem;
  }
`;

export const Form = styled.form`
  align-items: center;
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 2rem;
  height: 100%;

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

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  width: 70%;
  height: 100%;
  gap: 2rem;

  @media (max-width: 700px) {
    width: 80%;
  }
`;

export const EventButtons = styled.div`
  display: flex;
  gap: 8px;
`;
export const MultipleSelect = styled(MultiSelect)`
  .p-multiselect-label {
    width: 215px;
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
export const Selects = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  gap: 3rem;
  justify-content: space-around;

  @media (max-width: 850px) {
    flex-direction: column;
    gap: 1rem;
    align-items: center;
  }
`;

export const Table = styled(DataTable)`
  display: flex;
  flex-direction: column;
  margin-top: 1rem;
  align-self: center;
  width: 90%;
  min-height: 70%;
`;
export const TableColumn = styled(Column)`
  display: flex;
  background-color: ${colors.font.primary};
`;
