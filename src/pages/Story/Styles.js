import styled from "styled-components";
import { colors } from "../../styles/stylesVariables";

export const Container = styled.div`
  display: flex;
  width: 70%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${colors.font.primary};
  gap: 1rem;
  margin: 0 auto;
`;

export const Image = styled.img`
  max-width: 100%;
`;

export const Paragraph = styled.p`
  margin: 0;
`;

export const Title = styled.h1`
  color: ${colors.font.title};
  margin: 0;
  border-bottom: 2px solid ${colors.font.primary};
`;
