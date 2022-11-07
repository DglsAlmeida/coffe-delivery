import styled from "styled-components";

export const CheckoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 2.5rem 0;
`;

export const Title = styled.span`
  color: ${({ theme }) => theme.colors.brown};
  font-size: 1.125rem;
  font-weight: 700;
`;

export const CartContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 1.25rem;
  border-radius: 6px;
  background-color: ${({ theme }) => theme.colors.grayLight};
  margin-top: 0.937rem;
`;

export const CoffeContainer = styled.div`
  margin-left: 0.75rem;
  display: flex;
  flex-direction: column;
`;

export const CartItem = styled.div`
  width: 100%;
  display: flex;

  img {
    height: 50px;
    width: 50px;
  }
`;

export const CartValues = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(2, 1fr);

  span:nth-child(even),
  strong:nth-child(even) {
    text-align: right;
  }
`;

export const QuantityContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  background-color: ${({ theme }) => theme.colors.baseButton};
  height: 2rem;
  width: 4.5rem;
`;

export const Button = styled.button`
  border: 0;
  outline: none;
  background: transparent;
  cursor: pointer;
  font-family: "Roboto";
`;

export const Quantity = styled.span`
  margin: 0 5px;
`;

export const RemoveButton = styled(Button)`
  background-color: ${({ theme }) => theme.colors.baseButton};
  height: 2rem;
  width: 5.68rem;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 0.5rem;
  font-size: 0.75rem;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 0.5rem;
`;

export const CartItemTitle = styled.span`
  color: ${({ theme }) => theme.colors.brown};
  font-family: "Roboto";
  font-size: 14px;
`;

export const ItemPrice = styled.span`
  color: ${({ theme }) => theme.colors.price};
  font-family: "Roboto";
  font-weight: 700;
  font-size: 12px;
  margin-left: auto;
  white-space: nowrap;
`;

export const Divisor = styled.div`
  height: 1px;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.baseButton};
  margin: 24px 0;
`;

export const PaymentButton = styled.button`
  width: 100%;
  margin-top: 1.5rem;
  background-color: ${({ theme }) => theme.colors.yelloBrand};
  color: ${({ theme }) => theme.colors.white};
  font-weight: 700;
  font-size: 0.875rem;
  border: none;
  outline: none;
  height: 2.875rem;
  border-radius: 6px;
  transition: 0.2s filter ease-in;
  cursor: pointer;

  &:hover {
    filter: brightness(0.8);
  }
`;

export const EmptyImageContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 80px;
  justify-content: center;
  max-height: 100%;
  max-width: 100%;
  margin: 80px 0 auto;

  img {
    width: 300px;
    height: 200px;
  }

  @media only screen and (min-width: 480px) {
    img {
      width: 500px;
      height: 300px;
    }
  }
`;
