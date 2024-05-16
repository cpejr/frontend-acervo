import styled from "styled-components";
import { breakpoints, colors } from "../../../styles/stylesVariables";

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  width: 90%;
  height: auto;
  align-items: center;
  align-self: center;
  justify-content: center;
  margin-top: 1rem;
  @media (max-width: ${breakpoints.smallTablet}) {
    flex-direction: column;
  }
`;
export const ImageCollumn = styled.div`
  display: flex;
  flex-direction: column;
  width: 60%;
  height: auto;
  gap: 1rem;
  flex: 1;
  @media (max-width: ${breakpoints.smallTablet}) {
    width: 90%;
  }
`;
export const Image = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  > img {
    width: 80%;
    border-radius: 1rem;
    max-width: 90%;
  }
`;
export const DataCollumn = styled.div`
  display: flex;
  flex-direction: column;
  width: 40%;
  height: 100%;
  align-self: start;
  gap: 2.5rem;
  @media (max-width: ${breakpoints.desktop}) {
    gap: 2rem;
  }
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
      font-size: 15px;
    }
    @media (max-width: ${breakpoints.smallDevice}) {
      font-size: 13px;
    }
  }
`;
export const Group = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
`;
export const TagsLine = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
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

  @media (max-width: ${breakpoints.smallTablet}) {
    display: none;
  }
`;
export const Line = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: auto;
  gap: 1rem;
  font-size: 55px;
  justify-content: center;
  @media (max-width: ${breakpoints.desktop}) {
    font-size: 40px;
  }
  @media (max-width: ${breakpoints.tablet}) {
    font-size: 30px;
  }

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 25px;
  }
  @media (max-width: ${breakpoints.smallDevice}) {
    font-size: 20px;
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
    border: 1px solid ${colors.background.menu};
    color: ${colors.font.line};
  }
`;
export const KnowMore = styled.div`
  display: flex;
  width: 95%;
  flex-direction: column;
  gap: 2rem;
  align-items: center;
  justify-content: center;
  border: solid 2px ${colors.background.secondary};
  border-radius: 6px;
  padding: 2rem;
  margin-top: 2rem;
  align-self: center;

  @media (max-width: ${breakpoints.smallTablet}) {
    border: none;
  }

  > h1 {
    font: 55px;
    @media (max-width: ${breakpoints.smallTablet}) {
      font-size: 40px;
    }
    @media (max-width: ${breakpoints.mobile}) {
      font-size: 30px;
    }
  }
  > p {
    font-size: 25px;
    text-align: justify;
    @media (max-width: ${breakpoints.smallTablet}) {
      font-size: 20px;
    }
    @media (max-width: ${breakpoints.mobile}) {
      font-size: 17px;
    }
  }
`;
