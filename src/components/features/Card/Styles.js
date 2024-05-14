import { Card, Button } from "antd";
import styled from "styled-components";
import { breakpoints, colors } from "../../../styles/stylesVariables";

export const StyledCard = styled(Card)`
  display: flex;
  flex-direction: column;
  width: 20rem;
  height: auto;
  align-items: center;
  border-radius: 24px;
  gap: 3.33rem;
  background-color: ${colors.background.white};
  margin-bottom: 4rem;
  &:hover {
  }
  .ant-card-body {
    width: 100%;
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
    height: 10rem;
    border-radius: 1rem;
    @media (max-width: ${breakpoints.miniTablet}) {
      height: 10rem;
    }
    @media (max-width: ${breakpoints.miniTablet}) {
      height: 10rem;
    }
    @media (max-width: ${breakpoints.miniTablet}) {
      height: 12rem;
    }
  }
`;
export const Line = styled.div`
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  flex-direction: row;
  width: 100%;
  height: auto;
  max-height: 120px;
  font-size: 30px;
  overflow: hidden;
  color: ${colors.font.secondary};
  word-wrap: break-word;
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
  word-wrap: break-word;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  > svg {
    cursor: pointer;
    color: ${colors.font.secondary};
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
export const Tags = styled.div`
  display: flex;
  flex-direction: row;
  width: 90%;
  justify-content: first baseline;
  height: auto;
  gap: 1rem;
  flex-wrap: wrap;
`;
export const Tag = styled.div`
  display: flex;
  width: 4.3rem;
  padding: 5px 0.8rem;
  height: 1.5rem;
  border: 1px solid black;
  color: black;
  font-size: 14px;
  border-radius: 20px;
  align-items: center;
  text-align: center;
  justify-content: center;
  @media (max-width: ${breakpoints.miniTablet}) {
    height: 32px;
    font-size: 14px;
  }
  @media (max-width: ${breakpoints.miniTablet}) {
    height: 24px;
    font-size: 12px;
  }

  @media (max-width: ${breakpoints.miniTablet}) {
    height: 21.6px;
    font-size: 14px;
  }
  @media (max-width: ${breakpoints.miniTablet}) {
    height: 32px;
    font-size: 14px;
  }
  @media (max-width: ${breakpoints.miniTablet}) {
    font-size: 12px;
  }
  &:hover {
    border: 1px solid blue;
    color: blue;
  }
`;
export const LoadingStyles = styled.div`
  display: "block";
  font-size: 24px;
  margin: 20px auto;
  color: ${colors.font.secondary};
`;
