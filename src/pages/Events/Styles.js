import { SearchOutlined } from "@ant-design/icons";
import { Dropdown } from "primereact/dropdown";
import { Checkbox } from "primereact/checkbox";
export const Container = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 85px;
  margin-bottom: 100px;
  gap: 2rem;

  @media (max-width: 600px) {
    h1 {
      font-size: 3rem;
    }
    h2 {
      font-size: 1.2rem;
    }
  }
  @media (max-width: 600px) {
    h1 {
      font-size: 2.7rem;
    }
    h2 {
      font-size: 1.1rem;
      text-align: center;
    }
  }
`;
export const RotateSearch = styled(SearchOutlined)`
  transform: rotate(90deg);
`;
export const IconWrapper = styled.div`
  width: 80%;
  height: 3rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.5rem;
  border: 2px solid white;
  border-radius: 20px;
  @media (max-width: 600px) {
    width: 60%;
  }
  @media (max-width: 600px) {
    width: 70%;
  }
`;
export const SVGDiv = styled.div`
  display: flex;
  width: 3%;
  padding-left: 1.3%;
  > span {
    > svg {
      font-size: 1.7rem;
      @media (max-width: 600px) {
        font-size: 1.5rem;
      }

      @media (max-width: 600px) {
        font-size: 1.3rem;
      }
    }
  }
  @media (max-width: 600px) {
    width: 10%;
  }
  @media (max-width: 600px) {
    width: 13%;
  }
`;
import styled from "styled-components";
export const TrendingTools = styled.div`
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
  gap: 2rem;
  flex-wrap: wrap;
`;
export const Filter = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-evenly;
`;
export const Characteristics = styled.div`
  display: flex;
  flex-direction: column;
  > label {
    align-items: center;
    display: flex;
  }
`;
export const Prices = styled.div`
  display: flex;
  flex-direction: column;
  > label {
    align-items: center;
    display: flex;
  }
`;
export const VerticalLine = styled.div`
  border-left: 2px solid white;
  height: 10rem;
`;
export const Title = styled.div`
  display: flex;
  color: #f19709;
  padding-bottom: 1rem;
`;
export const StyledCheckbox = styled.div`
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  width: 20px;
  height: 20px;
  border: 2px solid #ccc;
  border-radius: 5px;
  cursor: pointer;
  &:checked {
    background-color: #ccc;
  }
`;
export const DivSelect = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  align-items: center;
  border: 2px solid white;
  border-radius: 5px;
  width: 10%;
  @media (max-width: 600px) {
    width: 40%;
  }
  @media (max-width: 600px) {
    flex-direction: column;
    width: 20%;
  }
`;
export const UniSelect = styled(Dropdown)`
  gap: 1rem;
  .p-dropdown-label {
    color: white;
    width: 100%;
  }
  .p-inputtext {
    color: white;
  }
  @media (max-width: 600px) {
    width: 30%;
  }
  @media (max-width: 500px) {
    width: 20%;
  }
`;
