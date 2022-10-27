import styled from "styled-components";

export const LayoutContainer = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0 1.25rem;
  max-width: 90rem;

  @media only screen and (min-width: 480px) {
    padding: 0 2.5rem;
  }
`;
