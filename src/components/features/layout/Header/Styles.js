import styled from "styled-components";
import { breakpoints } from "../../../../styles/stylesVariables";

export const Container = styled.div`
  height: 7rem;
  max-width: 100%;
  display: flex;
  background-color: black;
  align-items: center;
  justify-content: space-evenly;
  @media (max-width: ${breakpoints.smallDevice}) {
    justify-content: space-between;
  }
`;

export const City = styled.img`
  width: 50px;
  display: flex;
  margin-left: 4rem;
  @media (max-width: ${breakpoints.smallDevice}) {
    margin-left: 0;
  }
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding-left: 15px;
  padding-right: 0;
  border-left: 2px solid white;
  @media (max-width: ${breakpoints.mobile}) {
    border-left: none;
  }
`;

export const SocialMedias = styled.div`
  display: flex;
  gap: 10px;
  justify-content: center;
  @media (max-width: ${breakpoints.mobile}) {
    display: none;
  }
`;

export const Button = styled.button`
  background-color: black;
  color: orange;
  padding: 7px;
  border: 1px solid orange;
  border-radius: 5px;
  width: 60%;
  justify-content: space-evenly;
  margin-left: 20%;
  display: flex;
  align-items: center;
  @media (max-width: ${breakpoints.mobile}) {
    width: 110%;
  }
`;
