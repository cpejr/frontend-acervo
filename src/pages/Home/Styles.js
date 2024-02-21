import styled from "styled-components";
import { breakpoints } from "../../styles/stylesVariables";
export const Container = styled.div`
  max-width: 100%;
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
  margin-top: -3px;
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
  justify-content: center;
  padding: 50px 0;
  gap: 30px;
  @media (max-width: ${breakpoints.desktop}) {
    display: flex;
    flex-direction: column;
  }
`;

export const WhatIs = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 10rem;
  justify-content: center;
  padding: 50px 0;
  gap: 30px;
  @media (max-width: ${breakpoints.desktop}) {
    display: flex;
    flex-direction: column;
  }
`;

export const OurEvents = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 10rem;
  justify-content: center;
  padding: 50px 0;
  gap: 30px;
  @media (max-width: ${breakpoints.desktop}) {
    display: flex;
    flex-direction: column;
  }
`;

export const CuriosityButton = styled.button`
  width: 10rem;
  border-radius: 7px;
  background-color: #f19709;
  border: none;
  color: white;
  height: 2.5rem;
  font-size: 20px;
  cursor: pointer;
`;

export const UsTitle = styled.h1`
  color: #eedac5;
  border-bottom: 2px solid #eedac5;
  padding-bottom: 2px;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  justify-content: center;
  text-align: center;
  align-items: center;
  max-width: 40%;
`;

export const Img1 = styled.img`
  max-width: 150%;
  @media (min-width: ${breakpoints.desktop}) {
    display: none;
  }
`;
export const Img2 = styled.img`
  max-width: 150%;
  @media (max-width: ${breakpoints.desktop}) {
    display: none;
  }
`;
