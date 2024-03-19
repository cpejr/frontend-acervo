import styled from "styled-components";
import { breakpoints, colors, fonts } from "../../../../styles/stylesVariables";
import { Modal } from "antd";

export const Container = styled.div`
  height: 5rem;
  width: 100%;

  display: flex;
  background-color: black;
  align-items: center;
  justify-content: space-evenly;
`;

export const LoadingStyles = styled.div`
  display: "block";
  font-size: 24px;
`;

export const LoginSocial = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 20%;
  min-width: 15rem;
  @media (max-width: ${breakpoints.tablet}) {
    width: 17rem;
    min-width: 0;
  }
  @media (max-width: ${breakpoints.smallTablet}) {
    width: 10rem;
  }
`;

export const LoginButton = styled.button`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 12rem;
  height: 45px;
  border: 1px solid;
  border-radius: 10px;
  color: ${colors.accent.primary};
  background-color: ${colors.background.secondary};
  font-family: ${fonts.Cabin};
  font-weight: 400;
  word-wrap: break-word;
  font-size: 1rem;
  img {
    width: 20%;
    border-radius: 50%;
  }

  &:hover {
    cursor: pointer;
  }
  @media (max-width: ${breakpoints.tablet}) {
    width: 10rem;
  }
  @media (max-width: ${breakpoints.mobile}) {
    width: 10rem;
    height: 40px;
  }
  @media (max-width: ${breakpoints.smallDevice}) {
    width: 7rem;
    font-size: 0.8rem;
  }
`;
export const ModalStyle = styled(Modal)`
  .ant-modal-content {
    background-color: ${colors.background.primary};
    padding: 1rem;
    align-items: center;
    justify-content: center;
    color: ${colors.white};
    padding: 6;
    margin: 0;
    border-radius: none;
  }
`;
