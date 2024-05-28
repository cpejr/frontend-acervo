import styled from "styled-components";
import { ProgressSpinner } from "primereact/progressspinner";
import { breakpoints } from "../../styles/stylesVariables";
import { imageEventNotFound } from "../../assets";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Spinner = styled(ProgressSpinner)``;

export const TrendingEvents = styled.div`
  display: flex;
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
  @media (max-width: ${breakpoints.smallDevice}) {
    width: 100%;
  }
`;

export const NotFound = styled.div`
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
