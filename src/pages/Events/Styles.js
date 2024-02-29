import { SearchOutlined } from "@ant-design/icons";
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
export const OrderBox = styled.div`
  display: flex;
  border: 2px solid #ccc;
  border-radius: 5px;
  align-items: center;
  justify-content: space-between;
  height: auto;
  width: 10%;
`;
export const Title = styled.div`
  display: flex;
  color: #f19709;
  padding-bottom: 1rem;
`;
export const StyledCheckbox = styled.input`
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
export const SelectModal = styled.select`
  display: flex;
  background-color: white;
  color: black;
  width: 3vw;
  border: 1px solid white;
  height: 1.5rem;
  overflow-y: auto;
`;
