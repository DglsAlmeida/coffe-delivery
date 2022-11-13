import styled from "styled-components";

export const CheckoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 2.5rem 0;
  width: 100%;
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
