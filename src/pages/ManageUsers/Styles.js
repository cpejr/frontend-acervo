import styled from "styled-components";
import { breakpoints, colors } from "../../styles/stylesVariables";
import { Select } from "antd";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 3rem 0;
`;
export const Title = styled.div`
  color: ${colors.font.title};
  font-size: 30px;
  margin-left: 5%;
  width: fit-content;
  border-bottom: 2px solid ${colors.font.title};
  @media (max-width: ${breakpoints.tablet}) {
    font-size: 27px;
  }
  @media (max-width: ${breakpoints.smallTablet}) {
    font-size: 25px;
  }
  @media (max-width: ${breakpoints.mobile}) {
    font-size: 24px;
  }
  @media (max-width: ${breakpoints.smallDevice}) {
    font-size: 22px;
  }
`;

export const ProfilePic = styled.img`
  border-radius: 50%;
  width: 50px;
  height: 50px;
`;

export const TypeSelect = styled(Select)`
  width: 70%;

  .ant-select-selector {
    background-color: ${colors.font.primary};
    color: ${colors.font.primary};
    border-radius: 4px;
    border: 2px solid ${colors.background.primary};
    height: 4vh;
    text-align: center;
  }
  .ant-select-dropdown {
    background-color: ${colors.background.secondary};
    color: ${colors.font.primary};
  }
  &:hover {
    border: 2px solid ${colors.font.title};
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

export const LoadingStyles = styled.div`
  display: "block";
  font-size: 24px;
  margin: 20px auto;
`;
