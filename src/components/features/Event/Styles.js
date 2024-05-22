import styled from "styled-components";
import { breakpoints, colors } from "../../../styles/stylesVariables";

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  align-items: center;
  justify-content: space-evenly;
  margin-top: 1rem;
  @media (max-width: ${breakpoints.smallTablet}) {
    flex-direction: column;
  }
`;

export const LoadingStyles = styled.div`
  display: "block";
  font-size: 24px;
  margin: 20px auto;
  color: ${colors.font.secondary};
`;

export const ImageCollumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-self: center;
  width: 50%;
  max-width: 60rem;
  gap: 1rem;
  > img {
    border-radius: 1rem;
  }
  @media (max-width: ${breakpoints.smallTablet}) {
    width: 70%;
  }
  @media (max-width: ${breakpoints.smallMobile}) {
    width: 90%;
  }
`;

export const DataCollumn = styled.div`
  display: flex;
  word-break: break-all;
  flex-direction: column;
  width: 40%;
  gap: 2.5rem;
  @media (max-width: ${breakpoints.tablet}) {
    gap: 1rem;
  }
  @media (max-width: ${breakpoints.smallTablet}) {
    width: 90%;
  }

  @media (max-width: ${breakpoints.smallTablet}) {
    margin-top: 1rem;
    align-self: center;
  }

  > p {
    font-size: 25px;
    text-align: justify;
    justify-content: center;
    display: flex;
    @media (max-width: ${breakpoints.desktop}) {
      font-size: 20px;
    }
    @media (max-width: ${breakpoints.tablet}) {
      font-size: 17px;
    }

    @media (max-width: ${breakpoints.mobile}) {
      font-size: 13px;
    }
  }
`;
export const Group = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
`;
export const TagsLine = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: center;
  height: auto;
  gap: 1rem;
  font-size: 55px;
  flex-wrap: wrap;
  @media (max-width: ${breakpoints.desktop}) {
    font-size: 40px;
  }
  @media (max-width: ${breakpoints.tablet}) {
    font-size: 30px;
  }
`;
export const Line = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: auto;
  gap: 1rem;
  font-size: 40px;
  justify-content: center;
  > a {
    font-size: 20px;
  }
  @media (max-width: ${breakpoints.tablet}) {
    font-size: 36px;
  }
`;

export const LinkLine = styled.div`
  font-size: 20px;
  align-self: center;
  word-break: break-all;
  color: ${colors.blue};
  text-decoration: underline;
  cursor: pointer;
  @media (max-width: ${breakpoints.tablet}) {
    font-size: 15px;
  }
`;
export const Tag = styled.div`
  display: flex;
  width: auto;
  padding: 5px 1.5rem;
  height: 2rempx;
  border: 1px solid ${colors.background.secondary};
  color: ${colors.font.primary};
  font-size: 15px;
  border-radius: 20px;
  align-items: center;
  text-align: center;
  cursor: pointer;

  @media (max-width: ${breakpoints.smallDevice}) {
    font-size: 13px;
    padding: 5px 1rem;
  }
  &:hover {
    border: 1px solid ${colors.accent.primary};
    color: ${colors.font.line};
  }
`;
export const KnowMore = styled.div`
  display: flex;
  word-break: break-all;
  width: 100%;
  flex-direction: column;
  align-items: center;
  align-self: center;
  border: solid 2px ${colors.background.secondary};
  border-radius: 6px;
  padding: 1rem;
  margin-top: 2rem;

  > h1 {
    font-size: 32px;
    font-weight: 400;
    margin: 0;
    @media (max-width: ${breakpoints.smallTablet}) {
      font-size: 26px;
    }
  }
  > p {
    font-size: 22px;
    text-align: justify;
    @media (max-width: ${breakpoints.mobile}) {
      font-size: 17px;
    }
  }
  &:hover {
    border-color: #f19709;
  }
`;
