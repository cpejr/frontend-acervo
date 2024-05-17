import styled from "styled-components";
import { colors, breakpoints } from "../../styles/stylesVariables";
import { imageEventNotFound, titleBackground } from "../../assets/index";
export const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;

  @media (max-width: 700px) {
    height: auto;
    padding-bottom: 3rem;
    margin-bottom: 3rem;
  }
`;

export const BackgroundTitle = styled.div`
  background-image: url(${titleBackground});
  height: 150px;
  padding-top: 4rem;
`;

export const Title = styled.div`
  color: ${colors.font.title};
  font-size: 36px;
  margin-left: 3%;
  text-decoration: underline ${colors.underline};
  text-underline-offset: 0.5rem;
  text-decoration-thickness: 3px;
  @media (max-width: ${breakpoints.tablet}) {
    font-size: 34px;
  }
  @media (max-width: ${breakpoints.mobile}) {
    font-size: 28px;
    margin-left: 8%;
  }
`;
 
export const TrendingEvents = styled.div`
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
  gap: 1.5rem;
  flex-wrap: wrap;
`;

export const EventNotFound = styled.div`
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
