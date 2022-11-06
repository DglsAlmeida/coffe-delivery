import { Link } from "react-router-dom";
import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  flex-direction: column;
  padding-top: 1.25rem;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  @media only screen and (min-width: 480px) {
    flex-direction: row;
    padding: 2.5rem 0;
  }
`;

export const HeaderContent = styled.div`
  display: flex;
  margin-top: 0.75rem;
`;

export const Location = styled.span`
  padding: 0.375rem;
  background: ${({ theme }) => theme.colors.purpleLight};
  color: ${({ theme }) => theme.colors.purpleDark};
  font-family: "Roboto";
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  font-size: 0.75rem;
  font-weight: 500;
`;

export const HeaderLink = styled(Link)`
  padding: 0.375rem;
  background: ${({ theme }) => theme.colors.yellowLight};
  margin-left: 0.75rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  position: relative;
`;

export const ItemsCount = styled.div`
  position: absolute;
  top: -8px;
  right: -8px;
  height: 1.25rem;
  width: 1.25rem;
  z-index: 1;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.yellowDark};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.75rem;
  color: ${({ theme }) => theme.colors.white};
`;
