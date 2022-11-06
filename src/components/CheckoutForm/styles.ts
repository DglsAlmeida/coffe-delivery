import styled from "styled-components";

export const CheckoutForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 12px;
`;

export const CheckoutUserAddressContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.grayLight};
  border-radius: 6px;
  margin-top: 0.937rem;
  padding: 1.25rem;
`;

export const CheckoutHeader = styled.header`
  display: flex;
`;

export const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 10px;
`;

export const FormTitle = styled.span`
  font-family: "Roboto";
  color: ${({ theme }) => theme.colors.brown};
  margin-bottom: 0.25rem;
`;

export const FormSubtitle = styled.span`
  font-family: "Roboto";
  font-size: 0.875rem;
  color: ${({ theme }) => theme.colors.price};
`;

export const Input = styled.input`
  flex: 1;
  padding: 0.75rem;
  width: 100%;
  background: ${({ theme }) => theme.colors.baseButton};
  border: 0;
  color: ${({ theme }) => theme.colors.brown};
  outline: none;
  border-radius: 4px;

  & + & {
    margin-top: 0.625rem;
  }

  &:nth-of-type(1) {
    margin-top: 2rem;
  }

  &::placeholder {
    color: ${({ theme }) => theme.colors.description};
  }

  &:focus {
    border: 1px solid ${({ theme }) => theme.colors.yellowDark};
  }
`;

export const CheckoutPayment = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 0.75rem;
  border-radius: 6px;
  padding: 1.25rem;
  background-color: ${({ theme }) => theme.colors.grayLight};
`;
