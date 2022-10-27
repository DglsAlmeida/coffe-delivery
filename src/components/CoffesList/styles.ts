import styled from "styled-components";

export const CoffesList = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.h3``;

export const CoffesListContent = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  padding: 1.875rem 0;
  gap: 20px;

  @media only screen and (min-width: 480px) {
    grid-template-columns: 1fr 1fr;
  }

  @media only screen and (min-width: 780px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;
