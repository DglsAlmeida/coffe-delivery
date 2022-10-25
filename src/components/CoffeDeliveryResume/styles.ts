import styled from "styled-components";

export const CoffeDeliveryResumeContainer = styled.section`
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  padding: 2.5rem 1.25rem;
`;

export const Title = styled.h1`
  font-size: 1.125rem;
`;

export const Description = styled.span`
  font-size: 0.875rem;
  margin-top: 10px;
`;

export const CoffeeDeliveryAdvantagesContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 0.938rem;
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
