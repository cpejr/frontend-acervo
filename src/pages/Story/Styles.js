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
  gap: 2 rem;
  h1 {
    font-size: 4rem;
    margin-bottom: 1rem;
    flex-direction: column;
    color: ${colors.font.other};
  }
  p {
    font-size: 2rem;
    margin-bottom: 5rem;
    color: ${colors.font.primary};
  }
`;
export const FirstImage = styled.div`
  background-image: url(${FirstStoryImage});
  background-size: cover;
  margin-top: 200px;
  margin-bottom: 100px;
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
