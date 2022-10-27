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

export const HeaderLink = styled.a`
  padding: 0.375rem;
  background: ${({ theme }) => theme.colors.yellowLight};
  margin-left: 0.75rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
`;
