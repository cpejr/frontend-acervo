import styled from "styled-components";
import { breakpoints } from "../../styles/stylesVariables";
export const Container = styled.div`
  max-width: 100%;
  margin: 0 auto;
`;

export const Overlay = styled.div`
  @media (max-width: ${breakpoints.desktop}) {
    display: none;
  }
`;

export const UnderImage = styled.img`
  max-width: 100%;
  height: auto;
  margin-top: -0.5px;
`;

export const Logo = styled.div`
  background-image: url("src/assets/Home/LogoCidade.png");
`;

export const Sponsers = styled.div`
  padding: 50px;
  background-color: white;
  display: flex;
  justify-content: space-between;
  margin-top: -5px;
  @media (max-width: ${breakpoints.desktop}) {
    display: none;
  }
`;

export const Sponsor = styled.img``;

export const Curiosity = styled.div``;

export const Us = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 10rem;
  justify-content: space-evenly;
  padding: 20px 0;
  @media (max-width: ${breakpoints.desktop}) {
    display: flex;
    flex-direction: column;
    width: 100vw;
    margin: 0 auto;
  }
`;

export const WhatIs = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 10rem;
  justify-content: space-evenly;
  padding: 20px 0;
  @media (max-width: ${breakpoints.desktop}) {
    display: flex;
    flex-direction: column;
    width: 100vw;
    margin: 0 auto;
  }
`;

export const Events = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 10rem;
  justify-content: space-evenly;
  padding: 20px 0;
  @media (max-width: ${breakpoints.desktop}) {
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
`;

export const LargerImg = styled.img`
  max-width: 150%;
  @media (min-width: ${breakpoints.desktop}) {
    display: none;
  }
`;
export const SmallerImg = styled.img`
  max-width: 150%;
  @media (max-width: ${breakpoints.desktop}) {
    display: none;
  }
`;
