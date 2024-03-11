import styled from "styled-components";
import { breakpoints, colors } from "../../styles/stylesVariables";
import { Dropdown } from "primereact/dropdown";
import { Checkbox } from "primereact/checkbox";
import { Card, Button } from "antd";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.div`
  color: ${colors.font.other};
  font-size: 30px;
  margin-left: 5%;
  width: 60%;
  border-bottom: 1px solid ${colors.font.other};
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

export const TrendingTools = styled.div`
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
  gap: 2rem;
  flex-wrap: wrap;
`;

export const Filter = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-evenly;
`;

export const Characteristics = styled.div`
  display: flex;
  flex-direction: column;
  > label {
    align-items: center;
    display: flex;
    gap: 0.5rem;
    padding-top: 0.3rem;
    color: #eedac5;
  }
`;

export const VerticalLine = styled.div`
  border-left: 2px solid white;
  height: 10rem;
`;

export const FilterTitle = styled.div`
  display: flex;
  color: ${colors.accent};
  padding-bottom: 1rem;
`;

export const StyledCheckbox = styled(Checkbox)`
  width: 20px;
  height: 20px;
  border: 2px solid ${colors.darkwhite};
  border-radius: 5px;
  justify-content: center;
`;

export const DivSelect = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  align-items: center;
  border: 2px solid white;
  border-radius: 5px;
  width: 10%;
  @media (max-width: ${breakpoints.miniTablet}) {
    width: 40%;
  }
  @media (max-width: ${breakpoints.miniTablet}) {
    flex-direction: column;
    width: 20%;
  }
`;

export const UniSelect = styled(Dropdown)`
  gap: 1rem;
  .p-dropdown-label {
    color: white;
    width: 100%;
  }
  .p-inputtext {
    color: white;
  }
  @media (max-width: ${breakpoints.miniTablet}) {
    width: 30%;
  }
  @media (max-width: ${breakpoints.smallMobile}) {
    width: 20%;
  }
`;

export const StyledCard = styled(Card)`
  display: flex;
  flex-direction: column;
  width: 45%;
  max-width: 50%;
  margin-top: 3rem;
  height: auto;
  align-items: center;
  border-radius: 24px;
  gap: 3.33rem;
  background-color: white;
  margin-bottom: 4rem;
  &:hover {
  }
  @media (max-width: ${breakpoints.miniTablet}) {
    width: 24rem;
  }
  @media (max-width: ${breakpoints.miniTablet}) {
    width: 25rem;
  }
  @media (max-width: ${breakpoints.miniTablet}) {
    width: 26.66rem;
  }
  @media (max-width: ${breakpoints.miniTablet}) {
    width: 22rem;
  }
  > div {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  div.ant-card-body {
    height: 100%;
    justify-content: space-between;
  }
`;

export const Image = styled.div`
  display: flex;
  height: auto;
  width: 100%;
  cursor: pointer;
  > img {
    width: 100%;
    height: 14rem;
    border-radius: 1rem;
    @media (max-width: ${breakpoints.miniTablet}) {
      height: 12rem;
    }
    @media (max-width: ${breakpoints.miniTablet}) {
      height: 12rem;
    }
    @media (max-width: ${breakpoints.miniTablet}) {
      height: 14rem;
    }
  }
`;
export const CardLine = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: auto;
  font-size: 30px;
  color: ${colors.font.secondary};
  cursor: pointer;
  @media (max-width: ${breakpoints.miniTablet}) {
    font-size: 24px;
  }
  @media (max-width: ${breakpoints.miniTablet}) {
    font-size: 20px;
  }

  @media (max-width: ${breakpoints.miniTablet}) {
    font-size: 18px;
  }
  @media (max-width: ${breakpoints.miniTablet}) {
    font-size: 20px;
  }

  > p {
    font-size: 22px;
    @media (max-width: ${breakpoints.miniTablet}) {
      font-size: 17.6px;
    }
    @media (max-width: ${breakpoints.miniTablet}) {
      font-size: 13.2px;
    }

    @media (max-width: ${breakpoints.miniTablet}) {
      font-size: 11.88px;
    }
    @media (max-width: ${breakpoints.miniTablet}) {
      font-size: 17.6px;
    }
  }
`;
export const LineSVG = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: end;
  align-items: center;
  > svg {
    cursor: pointer;
    font-size: 30px;
    @media (max-width: ${breakpoints.miniTablet}) {
      font-size: 24px;
    }
    @media (max-width: ${breakpoints.miniTablet}) {
      font-size: 20px;
    }

    @media (max-width: ${breakpoints.miniTablet}) {
      font-size: 18px;
    }
    @media (max-width: ${breakpoints.miniTablet}) {
      font-size: 20px;
    }
  }
`;
export const Group = styled.div`
  display: flex;
  flex-direction: row;
  font-size: 17.5px;
  @media (max-width: ${breakpoints.miniTablet}) {
    font-size: 15.75px;
  }
  @media (max-width: ${breakpoints.miniTablet}) {
    font-size: 11.81px;
  }

  @media (max-width: ${breakpoints.miniTablet}) {
    font-size: 10.63px;
  }
  @media (max-width: ${breakpoints.miniTablet}) {
    font-size: 15.75px;
  }
`;
export const ButtonDiv = styled.div`
  display: flex;
  width: 100%;
  align-content: center;
`;
export const OrangeButton = styled(Button)`
  width: 7.5rem;
  height: 2.5rem;
  background-color: ${colors.accent};
  border: none;
  margin-top: 1rem;
  border-radius: 10px;
  @media (max-width: ${breakpoints.miniTablet}) {
    width: 12rem;
    height: 2.25rem;
  }

  &:hover {
    background-color: blue;
  }
`;
