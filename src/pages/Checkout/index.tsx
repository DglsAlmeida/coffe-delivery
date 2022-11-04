import { CheckoutForm } from "../../components/CheckoutForm";
import constants from "../../constants";
import * as S from "./styles";

export const Checkout = () => {
  const { CHECKOUT } = constants;

  return (
    <S.CheckoutContainer>
      <S.Title>{CHECKOUT.title}</S.Title>
      <CheckoutForm />
    </S.CheckoutContainer>
  );
};
