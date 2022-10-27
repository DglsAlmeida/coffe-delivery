import styled from "styled-components";

export const CoffeCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.colors.grayLight};
  border-radius: 6px 36px;
  padding: 1.25rem 1.5rem;

  img {
    margin-top: -2.5rem;
  }
`;

export const CoffeType = styled.span`
  font-size: 0.625rem;
`;

export const Title = styled.span`
  font-size: 1.25rem;
  color: ${({ theme }) => theme.colors.brown};
  font-weight: 700;
`;

export const Description = styled.span`
  font-size: 0.875rem;
  color: ${({ theme }) => theme.colors.description};
`;

export const ButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 2.0625rem;
`;

export const Price = styled.span`
  display: flex;
  align-items: center;
  font-size: 1.25rem;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.price};
`;

export const QuantityContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 0.5rem;
  border-radius: 6px;
  background-color: ${({ theme }) => theme.colors.baseButton};
  margin-left: 1.4375rem;
`;

export const Button = styled.button`
  border: 0;
  outline: none;
  background: transparent;
  cursor: pointer;
`;

export const Quantity = styled.span`
  margin: 0 5px;
`;

export const CartButton = styled(Button)`
  padding: 0.5rem;
  background: ${({ theme }) => theme.colors.purpleDark};
  margin-left: 0.75rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
`;
