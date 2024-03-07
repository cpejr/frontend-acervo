import styled from "styled-components";
import { breakpoints } from "../../../../styles/stylesVariables";
import { Menu } from "antd";

export const Container = styled.div`
  height: 6rem;
  max-width: 100%;
  display: flex;
  background-color: black;
  align-items: center;
  justify-content: space-evenly;
`;

export const City = styled.img`
  width: 50px;
  display: flex;
  @media (max-width: ${breakpoints.mobile}) {
    display: none;
  }
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
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
  padding: 10px;
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

export const HamburgerMenu = styled(Menu)`
  width: 0rem;
  border-bottom: none;
  background-color: black;
  @media (max-width: ${breakpoints.mobile}) {
    width: 6rem;
  }
  .ant-menu-title-content {
    color: orange;
  }

  .antd-menu {
    background-color: #1c1c1c;
  }
`;
