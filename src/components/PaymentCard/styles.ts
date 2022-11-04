import styled, { css } from "styled-components";
import { PaymentCardContainerProps } from "./interfaces";

export const PaymentCardContainer = styled.button<PaymentCardContainerProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  outline: none;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  width: 100%;
  height: 3.1875rem;
  margin-top: 0.75rem;
  background-color: ${({ theme }) => theme.colors.baseButton};

  ${({ isSelected }) =>
    isSelected &&
    css`
      background-color: ${({ theme }) => theme.colors.purpleLight};
      border: 1px solid ${({ theme }) => theme.colors.purpleBrand};
    `}
`;
