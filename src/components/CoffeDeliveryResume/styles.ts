import styled from "styled-components";

export const CoffeDeliveryResumeContainer = styled.section`
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  padding: 2.5rem 0;
  width: 100%;

  @media only screen and (min-width: 480px) {
    flex-direction: row;
    text-align: left;
    align-items: initial;
  }
`;

export const CoffeDeliveryResumeContent = styled.div`
  flex: 1;
`;

export const ImgContainer = styled.div`
  flex: 1;
  display: flex;

  img {
    max-width: 100%;
    margin-left: auto;
  }
`;

export const Title = styled.h1`
  font-size: 1.125rem;

  @media only screen and (min-width: 480px) {
    font-size: 2rem;
  }
`;

export const Description = styled.span`
  font-size: 0.875rem;
  margin-top: 0.625rem;

  @media only screen and (min-width: 480px) {
    font-size: 1.25rem;
  }
`;

export const CoffeeDeliveryAdvantagesContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  margin-top: 0.938rem;

  @media only screen and (min-width: 480px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 0 1.25rem;
  }
`;

export const CoffeeDeliveryAdvantage = styled.div`
  display: flex;
  align-items: center;

  & + & {
    margin-top: 0.75rem;
  }
`;

export const CoffeeDeliveryAdvantageText = styled.span`
  font-size: 0.875rem;
  white-space: nowrap;
  margin-left: 0.75rem;
`;
