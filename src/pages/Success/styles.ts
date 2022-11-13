import styled from "styled-components";

export const SucessContainer = styled.div`
  margin-top: 3.125rem;
`;

export const Title = styled.div`
  font-size: 24px;
  color: ${({ theme }) => theme.colors.yellowDark};
`;

export const Subtitle = styled.div`
  font-size: 18px;
  color: ${({ theme }) => theme.colors.brown};
`;

export const DeliveryInfos = styled.div`
  padding: 40px;
  border: 1px solid;
  background: transparent;
  position: relative;
  margin-top: 1.875rem;
  display: flex;
  flex-direction: column;
  gap: 32px 0;

  border-image: linear-gradient(to left, #dbac2c, #8047f8) 1;
  border-radius: 6px 36px !important;
`;

export const TextContainer = styled.div`
  display: flex;
  align-items: center;

  img {
    margin-right: 0.75rem;
  }
`;

export const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
