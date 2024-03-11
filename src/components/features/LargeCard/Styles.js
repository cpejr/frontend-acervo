import styled from "styled-components";
import { Card, Button } from "antd";
import { breakpoints, colors } from "../../../styles/stylesVariables";

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
