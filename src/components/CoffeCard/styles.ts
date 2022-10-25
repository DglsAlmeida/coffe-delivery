import styled from "styled-components";

export const CoffeCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.colors.grayLight};
  border-radius: 6px 36px;
  padding: 20px 24px;

  img {
    margin-top: -40px;
  }

  & + & {
    margin-top: 35px;
  }
`;

export const CoffeType = styled.span`
  font-size: 10px;
`;

export const Title = styled.span`
  font-size: 20px;
  color: ${({ theme }) => theme.colors.brown};
  font-weight: 700;
`;

export const Description = styled.span`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.description};
`;

export const ButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 33px;
`;

export const Price = styled.span`
  display: flex;
  align-items: center;
  font-size: 20px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.price};
`;

export const QuantityContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 8px;
  border-radius: 6px;
  background-color: ${({ theme }) => theme.colors.baseButton};
  margin-left: 23px;
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
  padding: 8px;
  background: ${({ theme }) => theme.colors.purpleDark};
  margin-left: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
`;
