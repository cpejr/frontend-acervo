import styled from "styled-components";
//import { Button } from "antd";
import { Modal } from "antd";
import { colors } from "../../../../styles/stylesVariables";
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${colors.modals.background};
  width: 100%;
  height: 100%;
`;

export const Message = styled.h1`
  font-size: 2.1rem;
  text-align: center;
  margin: 1.4rem;
  color: ${colors.font.secondary};
  @media (max-width: 375px) {
    font-size: 1.5rem;
    margin: 1rem;
  }
`;

export const ModalStyle = styled(Modal)`
  .ant-modal-content {
    background-color: ${colors.modals.background};
    padding: 1rem;
    align-items: center;
    justify-content: center;
    color: ${colors.font.primary};
    padding: 6;
    margin: 0;
    border-radius: none;
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