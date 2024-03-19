import styled from "styled-components";
import { breakpoints } from "../../../../styles/stylesVariables";
import { Menu } from "antd";

export const Container = styled.div`
  height: 7rem;
  max-width: 100%;
  display: flex;
  background-color: black;
  align-items: center;
  justify-content: space-evenly;
`;

export const City = styled.img`
  width: 50px;
  display: flex;
  margin-left: 3rem;
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
  @media (max-width: ${breakpoints.smallTablet}) {
    border-left: 0;
  }
`;

export const SocialMedias = styled.div`
  display: flex;
  gap: 10px;
  justify-content: center;
  @media (max-width: ${breakpoints.smallTablet}) {
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
  padding-left: 0;
  @media (max-width: ${breakpoints.smallTablet}) {
    width: 110%;
    margin-left: 0;
  }
`;

export const Hamburguer = styled(Menu)`
  width: 0rem;
  border-bottom: none;
  background-color: black;
  @media (max-width: ${breakpoints.smallTablet}) {
    width: 6rem;
  }
  @media (max-width: ${breakpoints.smallDevice}) {
    width: 4rem;
  }
`;
