import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  flex-direction: column;
  padding-top: 20px;
  align-items: center;
  justify-content: space-between;
`;

export const HeaderContent = styled.div`
  display: flex;
  margin-top: 12px;
`;

export const Location = styled.span`
  padding: 6px;
  background: ${({ theme }) => theme.colors.purpleLight};
  color: ${({ theme }) => theme.colors.purpleDark};
  font-family: "Roboto";
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  font-size: 12px;
  font-weight: 500;
`;

export const HeaderLink = styled.a`
  padding: 6px;
  background: ${({ theme }) => theme.colors.yellowLight};
  margin-left: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
`;
