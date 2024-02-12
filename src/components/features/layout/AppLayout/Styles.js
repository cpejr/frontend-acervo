import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  min-height: 100vh;
  justify-content: space-between;

  > main {
    flex: 1;
  }
`;
