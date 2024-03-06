import styled from "styled-components";
import { AutoComplete } from "primereact/autocomplete";
import { colors } from "../../../styles/stylesVariables";

export const Input = styled(AutoComplete)`
  margin-top: 30px;
  width: 95%;
  align-self: center;
  .p-autocomplete-input {
    display: flex;
    align-items: center;
    width: 100%;
    height: 3rem;
    background-color: ${colors.background.primary};

    border-radius: 25px;
    border: solid 1px ${colors.font.other};
    padding-left: 10px;
    font-size: 1.2rem;
    margin-bottom: 2rem;
    color: ${colors.font.primary};
    &:focus {
      outline: none;
    }
  }
`;
