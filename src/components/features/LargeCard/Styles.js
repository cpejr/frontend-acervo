import styled from "styled-components";
import { Card } from "antd";
import { breakpoints, colors } from "../../../styles/stylesVariables";

export const StyledCard = styled(Card)`
  position: relative; /* Ensure positioning context for absolute positioning */
  display: block;
  flex-direction: column;
  width: 50%;
  margin-top: 3rem;
  height: auto;
  align-items: center;
  border-radius: 24px;
  gap: 3.33rem;
  background-color: ${colors.background.white};
  margin-bottom: 4rem;
  &:hover {
  }
  @media (max-width: ${breakpoints.miniTablet}) {
    width: 80%;
    max-width: 80%;
  }
  @media (max-width: ${breakpoints.tablet}) {
    width: 70%;
    max-width: 70%;
  }
  @media (max-width: ${breakpoints.mobile}) {
    width: 80%;
    max-width: 80%;
    margin-top: 2rem;
    margin-bottom: 2rem;
  }
`;

export const CardTitle = styled.div`
  display: flex;
  word-break: break-all;
  flex-direction: row;
  width: 100%;
  align-items: center;
  font-size: 30px;
  color: ${colors.font.secondary};
  @media (max-width: ${breakpoints.miniTablet}) {
    font-size: 24px;
  }
`;

export const ShortDesc = styled.div`
  font-size: 20px;
  color: ${colors.font.secondary};
  word-break: break-word;
  @media (max-width: ${breakpoints.miniTablet}) {
    font-size: 18px;
  }
`;

export const LongDesc = styled.div`
  font-size: 17px;
  color: ${colors.font.secondary};
  word-break: break-word;
  @media (max-width: ${breakpoints.miniTablet}) {
    font-size: 15px;
  }
`;

export const LinkDesc = styled.div`
  font-size: 17px;
  color: ${colors.font.secondary};
  word-break: break-word;
  @media (max-width: ${breakpoints.miniTablet}) {
    font-size: 15px;
  }
`;

export const FavoriteIcon = styled.div`
  color: ${colors.font.secondary};
  margin-left: 5px;
  font-size: 2rem;
  cursor: pointer;
`;

export const CarouselStyles = styled.div`
  .carousel .slide {
    display: flex;
    justify-content: center;
  }
  .carousel.carousel-slider .control-arrow {
    background: ${colors.background.primary};
  }
`;

export const LoadingContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
