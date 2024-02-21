import styled from "styled-components";
import { colors, breakpoints } from "../../styles/stylesVariables";
import FirstStoryImage from "../../assets/FirstStoryImage.svg";
import SecondStoryImage from "../../assets/SecondStoryImage.svg";
import ThirdStoryImage from "../../assets/ThirdStoryImage.svg";
export const Container = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 85px;
  margin-bottom: 100px;
  gap: 2rem;
  a {
    border-bottom: 3px solid;
    color: ${colors.font.line};
  }
  h1 {
    font-size: 65px;
    margin-bottom: 0.5px;
    flex-direction: column;
    color: ${colors.font.other};
  }
  p {
    font-size: 40px;
    margin-bottom: 5rem;
    color: ${colors.font.primary};
    padding-left: 15rem;
    padding-right: 12rem;
  }
`;
export const FirstImage = styled.div`
  background-image: url(${FirstStoryImage});
  background-size: cover;
  margin-top: 10rem;
  margin-bottom: 2rem;
  width: 1081.39px;
  height: 694px;
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
export const SecondImage = styled.div`
  background-image: url(${SecondStoryImage});
  background-size: cover;
  margin-top: 2px;
  margin-bottom: 2px;
  width: 1098.09px;
  height: 744px;
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
export const ThirdImage = styled.div`
  background-image: url(${ThirdStoryImage});
  background-size: cover;
  margin-top: 1px;
  margin-bottom: 7rem;
  width: 1098.09px;
  height: 744px;
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
