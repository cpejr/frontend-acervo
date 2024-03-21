import styled from "styled-components";
import { breakpoints } from "../../styles/stylesVariables";
import { background } from "../../assets";

export const Container = styled.div`
  font-size: 1.2rem;
`;

export const Overlay = styled.div`
  background-image: linear-gradient(
      180deg,
      rgba(0, 0, 0, 1) 0%,
      rgba(0, 0, 0, 1) 16%,
      rgba(0, 0, 0, 0.53125) 100%
    ),
    url(${background});
  height: 70vh;
  padding-left: 10%;
  background-color: #c5c9d5;

  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
  @media (max-width: ${breakpoints.mobile}) {
    display: none;
  }

  img {
    width: 75%;
    height: auto;
  }
`;

export const UnderImage = styled.img`
  width: 100%;
  height: auto;
`;

export const Section = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  padding: 2rem 0;
  @media (max-width: ${breakpoints.mobile}) {
    display: flex;
    flex-direction: column;
    width: 100vw;
    margin: 0 auto;
  }
`;

export const Button = styled.button`
  width: 10rem;
  border-radius: 7px;
  background-color: #f19709;
  border: none;
  color: white;
  height: 2.5rem;
  font-size: 20px;
  cursor: pointer;
`;

export const Title = styled.h1`
  color: #eedac5;
  border-bottom: 2px solid #eedac5;
  padding-bottom: 2px;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  justify-content: center;
  text-align: center;
  align-items: center;
  max-width: 40%;

  @media (max-width: ${breakpoints.mobile}) {
    max-width: 80%;
  }
`;

export const LargerImg = styled.img`
  width: 100%;
  @media (min-width: ${breakpoints.mobile}) {
    display: none;
  }
`;
export const SmallerImg = styled.img`
  max-width: 35%;

  @media (max-width: ${breakpoints.mobile}) {
    display: none;
  }
`;

//Sponsors

export const Sponsor = styled.img`
  width: 10rem;
  height: auto;
`;

export const StyledSponsors = styled.div`
  background-color: white;
  display: flex;
  justify-content: space-evenly;

  @media (max-width: ${breakpoints.mobile}) {
    display: none;
    justify-content: space-evenly;
  }
  @media (min-width: ${breakpoints.biggerScreen}) {
    max-width: 100%;
  }
`;
